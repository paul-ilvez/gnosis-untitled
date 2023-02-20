"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("@/components/Layout/Layout");
var ConnectSafe_1 = require("@/components/LoadSafe/Steps/ConnectSafe");
var SetOwners_1 = require("@/components/LoadSafe/Steps/SetOwners");
var Review_1 = require("@/components/LoadSafe/Steps/Review");
var react_redux_1 = require("react-redux");
var screens = {
    1: react_1["default"].createElement(ConnectSafe_1["default"], null),
    2: react_1["default"].createElement(SetOwners_1["default"], null),
    3: react_1["default"].createElement(Review_1["default"], null)
};
var LoadSafe = function () {
    var counter = react_redux_1.useSelector(function (state) { return state.screenHandler.value; });
    console.log(counter);
    return react_1["default"].createElement(Layout_1["default"], null, screens[counter]);
};
exports["default"] = LoadSafe;
