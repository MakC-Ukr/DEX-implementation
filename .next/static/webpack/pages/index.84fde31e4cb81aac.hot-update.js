"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SwapForm.js":
/*!********************************!*\
  !*** ./components/SwapForm.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar SwapForm = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(SwapForm, _Component);\n    var _super = _createSuper(SwapForm);\n    function SwapForm() {\n        _classCallCheck(this, SwapForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), //   constructorconstructor(props) {\n        //     // this.onSwap = this.onSwap.bind(this);\n        //     this.handleInputchange = this.handleInputchange.bind(this);\n        //   }\n        \"state\", {\n            tokenA: \"0\",\n            tokenPrice: \"1\"\n        });\n        _defineProperty(_assertThisInitialized(_this), \"handleInputchange\", function(event) {\n            _this.setState({\n                tokenA: event.target.value\n            });\n        });\n        return _this;\n    }\n    _createClass(SwapForm, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                this.setState({\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, this);\n                var self = this;\n                // used later in form, since scope for \"this\" gets changed.\n                // More on \"https://stackoverflow.com/questions/68550323/unhandled-rejection-typeerror-this-is-undefined-when-write-this-setstatedata\"\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                        onSubmit: function() {\n                            var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                                var accounts;\n                                return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            event.preventDefault();\n                                            console.log(\"Onsubmit called\");\n                                            _ctx.prev = 2;\n                                            _ctx.next = 5;\n                                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                                        case 5:\n                                            accounts = _ctx.sent;\n                                            _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.swapEthToToken().send({\n                                                from: accounts[0],\n                                                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(self.state.tokenA, \"ether\")\n                                            });\n                                            console.log(\"succesful\");\n                                            _ctx.next = 13;\n                                            break;\n                                        case 10:\n                                            _ctx.prev = 10;\n                                            _ctx.t0 = _ctx[\"catch\"](2);\n                                            console.log(_ctx.t0);\n                                        case 13:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee, null, [\n                                    [\n                                        2,\n                                        10\n                                    ]\n                                ]);\n                            }));\n                            return function(event) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                info: true,\n                                children: \"Swapping Eth to Weenus\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    size: \"large\",\n                                    icon: \"ethereum\",\n                                    placeholder: \"0.00\",\n                                    fluid: true,\n                                    value: this.state.tokenA,\n                                    onChange: function(event) {\n                                        _this.handleInputchange(event);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                name: \"arrow-down\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    size: \"large\",\n                                    icon: \"wordpress\",\n                                    placeholder: \"0.00\",\n                                    fluid: true,\n                                    value: this.state.tokenA * this.state.tokenPrice\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                color: \"pink\",\n                                fluid: true,\n                                size: \"large\",\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                return _ctx.abrupt(\"return\", {\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return SwapForm;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapForm);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNnQjtBQUNBO0FBQ047QUFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxGVSxRQUFRLGlCQUFkLFFBQVE7O2NBQUZBLFFBQVE7OEJBQVJBLFFBQVE7YUFBUkEsUUFBUTs4QkFBUkEsUUFBUTs7O3VEQUNkLEVBQW9DO1FBQ3BDLEVBQStDO1FBQy9DLEVBQWtFO1FBQ2xFLEVBQU07UUFFSkMsQ0FBSyxRQUFHLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQUc7WUFBRUMsVUFBVSxFQUFFLENBQUc7UUFBQyxDQUFDO3VEQWN4Q0MsQ0FBaUIsb0JBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztrQkFDekJDLFFBQVEsQ0FBQyxDQUFDO2dCQUNiSixNQUFNLEVBQUVHLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQzVCLENBQUM7UUFDSCxDQUFDOzs7aUJBeEJHUixRQUFROztZQWNOUyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQXZCLFFBQVEsQ0FBRkEsaUJBQWlCOzhOQUF2QixRQUFRLFdBQWtCLENBQUM7d0JBQ25CQyxXQUFXOzs7Ozt1Q0FBU25CLGdGQUE4QixHQUFHc0IsSUFBSTs7Z0NBQXpESCxXQUFXO2dDQUNqQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVc7Z0NBQ3ZCLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUM7b0NBQUNILFVBQVUsRUFBRU8sV0FBVztnQ0FBQyxDQUFDOzs7Ozs7Z0JBQzNDLENBQUM7Ozs7WUFRRE0sR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDOzs0RkFDUEMsQ0FBSTtvQkFBQ0MsR0FBRyxFQUFDLENBQVk7b0JBQUNDLElBQUksRUFBQyxDQUEyRTs7Ozs7O2dCQUN2RyxHQUFLLENBQUNDLElBQUksR0FBRyxJQUFJO2dCQUNqQixFQUEyRDtnQkFDM0QsRUFBc0k7Z0JBQ3RJLE1BQU0sNkVBQ0hDLENBQUc7MEdBQ0Q1QixtREFBSTt3QkFDSDZCLFFBQVE7OE9BQUUsUUFBUSxTQUFEakIsS0FBSyxFQUFLLENBQUM7b0NBS2xCa0IsUUFBUTs7Ozs0Q0FKaEJsQixLQUFLLENBQUNtQixjQUFjOzRDQUNwQlYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUI7OzttREFHSnZCLHNFQUFvQjs7NENBQXJDK0IsUUFBUTs0Q0FDZGhDLGdGQUE4QixHQUFHcUMsSUFBSSxDQUFDLENBQUM7Z0RBQ3JDQyxJQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFDO2dEQUNoQmYsS0FBSyxFQUFFaEIsa0VBQWdCLENBQUM0QixJQUFJLENBQUNuQixLQUFLLENBQUNDLE1BQU0sRUFBRSxDQUFPOzRDQUNwRCxDQUFDOzRDQUNEWSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXOzs7Ozs7NENBRXZCRCxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7OzRCQUVmLENBQUM7NENBZGdCVixLQUFLOzs7Ozt3R0FnQnJCVCxzREFBTztnQ0FBQ29DLElBQUk7MENBQUMsQ0FBc0I7Ozs7Ozt3R0FDbkN2Qyx5REFBVTtzSEFDUkUsb0RBQUs7b0NBQ0p1QyxJQUFJLEVBQUMsQ0FBTztvQ0FDWkMsSUFBSSxFQUFDLENBQVU7b0NBQ2ZDLFdBQVcsRUFBQyxDQUFNO29DQUNsQkMsS0FBSztvQ0FDTDdCLEtBQUssRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ0MsTUFBTTtvQ0FDeEJvQyxRQUFRLEVBQUUsUUFBUSxDQUFQakMsS0FBSyxFQUFLLENBQUM7OENBQ2ZELGlCQUFpQixDQUFDQyxLQUFLO29DQUM5QixDQUFDOzs7Ozs7Ozs7Ozt3R0FHRVAsbURBQUk7Z0NBQUN5QyxJQUFJLEVBQUMsQ0FBWTs7Ozs7O3dHQUM1QjlDLHlEQUFVO3NIQUNSRSxvREFBSztvQ0FDSnVDLElBQUksRUFBQyxDQUFPO29DQUNaQyxJQUFJLEVBQUMsQ0FBVztvQ0FDaEJDLFdBQVcsRUFBQyxDQUFNO29DQUNsQkMsS0FBSztvQ0FDTDdCLEtBQUssRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxVQUFVOzs7Ozs7Ozs7Ozt3R0FHbkROLHNEQUFPOzs7Ozt3R0FDUEgscURBQU07Z0NBQUM4QyxLQUFLLEVBQUMsQ0FBTTtnQ0FBQ0gsS0FBSztnQ0FBQ0gsSUFBSSxFQUFDLENBQU87MENBQUMsQ0FFeEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVIsQ0FBQzs7OztZQXhFWU8sR0FBZSxFQUFmQSxDQUFlO21CQUE1QixRQUFRLENBQUtBLGVBQWU7OE5BQTVCLFFBQVEsV0FBdUIsQ0FBQzt3QkFDeEIvQixXQUFXOzs7Ozt1Q0FBU25CLGdGQUE4QixHQUFHc0IsSUFBSTs7Z0NBQXpESCxXQUFXO2dDQUNqQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVc7NkRBQ2hCLENBQUM7b0NBQUNQLFVBQVUsRUFBRU8sV0FBVztnQ0FBQyxDQUFDOzs7Ozs7Z0JBQ3BDLENBQUM7Ozs7V0FaR1YsUUFBUTtFQUFTVix3REFBZTtBQW1GdEMsK0RBQWVVLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBGb3JtLmpzP2U0ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVuaXN3YXAgZnJvbSBcIi4uL2V0aGVyZXVtL3VuaXN3YXBcIjtcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgRGl2aWRlciwgSWNvbiwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jbGFzcyBTd2FwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICAvLyB0aGlzLm9uU3dhcCA9IHRoaXMub25Td2FwLmJpbmQodGhpcyk7XG4vLyAgICAgdGhpcy5oYW5kbGVJbnB1dGNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRjaGFuZ2UuYmluZCh0aGlzKTtcbi8vICAgfVxuXG4gIHN0YXRlID0geyB0b2tlbkE6IFwiMFwiLCB0b2tlblByaWNlOiBcIjFcIiB9O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgX3Rva2VuUHJpY2UgPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMudGVtcFRva2VuUHJpY2UoKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coX3Rva2VuUHJpY2UpO1xuICAgIHJldHVybiB7IHRva2VuUHJpY2U6IF90b2tlblByaWNlIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBfdG9rZW5QcmljZSA9IGF3YWl0IFVuaXN3YXAubWV0aG9kcy50ZW1wVG9rZW5QcmljZSgpLmNhbGwoKTtcbiAgICBjb25zb2xlLmxvZyhfdG9rZW5QcmljZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuUHJpY2U6IF90b2tlblByaWNlIH0pO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRva2VuQTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuNC4xL3NlbWFudGljLm1pbi5jc3NcIiAvPlxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIC8vIHVzZWQgbGF0ZXIgaW4gZm9ybSwgc2luY2Ugc2NvcGUgZm9yIFwidGhpc1wiIGdldHMgY2hhbmdlZC5cbiAgICAvLyBNb3JlIG9uIFwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg1NTAzMjMvdW5oYW5kbGVkLXJlamVjdGlvbi10eXBlZXJyb3ItdGhpcy1pcy11bmRlZmluZWQtd2hlbi13cml0ZS10aGlzLXNldHN0YXRlZGF0YVwiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT25zdWJtaXQgY2FsbGVkXCIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhzZWxmLnN0YXRlLnRva2VuQSk7XG4gICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgVW5pc3dhcC5tZXRob2RzLnN3YXBFdGhUb1Rva2VuKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkoc2VsZi5zdGF0ZS50b2tlbkEsIFwiZXRoZXJcIiksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc2Z1bFwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+XG5cbiAgICAgICAgICA8TWVzc2FnZSBpbmZvPlN3YXBwaW5nIEV0aCB0byBXZWVudXM8L01lc3NhZ2U+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9rZW5BfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnB1dGNoYW5nZShldmVudCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdhcnJvdy1kb3duJyAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGljb249XCJ3b3JkcHJlc3NcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIlxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbkEgKiB0aGlzLnN0YXRlLnRva2VuUHJpY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwaW5rXCIgZmx1aWQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICBTd2FwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dhcEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVbmlzd2FwIiwid2ViMyIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJEaXZpZGVyIiwiSWNvbiIsIlNlZ21lbnQiLCJTd2FwRm9ybSIsInN0YXRlIiwidG9rZW5BIiwidG9rZW5QcmljZSIsImhhbmRsZUlucHV0Y2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdG9rZW5QcmljZSIsIm1ldGhvZHMiLCJ0ZW1wVG9rZW5QcmljZSIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwibGluayIsInJlbCIsImhyZWYiLCJzZWxmIiwiZGl2Iiwib25TdWJtaXQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzd2FwRXRoVG9Ub2tlbiIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsImluZm8iLCJGaWVsZCIsInNpemUiLCJpY29uIiwicGxhY2Vob2xkZXIiLCJmbHVpZCIsIm9uQ2hhbmdlIiwibmFtZSIsImNvbG9yIiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapForm.js\n");

/***/ })

});