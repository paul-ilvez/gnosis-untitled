// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Address.sol";

using Address for address;
using Address for address payable;

/// @title Untitled Safe
/// @author Untitled_Team
contract GnosisUntitled is ReentrancyGuard, Pausable {
    /// @dev the execution logic is different depending on the transaction type
    enum TxType {
        VALUE_TRANSFER,
        SEND_BYTECODE,
        ADD_SIGNER,
        REMOVE_SIGNER,
        CHANGE_QUORUM,
        PAUSE,
        UNPAUSE
    }
    event Deposit(address indexed sender, uint256 amount, uint256 balance);
    event SubmitTransaction(
        address indexed sender,
        uint256 indexed txIndex,
        address indexed to,
        uint256 value,
        TxType txType
    );
    event ConfirmTransaction(address indexed sender, uint256 indexed txIndex);
    event RevokeConfirmation(address indexed sender, uint256 indexed txIndex);
    event ExecuteTransaction(address indexed sender, uint256 indexed txIndex);

    /// @notice Internal representation of the Safe's transaction. Note that a safe's transaction is not the same as an EVM transaction
    /// @dev used both inside the contract and as a DTO for the Front-end
    struct Transaction {
        uint256 index;
        address to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 numConfirmations;
        TxType txType;
        uint256 date;
    }

    modifier onlySigner() {
        require(isSigner[msg.sender], "only signer can execute");
        _;
    }

    modifier txExists(uint256 _txIndex) {
        require(_txIndex < transactions.length, "tx does not exist");
        _;
    }

    modifier notExecuted(uint256 _txIndex) {
        require(!transactions[_txIndex].executed, "tx already executed");
        _;
    }

    modifier notConfirmed(uint256 _txIndex) {
        require(!isConfirmed[_txIndex][msg.sender], "tx already confirmed");
        _;
    }

    /// @notice The amount of required signatures to execute a transaction or change the state
    uint256 public quorum;

    // mapping from tx index => owner => bool
    mapping(uint256 => mapping(address => bool)) public isConfirmed;

    Transaction[] private transactions;

    /// @notice The array containing all signers.
    address[] private signers;
    /// @notice Get signer's index from address.
    mapping(address => uint256) private signersLuT;
    /// @notice Check wether the address is a singer in this Safe.
    /// @dev This automatically generates a getter for us!
    mapping(address => bool) public isSigner;

    constructor(address[] memory _signers, uint256 _quorum) payable {
        require(_quorum > 0, "quorum must be > 0 ");
        require(_signers.length > 0, "must be at least 1 signer");
        uint256 length = _signers.length;

        unchecked {
            for (uint256 i = 0; i < length; i++) {
                address signer = _signers[i];
                if (signer == address(0)) {
                    revert("Signer cannot be address(0)");
                }
                addSigner(signer);
            }
        }

        quorum = _quorum;
    }

    /// @notice Most basic transaction: send a specified value to a specified address
    function submitValueTransfer(
        address _to,
        uint256 _value
    ) external onlySigner nonReentrant {
        require(_to != address(0), "cannot send to nowhere");
        require(_value != 0, "cannot send empty tx");
        require(
            address(this).balance >= _value,
            "cannot propose sending more than safe has"
        );
        submitTx(
            _to,
            _value,
            abi.encodePacked(uint256(0)),
            TxType.VALUE_TRANSFER
        );
    }

    /// @notice Transaction with proposal to execute a specified bytecode on a specified address
    function submitSendBytecode(
        address _to,
        uint256 _value,
        bytes memory _data
    ) external onlySigner nonReentrant {
        require(_to != address(0), "cannot send to nowhere");
        require(_data.length > 0, "cannot send null tx");
        submitTx(_to, _value, _data, TxType.SEND_BYTECODE);
    }

    /// @notice Transaction with proposal to add a new safe signer
    function submitNewSigner(
        address _newSigner
    ) external onlySigner nonReentrant {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.ADD_SIGNER
        );
    }

    /// @notice Transaction with proposal to remove an existing safe signer
    function submitRemoveSigner(
        address _newSigner
    ) external onlySigner nonReentrant {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.REMOVE_SIGNER
        );
    }

    /// @notice Transaction with proposal to change the quorum (threshold)
    function submitChangeQuorum(
        uint256 _quorum
    ) external onlySigner nonReentrant {
        require(_quorum != 0, "Quorum cannot be 0");
        submitTx(
            address(0),
            _quorum,
            abi.encodePacked(uint256(0)),
            TxType.CHANGE_QUORUM
        );
    }

    /// @notice Transaction with proposal to pause the safe
    function submitPause() external onlySigner nonReentrant whenNotPaused {
        submitTx(address(0), 0, abi.encodePacked(uint256(0)), TxType.PAUSE);
    }

    /// @notice Transaction with proposal to unpause the safe
    function submitUnpause() external onlySigner nonReentrant whenPaused {
        submitTx(address(0), 0, abi.encodePacked(uint256(0)), TxType.UNPAUSE);
    }

    /// @notice The user can approve a transaction
    function confirmTransaction(
        uint256 _txIndex
    )
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
        notConfirmed(_txIndex)
        whenNotPaused
        nonReentrant
    {
        Transaction storage transaction = transactions[_txIndex];
        transaction.numConfirmations += 1;
        isConfirmed[_txIndex][msg.sender] = true;

        emit ConfirmTransaction(msg.sender, _txIndex);
    }

    /// @notice Executes the tx if it has enough number of approval
    /// @dev a large if-else block is required to account for various types of transactions
    function executeTransaction(
        uint256 _txIndex
    )
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
        whenNotPaused
        nonReentrant
    {
        Transaction memory transaction = transactions[_txIndex];

        require(transaction.numConfirmations >= quorum, "quorum not reached");

        transactions[_txIndex].executed = true;
        emit ExecuteTransaction(msg.sender, _txIndex);

        if (transaction.txType == TxType.ADD_SIGNER) {
            addSigner(transaction.to);
        } else if (transaction.txType == TxType.REMOVE_SIGNER) {
            removeSigner(transaction.to);
        } else if (transaction.txType == TxType.CHANGE_QUORUM) {
            quorum = transaction.value;
            return;
        } else if (transaction.txType == TxType.PAUSE) {
            _pause();
            return;
        } else if (transaction.txType == TxType.UNPAUSE) {
            _unpause();
            return;
        } else if (transaction.txType == TxType.VALUE_TRANSFER) {
            payable(transaction.to).sendValue(transaction.value);
        } else if (transaction.txType == TxType.SEND_BYTECODE) {
            transaction.to.functionCallWithValue(
                transaction.data,
                transaction.value,
                "function call failed"
            );
        } else {
            revert("unknown txType");
        }
    }

    /// @notice The user can revoke his/her confirmation for a previously approved transaction
    function revokeConfirmation(
        uint256 _txIndex
    )
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
        whenNotPaused
        nonReentrant
    {
        Transaction storage transaction = transactions[_txIndex];

        require(isConfirmed[_txIndex][msg.sender], "tx not confirmed");

        transaction.numConfirmations -= 1;
        isConfirmed[_txIndex][msg.sender] = false;

        emit RevokeConfirmation(msg.sender, _txIndex);
    }

    function getTransactionCount() external view returns (uint256) {
        return transactions.length;
    }

    /// @notice Get the Transaction struct for rendering on the Front-end
    function getTransaction(
        uint256 _txIndex
    )
        external
        view
        returns (
            address to,
            uint256 value,
            bytes memory data,
            bool executed,
            uint256 numConfirmations,
            TxType txType,
            uint256 date
        )
    {
        Transaction storage transaction = transactions[_txIndex];

        return (
            transaction.to,
            transaction.value,
            transaction.data,
            transaction.executed,
            transaction.numConfirmations,
            transaction.txType,
            transaction.date
        );
    }

    /// @dev Can be used to get the list of all signers on the Front-end
    function getSigner(uint256 _signerId) external view returns (address) {
        require(_signerId < signers.length, "index out of bound signer array");
        return signers[_signerId];
    }

    /// @dev Can be used to get the list of all signers on the Front-end
    function getSignerCount() external view returns (uint256) {
        return signers.length;
    }

    /// @dev The externalized code common for all types of transactions is made private
    function submitTx(
        address _to,
        uint256 _value,
        bytes memory _data,
        TxType txType
    ) private whenNotPaused {
        uint256 txIndex = transactions.length;

        transactions.push(
            Transaction({
                index: txIndex,
                to: _to,
                value: _value,
                data: _data,
                executed: false,
                numConfirmations: 1,
                txType: txType,
                date: block.timestamp
            })
        );

        isConfirmed[txIndex][msg.sender] = true;

        emit SubmitTransaction(msg.sender, txIndex, _to, _value, txType);
    }

    /// @dev The information about each signer is kept in 1 array and 2 mappings, so deleting each user should be done carefully
    function removeSigner(address _signer) private {
        require(isSigner[_signer], "cannot delete not a signer!");
        require(
            quorum <= signers.length - 1,
            "cannot have quorum > num of remaining signers!"
        );
        uint256 index = signersLuT[_signer];
        signers[index] = signers[signers.length - 1];
        signers.pop();
        delete signersLuT[_signer];
        delete isSigner[_signer];
    }

    /// @dev Adding a new signer in 1 array and 2 mappings
    function addSigner(address _signer) private {
        require(!isSigner[_signer], "cannot add already a signer!");
        uint256 index = signers.length;
        signers.push(_signer);
        signersLuT[_signer] = index;
        isSigner[_signer] = true;
    }

    /// @dev Receiving money should be registered with an event
    receive() external payable whenNotPaused {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }
}
