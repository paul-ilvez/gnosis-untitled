"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var TransactionsHeaderButtons_1 = require("./TransactionsHeaderButtons");
var AppContext_1 = require("@/store/AppContext");
var TransactionsHistory_1 = require("./TransactionsHistory");
var TransactionsQueue_1 = require("./TransactionsQueue");
function Transactions() {
    var transactionsSection = react_2.useContext(AppContext_1.AppContext).transactionsSection;
    var sectionMap = {
        Queue: React.createElement(TransactionsQueue_1["default"], null),
        History: React.createElement(TransactionsHistory_1["default"], null)
    };
    var headerButtons = [
        {
            id: 1,
            type: "Queue"
        },
        {
            id: 2,
            type: "History"
        },
    ];
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "499px", mw: "522px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Spacer, { y: 2 }),
            React.createElement(react_1.Row, { justify: "flex-start" }, headerButtons.map(function (button) { return (React.createElement(React.Fragment, null,
                React.createElement(TransactionsHeaderButtons_1["default"], { type: button.type }))); }))),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, null, sectionMap[transactionsSection.type])));
}
exports["default"] = Transactions;
