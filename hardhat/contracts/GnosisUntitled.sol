// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

/// @title Untitled Gnosis
/// @author Untitled_Team
contract GnosisUntitled {
    event Deposit(address indexed sender, uint256 amount, uint256 balance);
    event SubmitTransaction(
        address indexed owner,
        uint256 indexed txIndex,
        address indexed to,
        uint256 value,
        bytes data
    );
    event ConfirmTransaction(address indexed owner, uint256 indexed txIndex);
    event RevokeConfirmation(address indexed owner, uint256 indexed txIndex);
    event ExecuteTransaction(address indexed owner, uint256 indexed txIndex);

    struct Transaction {
        address to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 numConfirmations;
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

    Transaction[] public transactions;

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
        require(_quorum > 0, "quorum must be >0 ");
        require(signers.length > 0, "must be at least 1 signer");

        unchecked {
            uint256 length = signers.length;
            for (uint256 i = 0; i < length; i++) {
                address signer = signers[i];
                if (signer != address(0)) {
                    isSigner[signer] = true;
                }
            }
        }

        quorum = _quorum;
    }

    function submitTransaction(
        address _to,
        uint256 _value,
        bytes memory _data
    ) public onlySigner {
        require(_to != address(0), "cannot send to nowhere");
        require(_value != 0 || _data.length > 0, "cannot send null tx");
        uint256 txIndex = transactions.length;

        transactions.push(
            Transaction({
                to: _to,
                value: _value,
                data: _data,
                executed: false,
                numConfirmations: 1
            })
        );

        isConfirmed[txIndex][msg.sender] = true;

        emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
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

        (bool success, ) = transaction.to.call{value: transaction.value}(
            transaction.data
        );
        require(success, "tx failed");

        emit ExecuteTransaction(msg.sender, _txIndex);
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
