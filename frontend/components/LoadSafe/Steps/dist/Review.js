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
var AccountCard_1 = require("@/components/Common/AccountCard");
var AppContext_1 = require("@/store/AppContext");
var ethers_1 = require("ethers");
var SafeFactory_1 = require("@/abi/SafeFactory");
var walletProvider_1 = require("@/abi/walletProvider");
var Review = function () {
    var _a = react_1.useState(), safeFactory = _a[0], setSafeFactory = _a[1];
    var _b = react_1.useContext(AppContext_1.AppContext), setCreateSafeStatusHandler = _b.setCreateSafeStatusHandler, newSafeForm = _b.newSafeForm;
    var owners = newSafeForm.owners, name = newSafeForm.name, network = newSafeForm.network, quorum = newSafeForm.quorum;
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    var walletProvider = walletProvider_1["default"](appCtx.network);
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var safeFactoryContract;
            return __generator(this, function (_a) {
                safeFactoryContract = new ethers_1.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3", SafeFactory_1.SafeFactory, walletProvider);
                setSafeFactory(safeFactoryContract);
                return [2 /*return*/];
            });
        }); })();
    }, []);
    var createSafeHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var addresses, signer, safeFactoryWithSigner, newSafe;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("SAFE >>>", safeFactory);
                    addresses = owners.map(function (owner) { return owner.address; });
                    console.log("DATA >>>", addresses, quorum);
                    return [4 /*yield*/, walletProvider.getSigner()];
                case 1:
                    signer = _a.sent();
                    safeFactoryWithSigner = safeFactory.connect(signer);
                    return [4 /*yield*/, safeFactoryWithSigner.createSafe(addresses, quorum)];
                case 2:
                    newSafe = _a.sent();
                    console.log("newSafe: ", newSafe);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_2.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
        react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
            react_1["default"].createElement(react_2.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                react_1["default"].createElement(FormHeader_1["default"], { title: "Create new Safe", subTitle: "Review", description: "Confirm loading Safe." }),
                react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                react_1["default"].createElement(react_2.Table, { "aria-label": "Example table with static content", css: {
                        height: "auto",
                        minWidth: "100%",
                        textAlign: "left"
                    } },
                    react_1["default"].createElement(react_2.Table.Header, null,
                        react_1["default"].createElement(react_2.Table.Column, null, "Network"),
                        react_1["default"].createElement(react_2.Table.Column, null, network.name)),
                    react_1["default"].createElement(react_2.Table.Body, null,
                        react_1["default"].createElement(react_2.Table.Row, { key: "2" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Name"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null, name || "untitled"))),
                        react_1["default"].createElement(react_2.Table.Row, { key: "3" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Owners"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null, owners.length))),
                        react_1["default"].createElement(react_2.Table.Row, { key: "4" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Treshold"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null,
                                    quorum,
                                    " out of ",
                                    owners.length,
                                    " owner(s)"))))),
                react_1["default"].createElement(react_2.Spacer, null),
                react_1["default"].createElement(react_2.Grid.Container, { direction: "column" },
                    owners.map(function (owner) {
                        return (react_1["default"].createElement("div", { key: owner.id },
                            react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" } },
                                react_1["default"].createElement("b", null, owner.name)),
                            react_1["default"].createElement(AccountCard_1["default"], { address: owner.address }),
                            react_1["default"].createElement(react_2.Spacer, null)));
                    }),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, size: "$xl", color: "#0077FF", b: true }, "Est. network fee"),
                    react_1["default"].createElement(react_2.Spacer, { y: 1 }),
                    react_1["default"].createElement(react_2.Badge, { size: "lg", variant: "flat" }, "\u2248 0.02655 it's fake"),
                    react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" }, color: "#9E9E9E" }, "You will have to confirm a transaction with your connected wallet."),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Button, { onClick: function () { return setCreateSafeStatusHandler({ status: "owners" }); }, css: { width: "100px" }, bordered: true, color: "#000", auto: true }, "Back"),
                        react_1["default"].createElement("button", { style: {
                                background: "#000",
                                color: "#fff",
                                width: "300px",
                                maxWidth: "260px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }, onClick: createSafeHandler }, "Next")))))));
};
exports["default"] = Review;
