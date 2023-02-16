// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

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

    uint256 public signerCount;

    /// @notice Signature nonce, incremented with each successful execution or state change
    /// @dev This is used to prevent signature reuse
    /// @dev Initialized at 1 because it makes the first transaction slightly cheaper
    uint256 public nonce = 1;

    /// @notice The amount of required signatures to execute a transaction or change the state
    uint256 public quorum;
    /// @notice A list of signers, and wether they're trusted by this contract
    /// @dev This automatically generates a getter for us!
    mapping(address => bool) public isSigner;

    constructor(address[] memory signers, uint256 _quorum) payable {
        require(_quorum > 0, "quorum must be > 0 ");
        require(signers.length > 0, "must be at least 1 signer");
        uint256 length = signers.length;
        signerCount = length;

        unchecked {
            for (uint256 i = 0; i < length; i++) {
                address signer = signers[i];
                if (signer == address(0)) {
                    revert("Signer cannot be address(0)");
                }
                isSigner[signer] = true;
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
    ) public onlySigner {
        require(_to != address(0), "cannot send to nowhere");
        require(_data.length > 0, "cannot send null tx");
        submitTx(_to, _value, _data, TxType.SEND_BYTECODE);
    }

    function submitNewSigner(address _newSigner) public onlySigner {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.ADD_SIGNER
        );
    }

    function submitRemoveSigner(address _newSigner) public onlySigner {
        require(_newSigner != address(0), "Signer cannot be address(0)");
        submitTx(
            _newSigner,
            0,
            abi.encodePacked(uint256(0)),
            TxType.REMOVE_SIGNER
        );
    }

    function submitChangeQuorum(uint256 _quorum) public onlySigner {
        require(_quorum != 0, "Quorum cannot be 0");
        submitTx(
            address(0),
            _quorum,
            abi.encodePacked(uint256(0)),
            TxType.CHANGE_QUORUM
        );
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
                txType: txType
            })
        );

        isConfirmed[txIndex][msg.sender] = true;

        emit SubmitTransaction(msg.sender, txIndex, _to, _value, txType);
    }

    function confirmTransaction(uint256 _txIndex)
        public
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
        public
        onlySigner
        txExists(_txIndex)
        notExecuted(_txIndex)
    {
        Transaction storage transaction = transactions[_txIndex];

        require(transaction.numConfirmations >= quorum, "cannot execute tx");

        transaction.executed = true;
        emit ExecuteTransaction(msg.sender, _txIndex);

        if (transaction.txType == TxType.ADD_SIGNER) {
            isSigner[transaction.to] = true;
            signerCount++;
            return;
        }

        if (transaction.txType == TxType.REMOVE_SIGNER) {
            isSigner[transaction.to] = false;
            signerCount--;
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
        public
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

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(uint256 _txIndex)
        public
        view
        returns (
            address to,
            uint256 value,
            bytes memory data,
            bool executed,
            uint256 numConfirmations
        )
    {
        Transaction storage transaction = transactions[_txIndex];

        return (
            transaction.to,
            transaction.value,
            transaction.data,
            transaction.executed,
            transaction.numConfirmations
        );
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }
}
