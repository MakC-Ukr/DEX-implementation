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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar UniswapIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(UniswapIndex, Component1);\n    var _super = _createSuper(UniswapIndex);\n    function UniswapIndex(props) {\n        _classCallCheck(this, UniswapIndex);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"handleItemClick\", function(e, param) {\n            var name = param.name;\n            return _this.setState({\n                activeItem: name\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"onSwap\", function() {\n            var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            // event.preventDefault();\n                            console.log(\"Onsubmit called: \", this.state.tokenPrice);\n                            _ctx.next = 3;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 3:\n                            accounts = _ctx.sent;\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, this);\n            // await Uniswap.methods.swapEthToToken().send({\n            //   from: accounts[0],\n            //   value: this.state.tokenA,\n            // });\n            }).bind(this)).bind(this);\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        _this.state = {\n            activeItem: 'home',\n            tokenA: '0',\n            tokenPrice: '1',\n            address: ''\n        };\n        return _this;\n    }\n    _createClass(UniswapIndex, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                this.setState({\n                                    tokenPrice: this.props.tokenPrice\n                                }); // sets the tokenPrice in state from this.props\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    act: this.state.activeItem,\n                    handleItemClick: this.handleItemClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                                async: true,\n                                rel: \"stylesheet\",\n                                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                textAlign: \"center\",\n                                style: {\n                                    height: \"70vh\"\n                                },\n                                verticalAlign: \"middle\",\n                                color: \"pink\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                                    style: {\n                                        maxWidth: 450\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            onSubmit: this.onSwap,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {}, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    children: \"swap\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _addr, _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.owner().call();\n                            case 2:\n                                _addr = _ctx.sent;\n                                _ctx.next = 5;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 5:\n                                _tokenPrice = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: _addr,\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return UniswapIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniswapIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Z0NBQXhESCxXQUFXOzZEQUNWLENBQUM7b0NBQUN0QixPQUFPLEVBQUVxQixLQUFLO29DQUFFekIsVUFBVSxFQUFDMEIsV0FBVztnQ0FBQyxDQUFDOzs7Ozs7Z0JBQ25ELENBQUM7Ozs7V0FiR3ZDLFlBQVk7RUFBU2pCLDRDQUFTO0FBa0ZwQywrREFBZWlCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVbmlzd2FwIGZyb20gXCIuLi9ldGhlcmV1bS91bmlzd2FwXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGb3JtLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEltYWdlLFxuICAvLyBNZW51LFxuICBJbnB1dCxcbiAgSWNvbixcbiAgTWVzc2FnZSxcbiAgRGl2aWRlcixcbiAgVGV4dEFyZWEsXG4gIFNlZ21lbnQsXG4gIENhcmQsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuXG5cbmNsYXNzIFVuaXN3YXBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ2hvbWUnLCAgdG9rZW5BOiAnMCcsIHRva2VuUHJpY2UgOiAnMScsIGFkZHJlc3M6ICcnIH07XG4gIH1cblxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgX2FkZHIgPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMub3duZXIoKS5jYWxsKCk7XG4gICAgY29uc3QgX3Rva2VuUHJpY2U9IGF3YWl0IFVuaXN3YXAubWV0aG9kcy50ZW1wVG9rZW5QcmljZSgpLmNhbGwoKTtcbiAgICByZXR1cm4geyBhZGRyZXNzOiBfYWRkciwgdG9rZW5QcmljZTpfdG9rZW5QcmljZSB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKVxuICB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9rZW5QcmljZSA6IHRoaXMucHJvcHMudG9rZW5QcmljZX0pOyAvLyBzZXRzIHRoZSB0b2tlblByaWNlIGluIHN0YXRlIGZyb20gdGhpcy5wcm9wc1xuICB9XG5cbiAgIG9uU3dhcCA9YXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIk9uc3VibWl0IGNhbGxlZDogXCIsIHRoaXMuc3RhdGUudG9rZW5QcmljZSk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIC8vIGF3YWl0IFVuaXN3YXAubWV0aG9kcy5zd2FwRXRoVG9Ub2tlbigpLnNlbmQoe1xuICAgIC8vICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgLy8gICB2YWx1ZTogdGhpcy5zdGF0ZS50b2tlbkEsXG4gICAgLy8gfSk7XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBhY3QgPSB7dGhpcy5zdGF0ZS5hY3RpdmVJdGVtfSBoYW5kbGVJdGVtQ2xpY2sgPSB7dGhpcy5oYW5kbGVJdGVtQ2xpY2t9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiLz5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI3MHZoXCIgfX1cbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxuICAgICAgICAgICAgY29sb3I9XCJwaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICA8U2VnbWVudCA+XG4gICAgICAgICAgICAgIHsvKiA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN3YXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgaW5mbz5cbiAgICAgICAgICAgICAgICAgIFN3YXBwaW5nIEV0aCB0byBXZWVudXNcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBpY29uPVwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGZsdWlkIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VuQX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgdG9rZW5BOiBldmVudC50YXJnZXQudmFsdWUgfSkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiIGljb249XCJ3b3JkcHJlc3NcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGZsdWlkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9rZW5BICogdGhpcy5zdGF0ZS50b2tlblByaWNlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwaW5rXCIgZmx1aWQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICBTd2FwXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybT4gKi99XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3dhcH0+XG4gICAgICAgICAgICAgICAgPGlucHV0Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgc3dhcFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbmlzd2FwSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVbmlzd2FwIiwid2ViMyIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJJbnB1dCIsIkljb24iLCJNZXNzYWdlIiwiRGl2aWRlciIsIlRleHRBcmVhIiwiU2VnbWVudCIsIkNhcmQiLCJMYXlvdXQiLCJVbmlzd2FwSW5kZXgiLCJwcm9wcyIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIiwib25Td2FwIiwiZXZlbnQiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInRva2VuUHJpY2UiLCJldGgiLCJnZXRBY2NvdW50cyIsInRva2VuQSIsImFkZHJlc3MiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsImFjdCIsImRpdiIsImxpbmsiLCJhc3luYyIsInJlbCIsImhyZWYiLCJ0ZXh0QWxpZ24iLCJzdHlsZSIsImhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJjb2xvciIsIkNvbHVtbiIsIm1heFdpZHRoIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJidXR0b24iLCJnZXRJbml0aWFsUHJvcHMiLCJfYWRkciIsIl90b2tlblByaWNlIiwibWV0aG9kcyIsIm93bmVyIiwiY2FsbCIsInRlbXBUb2tlblByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});