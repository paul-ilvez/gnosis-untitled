"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var AppContext_1 = require("@/store/AppContext");
var SendTokenButton_1 = require("./SendTokenButton");
var SendNFTButton_1 = require("./SendNFTButton");
var ModalSendToken_1 = require("./ModalSendToken");
var ModalNewTransaction = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler;
    var _b = react_1.useState(false), isVisibleModalToken = _b[0], setIsVisibleModalToken = _b[1];
    var _c = react_1.useState(false), isVisibleModalNFT = _c[0], setIsVisibleModalNFT = _c[1];
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    var handleClickModalSendToken = function () {
        setIsVisibleModalToken(true);
        closeHandler();
    };
    var handleClosekModalSendToken = function () {
        setIsVisibleModalNFT(false);
        setIsVisibleModalToken(false);
    };
    var handleClickModalSendNFT = function () {
        setIsVisibleModalNFT(true);
        sessionStorage.removeItem("recipient");
        sessionStorage.removeItem("amount");
        closeHandler();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Row, { justify: "left", align: "center" },
                    react_1["default"].createElement(react_2.Text, null, "New transaction"))),
            react_1["default"].createElement(react_2.Card.Divider, null),
            react_1["default"].createElement(react_2.Modal.Body, null,
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(SendTokenButton_1["default"], { handler: handleClickModalSendToken })),
                react_1["default"].createElement(react_2.Row, { justify: "center", align: "center" },
                    react_1["default"].createElement(SendNFTButton_1["default"], { handler: handleClickModalSendNFT }))),
            react_1["default"].createElement(react_2.Modal.Footer, null)),
        react_1["default"].createElement(ModalSendToken_1["default"], { closeHandler: handleClosekModalSendToken, visible: isVisibleModalToken })));
};
exports["default"] = ModalNewTransaction;
