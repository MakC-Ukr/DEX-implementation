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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar UniswapIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(UniswapIndex, Component1);\n    var _super = _createSuper(UniswapIndex);\n    function UniswapIndex(props) {\n        _classCallCheck(this, UniswapIndex);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"handleItemClick\", function(e, param) {\n            var name = param.name;\n            return _this.setState({\n                activeItem: name\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"onSwap\", function() {\n            var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            console.log(\"Onsubmit called: \", this.state.tokenA);\n                            _ctx.next = 4;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 4:\n                            accounts = _ctx.sent;\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, this);\n            // await Uniswap.methods.swapEthToToken().send({\n            //   from: accounts[0],\n            //   value: this.state.tokenA,\n            // });\n            }).bind(this)).bind(this);\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        _this.state = {\n            activeItem: 'home',\n            tokenA: '0',\n            tokenPrice: '1',\n            address: ''\n        };\n        return _this;\n    }\n    _createClass(UniswapIndex, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                this.setState({\n                                    tokenPrice: this.props.tokenPrice\n                                }); // sets the tokenPrice in state from this.props\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    act: this.state.activeItem,\n                    handleItemClick: this.handleItemClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                                async: true,\n                                rel: \"stylesheet\",\n                                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                textAlign: \"center\",\n                                style: {\n                                    height: \"70vh\"\n                                },\n                                verticalAlign: \"middle\",\n                                color: \"pink\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                                    style: {\n                                        maxWidth: 450\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                                            onSubmit: this.onSwap.bind(this),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                                                    info: true,\n                                                    children: \"Swapping Eth to Weenus\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                    size: \"large\",\n                                                    icon: \"ethereum\",\n                                                    placeholder: \"0.00\",\n                                                    fluid: true,\n                                                    value: this.state.tokenA,\n                                                    onChange: function(event) {\n                                                        return _this.setState({\n                                                            tokenA: event.target.value\n                                                        });\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                    size: \"large\",\n                                                    icon: \"wordpress\",\n                                                    placeholder: \"0.00\",\n                                                    fluid: true,\n                                                    value: this.state.tokenA * this.state.tokenPrice\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                    color: \"pink\",\n                                                    fluid: true,\n                                                    size: \"large\",\n                                                    children: \"Swap\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _addr, _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.owner().call();\n                            case 2:\n                                _addr = _ctx.sent;\n                                _ctx.next = 5;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 5:\n                                _tokenPrice = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: _addr,\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return UniswapIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniswapIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dEQUFLLE1BQU0sT0FBREgsUUFBUSxDQUFDLENBQUM7NERBQUNTLE1BQU0sRUFBRU4sS0FBSyxDQUFDbUMsTUFBTSxDQUFDRixLQUFLO3dEQUFDLENBQUM7Ozs7Ozs7NEhBRWhFRyxDQUFFOzs7Ozs0SEFDRnBELG9EQUFLO29EQUNONkMsSUFBSSxFQUFDLENBQU87b0RBQUNDLElBQUksRUFBQyxDQUFXO29EQUM3QkMsV0FBVyxFQUFDLENBQU07b0RBQUNDLEtBQUs7b0RBQ3hCQyxLQUFLLEVBQUUsSUFBSSxDQUFDNUIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNJLFVBQVU7Ozs7Ozs0SEFFL0N0QixzREFBTzs7Ozs7NEhBQ1BULHFEQUFNO29EQUFDNkMsS0FBSyxFQUFDLENBQU07b0RBQUNTLEtBQUs7b0RBQUNILElBQUksRUFBQyxDQUFPOzhEQUFDLENBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFkLENBQUM7Ozs7WUE5RFlRLEdBQWUsRUFBZkEsQ0FBZTttQkFBNUIsUUFBUSxDQUFLQSxlQUFlOzhOQUE1QixRQUFRLFdBQXVCLENBQUM7d0JBQ3hCQyxLQUFLLEVBQ0xDLFdBQVc7Ozs7O3VDQURHL0QsdUVBQXFCLEdBQUdrRSxJQUFJOztnQ0FBMUNKLEtBQUs7O3VDQUNjOUQsZ0ZBQThCLEdBQUdrRSxJQUFJOztnQ0FBeERILFdBQVc7NkRBQ1YsQ0FBQztvQ0FBQzdCLE9BQU8sRUFBRTRCLEtBQUs7b0NBQUU3QixVQUFVLEVBQUM4QixXQUFXO2dDQUFDLENBQUM7Ozs7OztnQkFDbkQsQ0FBQzs7OztXQWJHL0MsWUFBWTtFQUFTakIsNENBQVM7QUEwRXBDLCtEQUFlaUIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVuaXN3YXAgZnJvbSBcIi4uL2V0aGVyZXVtL3VuaXN3YXBcIjtcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEZvcm0sXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSW1hZ2UsXG4gIC8vIE1lbnUsXG4gIElucHV0LFxuICBJY29uLFxuICBNZXNzYWdlLFxuICBEaXZpZGVyLFxuICBUZXh0QXJlYSxcbiAgU2VnbWVudCxcbiAgQ2FyZCxcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jbGFzcyBVbmlzd2FwSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJywgIHRva2VuQTogJzAnLCB0b2tlblByaWNlIDogJzEnLCBhZGRyZXNzOiAnJyB9O1xuICB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IF9hZGRyID0gYXdhaXQgVW5pc3dhcC5tZXRob2RzLm93bmVyKCkuY2FsbCgpO1xuICAgIGNvbnN0IF90b2tlblByaWNlPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMudGVtcFRva2VuUHJpY2UoKS5jYWxsKCk7XG4gICAgcmV0dXJuIHsgYWRkcmVzczogX2FkZHIsIHRva2VuUHJpY2U6X3Rva2VuUHJpY2UgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KClcbiAge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Rva2VuUHJpY2UgOiB0aGlzLnByb3BzLnRva2VuUHJpY2V9KTsgLy8gc2V0cyB0aGUgdG9rZW5QcmljZSBpbiBzdGF0ZSBmcm9tIHRoaXMucHJvcHNcbiAgfVxuXG4gIG9uU3dhcCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJPbnN1Ym1pdCBjYWxsZWQ6IFwiLCB0aGlzLnN0YXRlLnRva2VuQSk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIC8vIGF3YWl0IFVuaXN3YXAubWV0aG9kcy5zd2FwRXRoVG9Ub2tlbigpLnNlbmQoe1xuICAgIC8vICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgLy8gICB2YWx1ZTogdGhpcy5zdGF0ZS50b2tlbkEsXG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IGFjdCA9IHt0aGlzLnN0YXRlLmFjdGl2ZUl0ZW19IGhhbmRsZUl0ZW1DbGljayA9IHt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIvPlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwdmhcIiB9fVxuICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXG4gICAgICAgICAgICBjb2xvcj1cInBpbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgIDxTZWdtZW50ID5cbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25Td2FwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGluZm8+XG4gICAgICAgICAgICAgICAgICBTd2FwcGluZyBFdGggdG8gV2VlbnVzXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxuXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCIgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiBmbHVpZCBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbkF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRva2VuQTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBpY29uPVwid29yZHByZXNzXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiBmbHVpZFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VuQSAqIHRoaXMuc3RhdGUudG9rZW5QcmljZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicGlua1wiIGZsdWlkIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgU3dhcFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbmlzd2FwSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVbmlzd2FwIiwid2ViMyIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJJbnB1dCIsIkljb24iLCJNZXNzYWdlIiwiRGl2aWRlciIsIlRleHRBcmVhIiwiU2VnbWVudCIsIkNhcmQiLCJMYXlvdXQiLCJVbmlzd2FwSW5kZXgiLCJwcm9wcyIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIiwib25Td2FwIiwiZXZlbnQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidG9rZW5BIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJ0b2tlblByaWNlIiwiYWRkcmVzcyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiYWN0IiwiZGl2IiwibGluayIsImFzeW5jIiwicmVsIiwiaHJlZiIsInRleHRBbGlnbiIsInN0eWxlIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNvbG9yIiwiQ29sdW1uIiwibWF4V2lkdGgiLCJvblN1Ym1pdCIsImJpbmQiLCJpbmZvIiwic2l6ZSIsImljb24iLCJwbGFjZWhvbGRlciIsImZsdWlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJyIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2FkZHIiLCJfdG9rZW5QcmljZSIsIm1ldGhvZHMiLCJvd25lciIsImNhbGwiLCJ0ZW1wVG9rZW5QcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});