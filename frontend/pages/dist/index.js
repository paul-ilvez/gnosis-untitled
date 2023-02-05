"use strict";
exports.__esModule = true;
var google_1 = require("@next/font/google");
var Layout_1 = require("@/components/Layout");
var components_1 = require("@/components");
var react_1 = require("@nextui-org/react");
var inter = google_1.Inter({ subsets: ["latin"] });
function Home() {
    return (React.createElement(Layout_1["default"], null,
        React.createElement(react_1.Grid.Container, { direction: "column", gap: 2, justify: "center", alignItems: "center", css: { textAlign: "center", mt: "30px" } },
            React.createElement(react_1.Grid.Container, { gap: 2, justify: "center" },
                React.createElement(react_1.Grid, { xs: 4, justify: "center" },
                    React.createElement(react_1.Text, { h2: true, size: 31, weight: "semibold", css: { textAlign: "center" } }, "Welcome to the Safe"))),
            React.createElement(react_1.Grid.Container, { gap: 2, justify: "center" },
                React.createElement(react_1.Grid, { xs: 4, justify: "center" },
                    React.createElement(react_1.Text, { size: 18, color: "#878787", weight: "normal", css: { lineHeight: "$sm" } }, "The most trusted decentralized custody protocol and collective asset management platform."))),
            React.createElement(react_1.Grid.Container, { gap: 2, alignItems: "center", justify: "center", direction: "column" },
                React.createElement(react_1.Grid, { xs: 4, justify: "center" },
                    React.createElement(react_1.Button, { color: "primary", css: { w: "362px", h: "40px" } }, "Create Safe")),
                React.createElement(react_1.Grid, { xs: 4, justify: "center" },
                    React.createElement(react_1.Spacer, { y: 0.5 }),
                    React.createElement(react_1.Button, { color: "secondary", css: { w: "362px", h: "40px" } }, "Add existing Safe"))),
            React.createElement(react_1.Grid.Container, { gap: 2, justify: "center" },
                React.createElement(react_1.Grid, { xs: 4, justify: "center" },
                    React.createElement(components_1.ElementList, { bgColor: "#EFEFEF", title: "My Safes" },
                        React.createElement(components_1.SafeElement, { safe: {
                                avatar: "/avatar-1.png",
                                balance: 100,
                                chain: "Ethereum",
                                address: "0xA01f...AA6A",
                                countOwners: 4,
                                countVoices: 2,
                                symbol: "eth"
                            } })))))));
}
exports["default"] = Home;
