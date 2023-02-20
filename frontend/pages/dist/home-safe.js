"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout/Layout");
var react_1 = require("@nextui-org/react");
var HomeSafeMenu_1 = require("@/components/HomeSafe/HomeSafeMenu");
var Transactions_1 = require("@/components/HomeSafe/Sections/Transactions/Transactions");
var Setup_1 = require("@/components/HomeSafe/Sections/Setup");
var Assets_1 = require("@/components/HomeSafe/Sections/Assets");
var AppContext_1 = require("@/store/AppContext");
var react_2 = require("react");
function HomeSafe() {
    var currentMenuSection = react_2.useContext(AppContext_1.AppContext).currentMenuSection;
    var sectionsMap = {
        Transactions: React.createElement(Transactions_1["default"], null),
        Setup: React.createElement(Setup_1["default"], null),
        Assets: React.createElement(Assets_1["default"], null)
    };
    return (React.createElement(Layout_1["default"], null,
        React.createElement(react_1.Grid.Container, { css: { mt: "40px" }, justify: "center", alignItems: "center" },
            React.createElement(react_1.Grid, { xs: 5, md: 5, alignItems: "center", justify: "flex-end" },
                React.createElement(HomeSafeMenu_1["default"], null)),
            React.createElement(react_1.Spacer, { x: 1.85 }),
            React.createElement(react_1.Grid, { xs: 5, md: 5, direction: "column", justify: "center", alignItems: "flex-start" }, sectionsMap[currentMenuSection.title]))));
}
exports["default"] = HomeSafe;
