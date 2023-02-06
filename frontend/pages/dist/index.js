"use strict";
exports.__esModule = true;
var google_1 = require("@next/font/google");
var Layout_1 = require("@/components/Layout");
var components_1 = require("@/components");
var react_1 = require("@nextui-org/react");
var inter = google_1.Inter({ subsets: ['latin'] });
function Home() {
    return (React.createElement(Layout_1["default"], null,
        React.createElement(react_1.Grid, { justify: 'center', css: { w: '440px', 'text-align': 'center', mt: '30px' } },
            React.createElement(react_1.Text, { h2: true }, "Welcome to the Safe"),
            React.createElement(react_1.Text, null, "The most trusted decentralized custody protocol and collective asset management platform."),
            React.createElement(react_1.Spacer, { y: 1 }),
            React.createElement(react_1.Button, { color: "primary", css: { w: '250px' } }, "Create Safe"),
            React.createElement(react_1.Spacer, { y: 1 }),
            React.createElement(react_1.Button, { color: "secondary", css: { w: '250px' } }, "Add existing Safe"),
            React.createElement(react_1.Spacer, { y: 1 }),
            React.createElement(components_1.ElementList, { bgColor: "#EFEFEF", title: "My Safes" },
                React.createElement(components_1.SafeElement, { safe: {
                        avatar: "/avatar-1.png",
                        balance: 100,
                        chain: 'Ethereum',
                        address: '0xA01f...AA6A',
                        countOwners: 4,
                        countVoices: 2,
                        symbol: 'eth'
                    } })))));
}
exports["default"] = Home;
