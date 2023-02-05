"use strict";
exports.__esModule = true;
exports.SafeElement = void 0;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var menuBtn_svg_1 = require("./menuBtn.svg");
exports.SafeElement = function (_a) {
    var safe = _a.safe;
    var avatar = safe.avatar, countVoices = safe.countVoices, countOwners = safe.countOwners, symbol = safe.symbol, address = safe.address, balance = safe.balance, chain = safe.chain;
    return (react_2["default"].createElement(react_1.Card, { isPressable: true, css: { mt: "10px", br: "50px" }, variant: "bordered" },
        react_2["default"].createElement(react_1.Card.Body, null,
            react_2["default"].createElement(react_1.Row, { justify: "space-between", wrap: "nowrap", align: "center", css: { pr: "5px" } },
                react_2["default"].createElement(react_1.Badge, { disableOutline: true, content: countVoices + "/" + countOwners, size: "xs" },
                    react_2["default"].createElement(react_1.Avatar, { rounded: true, size: "sm", src: avatar })),
                react_2["default"].createElement(react_1.Grid, null,
                    react_2["default"].createElement(react_1.Text, { b: true, css: { mr: "5px" } },
                        symbol,
                        ":"),
                    react_2["default"].createElement(react_1.Text, { span: true }, address)),
                react_2["default"].createElement(react_1.Badge, null,
                    balance,
                    " ",
                    symbol.toUpperCase()),
                react_2["default"].createElement(react_1.Link, { block: true, color: "primary", href: "#", css: { textAlign: "center", alignItems: "center" } },
                    react_2["default"].createElement(menuBtn_svg_1["default"], { width: "8px" }))))));
};
