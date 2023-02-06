"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var Jazzicon_1 = require("react-jazzicon/dist/Jazzicon");
var react_jazzicon_1 = require("react-jazzicon");
var ButtonDisconnectMetamask_1 = require("./ButtonDisconnectMetamask");
var ModalDisconnect = function (_a) {
    var handleDisconnectMetamaskClick = _a.handleDisconnectMetamaskClick, account = _a.account;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal.Header, null,
            react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                react_1["default"].createElement(Jazzicon_1["default"], { diameter: 50, seed: react_jazzicon_1.jsNumberForAddress("" + account) }))),
        react_1["default"].createElement(react_2.Modal.Body, null,
            react_1["default"].createElement(react_2.Card, { variant: "bordered" },
                react_1["default"].createElement(react_2.Card.Body, { css: { padding: "$2" } },
                    react_1["default"].createElement(react_2.Text, null, "gor: " + (account === null || account === void 0 ? void 0 : account.toString().slice(0, 10)) +
                        "..." + (account === null || account === void 0 ? void 0 : account.toString().slice(38))))),
            react_1["default"].createElement(react_2.Row, { justify: "flex-start", align: "center" },
                react_1["default"].createElement(react_2.Text, { size: "$xs", css: { color: "#868686", textAlign: "left" } },
                    "Wallet: Metamask ",
                    react_1["default"].createElement("br", null),
                    "Connected network: Goerli"))),
        react_1["default"].createElement(react_2.Modal.Footer, null,
            react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                react_1["default"].createElement(ButtonDisconnectMetamask_1["default"], { handleClickDisconnect: handleDisconnectMetamaskClick })))));
};
exports["default"] = ModalDisconnect;
