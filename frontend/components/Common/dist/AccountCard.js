"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var LinkAndCopy_1 = require("@/components/Common/LinkAndCopy");
var getLittleAdrress_1 = require("@/libs/getLittleAdrress");
var react_jazzicon_1 = require("react-jazzicon");
var AppContext_1 = require("@/store/AppContext");
var AccountCard = function (_a) {
    var address = _a.address;
    var network = react_1.useContext(AppContext_1.AppContext).network;
    var shortName = network.shortName;
    return (react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "400px" } },
        react_1["default"].createElement(react_2.Card.Body, null,
            react_1["default"].createElement(react_2.Grid.Container, { direction: "flex", wrap: "no-wrap", alignItems: "space-between" },
                react_1["default"].createElement(react_2.Grid.Container, null,
                    react_1["default"].createElement(react_jazzicon_1["default"], { diameter: 40, seed: react_jazzicon_1.jsNumberForAddress(address) }),
                    react_1["default"].createElement(react_2.Spacer, null),
                    react_1["default"].createElement(react_2.Text, null,
                        react_1["default"].createElement("b", null,
                            shortName,
                            ":"),
                        " ",
                        getLittleAdrress_1["default"](address))),
                react_1["default"].createElement(LinkAndCopy_1["default"], { address: address })))));
};
exports["default"] = AccountCard;
