"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(8000, function () {
  console.log("server started at http://localhost:8000");
});
app.get('/', function (req, res) {
  res.send('Hello World');
});