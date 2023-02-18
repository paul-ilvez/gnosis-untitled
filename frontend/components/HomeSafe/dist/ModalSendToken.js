"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var AppContext_1 = require("@/store/AppContext");
var ModalSendToken = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler;
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler, width: "600px" },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Row, { justify: "left", align: "center" },
                    react_1["default"].createElement(react_2.Text, null, "Send Tokens")),
                react_1["default"].createElement(react_2.Row, { justify: "left", align: "center" },
                    react_1["default"].createElement(react_2.Text, null, "Step 1 of 2"))),
            react_1["default"].createElement(react_2.Card.Divider, null),
            react_1["default"].createElement(react_2.Modal.Body, null,
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(react_2.Input, { underlined: true, disabled: true, width: "500px" })),
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" })),
            react_1["default"].createElement(react_2.Modal.Footer, null))));
};
exports["default"] = ModalSendToken;
