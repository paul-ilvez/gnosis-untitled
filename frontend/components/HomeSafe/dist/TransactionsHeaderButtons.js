"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
function TransactionsHeaderButtons() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Button, { animated: false, size: "xs", css: { backgroundColor: "transparent" } },
            React.createElement(react_1.Text, { weight: "normal", size: 16, color: "black", css: {
                    textUnderlineOffset: "3.5px",
                    "&:hover": {
                        textDecoration: "black",
                        textDecorationLine: "underline"
                    },
                    "&:active": {
                        textDecorationLine: "none"
                    }
                } }, "Queue")),
        React.createElement(react_1.Button, { size: "xs", animated: false, css: { backgroundColor: "transparent" } },
            React.createElement(react_1.Text, { weight: "normal", size: 16, color: "black", css: {
                    textUnderlineOffset: "3.5px",
                    "&:hover": {
                        textDecoration: "black",
                        textDecorationLine: "underline"
                    },
                    "&:active": {
                        textDecorationLine: "none"
                    }
                } }, "History"))));
}
exports["default"] = TransactionsHeaderButtons;
