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
var FormHeader_1 = require("@/components/Common/FormHeader");
var AppContext_1 = require("@/store/AppContext");
var AccountCard_1 = require("@/components/Common/AccountCard");
var link_1 = require("next/link");
var walletProvider_1 = require("@/abi/walletProvider");
var GenerateSafe = function () {
    var _a = react_1.useState("idle"), stateLoad = _a[0], setStateLoad = _a[1];
    var _b = react_1.useContext(AppContext_1.AppContext), newSafeForm = _b.newSafeForm, safeFactory = _b.safeFactory, network = _b.network;
    var owners = newSafeForm.owners, quorum = newSafeForm.quorum;
    var createSafe = function () { return __awaiter(void 0, void 0, void 0, function () {
        var addresses, walletProvider, signer, safeFactoryWithSigner, tx, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(newSafeForm);
                    addresses = owners.map(function (owner) { return owner.address; });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    setStateLoad("fetch");
                    walletProvider = walletProvider_1["default"](network);
                    return [4 /*yield*/, walletProvider.getSigner()];
                case 2:
                    signer = _a.sent();
                    safeFactoryWithSigner = safeFactory.connect(signer);
                    console.log("safeFactoryWithSigner: ", safeFactoryWithSigner);
                    return [4 /*yield*/, safeFactoryWithSigner.createSafe(addresses, quorum)];
                case 3:
                    tx = _a.sent();
                    console.log("tx started: ", tx);
                    setStateLoad("validate");
                    return [4 /*yield*/, tx.wait()];
                case 4:
                    response = _a.sent();
                    setStateLoad("processing");
                    console.log("response: ", response);
                    setStateLoad("ready");
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_2.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
        react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
            react_1["default"].createElement(react_2.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                react_1["default"].createElement(react_2.Grid, null,
                    stateLoad !== "ready" && stateLoad !== "idle" && (react_1["default"].createElement(react_2.Loading, { size: "xl", type: "points" })),
                    react_1["default"].createElement(react_2.Spacer, null)),
                react_1["default"].createElement(FormHeader_1["default"], { title: stateLoad !== "ready"
                        ? "Generate new Safe"
                        : "Your Safe was successfully created!", subTitle: "", description: "" }),
                react_1["default"].createElement(react_2.Spacer, { y: 3 }),
                react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, size: "$lg", color: stateLoad === "fetch" ? "#0072F5" : "#889096" },
                    "\u2022 Your Safe address",
                    react_1["default"].createElement(AccountCard_1["default"], { address: "not found :(" }),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 })),
                react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, size: "$lg", color: stateLoad === "validate" ? "#0072F5" : "#889096" },
                    "\u2022 Validating transaction",
                    react_1["default"].createElement(react_2.Spacer, { y: 2 })),
                react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, size: "$lg", color: stateLoad === "processing" ? "#0072F5" : "#889096" },
                    "\u2022 Processing",
                    react_1["default"].createElement(react_2.Spacer, { y: 2 })),
                react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, size: "$lg", color: stateLoad === "ready" ? "#0072F5" : "#889096" },
                    "\u2022 Safe is ready",
                    react_1["default"].createElement(react_2.Spacer, { y: 2 })),
                react_1["default"].createElement(react_2.Spacer, { y: 3 }),
                react_1["default"].createElement(react_2.Grid.Container, { justify: "center" },
                    stateLoad === "idle" && (react_1["default"].createElement(react_2.Button, { onClick: createSafe, style: {
                            background: "#000",
                            color: "#fff",
                            width: "400px",
                            maxWidth: "100%",
                            borderRadius: "10px",
                            cursor: "pointer"
                        } }, "Generate")),
                    stateLoad === "ready" && (react_1["default"].createElement(link_1["default"], { href: "/home-safe" },
                        react_1["default"].createElement(react_2.Button, { style: {
                                background: "#000",
                                color: "#fff",
                                width: "400px",
                                maxWidth: "100%",
                                borderRadius: "10px",
                                cursor: "pointer"
                            } }, "Start using Safe"))))))));
};
exports["default"] = GenerateSafe;
