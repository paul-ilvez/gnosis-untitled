"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var ButtonConnectMetamask_1 = require("../ButtonConnect/ButtonConnectMetamask");
var link_1 = require("next/link");
var AppContext_1 = require("@/store/AppContext");
var ModalConnect = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler, handleConnectMetamaskClick = _a.handleConnectMetamaskClick;
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Text, { h1: true, size: 24, css: {
                        textGradient: "45deg, $blue600 -20%, $pink600 50%"
                    }, weight: "bold" }, "Get started")),
            appCtx.isEthereum ? (react_1["default"].createElement(react_1["default"].Fragment, null,
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
                        react_1["default"].createElement(ButtonConnectMetamask_1["default"], { handleClickConnect: handleConnectMetamaskClick }))))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_2.Modal.Body, null,
                    react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                        react_1["default"].createElement(react_2.Text, { h1: true, size: 18, weight: "medium" }, "You need to install Meta mask!"))),
                react_1["default"].createElement(react_2.Modal.Footer, null,
                    react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                        react_1["default"].createElement(link_1["default"], { href: 'https://metamask.app.link/dapp/untitle-gnosis.io', target: '_blank' }, "Install Metamask"))))))));
};
exports["default"] = ModalConnect;
