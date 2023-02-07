"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var ButtonConnectMetamask = function (_a) {
    var handleClickConnect = _a.handleClickConnect;
    return (react_2["default"].createElement(react_1.Button, { size: "lg", flat: true, color: "#000", onClick: handleClickConnect },
        react_2["default"].createElement(react_1.Text, { color: "error" }, "Connect Metamask")));
};
exports["default"] = ButtonConnectMetamask;
