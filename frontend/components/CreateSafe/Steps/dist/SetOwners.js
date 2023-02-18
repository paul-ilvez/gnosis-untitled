"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
var FormHeader_1 = require("@/components/Common/FormHeader");
var uuid_1 = require("uuid");
var AppContext_1 = require("@/store/AppContext");
var ethers_1 = require("ethers");
var NetworkDropdown_1 = require("@/components/NetworkDropdown/NetworkDropdown");
var SetOwners = function () {
    var _a = react_1.useContext(AppContext_1.AppContext), setCreateSafeStatusHandler = _a.setCreateSafeStatusHandler, setNewSafeForm = _a.setNewSafeForm, newSafeForm = _a.newSafeForm, network = _a.network;
    react_1.useEffect(function () {
        if (newSafeForm.owners.length === 0) {
            setNewSafeForm(__assign(__assign({}, newSafeForm), { owners: [
                    {
                        id: uuid_1.v4(),
                        name: "",
                        address: ""
                    },
                ] }));
        }
    }, []);
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    var createNewOwner = function () {
        var newOwners = __spreadArrays(newSafeForm.owners, [
            {
                id: uuid_1.v4(),
                name: "",
                saddress: ""
            },
        ]);
        setNewSafeForm(__assign(__assign({}, newSafeForm), { owners: newOwners }));
    };
    var removeOwnerHandler = function (id) {
        var newOwners = newSafeForm.owners.filter(function (owner) { return owner.id !== id; });
        setNewSafeForm(__assign(__assign({}, newSafeForm), { owners: newOwners }));
    };
    var setOwnerData = function (id, field) {
        return function (e) {
            var newOwners = newSafeForm.owners.map(function (owner) {
                var _a;
                if (owner.id === id) {
                    return __assign(__assign({}, owner), (_a = {}, _a[field] = e.target.value, _a));
                }
                return owner;
            });
            setNewSafeForm(__assign(__assign({}, newSafeForm), { owners: newOwners }));
        };
    };
    var submitForm = function (e) {
        e.preventDefault();
        setError("");
        var emptyOwners = newSafeForm.owners.filter(function (owner) { return owner.name.length !== 0 && ethers_1.isAddress(owner.address); });
        if (!emptyOwners.length || !newSafeForm.quorum || !newSafeForm.name) {
            return setError("Please fill in all the fields");
        }
        setCreateSafeStatusHandler({ status: "review" });
    };
    return (react_1["default"].createElement(react_2.Grid.Container, { gap: 2, css: { mt: 40 }, justify: "center" },
        react_1["default"].createElement(react_2.Card, { variant: "bordered", css: { mw: "450px", h: "$400" } },
            react_1["default"].createElement(react_2.Card.Body, { css: { textAlign: "center", padding: "40px" } },
                react_1["default"].createElement(FormHeader_1["default"], { title: "Create new Safe", subTitle: "Select network and name your Safe", description: "Set the owner wallets of your Safe and how many need to confirm to execute a valid transaction." }),
                react_1["default"].createElement("form", { onSubmit: submitForm },
                    react_1["default"].createElement(react_2.Spacer, null),
                    react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between", alignItems: "center" },
                        react_1["default"].createElement(react_2.Text, { color: "primary", b: true }, "Network"),
                        react_1["default"].createElement(NetworkDropdown_1["default"], null)),
                    react_1["default"].createElement(react_2.Spacer, null),
                    react_1["default"].createElement(react_2.Input, { status: error ? "error" : "", css: { maxWidth: "400px", width: "100%" }, labelPlaceholder: "Safe name", type: "text", value: newSafeForm.name, onInput: function (e) {
                            return setNewSafeForm(__assign(__assign({}, newSafeForm), { name: e.target.value }));
                        } }),
                    react_1["default"].createElement(react_2.Spacer, { y: 1 }),
                    newSafeForm.owners.map(function (owner, i) {
                        return (react_1["default"].createElement("div", { key: owner.id },
                            react_1["default"].createElement(react_2.Spacer, null),
                            react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between", alignItems: "center" },
                                react_1["default"].createElement(react_2.Text, { b: true },
                                    "owner ",
                                    i + 1),
                                i !== 0 && (react_1["default"].createElement(react_2.Grid, { onClick: function () { return removeOwnerHandler(owner.id); } },
                                    react_1["default"].createElement(react_2.Image, { css: { cursor: "pointer" }, src: "/trash.svg" })))),
                            react_1["default"].createElement(react_2.Card, { css: { padding: "30px 15px" } },
                                react_1["default"].createElement(react_2.Input, { status: error && !owner.name ? "error" : "", onInput: setOwnerData(owner.id, "name"), value: owner.name, labelPlaceholder: "Owner Name" }),
                                react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                                react_1["default"].createElement(react_2.Input, { status: error && !ethers_1.isAddress(owner.address) ? "error" : "", onInput: setOwnerData(owner.id, "address"), value: owner.address, labelPlaceholder: "Owner Address or ENS" }),
                                error && !ethers_1.isAddress(owner.address) && (react_1["default"].createElement(react_2.Text, { color: "error" }, "is not address")))));
                    }),
                    react_1["default"].createElement(react_2.Button, { onClick: createNewOwner, light: true, auto: true }, "+ Add new owner"),
                    react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                    react_1["default"].createElement(react_2.Grid, { css: { textAlign: "left" } },
                        react_1["default"].createElement(react_2.Text, { size: "$2xl", b: true }, "Treshold"),
                        react_1["default"].createElement(react_2.Text, { size: "$md", color: "#9E9E9E" }, "Any transaction requires the confirmation of:"),
                        react_1["default"].createElement(react_2.Spacer, null),
                        react_1["default"].createElement(react_2.Input, { max: newSafeForm.owners.length, status: error && !newSafeForm.quorum ? "error" : "", placeholder: 1, value: newSafeForm.quorum, onChange: function (e) {
                                return setNewSafeForm(__assign(__assign({}, newSafeForm), { quorum: e.target.value }));
                            }, label: "Number", type: "number" })),
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
                    react_1["default"].createElement(react_2.Spacer, null),
                    react_1["default"].createElement(react_2.Grid.Container, { justify: "space-between" },
                        react_1["default"].createElement(react_2.Button, { onClick: function () { return setCreateSafeStatusHandler({ status: "init" }); }, css: { width: "100px" }, bordered: true, color: "#000", auto: true }, "Back"),
                        react_1["default"].createElement("button", { style: {
                                background: "#000",
                                color: "#fff",
                                width: "300px",
                                maxWidth: "260px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            } }, "Next")),
                    error && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(react_2.Spacer, { y: 2 }),
                        react_1["default"].createElement(react_2.Text, { color: "error" }, error))))))));
};
exports["default"] = SetOwners;
