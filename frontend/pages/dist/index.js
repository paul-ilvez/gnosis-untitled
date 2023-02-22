"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout/Layout");
var components_1 = require("@/components");
var react_1 = require("@nextui-org/react");
var link_1 = require("next/link");
function Home() {
    return (React.createElement(Layout_1["default"], null,
        React.createElement(react_1.Container, null,
            React.createElement(react_1.Row, { justify: "center" },
                React.createElement(react_1.Col, { span: 3 },
                    React.createElement(react_1.Spacer, null),
                    React.createElement(react_1.Text, { h2: true, size: 31, weight: "semibold", css: { textAlign: "center" } }, "Welcome to the Safe"),
                    React.createElement(react_1.Spacer, null),
                    React.createElement(react_1.Text, { size: 18, color: "#878787", weight: "normal", css: { lineHeight: "$sm", textAlign: "center" } }, "The most trusted decentralized custody protocol and collective asset management platform."),
                    React.createElement(react_1.Spacer, null),
                    React.createElement(react_1.Row, { justify: "center" },
                        React.createElement(link_1["default"], { href: "/create-safe" },
                            React.createElement(react_1.Button, { color: "gradient", css: { w: "362px", h: "40px" } }, "Create Safe"))),
                    React.createElement(react_1.Spacer, null),
                    React.createElement(react_1.Spacer, null),
                    React.createElement(react_1.Row, { justify: "center" },
                        React.createElement(components_1.SafeList, { bgColor: "#EFEFEF", title: "My Safes" })))))));
}
exports["default"] = Home;
