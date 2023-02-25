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
exports.AppContext = void 0;
var Networks_1 = require("@/components/SafeList/Networks");
var react_1 = require("react");
var react_2 = require("react");
var ethers_1 = require("ethers");
var SafeFactory_1 = require("@/abi/SafeFactory");
var router_1 = require("next/router");
exports.AppContext = react_2.createContext({
    safeFactory: undefined,
    setSafeFactory: function (_contract) { },
    network: Networks_1.undefinedNetwork,
    setNetwork: function (_network) { },
    account: "",
    setAccount: function (_account) { },
    connected: false,
    setConnected: function (_connected) { },
    provider: undefined,
    setProvider: function (_provider) { },
    signer: undefined,
    setSigner: function (_signer) { },
    isEthereum: false,
    setIsEthereum: function (_isEthereum) { },
    currentMenuSection: { title: "Transations" },
    valueTransfer: {},
    setValueTransfer: function (recipient, amount) { },
    setCurrentMenuSectionHandler: function (_currentMenuSection) { },
    transactionsSection: { type: "Queue" },
    setTransactionsSectionHandler: function (_transactionsSection) { },
    assetsSection: { type: "Token" },
    setAssetsSectionHandler: function (_assetsSection) { },
    createSafeStatus: { status: "owners" },
    setCreateSafeStatusHandler: function (_createSafeStatus) { },
    newSafeForm: {
        name: "",
        network: Networks_1.undefinedNetwork,
        owners: [],
        quorum: "1"
    },
    setNewSafeForm: function (_form) { },
    currentSafe: {},
    setCurrentSafe: function (_safe) { },
    handleConnectMetamaskClick: function () { },
    handleDisconnectMetamask: function () { },
    handleApproveTx: function (_safe, txId) { },
    handleRevokeConfirmation: function (_safe, txId) { },
    handleExecuteTx: function (_safe, txId) { }
}); //--------------AppContex------------------------
function ContextProvider(_a) {
    var _this = this;
    var children = _a.children;
    var _b = react_2.useState(Networks_1.undefinedNetwork), network = _b[0], _setNetwork = _b[1];
    var _c = react_2.useState("0x0"), account = _c[0], _setAccount = _c[1];
    var _d = react_2.useState(false), isEthereum = _d[0], _setIsEthereum = _d[1];
    var _e = react_2.useState(), safeFactory = _e[0], _setSafeFactory = _e[1];
    var _f = react_2.useState(false), connected = _f[0], _setConnected = _f[1];
    var _g = react_2.useState(), provider = _g[0], _setProvider = _g[1];
    var _h = react_2.useState(), signer = _h[0], _setSigner = _h[1];
    var _j = react_2.useState({
        name: "",
        network: Networks_1.undefinedNetwork,
        owners: [],
        quorum: "1"
    }), newSafeForm = _j[0], _setNewSafeForm = _j[1];
    var _k = react_2.useState({
        recipient: "",
        amount: ""
    }), valueTransfer = _k[0], _setValueTransfer = _k[1];
    var router = router_1.useRouter();
    var _l = react_2.useState({
        title: "Transactions"
    }), currentMenuSection = _l[0], setCurrentMenuSection = _l[1];
    var _m = react_2.useState({
        type: "Queue"
    }), transactionsSection = _m[0], setTransactionsSection = _m[1];
    var _o = react_2.useState({
        type: "Token"
    }), assetsSection = _o[0], setAssetsSection = _o[1];
    var _p = react_2.useState({
        status: "owners"
    }), createSafeStatus = _p[0], setCreateSafeStatus = _p[1];
    var _q = react_2.useState(), currentSafe = _q[0], _setCurrentSafe = _q[1];
    function setNetwork(_network) {
        _setNetwork(_network);
    }
    var setCurrentSafe = function (safe) {
        _setCurrentSafe(safe);
    };
    function setConnected(_connected) {
        _setConnected(_connected);
    }
    function setSafeFactory(_contract) {
        _setSafeFactory(_contract);
    }
    function setProvider(_provider) {
        _setProvider(_provider);
    }
    function setSigner(_signer) {
        _setSigner(_signer);
    }
    function setAccount(_account) {
        _setAccount(_account);
    }
    function setIsEthereum(_isEthereum) {
        _setIsEthereum(_isEthereum);
    }
    function setValueTransfer(_recipient, _amount) {
        _setValueTransfer({
            recipient: _recipient,
            amount: _amount
        });
    }
    function setCurrentMenuSectionHandler(_currentMenuSection) {
        setCurrentMenuSection(_currentMenuSection);
    }
    function setTransactionsSectionHandler(_transactionsSection) {
        setTransactionsSection(_transactionsSection);
    }
    function setAssetsSectionHandler(_assetsSection) {
        setAssetsSection(_assetsSection);
    }
    var setCreateSafeStatusHandler = function (_status) {
        setCreateSafeStatus(_status);
    };
    var setNewSafeForm = function (_form) { return _setNewSafeForm(_form); };
    var handleConnectMetamaskClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.ethereum) return [3 /*break*/, 3];
                    return [4 /*yield*/, window.ethereum.request({
                            method: "eth_requestAccounts"
                        })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, accountChangedHandler(result[0])];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    console.log("where is metamask?!");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDisconnectMetamask = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (window.ethereum == null) {
                return [2 /*return*/];
            }
            setAccount("");
            setIsEthereum(false);
            setConnected(false);
            setProvider(undefined);
            setSigner(undefined);
            setNetwork(Networks_1.undefinedNetwork);
            sessionStorage.removeItem("login");
            return [2 /*return*/];
        });
    }); };
    function handleApproveTx(safe, txId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, safe.confirmTransaction(BigInt(txId))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function handleRevokeConfirmation(safe, txId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, safe.revokeConfirmation(BigInt(txId))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function handleExecuteTx(safe, txId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, safe.executeTransaction(BigInt(txId))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    var context = {
        network: network,
        setNetwork: setNetwork,
        account: account,
        setAccount: setAccount,
        connected: connected,
        setConnected: setConnected,
        isEthereum: isEthereum,
        setIsEthereum: setIsEthereum,
        valueTransfer: valueTransfer,
        setValueTransfer: setValueTransfer,
        provider: provider,
        setProvider: setProvider,
        signer: signer,
        setSigner: setSigner,
        currentMenuSection: currentMenuSection,
        setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
        transactionsSection: transactionsSection,
        setTransactionsSectionHandler: setTransactionsSectionHandler,
        assetsSection: assetsSection,
        setAssetsSectionHandler: setAssetsSectionHandler,
        createSafeStatus: createSafeStatus,
        setCreateSafeStatusHandler: setCreateSafeStatusHandler,
        newSafeForm: newSafeForm,
        setNewSafeForm: setNewSafeForm,
        safeFactory: safeFactory,
        setSafeFactory: setSafeFactory,
        handleConnectMetamaskClick: handleConnectMetamaskClick,
        handleDisconnectMetamask: handleDisconnectMetamask,
        currentSafe: currentSafe,
        setCurrentSafe: setCurrentSafe,
        handleApproveTx: handleApproveTx,
        handleRevokeConfirmation: handleRevokeConfirmation,
        handleExecuteTx: handleExecuteTx
    };
    react_1.useEffect(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var accounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(window.ethereum != null)) return [3 /*break*/, 2];
                        setIsEthereum(true);
                        return [4 /*yield*/, window.ethereum.request({
                                method: "eth_accounts"
                            })];
                    case 1:
                        accounts = _a.sent();
                        if (accounts.length) {
                            accountChangedHandler(accounts[0]);
                        }
                        else {
                            setConnected(false);
                        }
                        window.ethereum.on("accountsChanged", function (acc) {
                            accountChangedHandler(acc);
                        });
                        window.ethereum.on("chainChanged", function (chainId) {
                            // Handle the new chain.
                            // Correctly handling chain changes can be complicated.
                            // We recommend reloading the page unless you have good reason not to.
                            console.log("Chaing changed to " + chainId);
                            router.push("/");
                            window.location.reload();
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        setIsEthereum(false);
                        setConnected(false);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var accountChangedHandler = function (newAccount) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setAccount(newAccount);
                    if (!newAccount || newAccount.length == 0) {
                        setConnected(false);
                        return [2 /*return*/];
                    }
                    setConnected(true);
                    return [4 /*yield*/, updateEthers()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var updateEthers = function () { return __awaiter(_this, void 0, void 0, function () {
        var tempProvider, tempNetwork, tempSigner, tempContract;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tempProvider = new ethers_1.BrowserProvider(window.ethereum);
                    setProvider(tempProvider);
                    tempNetwork = Networks_1.findNetworkById(window.ethereum.networkVersion);
                    setNetwork(tempNetwork);
                    return [4 /*yield*/, tempProvider.getSigner()];
                case 1:
                    tempSigner = _a.sent();
                    setSigner(tempSigner);
                    tempContract = new ethers_1.Contract(tempNetwork.factoryContractAddress, SafeFactory_1.SafeFactoryAbi, tempSigner);
                    tempContract.connect(tempSigner);
                    setSafeFactory(tempContract);
                    setConnected(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return react_1["default"].createElement(exports.AppContext.Provider, { value: context }, children);
} // -----------------AppContext.Provider----------------------
exports["default"] = ContextProvider;
