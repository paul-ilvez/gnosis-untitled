"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var LinkAndCopy_1 = require("../Common/LinkAndCopy");
function AssetsCounter() {
    return (React.createElement(react_1.Row, { align: "center", justify: "center" },
        React.createElement(react_1.Text, { b: true, size: 14, color: "#666666", css: { mr: "$5" } },
            "Tokens",
            React.createElement(react_1.Text, { b: true, size: 20, css: { ml: "$5" } }, "0")),
        React.createElement(react_1.Text, { b: true, size: 14, color: "#666666", css: { mr: "$10" } },
            "NFT",
            React.createElement(react_1.Text, { b: true, size: 20, css: { ml: "$5" } }, "0")),
        React.createElement(LinkAndCopy_1["default"], null)));
}
exports["default"] = AssetsCounter;
