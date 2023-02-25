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
var ModalAddSigner = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler;
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    var currentSafe = appCtx.currentSafe;
    var quorumInputRef = react_1.useRef();
    var handleClickModalSendToken = function () {
        setIsVisibleModalToken(true);
        closeHandler();
    };
    var handleClosekModalSendToken = function () {
        setIsVisibleModalNFT(false);
        setIsVisibleModalToken(false);
    };
    function handleAddSigner(e) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var value, tx, response, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e.preventDefault();
                        console.log("quorum, ", (_a = quorumInputRef === null || quorumInputRef === void 0 ? void 0 : quorumInputRef.current) === null || _a === void 0 ? void 0 : _a.value);
                        value = (_b = quorumInputRef === null || quorumInputRef === void 0 ? void 0 : quorumInputRef.current) === null || _b === void 0 ? void 0 : _b.value;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, currentSafe.submitNewSigner(value)];
                    case 2:
                        tx = _c.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 3:
                        response = _c.sent();
                        console.log(response);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler },
            react_1["default"].createElement(react_2.Modal.Header, null,
                react_1["default"].createElement(react_2.Row, { justify: "left", align: "center" },
                    react_1["default"].createElement(react_2.Text, null, "Change amount of confirmation"))),
            react_1["default"].createElement(react_2.Card.Divider, null),
            react_1["default"].createElement(react_2.Modal.Body, null,
                react_1["default"].createElement("form", { onSubmit: handleAddSigner },
                    react_1["default"].createElement("label", null),
                    react_1["default"].createElement("input", { placeholder: "Add address", ref: quorumInputRef, style: {
                            backgroundColor: "transparent",
                            border: "1px solid gray"
                        }, type: "text", step: 1 }),
                    react_1["default"].createElement(react_2.Spacer, { y: 1 }),
                    react_1["default"].createElement(react_2.Button, { size: "sm", css: { backgroundColor: "black" }, type: "submit" },
                        react_1["default"].createElement(react_2.Text, { b: true, color: "white" }, "Submit")))),
            react_1["default"].createElement(react_2.Modal.Footer, null))));
};
exports["default"] = ModalAddSigner;
