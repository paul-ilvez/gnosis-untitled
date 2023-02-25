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
var react_1 = require("@nextui-org/react");
var LinkAndCopy_1 = require("@/components/Common/LinkAndCopy");
var react_jazzicon_1 = require("react-jazzicon");
var AppContext_1 = require("@/store/AppContext");
var react_2 = require("react");
var ModalChangeConfirmations_1 = require("./ModalChangeConfirmations");
function Setup(_a) {
    var _this = this;
    var signers = _a.signers;
    console.log("signersss : ", signers);
    var _b = react_2.useContext(AppContext_1.AppContext), network = _b.network, currentSafe = _b.currentSafe, provider = _b.provider, connected = _b.connected;
    var shortName = network.shortName;
    var _c = react_2.useState(), quorum = _c[0], setQuorum = _c[1];
    var _d = react_2.useState(), numOfSigners = _d[0], setNumOfSigners = _d[1];
    var _e = react_2.useState(false), isVisible = _e[0], setIsVisible = _e[1];
    react_2.useEffect(function () {
        if (currentSafe == null || !connected) {
            return;
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var tempQuorum, _a, tempNumOfSigners, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (provider == null || !connected) {
                            return [2 /*return*/];
                        }
                        _a = Number;
                        return [4 /*yield*/, currentSafe.quorum()];
                    case 1:
                        tempQuorum = _a.apply(void 0, [_c.sent()]);
                        _b = Number;
                        return [4 /*yield*/, currentSafe.getSignerCount()];
                    case 2:
                        tempNumOfSigners = _b.apply(void 0, [_c.sent()]);
                        setQuorum(tempQuorum);
                        setNumOfSigners(tempNumOfSigners);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [currentSafe, provider, connected]);
    function handleRemoveSigner(signer) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, currentSafe.submitRemoveSigner(signer)];
                    case 1:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 2:
                        response = _a.sent();
                        console.log(response);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function handleChangePopUp() {
        setIsVisible(true);
    }
    function handleClosePopUp() {
        setIsVisible(false);
    }
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "499px", mw: "720px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Row, null,
                React.createElement(react_1.Row, { css: { w: "140px" }, align: "center", justify: "space-between" },
                    React.createElement(react_1.Text, { b: true }, "Safe nonce"),
                    React.createElement(react_1.Tooltip, { content: "For security reasons, transactions made with Safe need to be executed in order. The nonce shows you which transaction will be executed next. You can find the nonce for a transaction in the transaction details." },
                        React.createElement(react_1.Image, { src: "/Info.svg", alt: "info" }))),
                React.createElement(react_1.Row, { css: { pl: "40px" }, align: "center" },
                    React.createElement(react_1.Text, { b: true }, "Current nonce: 1")))),
        React.createElement(react_1.Card.Body, null,
            React.createElement(React.Fragment, null,
                React.createElement(react_1.Row, { css: { w: "180px" }, align: "center", justify: "space-between" },
                    React.createElement(react_1.Text, { b: true }, "Manage safe owners"),
                    React.createElement(react_1.Tooltip, { content: "Add, remove and replace or rename existing owners. Owner names are only stored locally and will never be shared with us or any third parties" },
                        React.createElement(react_1.Image, { src: "/Info.svg", alt: "info" }))),
                React.createElement(react_1.Spacer, { y: 1 }),
                signers.map(function (signer) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement(react_1.Row, null,
                            React.createElement(react_1.Grid.Container, null,
                                React.createElement(react_jazzicon_1["default"], { diameter: 30, seed: react_jazzicon_1.jsNumberForAddress(signer) }),
                                React.createElement(react_1.Spacer, null),
                                React.createElement(react_1.Text, { size: "14px" },
                                    React.createElement("b", null,
                                        shortName,
                                        ":"),
                                    " ",
                                    signer)),
                            React.createElement(LinkAndCopy_1["default"], { address: signer }),
                            React.createElement(react_1.Button, { size: "xs", css: {
                                    backgroundColor: "transparent"
                                }, onClick: function () { return handleRemoveSigner(signer); } },
                                React.createElement(react_1.Image, { alt: "remove", src: "/Remove.svg", width: 16, height: 16 }))),
                        React.createElement(react_1.Spacer, { y: 0.5 })));
                }))),
        React.createElement(react_1.Card.Footer, null,
            React.createElement(react_1.Col, null,
                React.createElement(react_1.Row, null,
                    React.createElement(react_1.Text, { b: true }, " Required confirmations")),
                React.createElement(react_1.Row, null,
                    React.createElement(react_1.Text, null, "Any transaction requires the confirmation of:")),
                React.createElement(react_1.Row, null,
                    React.createElement(react_1.Text, { b: true },
                        quorum,
                        " of ",
                        numOfSigners)),
                React.createElement(react_1.Row, null,
                    React.createElement(react_1.Button, { onClick: function () {
                            handleChangePopUp();
                        }, size: "sm", css: { backgroundColor: "black" } },
                        React.createElement(react_1.Text, { b: true, color: "white" }, "Change"))),
                React.createElement(react_1.Spacer, { y: 1 }))),
        React.createElement(ModalChangeConfirmations_1["default"], { visible: isVisible, closeHandler: handleClosePopUp })));
}
exports["default"] = Setup;
