"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var FormHeader_1 = require("@/components/Common/FormHeader");
var AccountCard_1 = require("@/components/Common/AccountCard");
var AppContext_1 = require("@/store/AppContext");
var Review = function () {
    var _a = react_1.useContext(AppContext_1.AppContext), setCreateSafeStatusHandler = _a.setCreateSafeStatusHandler, newSafeForm = _a.newSafeForm, safeFactory = _a.safeFactory;
    var owners = newSafeForm.owners, name = newSafeForm.name, network = newSafeForm.network, quorum = newSafeForm.quorum;
    return (react_1["default"].createElement(react_2.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
        react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
            react_1["default"].createElement(react_2.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                react_1["default"].createElement(FormHeader_1["default"], { title: "Create new Safe", subTitle: "Review", description: "Confirm loading Safe." }),
                react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                react_1["default"].createElement(react_2.Table, { "aria-label": "Example table with static content", css: {
                        height: "auto",
                        minWidth: "100%",
                        textAlign: "left"
                    } },
                    react_1["default"].createElement(react_2.Table.Header, null,
                        react_1["default"].createElement(react_2.Table.Column, null, "Network"),
                        react_1["default"].createElement(react_2.Table.Column, null, network.name)),
                    react_1["default"].createElement(react_2.Table.Body, null,
                        react_1["default"].createElement(react_2.Table.Row, { key: "2" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Name"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null, name || "untitled"))),
                        react_1["default"].createElement(react_2.Table.Row, { key: "3" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Owners"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null, owners.length))),
                        react_1["default"].createElement(react_2.Table.Row, { key: "4" },
                            react_1["default"].createElement(react_2.Table.Cell, null, "Treshold"),
                            react_1["default"].createElement(react_2.Table.Cell, null,
                                react_1["default"].createElement("b", null,
                                    quorum,
                                    " out of ",
                                    owners.length,
                                    " owner(s)"))))),
                react_1["default"].createElement(react_2.Spacer, null),
                react_1["default"].createElement(react_2.Grid.Container, { direction: "column" },
                    owners.map(function (owner) {
                        return (react_1["default"].createElement("div", { key: owner.id },
                            react_1["default"].createElement(react_2.Text, { css: { textAlign: "left" } },
                                react_1["default"].createElement("b", null, owner.name)),
                            react_1["default"].createElement(AccountCard_1["default"], { address: owner.address }),
                            react_1["default"].createElement(react_2.Spacer, null)));
                    }),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Button, { onClick: function () { return setCreateSafeStatusHandler({ status: "owners" }); }, css: { width: "100px" }, bordered: true, color: "#000", auto: true }, "Back"),
                        react_1["default"].createElement("button", { style: {
                                background: "#000",
                                color: "#fff",
                                width: "300px",
                                maxWidth: "260px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }, onClick: function () {
                                return setCreateSafeStatusHandler({ status: "generate" });
                            } }, "Next")))))));
};
exports["default"] = Review;
