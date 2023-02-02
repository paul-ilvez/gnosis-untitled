"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var ButtonDisconnectMetamask = function (_a) {
    var handleClickDisconnect = _a.handleClickDisconnect, account = _a.account;
    return (React.createElement("div", null,
        React.createElement(react_1.Button, { color: "success", onClick: handleClickDisconnect },
            React.createElement("span", { className: "text-sm md:text-base" }, account.toString().slice(0, 5) +
                "..." +
                account.toString().slice(38) +
                " Logout"))));
};
exports["default"] = ButtonDisconnectMetamask;
