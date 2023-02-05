"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var ButtonConnectMetamask_1 = require("./ButtonConnectMetamask");
var ButtonDisconnectMetamask_1 = require("./ButtonDisconnectMetamask");
var Header = function (_a) {
    var handleDisconnectMetamaskClick = _a.handleDisconnectMetamaskClick, handleConnectMetamaskClick = _a.handleConnectMetamaskClick, account = _a.account;
    var _b = react_1["default"].useState("static"), variant = _b[0], setVariant = _b[1];
    var variants = ["static", "floating", "sticky"];
    console.log(account);
    return (react_1["default"].createElement(react_2.Navbar, { maxWidth: "lg", isBordered: true, variant: variant },
        react_1["default"].createElement(react_2.Grid.Container, { justify: "center" },
            react_1["default"].createElement(react_2.Grid, { xs: true },
                react_1["default"].createElement(react_2.Navbar.Brand, null,
                    react_1["default"].createElement(react_2.Image, { width: 85, height: 50, src: "/logo.svg", alt: "logo" }))),
            react_1["default"].createElement(react_2.Grid, { xs: true, justify: "center" },
                react_1["default"].createElement(react_2.Navbar.Content, { css: { cursor: "pointer" }, hideIn: "xs" },
                    react_1["default"].createElement(react_2.Button, { size: "sm", shadow: true, color: "primary", auto: true, rounded: true }, "Goerli"),
                    react_1["default"].createElement(react_2.Image, { width: 18, height: 18, src: "/chevron_down.svg", alt: "Chevron Down" }))),
            react_1["default"].createElement(react_2.Grid, { xs: true, justify: "flex-end" },
                react_1["default"].createElement(react_2.Navbar.Content, null,
                    react_1["default"].createElement(react_2.Image, { width: 24, height: 24, src: "/ring.svg", alt: "ring" }),
                    react_1["default"].createElement(react_2.Navbar.Item, null, account ? (react_1["default"].createElement(ButtonDisconnectMetamask_1["default"], { handleClickDisconnect: handleDisconnectMetamaskClick, account: account })) : (react_1["default"].createElement(ButtonConnectMetamask_1["default"], { handleClickConnect: handleConnectMetamaskClick }))))))));
};
exports["default"] = Header;
