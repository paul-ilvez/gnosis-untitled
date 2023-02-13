"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var FormHeader_1 = require("@/components/Common/FormHeader");
var StepButtons_1 = require("@/components/LoadSafe/StepButtons");
var InitSafe = function () {
    return (react_1["default"].createElement(react_2.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
        react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
            react_1["default"].createElement(react_2.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                react_1["default"].createElement(FormHeader_1["default"], { title: "Load Safe", subTitle: "Connect wallet & select network", descrtiption: "Select network on which the Safe was created Name" }),
                react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between", alignItems: "center" },
                    react_1["default"].createElement(react_2.Text, { color: "primary", b: true }, "Network"),
                    react_1["default"].createElement(react_2.Dropdown, null,
                        react_1["default"].createElement(react_2.Dropdown.Button, null, "Goerli"))),
                react_1["default"].createElement(react_2.Grid.Container, { direction: "column" },
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Input, { labelPlaceholder: "Name", contentRight: react_1["default"].createElement(react_2.Tooltip, { trigger: "hover", content: "This name is stored locally and" +
                                " will never be shared with us or any third parties." },
                            react_1["default"].createElement(react_2.Image, { src: "/info.svg", alt: "info.svg", width: 24, height: 24, css: { cursor: "pointer" } })) }),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Input, { labelPlaceholder: "Safe address" }),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Text, null,
                        "By continuing you consent to the ",
                        react_1["default"].createElement("br", null),
                        " ",
                        react_1["default"].createElement(react_2.Link, { href: "#", color: "text", isExternal: true },
                            react_1["default"].createElement("b", null, "terms of use")),
                        "\u00A0 and \u00A0",
                        react_1["default"].createElement(react_2.Link, { href: "#", color: "text", isExternal: true },
                            react_1["default"].createElement("b", null, "privacy policy")),
                        "."),
                    react_1["default"].createElement(react_2.Spacer, { y: 3 }),
                    react_1["default"].createElement(StepButtons_1["default"], null))))));
};
exports["default"] = InitSafe;
