"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var ethers_1 = require("ethers");
var react_2 = require("react");
var TransactionInfo_1 = require("./TransactionInfo");
function TransactionCard(_a) {
    var transaction = _a.transaction, _b = _a.quorum, quorum = _b === void 0 ? 1 : _b;
    var _c = react_2.useState(false), open = _c[0], setOpen = _c[1];
    var TxType;
    (function (TxType) {
        TxType[TxType["VALUE_TRANSFER"] = 0] = "VALUE_TRANSFER";
        TxType[TxType["SEND_BYTECODE"] = 1] = "SEND_BYTECODE";
        TxType[TxType["ADD_SIGNER"] = 2] = "ADD_SIGNER";
        TxType[TxType["REMOVE_SIGNER"] = 3] = "REMOVE_SIGNER";
        TxType[TxType["CHANGE_QUORUM"] = 4] = "CHANGE_QUORUM";
    })(TxType || (TxType = {}));
    function txTypeToString(txType) {
        switch (txType) {
            case TxType.VALUE_TRANSFER:
                return "Value Transfer";
            case TxType.SEND_BYTECODE:
                return "Send Bytecode";
            case TxType.CHANGE_QUORUM:
                return "Change Quorum";
            case TxType.ADD_SIGNER:
                return "Add Signer";
            case TxType.REMOVE_SIGNER:
                return "Remove Signer";
            default:
                return "Unkown Transaction";
        }
    }
    function formatNumOfConfirmations() {
        return transaction.numConfirmations + "/" + quorum;
    }
    var value = ethers_1.formatEther(transaction.value) + " ETH";
    function renderValue() {
        if (txTypeToString(transaction.type) == "Change Quorum") {
            return transaction.value + "";
        }
        return value;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Card, { variant: "shadow" },
            React.createElement(react_1.Card.Header, { css: { cursor: "pointer" }, onClick: function () { return setOpen(!open); } },
                React.createElement(react_1.Row, { justify: "space-between", align: "center", wrap: "nowrap" },
                    React.createElement(react_1.Row, { align: "center" },
                        React.createElement(react_1.Text, { b: true }, transaction.id),
                        React.createElement(react_1.Spacer, { y: 2 }),
                        React.createElement(react_1.Text, { css: { width: "120px" } },
                            "\u00A0",
                            txTypeToString(transaction.type)),
                        React.createElement(react_1.Spacer, { y: 1 }),
                        React.createElement(react_1.Text, null, renderValue())),
                    React.createElement(react_1.Spacer, { y: 2 }),
                    React.createElement(react_1.Text, null, transaction.date.toLocaleDateString()),
                    React.createElement(react_1.Spacer, { y: 2 }),
                    React.createElement(react_1.Grid, { justify: "center", direction: "column" },
                        React.createElement(react_1.Text, { b: true, color: Number(transaction.numConfirmations) >= quorum
                                ? "green"
                                : "blue", css: {
                                display: "flex",
                                alignItems: "center"
                            } },
                            formatNumOfConfirmations(),
                            React.createElement(react_1.Spacer, null),
                            React.createElement(react_1.Image, { alt: "chevron", width: 16, height: 16, src: "/chevron.svg" }))))),
            open && React.createElement(TransactionInfo_1["default"], { transaction: transaction, quorum: quorum })),
        React.createElement(react_1.Spacer, null)));
}
exports["default"] = TransactionCard;
