"use strict";
exports.__esModule = true;
exports.useMediaQuery = void 0;
var react_1 = require("react");
exports.useMediaQuery = function (width) {
    var _a = react_1["default"].useState(false), targetReached = _a[0], setTargetReached = _a[1];
    var updateTarget = react_1["default"].useCallback(function (e) {
        if (e.matches) {
            setTargetReached(true);
        }
        else {
            setTargetReached(false);
        }
    }, []);
    react_1["default"].useEffect(function () {
        var media = window.matchMedia("(max-width: " + width + "px)");
        media.addListener(updateTarget);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        return function () { return media.removeListener(updateTarget); };
    }, [width, updateTarget]);
    return targetReached;
};
