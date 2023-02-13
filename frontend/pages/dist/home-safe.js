"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout");
var react_1 = require("@nextui-org/react");
var HomeSafeMenu_1 = require("@/components/HomeSafe/HomeSafeMenu");
function HomeSafe() {
    return (React.createElement(Layout_1["default"], null,
        React.createElement(react_1.Grid.Container, { css: { mt: "40px" }, justify: "center", alignItems: "center" },
            React.createElement(react_1.Grid, { xs: 5, md: 5, alignItems: "center", justify: "flex-end" },
                React.createElement(HomeSafeMenu_1["default"], null)),
            React.createElement(react_1.Spacer, { x: 1.85 }),
            React.createElement(react_1.Grid, { xs: 5, md: 5, direction: "column", justify: "center", alignItems: "flex-start" },
                React.createElement(react_1.Card, { variant: "bordered", css: { h: "214px", mw: "522px" } },
                    React.createElement(react_1.Card.Body, null,
                        React.createElement(react_1.Text, { h6: true, size: 15, color: "black", css: { m: 0 } }, "1 of 2"))),
                React.createElement(react_1.Spacer, { y: 1.85 }),
                React.createElement(react_1.Card, { variant: "bordered", css: { h: "364px", mw: "522px" } },
                    React.createElement(react_1.Card.Body, null,
                        React.createElement(react_1.Text, { h6: true, size: 15, color: "black", css: { m: 0 } }, "1 of 3")))))));
}
exports["default"] = HomeSafe;
