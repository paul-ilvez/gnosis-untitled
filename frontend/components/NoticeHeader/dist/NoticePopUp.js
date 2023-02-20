"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var NoticePopUp = function () {
    return (React.createElement(react_1.Popover, { placement: "bottom-right" },
        React.createElement(react_1.Popover.Trigger, null,
            React.createElement(react_1.Button, { auto: true, bordered: true, css: { border: "$accents0" } },
                React.createElement(react_1.Image, { width: 24, height: 24, src: "/ring.svg", alt: "ring" }))),
        React.createElement(react_1.Popover.Content, null,
            React.createElement(react_1.Card, { css: { mw: "330px" } },
                React.createElement(react_1.Card.Header, null,
                    React.createElement(react_1.Text, { b: true }, "Notifications")),
                React.createElement(react_1.Card.Divider, null),
                React.createElement(react_1.Card.Body, { css: { py: "$10" } },
                    React.createElement(react_1.Text, null, "Some quick example text to build on the card title and make up the bulk of the cards content.")),
                React.createElement(react_1.Card.Footer, null)))));
};
exports["default"] = NoticePopUp;
