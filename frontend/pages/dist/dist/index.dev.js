"use strict";

exports.__esModule = true;

var google_1 = require("@next/font/google");

var Layout_1 = require("@/components/Layout");

var inter = google_1.Inter({
  subsets: ['latin']
});

function Home() {
  return React.createElement(Layout_1["default"], null);
}

exports["default"] = Home;