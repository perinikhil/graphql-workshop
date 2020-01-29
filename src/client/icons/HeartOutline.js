

// eslint-disable
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HeartOutline = function HeartOutline(props) {
  return _react.default.createElement("svg", _extends({
    viewBox: "0 0 128 128",
    width: "1em",
    height: "1em"
  }, props), _react.default.createElement("path", {
    d: "M119.5 40.3a29 29 0 0 0-22.8-23.7 33.8 33.8 0 0 0-32.7 13 33.7 33.7 0 0 0-32.7-13A29 29 0 0 0 8.5 40.3c-1.3 7.2-.6 18.8 9.4 33.3A140 140 0 0 0 62 111.5a3.7 3.7 0 0 0 4 0c20.2-12 35-24.8 44.1-38 10-14.4 10.7-26 9.5-33.2zm-55.5 63c-33-20.1-50.8-43-47.7-61.6A20.7 20.7 0 0 1 33 24.3a22.3 22.3 0 0 1 4.5-.4c8.8 0 17.3 5.2 23.2 14.6a4 4 0 0 0 3.4 1.8 4 4 0 0 0 3.4-1.8c6-9.4 14.4-14.6 23.2-14.6a22.3 22.3 0 0 1 4.5.5 20.7 20.7 0 0 1 16.6 17.2c3 18.6-14.8 41.6-47.8 61.7z"
  }));
};

var _default = HeartOutline;
exports.default = _default;
