/* */ 
"use strict";
var _core = require("../core-js")["default"];
exports["default"] = function(arr) {
  return Array.isArray(arr) ? arr : _core.Array.from(arr);
};
exports.__esModule = true;
