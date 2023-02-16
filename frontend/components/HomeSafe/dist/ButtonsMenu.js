"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var AppContext_1 = require("@/store/AppContext");
function ButtonsMenu(_a) {
    var title = _a.title, icon = _a.icon;
    var appCntx = react_2.useContext(AppContext_1.AppContext);
    return (react_2["default"].createElement(react_1.Button, { css: {
            color: "$black",
            borderColor: "$gray400",
            mw: "182px",
            "&:hover": {
                backgroundColor: "$gray100"
            }
        }, bordered: true, rounded: true, borderWeight: "light", onClick: function () { return appCntx.setCurrentMenuSectionHandler({ title: title }); } },
        react_2["default"].createElement(react_1.Image, { src: icon, alt: "", css: { marginRight: "$5" } }),
        react_2["default"].createElement(react_1.Text, { size: "14px", css: { letterSpacing: "$tight" }, weight: "medium" }, title)));
}
exports["default"] = ButtonsMenu;
