"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
function AssetsNft() {
    return (React.createElement(react_1.Grid.Container, { direction: "column", justify: "center", alignItems: "center" },
        React.createElement(react_1.Spacer, { y: 2 }),
        React.createElement(react_1.Image, { src: "/QueueIcon.svg", alt: "QueueIcon" }),
        React.createElement(react_1.Spacer, { y: 1 }),
        React.createElement(react_1.Text, { css: { userSelect: "none" }, size: 16, color: "#C8C8C8" }, "Update coming soon")));
}
exports["default"] = AssetsNft;
