"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var components_1 = require("@/components");
var safes_1 = require("@/mocks/safes");
var ButtonsMenu_1 = require("./ButtonsMenu");
var AssetsCounter_1 = require("./AssetsCounter");
var NewTransactionButton_1 = require("./NewTransactionButton");
function HomeSafeMenu() {
    var Buttons = [
        {
            id: 1,
            title: "Transactions",
            icon: "/Transactions.svg"
        },
        { id: 2, title: "Assets", icon: "/Assets.svg" },
        {
            id: 3,
            title: "Setup",
            icon: "./AddressBook.svg"
        },
    ];
    return (React.createElement(react_1.Card, { variant: "bordered", css: { h: "499px", mw: "421px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Col, null,
                React.createElement(components_1.SafeElement, { key: safes_1["default"][0].address, avatar: safes_1["default"][0].avatar, balance: safes_1["default"][0].balance, chain: safes_1["default"][0].chain, address: safes_1["default"][0].address, countOwners: safes_1["default"][0].countOwners, countVoices: safes_1["default"][0].countVoices, symbol: safes_1["default"][0].symbol }),
                React.createElement(react_1.Spacer, { y: 0.5 }),
                React.createElement(react_1.Row, null,
                    React.createElement(AssetsCounter_1["default"], null)),
                React.createElement(react_1.Spacer, { y: 1 }),
                React.createElement(react_1.Row, { align: "center", justify: "center" },
                    React.createElement(NewTransactionButton_1["default"], null)))),
        React.createElement(react_1.Spacer, { y: 0.5 }),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, { css: { justifyContent: "center" } },
            React.createElement(react_1.Grid.Container, { gap: 2, justify: "center", alignItems: "center" }, Buttons.map(function (button) { return (React.createElement(react_1.Grid, { key: button.id, direction: "column", alignItems: "center" },
                React.createElement(ButtonsMenu_1["default"], { key: button.id, title: button.title, icon: button.icon }))); })))));
}
exports["default"] = HomeSafeMenu;
