"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 8080;
app.listen(PORT, function () {
  console.log("server started at http://localhost:".concat(PORT));
});
app.get('/', function (req, res) {
  res.send('Hello World');
});