"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var TransactionsHistoryElement_1 = require("./TransactionsHistoryElement");
var transactionsHistory_1 = require("@/mocks/transactionsHistory");
function TransactionsHistory() {
    return (React.createElement(react_1.Grid.Container, { direction: "column", justify: "center", alignItems: "center" },
        React.createElement(react_1.Spacer, { y: 2 }),
        React.createElement(React.Fragment, null, transactionsHistory_1["default"].map(function (transaction) {
            React.createElement(react_1.Grid, { justify: "space-between", alignItems: "center" },
                React.createElement(TransactionsHistoryElement_1["default"], { icon: transaction.icon, type: transaction.type, value: transaction.value, timestamp: transaction.timestamp, status: transaction.status }),
                ";");
        }))));
}
exports["default"] = TransactionsHistory;
