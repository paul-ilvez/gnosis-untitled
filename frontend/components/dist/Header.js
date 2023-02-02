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
    return (react_1["default"].createElement(react_2.Navbar, { isBordered: true, variant: variant },
        react_1["default"].createElement(react_2.Navbar.Brand, null,
            react_1["default"].createElement(react_2.Text, { b: true, color: "inherit", hideIn: "xs" }, "ACME")),
        react_1["default"].createElement(react_2.Navbar.Content, { hideIn: "xs" },
            react_1["default"].createElement(react_2.Navbar.Link, { href: "#" }, "Features"),
            react_1["default"].createElement(react_2.Navbar.Link, { isActive: true, href: "#" }, "Customers"),
            react_1["default"].createElement(react_2.Navbar.Link, { href: "#" }, "Pricing"),
            react_1["default"].createElement(react_2.Navbar.Link, { href: "#" }, "Company")),
        react_1["default"].createElement(react_2.Navbar.Content, null,
            react_1["default"].createElement(react_2.Navbar.Link, { color: "inherit", href: "#" }, "Login"),
            react_1["default"].createElement(react_2.Navbar.Item, null, account ? react_1["default"].createElement(ButtonDisconnectMetamask_1["default"], { handleClickDisconnect: handleDisconnectMetamaskClick, account: account }) : react_1["default"].createElement(ButtonConnectMetamask_1["default"], { handleClickConnect: handleConnectMetamaskClick })))));
};
exports["default"] = Header;
