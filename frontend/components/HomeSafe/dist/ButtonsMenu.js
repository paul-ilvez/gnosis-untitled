"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
function ButtonsMenu(_a) {
    var key = _a.key, title = _a.title, icon = _a.icon;
    return (React.createElement(react_1.Button, { css: {
            color: "$black",
            borderColor: "$gray400",
            mw: "182px",
            "&:hover": {
                backgroundColor: "$gray100"
            }
        }, bordered: true, rounded: true, key: key, borderWeight: "light" },
        React.createElement(react_1.Image, { src: icon, alt: "", css: { marginRight: "$5" } }),
        React.createElement(react_1.Text, { size: "14px", css: { letterSpacing: "$tight" }, weight: "medium" }, title)));
}
exports["default"] = ButtonsMenu;
