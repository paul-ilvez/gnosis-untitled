"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
function TransactionsHistoryElement(_a) {
    var icon = _a.icon, type = _a.type, value = _a.value, timestamp = _a.timestamp, status = _a.status;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Row, { justify: "center", align: "center" },
            React.createElement(react_1.Image, { src: icon, alt: "" }),
            React.createElement(react_1.Text, null, type),
            React.createElement(react_1.Text, null, value),
            React.createElement(react_1.Text, null, timestamp),
            React.createElement(react_1.Text, null, status))));
}
exports["default"] = TransactionsHistoryElement;
