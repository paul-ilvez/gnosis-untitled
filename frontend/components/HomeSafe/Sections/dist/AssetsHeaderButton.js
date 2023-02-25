"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var AppContext_1 = require("@/store/AppContext");
function AssetsHeaderButtons(_a) {
    var type = _a.type;
    var _b = react_2.useContext(AppContext_1.AppContext), setAssetsSectionHandler = _b.setAssetsSectionHandler, assetsSection = _b.assetsSection;
    var isActive = assetsSection.type === type;
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.Button, { animated: false, size: "xs", css: { backgroundColor: isActive ? "#e8e8e8" : "transparent" }, onClick: function () { return setAssetsSectionHandler({ type: type }); } },
            react_2["default"].createElement(react_1.Text, { weight: "normal", size: 16, color: "black", css: {
                    textUnderlineOffset: "3.5px",
                    "&:hover": {
                        textDecoration: "black",
                        textDecorationLine: "underline"
                    },
                    "&:active": {
                        textDecorationLine: "none"
                    }
                } }, type))));
}
exports["default"] = AssetsHeaderButtons;
