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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar SwapForm = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(SwapForm, _Component);\n    var _super = _createSuper(SwapForm);\n    function SwapForm() {\n        _classCallCheck(this, SwapForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            tokenA: '0',\n            tokenPrice: _this.props.tokPrice\n        });\n        _defineProperty(_assertThisInitialized(_this), \"onSwap\", function() {\n            var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            // event.preventDefault();\n                            console.log(\"Onsubmit called\");\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 4:\n                            accounts = _ctx.sent;\n                            _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.swapEthToToken().send({\n                                from: accounts[0],\n                                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(this.state.tokenA, \"ether\")\n                            });\n                            console.log(\"succesful\");\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(_ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, this, [\n                    [\n                        1,\n                        9\n                    ]\n                ]);\n            }).bind(this)).bind(this);\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(SwapForm, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                        onSubmit: this.onSwap.bind(this),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                                info: true,\n                                children: \"Swapping Eth to Weenus\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                size: \"large\",\n                                icon: \"ethereum\",\n                                placeholder: \"0.00\",\n                                fluid: true,\n                                value: this.state.tokenA,\n                                onChange: function(event) {\n                                    return _this.setState({\n                                        tokenA: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                size: \"large\",\n                                icon: \"wordpress\",\n                                placeholder: \"0.00\",\n                                fluid: true,\n                                value: this.state.tokenA * this.state.tokenPrice\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                color: \"pink\",\n                                fluid: true,\n                                size: \"large\",\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return SwapForm;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapForm);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDQTtBQUNOO0FBQ3NDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQlMsUUFBUSxpQkFBZCxRQUFROztjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7Ozt1REFDWkMsQ0FBSyxRQUFHLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQUc7WUFBRUMsVUFBVSxRQUFPQyxLQUFLLENBQUNDLFFBQVE7UUFBQyxDQUFDO3VEQUV4REMsQ0FBTTs4TkFBRyxRQUFRLFNBQURDLEtBQUssRUFBSyxDQUFDO29CQUlqQkMsUUFBUTs7Ozs0QkFIaEIsRUFBMEI7NEJBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQjs7O21DQUVKakIsc0VBQW9COzs0QkFBckNlLFFBQVE7NEJBQ2RoQixnRkFBOEIsR0FBR3VCLElBQUksQ0FBQyxDQUFDO2dDQUNyQ0MsSUFBSSxFQUFFUixRQUFRLENBQUMsQ0FBQztnQ0FDaEJTLEtBQUssRUFBRXhCLGtFQUFnQixDQUFDLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxNQUFNLEVBQUUsQ0FBTzs0QkFDcEQsQ0FBQzs0QkFDRE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVzs7Ozs7OzRCQUV2QkQsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztZQUVmLENBQUM7NEJBYmVILEtBQUs7Ozs7OztpQkFIakJQLFFBQVE7O1lBa0Jab0IsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDOztnQkFDUixNQUFNLDZFQUNIQyxDQUFHOzBHQUNEM0IsbURBQUk7d0JBQUM0QixRQUFRLEVBQUUsSUFBSSxDQUFDaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLElBQUk7O3dHQUNsQzFCLHNEQUFPO2dDQUFDMkIsSUFBSTswQ0FBQyxDQUFzQjs7Ozs7O3dHQUVuQzVCLG9EQUFLO2dDQUNKNkIsSUFBSSxFQUFDLENBQU87Z0NBQ1pDLElBQUksRUFBQyxDQUFVO2dDQUNmQyxXQUFXLEVBQUMsQ0FBTTtnQ0FDbEJDLEtBQUs7Z0NBQ0xYLEtBQUssRUFBRSxJQUFJLENBQUNoQixLQUFLLENBQUNDLE1BQU07Z0NBQ3hCMkIsUUFBUSxFQUFFLFFBQVEsQ0FBUHRCLEtBQUs7b0NBQUssTUFBTSxPQUFEdUIsUUFBUSxDQUFDLENBQUM7d0NBQUM1QixNQUFNLEVBQUVLLEtBQUssQ0FBQ3dCLE1BQU0sQ0FBQ2QsS0FBSztvQ0FBQyxDQUFDOzs7Ozs7O3dHQUVsRWUsQ0FBRTs7Ozs7d0dBQ0ZwQyxvREFBSztnQ0FDSjZCLElBQUksRUFBQyxDQUFPO2dDQUNaQyxJQUFJLEVBQUMsQ0FBVztnQ0FDaEJDLFdBQVcsRUFBQyxDQUFNO2dDQUNsQkMsS0FBSztnQ0FDTFgsS0FBSyxFQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxVQUFVOzs7Ozs7d0dBRWpETCxzREFBTzs7Ozs7d0dBQ1BILHFEQUFNO2dDQUFDc0MsS0FBSyxFQUFDLENBQU07Z0NBQUNMLEtBQUs7Z0NBQUNILElBQUksRUFBQyxDQUFPOzBDQUFDLENBRXhDOzs7Ozs7Ozs7Ozs7Ozs7OztZQUlSLENBQUM7OztXQS9DR3pCLFFBQVE7RUFBU1Qsd0RBQWU7QUFrRHRDLCtEQUFlUyxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwRm9ybS5qcz9lNGYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVbmlzd2FwIGZyb20gXCIuLi9ldGhlcmV1bS91bmlzd2FwXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBkZWYgZnJvbSBcIi4vTGF5b3V0XCI7XG5cbmNsYXNzIFN3YXBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHRva2VuQTogJzAnLCB0b2tlblByaWNlOiB0aGlzLnByb3BzLnRva1ByaWNlIH07XG5cbiAgb25Td2FwID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIk9uc3VibWl0IGNhbGxlZFwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgVW5pc3dhcC5tZXRob2RzLnN3YXBFdGhUb1Rva2VuKCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnRva2VuQSwgXCJldGhlclwiKSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNmdWxcIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25Td2FwLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxNZXNzYWdlIGluZm8+U3dhcHBpbmcgRXRoIHRvIFdlZW51czwvTWVzc2FnZT5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGljb249XCJldGhlcmV1bVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIlxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VuQX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB0b2tlbkE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGljb249XCJ3b3JkcHJlc3NcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbkEgKiB0aGlzLnN0YXRlLnRva2VuUHJpY2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwaW5rXCIgZmx1aWQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICBTd2FwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dhcEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwiVW5pc3dhcCIsIndlYjMiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiRGl2aWRlciIsImRlZiIsIlN3YXBGb3JtIiwic3RhdGUiLCJ0b2tlbkEiLCJ0b2tlblByaWNlIiwicHJvcHMiLCJ0b2tQcmljZSIsIm9uU3dhcCIsImV2ZW50IiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwic3dhcEV0aFRvVG9rZW4iLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInJlbmRlciIsImRpdiIsIm9uU3VibWl0IiwiYmluZCIsImluZm8iLCJzaXplIiwiaWNvbiIsInBsYWNlaG9sZGVyIiwiZmx1aWQiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiYnIiLCJjb2xvciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapForm.js\n");

/***/ })

});