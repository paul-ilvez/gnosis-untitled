"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var AppContext_1 = require("@/store/AppContext");
var Jazzicon_1 = require("react-jazzicon/dist/Jazzicon");
var react_jazzicon_1 = require("react-jazzicon");
var ModalSendToken = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler;
    var _b = react_1.useContext(AppContext_1.AppContext), setCreateSafeStatusHandler = _b.setCreateSafeStatusHandler, newSafeForm = _b.newSafeForm, safeFactory = _b.safeFactory;
    var owners = newSafeForm.owners, name = newSafeForm.name, network = newSafeForm.network, quorum = newSafeForm.quorum;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler, width: "500px" },
            react_1["default"].createElement(react_2.Modal.Header, { justify: "flex-start" },
                react_1["default"].createElement(react_2.Text, { weight: "bold" }, "Rewiew transaction"),
                react_1["default"].createElement(react_2.Text, { size: "$xs", css: { marginLeft: "20px" } }, "step 2 out of 2")),
            react_1["default"].createElement(react_2.Card.Divider, null),
            react_1["default"].createElement(react_2.Modal.Body, { css: { textAlign: "center" } },
                react_1["default"].createElement(react_2.Row, null,
                    react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Sending From:")),
                react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                    react_1["default"].createElement(react_2.Row, { css: { width: "40px" } },
                        react_1["default"].createElement(Jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress("0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1") })),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$xs", css: { textAlign: "left", marginLeft: "20px" } },
                            react_1["default"].createElement("b", null, "Test"),
                            react_1["default"].createElement("br", null),
                            "gor: 0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1"))),
                react_1["default"].createElement(react_2.Row, null,
                    react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Recipient:")),
                react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                    react_1["default"].createElement(react_2.Row, { css: { width: "40px" } },
                        react_1["default"].createElement(Jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress("0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1") })),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$xs", css: { textAlign: "left", marginLeft: "20px" } },
                            react_1["default"].createElement("b", null, "Test"),
                            react_1["default"].createElement("br", null),
                            "gor: 0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1"))),
                react_1["default"].createElement(react_2.Row, null,
                    react_1["default"].createElement(react_2.Input, { css: { width: "500px" }, placeholder: "Select an asset*" })),
                react_1["default"].createElement(react_2.Row, null,
                    react_1["default"].createElement(react_2.Input, { css: { width: "500px" }, placeholder: "Amount*" }))),
            react_1["default"].createElement(react_2.Card.Divider, null),
            react_1["default"].createElement(react_2.Modal.Footer, { justify: "space-between" },
                react_1["default"].createElement(react_2.Button, { css: { width: "100px", background: "#fff" }, color: "#000", onClick: closeHandler, auto: true }, "Cancel"),
                react_1["default"].createElement("button", { style: {
                        background: "#000",
                        color: "#fff",
                        width: "100px",
                        height: "35px",
                        maxWidth: "260px",
                        borderRadius: "10px",
                        cursor: "pointer"
                    } }, "Next")))));
};
exports["default"] = ModalSendToken;
