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
var ModalRewiew_1 = require("./ModalRewiew");
var LinkAndCopy_1 = require("@/components/Common/LinkAndCopy");
var ethers_1 = require("ethers");
var ModalSendToken = function (_a) {
    var visible = _a.visible, closeHandler = _a.closeHandler;
    var _b = react_1.useContext(AppContext_1.AppContext), provider = _b.provider, currentSafe = _b.currentSafe, connected = _b.connected, setValueTransfer = _b.setValueTransfer;
    var _c = react_1.useContext(AppContext_1.AppContext).network, shortName = _c.shortName, symbol = _c.symbol;
    var _d = react_1.useState(false), visibleReview = _d[0], setVisibleReview = _d[1];
    var _e = react_1.useState(0), balance = _e[0], setBalance = _e[1];
    var _f = react_1.useState(0), quorum = _f[0], setQuorum = _f[1];
    var _g = react_1.useState(0), numOfSigners = _g[0], setNumOfSigners = _g[1];
    var _h = react_1.useState("UNKNOWN"), contractAddress = _h[0], setContractAddress = _h[1];
    var recipientRef = react_1.useRef();
    var amountRef = react_1.useRef();
    react_1.useEffect(function () {
        if (currentSafe == null || !connected) {
            return;
        }
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var tempQuorum, _a, tempNumOfSigners, _b, tempAddress, tempBalance, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (provider == null || !connected) {
                            return [2 /*return*/];
                        }
                        _a = Number;
                        return [4 /*yield*/, currentSafe.quorum()];
                    case 1:
                        tempQuorum = _a.apply(void 0, [_d.sent()]);
                        _b = Number;
                        return [4 /*yield*/, currentSafe.getSignerCount()];
                    case 2:
                        tempNumOfSigners = _b.apply(void 0, [_d.sent()]);
                        tempAddress = currentSafe.target;
                        _c = Number;
                        return [4 /*yield*/, provider.getBalance(tempAddress)];
                    case 3:
                        tempBalance = _c.apply(void 0, [_d.sent()]);
                        setContractAddress(tempAddress);
                        setBalance(tempBalance);
                        setQuorum(tempQuorum);
                        setNumOfSigners(tempNumOfSigners);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [currentSafe, provider, connected]);
    var closeHandlerReview = function () {
        setVisibleReview(false);
        // sessionStorage.removeItem("recipient");
        // sessionStorage.removeItem("amount");
    };
    var handleSendFormReview = function (event) {
        event.preventDefault();
        setValueTransfer(recipientRef.current.value, amountRef.current.value);
        // sessionStorage.setItem("amount", amountRef.current.value);
        // sessionStorage.setItem("recipient", recipientRef.current.value);
        setVisibleReview(true);
        closeHandler();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { closeButton: true, "aria-labelledby": "modal-title", open: visible, onClose: closeHandler, width: "500px" },
            react_1["default"].createElement("form", { onSubmit: handleSendFormReview },
                react_1["default"].createElement(react_2.Modal.Header, { justify: "flex-start" },
                    react_1["default"].createElement(react_2.Text, { weight: "bold" }, "Send Tokens"),
                    react_1["default"].createElement(react_2.Text, { size: "$xs", css: { marginLeft: "20px" } }, "step 1 out of 2")),
                react_1["default"].createElement(react_2.Card.Divider, null),
                react_1["default"].createElement(react_2.Modal.Body, { css: { textAlign: "center" } },
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Sending From:")),
                    react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Row, { css: { width: "40px" } },
                            react_1["default"].createElement(Jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress(contractAddress) })),
                        react_1["default"].createElement(react_2.Row, null,
                            react_1["default"].createElement(react_2.Text, { size: "$xs", css: { textAlign: "left", marginLeft: "20px" } },
                                react_1["default"].createElement("b", null, "Test"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement(react_2.Text, { b: true, css: { mr: "5px" } },
                                    shortName,
                                    ":"),
                                contractAddress),
                            react_1["default"].createElement(LinkAndCopy_1["default"], { address: contractAddress }))),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Recipient address or ENS:")),
                    react_1["default"].createElement(react_2.Row, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Row, null,
                            react_1["default"].createElement(react_2.Input, { css: { width: "500px" }, ref: recipientRef, placeholder: shortName }))),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Row, null,
                            react_1["default"].createElement(react_2.Text, { size: "$sm", css: { textAlign: "left" } }, "Select an Asset*:")),
                        react_1["default"].createElement("select", { id: "countries", className: "" },
                            react_1["default"].createElement("option", { selected: true }),
                            react_1["default"].createElement("option", { value: "ETH" },
                                ethers_1.ethers.formatEther(balance.toString()),
                                " ETH"))),
                    react_1["default"].createElement(react_2.Row, null,
                        react_1["default"].createElement(react_2.Input, { css: { width: "500px" }, ref: amountRef, placeholder: "Amount*" }))),
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
                        } }, "Next")))),
        react_1["default"].createElement(ModalRewiew_1["default"], { visible: visibleReview, closeHandler: closeHandlerReview, addressFrom: contractAddress, shortName: shortName })));
};
exports["default"] = ModalSendToken;
