webpackHotUpdate(4,{

/***/ "./components/RequestRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = "C:\\Users\\Dell\\Documents\\Kickstarter\\components\\RequestRow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var RequestRow =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestRow, _Component);

  function RequestRow() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = RequestRow.__proto__ || Object.getPrototypeOf(RequestRow)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        approverLoading: false,
        finalizeLoading: false,
        errorApprove: '',
        errorFinalize: '',
        showError: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "approve", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var campaign, accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    approverLoading: true,
                    errorApprove: ''
                  });

                  _context.prev = 1;
                  _context.next = 4;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);

                case 4:
                  campaign = _context.sent;
                  _context.next = 7;
                  return __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 7:
                  accounts = _context.sent;
                  _context.next = 10;
                  return campaign.methods.approveRequest(_this.props.index).send({
                    from: accounts[0]
                  });

                case 10:
                  __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));

                  _this.setState({
                    approverLoading: false
                  });

                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](1);

                  _this.setState({
                    errorApprove: _context.t0.message,
                    approverLoading: false
                  });

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 14]]);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "onFinalize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
          var campaign, accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.setState({
                    finalizeLoading: true,
                    errorFinalize: ''
                  });

                  _context2.prev = 1;
                  _context2.next = 4;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);

                case 4:
                  campaign = _context2.sent;
                  _context2.next = 7;
                  return __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 7:
                  accounts = _context2.sent;
                  _context2.next = 10;
                  return campaign.methods.finalizeRequest(_this.props.index).send({
                    from: accounts[0]
                  });

                case 10:
                  _this.setState({
                    finalizeLoading: false
                  });

                  _context2.next = 16;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](1);

                  _this.setState({
                    errorFinalize: _context2.t0.message,
                    finalizeLoading: false,
                    showError: true
                  });

                case 16:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[1, 13]]);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(RequestRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Row, {
        style: this.props.requests.complete ? {
          color: "gray"
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.props.requests.description), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__["a" /* default */].utils.fromWei(this.props.requests.value, 'ether')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.requests.recipient), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.props.requests.approvalCount, "/", this.props.approversCount), this.props.requests.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        loading: this.state.approverLoading,
        color: "green",
        basic: true,
        content: "Approve",
        onClick: this.approve,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), this.props.requests.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        loading: this.state.finalizeLoading,
        color: "teal",
        disabled: this.props.requests.approvalCount > this.props.approversCount / 2 ? false : true,
        basic: true,
        content: "Finalize",
        onClick: this.onFinalize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["j" /* Modal */], {
        open: this.state.showError,
        size: "tiny",
        negative: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["j" /* Modal */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Oops!! something went wrong"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["j" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["j" /* Modal */].Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.state.errorFinalize)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["j" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: function onClick() {
          return _this2.setState({
            showError: false
          });
        },
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["f" /* Icon */], {
        name: "checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), " Ok"))));
    }
  }]);

  return RequestRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=4.b9983762f08544a79c29.hot-update.js.map