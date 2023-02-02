"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var ButtonConnectMetamask = function (_a) {
    var handleClickConnect = _a.handleClickConnect;
    return (React.createElement("div", null,
        React.createElement(react_1.Button, { color: "success", onClick: handleClickConnect }, "Connect Wallet")));
};
exports["default"] = ButtonConnectMetamask;
