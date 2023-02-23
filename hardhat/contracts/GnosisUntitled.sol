// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

/// @title Untitled Gnosis
/// @author Untitled_Team
contract GnosisUntitled {
    enum TxType {
        VALUE_TRANSFER,
        SEND_BYTECODE,
        ADD_SIGNER,
        REMOVE_SIGNER,
        CHANGE_QUORUM
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

    // mapping from tx index => owner => bool
    mapping(uint256 => mapping(address => bool)) public isConfirmed;

    Transaction[] private transactions;

    /// @notice The array containing all signers.
    address[] private signers;
    /// @notice Get signer's index from address.
    mapping(address => uint256) signersLuT;
    /// @notice Check wether the address is a singer in this Safe.
    /// @dev This automatically generates a getter for us!
    mapping(address => bool) public isSigner;

    /// @notice Signature nonce, incremented with each successful execution or state change
    /// @dev This is used to prevent signature reuse
    /// @dev Initialized at 1 because it makes the first transaction slightly cheaper
    uint256 public nonce = 1;

    /// @notice The amount of required signatures to execute a transaction or change the state
    uint256 public quorum;

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

    function submitValueTransfer(address _to, uint256 _value)
        external
        onlySigner
    {
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

    function submitSendBytecode(
        address _to,
        uint256 _value,
        bytes memory _data
    ) external onlySigner {
        require(_to != address(0), "cannot send to nowhere");
        require(_data.length > 0, "cannot send null tx");
        submitTx(_to, _value, _data, TxType.SEND_BYTECODE);
    }

    function submitNewSigner(address _newSigner) external onlySigner {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.ADD_SIGNER
        );
    }

    function submitRemoveSigner(address _newSigner) external onlySigner {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.REMOVE_SIGNER
        );
    }

    function submitChangeQuorum(uint256 _quorum) external onlySigner {
        require(_quorum != 0, "Quorum cannot be 0");
        submitTx(
            address(0),
            _quorum,
            abi.encodePacked(uint256(0)),
            TxType.CHANGE_QUORUM
        );
    }

    function confirmTransaction(uint256 _txIndex)
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
        notConfirmed(_txIndex)
    {
        Transaction storage transaction = transactions[_txIndex];
        transaction.numConfirmations += 1;
        isConfirmed[_txIndex][msg.sender] = true;

        emit ConfirmTransaction(msg.sender, _txIndex);
    }

    function executeTransaction(uint256 _txIndex)
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
    {
        Transaction storage transaction = transactions[_txIndex];

        require(transaction.numConfirmations >= quorum, "cannot execute tx");

        transaction.executed = true;
        emit ExecuteTransaction(msg.sender, _txIndex);

        if (transaction.txType == TxType.ADD_SIGNER) {
            addSigner(transaction.to);
            return;
        }

        if (transaction.txType == TxType.REMOVE_SIGNER) {
            removeSigner(transaction.to);
            return;
        }

        if (transaction.txType == TxType.CHANGE_QUORUM) {
            quorum = transaction.value;
            return;
        }

        (bool success, ) = transaction.to.call{value: transaction.value}(
            transaction.data
        );
        require(success, "tx failed");
    }

    function revokeConfirmation(uint256 _txIndex)
        external
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
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

    function getTransaction(uint256 _txIndex)
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

    function getSigner(uint256 _signerId) external view returns (address) {
        require(_signerId < signers.length, "index out of bound signer array");
        return signers[_signerId];
    }

    function getSignerCount() external view returns (uint256) {
        return signers.length;
    }

    function submitTx(
        address _to,
        uint256 _value,
        bytes memory _data,
        TxType txType
    ) private {
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

    function addSigner(address _signer) private {
        require(!isSigner[_signer], "cannot add already a signer!");
        uint256 index = signers.length;
        signers.push(_signer);
        signersLuT[_signer] = index;
        isSigner[_signer] = true;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }
}
