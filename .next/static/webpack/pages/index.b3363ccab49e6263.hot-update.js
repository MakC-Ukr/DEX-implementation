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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar SwapForm = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(SwapForm, _Component);\n    var _super = _createSuper(SwapForm);\n    function SwapForm() {\n        _classCallCheck(this, SwapForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            tokenA: '0',\n            tokenPrice: '1'\n        });\n        _defineProperty(_assertThisInitialized(_this), //   onSwap = async (event) => {\n        //     event.preventDefault();\n        //     console.log(\"Onsubmit called\");\n        //     try {\n        //       console.log(self1.state.tokenA);\n        //       const accounts = await web3.eth.getAccounts();\n        //       Uniswap.methods.swapEthToToken().send({\n        //         from: accounts[0],\n        //         value: web3.utils.toWei(self1.state.tokenA, \"ether\"),\n        //       });\n        //       console.log(\"succesful\");\n        //     } catch (e) {\n        //       console.log(e);\n        //     }\n        //   };\n        \"handleInputchange\", function(event) {\n            _this.setState({\n                tokenA: event.target.value\n            });\n        });\n        return _this;\n    }\n    _createClass(SwapForm, [\n        {\n            key: \"constructorconstructor\",\n            value: function constructorconstructor(props) {\n                // this.onSwap = this.onSwap.bind(this);\n                this.handleInputchange = this.handleInputchange.bind(this);\n                temp = this;\n            }\n        },\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                this.setState({\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                console.log(this.state.tokenPrice);\n                var self = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                        onSubmit: function() {\n                            var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                                return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            event.preventDefault();\n                                            console.log(\"Onsubmit called\");\n                                            console.log(self.state.tokenPrice);\n                                        case 3:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(event) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                                info: true,\n                                children: \"Swapping Eth to Weenus\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    size: \"large\",\n                                    icon: \"ethereum\",\n                                    placeholder: \"0.00\",\n                                    fluid: true,\n                                    value: this.state.tokenA,\n                                    onChange: function(event) {\n                                        _this.handleInputchange(event);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    size: \"large\",\n                                    icon: \"wordpress\",\n                                    placeholder: \"0.00\",\n                                    fluid: true,\n                                    value: this.state.tokenA * this.state.tokenPrice\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                color: \"pink\",\n                                fluid: true,\n                                size: \"large\",\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                return _ctx.abrupt(\"return\", {\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return SwapForm;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapForm);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDQTtBQUNOO0FBQ3NDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQlMsUUFBUSxpQkFBZCxRQUFROztjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7Ozt1REFRWkMsQ0FBSyxRQUFHLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQUc7WUFBRUMsVUFBVSxFQUFFLENBQUc7UUFBQyxDQUFDO3VEQWMxQyxFQUFnQztRQUNoQyxFQUE4QjtRQUM5QixFQUFzQztRQUN0QyxFQUFZO1FBQ1osRUFBeUM7UUFDekMsRUFBdUQ7UUFDdkQsRUFBZ0Q7UUFDaEQsRUFBNkI7UUFDN0IsRUFBZ0U7UUFDaEUsRUFBWTtRQUNaLEVBQWtDO1FBQ2xDLEVBQW9CO1FBQ3BCLEVBQXdCO1FBQ3hCLEVBQVE7UUFDUixFQUFPO1FBRU5DLENBQWlCLG9CQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7a0JBQ3pCQyxRQUFRLENBQUMsQ0FBQztnQkFDVkosTUFBTSxFQUFFRyxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztZQUMvQixDQUFDO1FBQ0gsQ0FBQzs7O2lCQTFDSVIsUUFBUTs7WUFFWlMsR0FBc0IsRUFBdEJBLENBQXNCO21CQUF0QkEsUUFBUSxDQUFSQSxzQkFBc0IsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7Z0JBQzVCLEVBQXdDO2dCQUN4QyxJQUFJLENBQUNOLGlCQUFpQixHQUFHLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNPLElBQUksQ0FBQyxJQUFJO2dCQUN6REMsSUFBSSxHQUFHLElBQUk7WUFDYixDQUFDOzs7WUFVS0MsR0FBaUIsRUFBakJBLENBQWlCO21CQUF2QixRQUFRLENBQUZBLGlCQUFpQjs4TkFBdkIsUUFBUSxXQUFrQixDQUFDO3dCQUNuQkMsV0FBVzs7Ozs7dUNBQVN0QixnRkFBOEIsR0FBR3lCLElBQUk7O2dDQUF6REgsV0FBVztnQ0FDakJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxXQUFXO2dDQUN2QixJQUFJLENBQUNSLFFBQVEsQ0FBQyxDQUFDO29DQUFDSCxVQUFVLEVBQUVXLFdBQVc7Z0NBQUMsQ0FBQzs7Ozs7O2dCQUMzQyxDQUFDOzs7O1lBd0JETSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7O2dCQUNSRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNsQixLQUFLLENBQUNFLFVBQVU7Z0JBQ2pDLEdBQUssQ0FBQ2tCLElBQUksR0FBRyxJQUFJO2dCQUNqQixNQUFNLDZFQUNIQyxDQUFHOzBHQUNENUIsbURBQUk7d0JBQUM2QixRQUFROzhPQUFFLFFBQVEsU0FBRGxCLEtBQUssRUFBSyxDQUFDOzs7OzRDQUM5QkEsS0FBSyxDQUFDbUIsY0FBYzs0Q0FDcEJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWlCOzRDQUM3QkQsT0FBTyxDQUFDQyxHQUFHLENBQUNFLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ0UsVUFBVTs7Ozs7OzRCQUNqQyxDQUFDOzRDQUprQkUsS0FBSzs7Ozs7d0dBTXpCUixzREFBTztnQ0FBQzRCLElBQUk7MENBQUMsQ0FBc0I7Ozs7Ozt3R0FDbkMvQix5REFBVTtzSEFDUkUsb0RBQUs7b0NBQ0orQixJQUFJLEVBQUMsQ0FBTztvQ0FDWkMsSUFBSSxFQUFDLENBQVU7b0NBQ2ZDLFdBQVcsRUFBQyxDQUFNO29DQUNsQkMsS0FBSztvQ0FDTHRCLEtBQUssRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ0MsTUFBTTtvQ0FDeEI2QixRQUFRLEVBQUUsUUFBUSxDQUFQMUIsS0FBSyxFQUFLLENBQUM7OENBQ2JELGlCQUFpQixDQUFDQyxLQUFLO29DQUNoQyxDQUFDOzs7Ozs7Ozs7Ozt3R0FHSjJCLENBQUU7Ozs7O3dHQUNGdEMseURBQVU7c0hBQ1JFLG9EQUFLO29DQUNKK0IsSUFBSSxFQUFDLENBQU87b0NBQ1pDLElBQUksRUFBQyxDQUFXO29DQUNoQkMsV0FBVyxFQUFDLENBQU07b0NBQ2xCQyxLQUFLO29DQUNMdEIsS0FBSyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNFLFVBQVU7Ozs7Ozs7Ozs7O3dHQUduREwsc0RBQU87Ozs7O3dHQUNQSCxxREFBTTtnQ0FBQ3NDLEtBQUssRUFBQyxDQUFNO2dDQUFDSCxLQUFLO2dDQUFDSCxJQUFJLEVBQUMsQ0FBTzswQ0FBQyxDQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJUixDQUFDOzs7O1lBM0VZTyxHQUFlLEVBQWZBLENBQWU7bUJBQTVCLFFBQVEsQ0FBS0EsZUFBZTs4TkFBNUIsUUFBUSxXQUF1QixDQUFDO3dCQUN4QnBCLFdBQVc7Ozs7O3VDQUFTdEIsZ0ZBQThCLEdBQUd5QixJQUFJOztnQ0FBekRILFdBQVc7Z0NBQ2pCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsV0FBVzs2REFDaEIsQ0FBQztvQ0FBQ1gsVUFBVSxFQUFFVyxXQUFXO2dDQUFDLENBQUM7Ozs7OztnQkFDcEMsQ0FBQzs7OztXQWRHZCxRQUFRO0VBQVNULHdEQUFlO0FBd0Z0QywrREFBZVMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcEZvcm0uanM/ZTRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVW5pc3dhcCBmcm9tIFwiLi4vZXRoZXJldW0vdW5pc3dhcFwiO1xuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZGVmIGZyb20gXCIuL0xheW91dFwiO1xuXG5jbGFzcyBTd2FwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3Jjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgLy8gdGhpcy5vblN3YXAgPSB0aGlzLm9uU3dhcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXRjaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Y2hhbmdlLmJpbmQodGhpcyk7IFxuICAgIHRlbXAgPSB0aGlzO1xuICB9XG5cbiAgc3RhdGUgPSB7IHRva2VuQTogJzAnLCB0b2tlblByaWNlOiAnMScgfTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IF90b2tlblByaWNlID0gYXdhaXQgVW5pc3dhcC5tZXRob2RzLnRlbXBUb2tlblByaWNlKCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKF90b2tlblByaWNlKTtcbiAgICByZXR1cm4geyB0b2tlblByaWNlOiBfdG9rZW5QcmljZSB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgX3Rva2VuUHJpY2UgPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMudGVtcFRva2VuUHJpY2UoKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coX3Rva2VuUHJpY2UpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0b2tlblByaWNlOiBfdG9rZW5QcmljZSB9KTtcbiAgfVxuXG4vLyAgIG9uU3dhcCA9IGFzeW5jIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc29sZS5sb2coXCJPbnN1Ym1pdCBjYWxsZWRcIik7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNlbGYxLnN0YXRlLnRva2VuQSk7XG4vLyAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4vLyAgICAgICBVbmlzd2FwLm1ldGhvZHMuc3dhcEV0aFRvVG9rZW4oKS5zZW5kKHtcbi8vICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4vLyAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHNlbGYxLnN0YXRlLnRva2VuQSwgXCJldGhlclwiKSxcbi8vICAgICAgIH0pO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNmdWxcIik7XG4vLyAgICAgfSBjYXRjaCAoZSkge1xuLy8gICAgICAgY29uc29sZS5sb2coZSk7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4gaGFuZGxlSW5wdXRjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b2tlbkE6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgIH0pXG4gfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50b2tlblByaWNlKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT25zdWJtaXQgY2FsbGVkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5zdGF0ZS50b2tlblByaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAgICA8TWVzc2FnZSBpbmZvPlN3YXBwaW5nIEV0aCB0byBXZWVudXM8L01lc3NhZ2U+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9rZW5BfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0Y2hhbmdlKGV2ZW50KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGljb249XCJ3b3JkcHJlc3NcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIlxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbkEgKiB0aGlzLnN0YXRlLnRva2VuUHJpY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwaW5rXCIgZmx1aWQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICBTd2FwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dhcEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVbmlzd2FwIiwid2ViMyIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJEaXZpZGVyIiwiZGVmIiwiU3dhcEZvcm0iLCJzdGF0ZSIsInRva2VuQSIsInRva2VuUHJpY2UiLCJoYW5kbGVJbnB1dGNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yY29uc3RydWN0b3IiLCJwcm9wcyIsImJpbmQiLCJ0ZW1wIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdG9rZW5QcmljZSIsIm1ldGhvZHMiLCJ0ZW1wVG9rZW5QcmljZSIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwic2VsZiIsImRpdiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpbmZvIiwiRmllbGQiLCJzaXplIiwiaWNvbiIsInBsYWNlaG9sZGVyIiwiZmx1aWQiLCJvbkNoYW5nZSIsImJyIiwiY29sb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapForm.js\n");

/***/ })

});