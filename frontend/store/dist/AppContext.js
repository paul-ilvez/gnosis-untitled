"use strict";
exports.__esModule = true;
exports.AppContext = void 0;
var Networks_1 = require("@/components/SafeList/Networks");
var react_1 = require("react");
var react_2 = require("react");
exports.AppContext = react_2.createContext({
    network: Networks_1.undefinedNetwork,
    setNetwork: function (_network) { },
    account: "",
    setAccount: function (_account) { },
    currentMenuSection: { title: "Transations" },
    setCurrentMenuSectionHandler: function (_currentMenuSection) { },
    transactionsSection: { type: "Queue" },
    setTransactionsSectionHandler: function (_transactionsSection) { },
    createSafeStatus: { status: "init" },
    setCreateSafeStatusHandler: function (_createSafeStatus) { },
    newSafeForm: {
        name: "",
        network: Networks_1.undefinedNetwork,
        address: "",
        owners: [],
        quorum: 1
    },
    setNewSafeForm: function (_form) { }
});
function ContextProvider(_a) {
    var children = _a.children;
    var _b = react_2.useState(Networks_1.undefinedNetwork), network = _b[0], _setNetwork = _b[1];
    var _c = react_2.useState("0x0"), account = _c[0], _setAccount = _c[1];
    var _d = react_2.useState(false), isEthereum = _d[0], _setIsEthereum = _d[1];
    var _e = react_2.useState({
        name: "",
        network: Networks_1.undefinedNetwork,
        owners: [],
        quorum: 1
    }), newSafeForm = _e[0], _setNewSafeForm = _e[1];
    var _f = react_2.useState({
        title: "Transactions"
    }), currentMenuSection = _f[0], setCurrentMenuSection = _f[1];
    var _g = react_2.useState({
        type: "Queue"
    }), transactionsSection = _g[0], setTransactionsSection = _g[1];
    var _h = react_2.useState({
        status: "owners"
    }), createSafeStatus = _h[0], setCreateSafeStatus = _h[1];
    function setNetwork(_network) {
        _setNetwork(_network);
    }
    function setAccount(_account) {
        _setAccount(_account);
    }
    function setIsEthereum(_isEthereum) {
        _setIsEthereum(_isEthereum);
    }
    function setCurrentMenuSectionHandler(_currentMenuSection) {
        setCurrentMenuSection(_currentMenuSection);
    }
    function setTransactionsSectionHandler(_transactionsSection) {
        setTransactionsSection(_transactionsSection);
    }
    var setCreateSafeStatusHandler = function (_status) {
        setCreateSafeStatus(_status);
    };
    var setNewSafeForm = function (_form) { return _setNewSafeForm(_form); };
    var context = {
        network: network,
        setNetwork: setNetwork,
        account: account,
        setAccount: setAccount,
        isEthereum: isEthereum,
        setIsEthereum: setIsEthereum,
        currentMenuSection: currentMenuSection,
        setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
        transactionsSection: transactionsSection,
        setTransactionsSectionHandler: setTransactionsSectionHandler,
        createSafeStatus: createSafeStatus,
        setCreateSafeStatusHandler: setCreateSafeStatusHandler,
        newSafeForm: newSafeForm,
        setNewSafeForm: setNewSafeForm
    };
    react_1.useEffect(function () {
        console.log("calling useEffect from context");
    }, []);
    return react_1["default"].createElement(exports.AppContext.Provider, { value: context }, children);
}
exports["default"] = ContextProvider;
