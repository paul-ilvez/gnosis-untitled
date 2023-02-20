"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("@/components/Layout/Layout");
var SetOwners_1 = require("@/components/CreateSafe/Steps/SetOwners");
var Review_1 = require("@/components/CreateSafe/Steps/Review");
var AppContext_1 = require("@/store/AppContext");
var GenerateSafe_1 = require("@/components/CreateSafe/Steps/GenerateSafe");
var screens = {
    owners: react_1["default"].createElement(SetOwners_1["default"], null),
    review: react_1["default"].createElement(Review_1["default"], null),
    generate: react_1["default"].createElement(GenerateSafe_1["default"], null)
};
var CreateSafe = function () {
    var appCtx = react_1.useContext(AppContext_1.AppContext);
    var screen = screens[appCtx.createSafeStatus.status];
    return react_1["default"].createElement(Layout_1["default"], null, screen);
};
exports["default"] = CreateSafe;
