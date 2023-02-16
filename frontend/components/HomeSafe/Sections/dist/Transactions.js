"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var TransactionsHeaderButtons_1 = require("../TransactionsHeaderButtons");
function Transactions() {
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "499px", mw: "522px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Spacer, { y: 2 }),
            React.createElement(react_1.Row, { justify: "flex-start" },
                React.createElement(TransactionsHeaderButtons_1["default"], null))),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, null,
            React.createElement(react_1.Grid.Container, { direction: "column", justify: "center", alignItems: "center" },
                React.createElement(react_1.Spacer, { y: 2 }),
                React.createElement(react_1.Image, { src: "/QueueIcon.svg", alt: "QueueIcon" }),
                React.createElement(react_1.Spacer, { y: 1 }),
                React.createElement(react_1.Text, { css: { userSelect: "none" }, size: 16, color: "#C8C8C8" }, "Queued transactions will appear here")))));
}
exports["default"] = Transactions;
