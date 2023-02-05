"use strict";
exports.__esModule = true;
exports.ElementList = void 0;
var react_1 = require("@nextui-org/react");
var vector_svg_1 = require("./vector.svg");
exports.ElementList = function (_a) {
    var children = _a.children, _b = _a.bgColor, bgColor = _b === void 0 ? "#EFEFEF" : _b, title = _a.title;
    return (React.createElement(react_1.Card, { variant: "flat", css: { backgroundColor: bgColor, mt: "20px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Container, null,
                React.createElement(react_1.Row, { justify: "space-between", align: "center" },
                    React.createElement(react_1.Text, { h3: true }, title),
                    React.createElement(vector_svg_1["default"], null)))),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, { css: { py: "$10" } },
            React.createElement(react_1.Container, null, children))));
};
