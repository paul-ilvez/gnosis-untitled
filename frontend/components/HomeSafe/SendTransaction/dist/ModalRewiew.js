"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var AppContext_1 = require("@/store/AppContext");
var Jazzicon_1 = require("react-jazzicon/dist/Jazzicon");
var react_jazzicon_1 = require("react-jazzicon");
var ethers_1 = require("ethers");
var ModalReview = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler, addressFrom = _a.addressFrom, shortName = _a.shortName;
    var _b = react_1.useState("0x0"), recipient = _b[0], setRecipient = _b[1];
    var _c = react_1.useState(false), isLoad = _c[0], setLoad = _c[1];
    var _d = react_1.useState(false), success = _d[0], setSuccess = _d[1];
    var _e = react_1.useContext(AppContext_1.AppContext), provider = _e.provider, connected = _e.connected, currentSafe = _e.currentSafe, signer = _e.signer, valueTransfer = _e.valueTransfer;
    var handleSendTransactionForm = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var tx, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log("Current Safe >>>", currentSafe);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    setLoad(true);
                    console.log("Transaction >>>", valueTransfer.recipient, valueTransfer.amount);
                    return [4 /*yield*/, currentSafe.submitValueTransfer(valueTransfer.recipient, ethers_1.ethers.parseEther(valueTransfer.amount))];
                case 2:
                    tx = _a.sent();
                    return [4 /*yield*/, tx.wait()];
                case 3:
                    response = _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 5:
                    setSuccess(true);
                    setTimeout(function () {
                        setLoad(false);
                        setSuccess(false);
                        closeHandler();
                    }, 5000);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler, width: "500px" },
            react_1["default"].createElement("form", { onSubmit: handleSendTransactionForm },
                react_1["default"].createElement(react_2.Modal.Header, { justify: "flex-start" },
                    react_1["default"].createElement(react_2.Text, { weight: "bold" }, "Rewiew transaction"),
                    react_1["default"].createElement(react_2.Text, { size: "$xs", css: { marginLeft: "20px" } }, "step 2 out of 2")),
                react_1["default"].createElement(react_2.Card.Divider, null),
                react_1["default"].createElement(react_2.Modal.Body, { css: { textAlign: "center" } },
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, null,
                            "Amount transfer: ",
                            react_1["default"].createElement("b", null, valueTransfer.amount))),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Sending From:")),
                    react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Row, { css: { width: "40px" } }, addressFrom ? (react_1["default"].createElement(Jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress(addressFrom) })) : null),
                        react_1["default"].createElement(react_2.Row, null,
                            react_1["default"].createElement(react_2.Text, { size: "$xs", css: { textAlign: "left", marginLeft: "20px" } },
                                react_1["default"].createElement("b", null, "Bob"),
                                react_1["default"].createElement("br", null),
                                shortName,
                                ": ",
                                addressFrom))),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Recipient:")),
                    react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Row, { css: { width: "40px" } }, recipient ? (react_1["default"].createElement(Jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress(recipient) })) : null),
                        react_1["default"].createElement(react_2.Row, null,
                            react_1["default"].createElement(react_2.Text, { size: "$xs", css: { textAlign: "left", marginLeft: "20px" } },
                                react_1["default"].createElement("b", null, "Alice"),
                                react_1["default"].createElement("br", null),
                                shortName,
                                ": ",
                                valueTransfer.recipient)))),
                react_1["default"].createElement(react_2.Card.Divider, null),
                react_1["default"].createElement(react_2.Modal.Footer, { justify: "space-between" },
                    react_1["default"].createElement(react_2.Button, { css: { width: "100px", background: "#fff" }, color: "#000", onPress: closeHandler, auto: true }, "Back"),
                    isLoad ? (react_1["default"].createElement(react_2.Grid, null,
                        react_1["default"].createElement(react_2.Loading, { type: "points" }))) : null,
                    react_1["default"].createElement(react_2.Button, { disabled: isLoad, type: "submit", style: {
                            background: "#000",
                            color: "#fff",
                            width: "100px",
                            height: "35px",
                            maxWidth: "260px",
                            borderRadius: "10px",
                            cursor: "pointer"
                        } }, "Submit")))),
        react_1["default"].createElement(react_2.Modal, { animated: true, "aria-labelledby": "modal-title", open: success, onClose: closeHandler, css: { backgroundColor: "#7FFFD4" }, blur: true },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Text, { b: true, size: 18 }, "Transaction is successfully send!")))));
};
exports["default"] = ModalReview;
