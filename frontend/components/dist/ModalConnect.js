"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var ButtonConnectMetamask_1 = require("./ButtonConnectMetamask");
var ModalConnect = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler, handleConnectMetamaskClick = _a.handleConnectMetamaskClick;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Text, { h1: true, size: 24, css: {
                        textGradient: "45deg, $blue600 -20%, $pink600 50%"
                    }, weight: "bold" }, "Get started")),
            react_1["default"].createElement(react_2.Modal.Body, null,
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(react_2.Text, { h1: true, size: 18, weight: "medium" }, "Connect a wallet")),
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(react_2.Text, { size: 14, css: { textAlign: "center" } },
                        "Connecting your wallet is like \u201Clogging in\u201D",
                        react_1["default"].createElement("br", null),
                        "to Web3. Select your wallet from the ",
                        react_1["default"].createElement("br", null),
                        "options to get started.")),
                react_1["default"].createElement(react_2.Card.Divider, null),
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center", css: { marginTop: "$10" } },
                    react_1["default"].createElement(react_2.Image, { src: "Mmask.png", alt: "Default Image", width: 50, height: 50 }))),
            react_1["default"].createElement(react_2.Modal.Footer, null,
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(ButtonConnectMetamask_1["default"], { handleClickConnect: handleConnectMetamaskClick }))))));
};
exports["default"] = ModalConnect;
