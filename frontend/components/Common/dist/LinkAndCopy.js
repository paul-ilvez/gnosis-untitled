"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var LinkAndCopy = function (_a) {
    var _b = _a.address, address = _b === void 0 ? "" : _b, _c = _a.link, link = _c === void 0 ? "no link" : _c;
    var _d = react_1.useState(false), copy = _d[0], setCopy = _d[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setCopy(false);
        }, 2000);
    }, [copy]);
    var copyText = function () {
        navigator.clipboard.writeText(address);
        setCopy(true);
    };
    return (react_1["default"].createElement(react_2.Grid.Container, { direction: "flex", alignItems: "center", css: { width: "70px" } },
        react_1["default"].createElement(react_2.Tooltip, { content: copy ? "Copied" : "Copy to clipboard" },
            react_1["default"].createElement(react_2.Image, { onClick: copyText, css: { cursor: "pointer" }, src: "./copy.svg", alt: "copy", width: 16, height: 16 })),
        react_1["default"].createElement(react_2.Spacer, null),
        react_1["default"].createElement(react_2.Tooltip, { content: link },
            react_1["default"].createElement("a", { href: link === "no link" ? "" : "View on goerli.etherscan.io" },
                react_1["default"].createElement(react_2.Image, { alt: "etherscan", src: "./link-external.svg", width: 16, height: 16 })))));
};
exports["default"] = LinkAndCopy;
