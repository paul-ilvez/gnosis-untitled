"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout/Layout");
var AppContext_1 = require("@/store/AppContext");
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
function LoadSafe() {
    var network = react_2.useContext(AppContext_1.AppContext).network;
    return (react_2["default"].createElement(Layout_1["default"], null,
        react_2["default"].createElement(react_1.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
            react_2["default"].createElement(react_1.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
                react_2["default"].createElement(react_1.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                    react_2["default"].createElement(react_1.Text, { size: "$3xl", b: true }, "Load Safe"),
                    react_2["default"].createElement(react_1.Text, { size: "$xl", color: "#757575", b: true }, "Connect wallet & select network"),
                    react_2["default"].createElement(react_1.Text, { size: "$md", color: "#9E9E9E" }, "Select network on which the Safe was created Name"),
                    react_2["default"].createElement(react_1.Spacer, { y: 2 }),
                    react_2["default"].createElement(react_1.Grid.Container, { justify: "space-between", alignItems: "center" },
                        react_2["default"].createElement(react_1.Text, { color: "primary", b: true }, "Network"),
                        react_2["default"].createElement(react_1.Dropdown, null,
                            react_2["default"].createElement(react_1.Dropdown.Button, null, network.name),
                            react_2["default"].createElement(react_2["default"].Fragment, null))),
                    react_2["default"].createElement(react_1.Grid.Container, { direction: "column" },
                        react_2["default"].createElement(react_1.Spacer, { y: 2 }),
                        react_2["default"].createElement(react_1.Input, { labelPlaceholder: "Name", contentRight: react_2["default"].createElement(react_1.Tooltip, { content: "This name is stored locally and will never be shared with us or any third parties." },
                                react_2["default"].createElement(react_1.Image, { src: "/info.svg", width: 24, height: 24 })) }),
                        react_2["default"].createElement(react_1.Spacer, { y: 2 }),
                        react_2["default"].createElement(react_1.Input, { labelPlaceholder: "Safe address" }),
                        react_2["default"].createElement(react_1.Spacer, { y: 2 }),
                        react_2["default"].createElement(react_1.Text, null,
                            "By continuing you consent to the ",
                            react_2["default"].createElement("br", null),
                            " ",
                            react_2["default"].createElement(react_1.Link, { href: "#", color: "text", isExternal: true },
                                " ",
                                react_2["default"].createElement("b", null, "terms of use"),
                                " "),
                            "\u00A0 and \u00A0",
                            " ",
                            react_2["default"].createElement(react_1.Link, { href: "#", color: "text", isExternal: true },
                                react_2["default"].createElement("b", null, "privacy policy")),
                            "."),
                        react_2["default"].createElement(react_1.Spacer, { y: 3 }),
                        react_2["default"].createElement(react_1.Grid.Container, { justify: "space-between" },
                            react_2["default"].createElement(react_1.Button, { css: { width: "100px" }, bordered: true, color: "#000", auto: true }, "Back"),
                            react_2["default"].createElement(react_1.Button, { css: {
                                    background: "#000",
                                    color: "#fff",
                                    width: "300px",
                                    maxWidth: "260px"
                                }, auto: true }, "Next"))))))));
}
exports["default"] = LoadSafe;
