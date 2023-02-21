"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
function NewTransactionButton(_a) {
    var handler = _a.handler;
    return (React.createElement(react_1.Button, { onClick: handler, rounded: true, css: {
            background: "#000",
            color: "#fff",
            width: "300px",
            maxWidth: "260px"
        }, auto: true },
        React.createElement(react_1.Text, { css: { letterSpacing: "$wide" }, color: "white", weight: "normal" }, "New transaction")));
}
exports["default"] = NewTransactionButton;
