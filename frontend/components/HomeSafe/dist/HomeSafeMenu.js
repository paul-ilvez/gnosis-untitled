"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var components_1 = require("@/components");
var safes_1 = require("@/mocks/safes");
var LinkAndCopy_1 = require("@/components/Common/LinkAndCopy");
var ButtonsMenu_1 = require("./ButtonsMenu");
function HomeSafeMenu() {
    var Buttons = [
        { id: 1, title: "Home", icon: "/Home.svg" },
        { id: 2, title: "Assets", icon: "/Assets.svg" },
        {
            id: 3,
            title: "Transactions",
            icon: "/Transactions.svg"
        },
        {
            id: 4,
            title: "Address book",
            icon: "./AddressBook.svg"
        },
        { id: 5, title: "Settings", icon: "/Settings.svg" },
    ];
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "618px", mw: "421px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Col, null,
                React.createElement(components_1.SafeElement, { key: safes_1["default"][0].address, avatar: safes_1["default"][0].avatar, balance: safes_1["default"][0].balance, chain: safes_1["default"][0].chain, address: safes_1["default"][0].address, countOwners: safes_1["default"][0].countOwners, countVoices: safes_1["default"][0].countVoices, symbol: safes_1["default"][0].symbol }),
                React.createElement(react_1.Spacer, { y: 0.5 }),
                React.createElement(react_1.Row, { align: "center", justify: "center" },
                    React.createElement(LinkAndCopy_1["default"], null)),
                React.createElement(react_1.Spacer, { y: 1 }),
                React.createElement(react_1.Row, { align: "center", justify: "center" },
                    React.createElement(react_1.Button, { rounded: true, css: {
                            background: "#000",
                            color: "#fff",
                            width: "300px",
                            maxWidth: "260px"
                        }, auto: true },
                        React.createElement(react_1.Text, { css: { letterSpacing: "$wide" }, color: "white", weight: "normal" }, "New transaction"))))),
        React.createElement(react_1.Spacer, { y: 0.5 }),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, null,
            React.createElement(react_1.Grid.Container, { css: { mt: "$5" }, gap: 2, justify: "center", alignItems: "center" }, Buttons.map(function (button) { return (React.createElement(react_1.Grid, { key: button.id, direction: "column", alignItems: "center" },
                React.createElement(ButtonsMenu_1["default"], { key: button.id, title: button.title, icon: button.icon }))); })))));
}
exports["default"] = HomeSafeMenu;
