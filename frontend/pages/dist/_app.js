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
require("@/styles/globals.css");
var react_1 = require("@nextui-org/react");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(react_1.NextUIProvider, null,
        React.createElement(Component, __assign({}, pageProps))));
}
exports["default"] = App;
