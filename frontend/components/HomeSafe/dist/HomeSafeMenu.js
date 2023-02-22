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
var components_1 = require("@/components");
var safes_1 = require("@/mocks/safes");
var ButtonsMenu_1 = require("./ButtonsMenu");
var AssetsCounter_1 = require("./AssetsCounter");
var NewTransactionButton_1 = require("./NewTransactionButton");
var react_2 = require("react");
var AppContext_1 = require("@/store/AppContext");
var ModalNewTransaction_1 = require("./SendTransaction/ModalNewTransaction");
function HomeSafeMenu(_a) {
    var _this = this;
    var safeContract = _a.safeContract;
    var provider = react_2.useContext(AppContext_1.AppContext).provider;
    var _b = react_2.useState(false), isVisible = _b[0], setVisible = _b[1];
    var _c = react_2.useState(), address = _c[0], setAddress = _c[1];
    var _d = react_2.useState(0), balance = _d[0], setBalance = _d[1];
    var Buttons = [
        {
            id: 1,
            title: "Transactions",
            icon: "/Transactions.svg"
        },
        { id: 2, title: "Assets", icon: "/Assets.svg" },
        {
            id: 3,
            title: "Setup",
            icon: "./AddressBook.svg"
        },
    ];
    var handleClickModalTransaction = function () {
        setVisible(true);
    };
    var handleCloseModalNewTransaction = function () {
        setVisible(false);
    };
    react_2.useEffect(function () {
        if (safeContract == null) {
            return;
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var tempAddress, safeBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, safeContract.getAddress()];
                    case 1:
                        tempAddress = _a.sent();
                        return [4 /*yield*/, provider.getBalance(tempAddress)];
                    case 2:
                        safeBalance = _a.sent();
                        setBalance(safeBalance);
                        setAddress(tempAddress);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [safeContract]);
    console.log(address);
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "499px", mw: "421px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Col, null,
                React.createElement(components_1.SafeElement, { key: address, avatar: safes_1["default"][0].avatar, balance: balance, chain: safes_1["default"][0].chain, address: address !== null && address !== void 0 ? address : "UNKNOWN", countOwners: safes_1["default"][0].countOwners, countVoices: safes_1["default"][0].countVoices, symbol: safes_1["default"][0].symbol }),
                React.createElement(react_1.Spacer, { y: 0.5 }),
                React.createElement(react_1.Row, null,
                    React.createElement(AssetsCounter_1["default"], null)),
                React.createElement(react_1.Spacer, { y: 1 }),
                React.createElement(react_1.Row, { align: "center", justify: "center" },
                    React.createElement(NewTransactionButton_1["default"], { visible: isVisible, handler: handleClickModalTransaction })))),
        React.createElement(react_1.Spacer, { y: 0.5 }),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, { css: { justifyContent: "center" } },
            React.createElement(react_1.Grid.Container, { gap: 2, justify: "center", alignItems: "center" }, Buttons.map(function (button) { return (React.createElement(react_1.Grid, { key: button.id, direction: "column", alignItems: "center" },
                React.createElement(ButtonsMenu_1["default"], { key: button.id, title: button.title, icon: button.icon }))); }))),
        React.createElement(ModalNewTransaction_1["default"], { visible: isVisible, closeHandler: handleCloseModalNewTransaction })));
}
exports["default"] = HomeSafeMenu;
