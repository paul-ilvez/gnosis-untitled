"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var AssetsNft_1 = require("./AssetsNft");
var AssetsToken_1 = require("./AssetsToken");
var AssetsHeaderButton_1 = require("./AssetsHeaderButton");
var AppContext_1 = require("@/store/AppContext");
var headerButtons = [
    {
        id: 1,
        type: "Token"
    },
    {
        id: 2,
        type: "NFT"
    },
];
function Assets() {
    var assetsSection = react_2.useContext(AppContext_1.AppContext).assetsSection;
    var sectionMap = {
        Token: React.createElement(AssetsToken_1["default"], null),
        NFT: React.createElement(AssetsNft_1["default"], null)
    };
    return (React.createElement(react_1.Card, { variant: "bordered", css: { minHeight: "499px", mw: "720px", borderRadius: "39px" } },
        React.createElement(react_1.Card.Header, null,
            React.createElement(react_1.Spacer, { y: 2 }),
            React.createElement(react_1.Row, { justify: "flex-start" }, headerButtons.map(function (button, i) { return (React.createElement(AssetsHeaderButton_1["default"], { key: i, type: button.type })); }))),
        React.createElement(react_1.Card.Divider, null),
        React.createElement(react_1.Card.Body, null, sectionMap[assetsSection.type])));
}
exports["default"] = Assets;
