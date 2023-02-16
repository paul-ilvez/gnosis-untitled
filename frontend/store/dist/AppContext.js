"use strict";
exports.__esModule = true;
exports.AppContext = void 0;
var react_1 = require("react");
var react_2 = require("react");
exports.AppContext = react_2.createContext({
    appData: { network: "UNDEFINED_NETWORK" },
    setAppDataHandler: function (_appData) { },
    currentMenuSection: { title: "Transations" },
    setCurrentMenuSectionHandler: function (_currentMenuSection) { },
    transactionsSection: { type: "Queue" },
    setTransactionsSectionHandler: function (_transactionsSection) { }
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
    function setAppDataHandler(_appData) {
        setAppData(_appData);
    }
    function setCurrentMenuSectionHandler(_currentMenuSection) {
        setCurrentMenuSection(_currentMenuSection);
    }
    function setTransactionsSectionHandler(_transactionsSection) {
        setTransactionsSection(_transactionsSection);
    }
    var context = {
        appData: appData,
        setAppDataHandler: setAppDataHandler,
        currentMenuSection: currentMenuSection,
        setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
        transactionsSection: transactionsSection,
        setTransactionsSectionHandler: setTransactionsSectionHandler
    };
    return react_1["default"].createElement(exports.AppContext.Provider, { value: context }, children);
}
exports["default"] = ContextProvider;
