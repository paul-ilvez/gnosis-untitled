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
var AppContext_1 = require("@/store/AppContext");
var head_1 = require("next/head");
var react_1 = require("react");
var Header_1 = require("./Header");
var Networks_1 = require("./SafeList/Networks");
var Layout = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), visibleDisconnect = _b[0], setVisibleDisconnect = _b[1];
    var _c = react_1.useState(false), visibleConnect = _c[0], setVisibleConnect = _c[1];
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    var network = process.env.defaultChain;
    react_1.useEffect(function () {
        var ethereum = window.ethereum;
        var handleChangeAccount = function (accounts) {
            appCtx.setAccount(accounts[0]);
        };
        if (typeof window !== 'undefined' && (window === null || window === void 0 ? void 0 : window.ethereum)) {
            network = Networks_1.findNetworkById(window.ethereum.networkVersion);
            appCtx.setIsEthereum(true);
        }
        appCtx.setNetwork(network);
        appCtx.setAccount(sessionStorage.getItem("login"));
        if (ethereum != null) {
            ethereum.on("accountsChanged", handleChangeAccount);
            ethereum.on('chainChanged', function () { return window.location.reload(); });
            return function () {
                ethereum.removeListener("accountsChanged", handleDisconnectMetamaskClick);
                ethereum.removeListener("chainChanged", handleDisconnectMetamaskClick);
            };
        }
    }, [visibleDisconnect, visibleConnect]);
    var handleConnectMetamaskClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ethereum, accounts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ethereum = window.ethereum;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ethereum.request({
                            method: "eth_requestAccounts"
                        })];
                case 2:
                    accounts = _a.sent();
                    // const chainId = await ethereum.request({
                    //   method: "eth_chainId",
                    // });
                    // if (chainId !== "0x5") {
                    //   await ethereum.request({
                    //     method: "wallet_switchEthereumChain",
                    //     params: [
                    //       {
                    //         chainId: process.env.targetChainId,
                    //       },
                    //     ],
                    //   });
                    // }
                    sessionStorage.setItem("login", accounts[0]);
                    appCtx.setAccount(accounts[0]);
                    setVisibleConnect(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDisconnectMetamaskClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            sessionStorage.removeItem("login");
            setVisibleDisconnect(false);
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Untitled Gnosis"),
            React.createElement("meta", { name: "description", content: "Untitled Gnosis" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement(Header_1["default"], { handleDisconnectMetamaskClick: handleDisconnectMetamaskClick, handleConnectMetamaskClick: handleConnectMetamaskClick, account: appCtx.account, visibleConnect: visibleConnect, setVisibleDisconnect: setVisibleDisconnect, setVisibleConnect: setVisibleConnect, network: appCtx.network.name }),
        children));
};
exports["default"] = Layout;
