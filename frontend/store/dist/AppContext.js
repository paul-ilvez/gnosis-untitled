"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AppContext = void 0;
var react_1 = require("react");
var react_2 = require("react");
exports.AppContext = react_2.createContext({
    appData: { network: "UNDEFINED_NETWORK", account: "UNDEFINED_ACCOUNT" },
    setAppDataHandler: function (_appData) { },
    currentMenuSection: { title: "Transations" },
    setCurrentMenuSectionHandler: function (_currentMenuSection) { },
    transactionsSection: { type: "Queue" },
    setTransactionsSectionHandler: function (_transactionsSection) { },
    createSafeStatus: { status: "init" },
    setCreateSafeStatusHandler: function (_createSafeStatus) { }
});
function ContextProvider(_a) {
    var children = _a.children;
    var _b = react_2.useState({ network: "UNDEFINED_NETWORK" }), appData = _b[0], setAppData = _b[1];
    var _c = react_2.useState({
        title: "Transactions"
    }), currentMenuSection = _c[0], setCurrentMenuSection = _c[1];
    var _d = react_2.useState({
        type: "Queue"
    }), transactionsSection = _d[0], setTransactionsSection = _d[1];
    var _e = react_2.useState({ status: "init" }), createSafeStatus = _e[0], setCreateSafeStatus = _e[1];
    react_1.useEffect(function () {
        if (typeof window !== "undefined" && sessionStorage.getItem("login")) {
            setAppDataHandler({ account: sessionStorage.getItem("login") });
        }
    }, []);
    function setAppDataHandler(_appData) {
        setAppData(function (prevAppData) { return (__assign(__assign({}, prevAppData), _appData)); });
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
    var context = {
        appData: appData,
        setAppDataHandler: setAppDataHandler,
        currentMenuSection: currentMenuSection,
        setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
        transactionsSection: transactionsSection,
        setTransactionsSectionHandler: setTransactionsSectionHandler,
        createSafeStatus: createSafeStatus,
        setCreateSafeStatusHandler: setCreateSafeStatusHandler
    };
    return react_1["default"].createElement(exports.AppContext.Provider, { value: context }, children);
}
exports["default"] = ContextProvider;
