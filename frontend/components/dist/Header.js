"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var NoticePopUp_1 = require("./NoticeHeader/NoticePopUp");
var ModalDisconnect_1 = require("./ModalConnect/ModalDisconnect");
var ModalConnect_1 = require("./ModalConnect/ModalConnect");
var link_1 = require("next/link");
var NetworkDropdown_1 = require("@/components/NetworkDropdown/NetworkDropdown");
var Header = function (_a) {
    var handleDisconnectMetamaskClick = _a.handleDisconnectMetamaskClick, handleConnectMetamaskClick = _a.handleConnectMetamaskClick, account = _a.account, visibleConnect = _a.visibleConnect, setVisibleConnect = _a.setVisibleConnect, setVisibleDisconnect = _a.setVisibleDisconnect, network = _a.network;
    var _b = react_1.useState("static"), variant = _b[0], setVariant = _b[1];
    var variants = ["static", "floating", "sticky"];
    var handelModalConnect = function () {
        setVisibleConnect(true);
    };
    var handleCloseModalConnect = function () {
        setVisibleConnect(false);
    };
    var handlerModalDisconnect = function () {
        setVisibleDisconnect(true);
    };
    var lockIcon = (react_1["default"].createElement(react_2.Image, { width: 85, height: 50, src: "/wallet.svg", alt: "wallet" }));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Navbar, { maxWidth: "lg", variant: "static" },
            react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between" },
                react_1["default"].createElement(react_2.Grid, { xs: 4 },
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement(react_2.Navbar.Brand, null,
                            react_1["default"].createElement(react_2.Image, { width: 85, height: 50, src: "/logo.svg", alt: "logo" })))),
                react_1["default"].createElement(react_2.Grid, { justify: "center", xs: 4 },
                    react_1["default"].createElement(react_2.Navbar.Content, { css: { cursor: "pointer" }, hideIn: "xs" },
                        react_1["default"].createElement(NetworkDropdown_1["default"], null))),
                react_1["default"].createElement(react_2.Grid, { justify: "flex-end", xs: 4 },
                    react_1["default"].createElement(react_2.Navbar.Content, null,
                        react_1["default"].createElement(NoticePopUp_1["default"], null),
                        react_1["default"].createElement(react_2.Navbar.Item, null, account ? (react_1["default"].createElement(react_2.Popover, null,
                            react_1["default"].createElement(react_2.Popover.Trigger, null,
                                react_1["default"].createElement(react_2.Button, { size: "lg", color: "gray", onPress: handlerModalDisconnect },
                                    react_1["default"].createElement(react_2.Avatar, { color: "secondary", textColor: "white", text: "Bob", size: "sm" }),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(react_2.Text, { size: "$md", b: true },
                                            "\u00A0",
                                            " ",
                                            "gor:" + (account === null || account === void 0 ? void 0 : account.toString().slice(0, 5)) +
                                                "..." + (account === null || account === void 0 ? void 0 : account.toString().slice(38)))),
                                    react_1["default"].createElement(react_2.Spacer, null),
                                    react_1["default"].createElement(react_2.Image, { width: 18, height: 18, src: "/chevron_down.svg", alt: "Chevron Down" }))),
                            react_1["default"].createElement(react_2.Popover.Content, null,
                                react_1["default"].createElement(ModalDisconnect_1["default"], { account: account, handleDisconnectMetamaskClick: handleDisconnectMetamaskClick, networkName: network })))) : (react_1["default"].createElement(react_2.Button, { size: "lg", icon: lockIcon, flat: true, color: "gray", onPress: handelModalConnect },
                            react_1["default"].createElement(react_2.Text, { color: "error" }, "Connect Wallet")))))))),
        react_1["default"].createElement(ModalConnect_1["default"], { visible: visibleConnect, handleConnectMetamaskClick: handleConnectMetamaskClick, closeHandler: handleCloseModalConnect })));
};
exports["default"] = Header;
