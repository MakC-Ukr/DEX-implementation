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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar UniswapIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(UniswapIndex, Component1);\n    var _super = _createSuper(UniswapIndex);\n    function UniswapIndex() {\n        _classCallCheck(this, UniswapIndex);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            activeItem: 'home'\n        });\n        _defineProperty(_assertThisInitialized(_this), \"handleItemClick\", function(e, param) {\n            var name = param.name;\n            return _this.setState({\n                activeItem: name\n            });\n        });\n        return _this;\n    }\n    _createClass(UniswapIndex, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                                async: true,\n                                rel: \"stylesheet\",\n                                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                textAlign: \"center\",\n                                style: {\n                                    height: \"70vh\"\n                                },\n                                verticalAlign: \"middle\",\n                                color: \"pink\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                                    style: {\n                                        maxWidth: 450\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                                    info: true,\n                                                    children: \"Swap\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                    size: \"large\",\n                                                    icon: \"ethereum\",\n                                                    placeholder: \"0.00\",\n                                                    fluid: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                    size: \"large\",\n                                                    icon: \"wordpress\",\n                                                    placeholder: \"0.00\",\n                                                    fluid: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    color: \"pink\",\n                                                    fluid: true,\n                                                    size: \"large\",\n                                                    children: \"Approve\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _addr, activeItem;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.owner().call();\n                            case 2:\n                                _addr = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: _addr\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        }\n    ]);\n    return UniswapIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniswapIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQztBQUNBO0FBZ0JmO0FBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DaUIsWUFBWSxpQkFBbEIsUUFBUTs7Y0FBRkEsWUFBWTs4QkFBWkEsWUFBWTthQUFaQSxZQUFZOzhCQUFaQSxZQUFZOzs7dURBQ2hCQyxDQUFLLFFBQUcsQ0FBQztZQUFDQyxVQUFVLEVBQUUsQ0FBTTtRQUFDLENBQUM7dURBRTlCQyxDQUFlLGtCQUFHLFFBQVEsQ0FBUEMsQ0FBQztnQkFBSUMsSUFBSSxTQUFKQSxJQUFJO1lBQU8sTUFBTSxPQUFEQyxRQUFRLENBQUMsQ0FBQztnQkFBQ0osVUFBVSxFQUFFRyxJQUFJO1lBQUMsQ0FBQzs7OztpQkFIakVMLFlBQVk7O1lBYWhCTyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBRVIsTUFBTSw2RUFDSFIsMERBQU07MEdBQ0pTLENBQUc7O3dHQUNEQyxDQUFJO2dDQUFDQyxLQUFLO2dDQUFDQyxHQUFHLEVBQUMsQ0FBWTtnQ0FBQ0MsSUFBSSxFQUFDLENBQWtFOzs7Ozs7d0dBQ25HdkIsbURBQUk7Z0NBQ0h3QixTQUFTLEVBQUMsQ0FBUTtnQ0FDbEJDLEtBQUssRUFBRSxDQUFDO29DQUFDQyxNQUFNLEVBQUUsQ0FBTTtnQ0FBQyxDQUFDO2dDQUN6QkMsYUFBYSxFQUFDLENBQVE7Z0NBQ3RCQyxLQUFLLEVBQUMsQ0FBTTtzSEFFWDVCLDBEQUFXO29DQUFDeUIsS0FBSyxFQUFFLENBQUM7d0NBQUNLLFFBQVEsRUFBRSxHQUFHO29DQUFDLENBQUM7MEhBQ2xDdEIsc0RBQU87OEhBQ0xULG1EQUFJOzs0SEFDRk0sc0RBQU87b0RBQUMwQixJQUFJOzhEQUFDLENBRWQ7Ozs7Ozs0SEFDQzVCLG9EQUFLO29EQUFDNkIsSUFBSSxFQUFDLENBQU87b0RBQUNDLElBQUksRUFBQyxDQUFVO29EQUFDQyxXQUFXLEVBQUMsQ0FBTTtvREFBQ0MsS0FBSzs7Ozs7OzRIQUMzREMsQ0FBRTs7Ozs7NEhBQ0ZqQyxvREFBSztvREFBQzZCLElBQUksRUFBQyxDQUFPO29EQUFDQyxJQUFJLEVBQUMsQ0FBVztvREFBQ0MsV0FBVyxFQUFDLENBQU07b0RBQUNDLEtBQUs7Ozs7Ozs0SEFDNUQ3QixzREFBTzs7Ozs7NEhBQ1BULHFEQUFNO29EQUFDK0IsS0FBSyxFQUFDLENBQU07b0RBQUNPLEtBQUs7b0RBQUNILElBQUksRUFBQyxDQUFPOzhEQUFDLENBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFoQixDQUFDOzs7O1lBdkNZSyxHQUFlLEVBQWZBLENBQWU7bUJBQTVCLFFBQVEsQ0FBS0EsZUFBZTs4TkFBNUIsUUFBUSxXQUF1QixDQUFDO3dCQUN4QkMsS0FBSyxFQUVIekIsVUFBVTs7Ozs7dUNBRkVqQix1RUFBcUIsR0FBRzZDLElBQUk7O2dDQUExQ0gsS0FBSzs2REFDSixDQUFDO29DQUFDSSxPQUFPLEVBQUVKLEtBQUs7Z0NBQUMsQ0FBQzs7Ozs7O2dCQUczQixDQUFDOzs7O1dBWEczQixZQUFZO0VBQVNoQiw0Q0FBUztBQWdEcEMsK0RBQWVnQixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVW5pc3dhcCBmcm9tIFwiLi4vZXRoZXJldW0vdW5pc3dhcFwiO1xuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGb3JtLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEltYWdlLFxuICAvLyBNZW51LFxuICBJbnB1dCxcbiAgSWNvbixcbiAgTWVzc2FnZSxcbiAgRGl2aWRlcixcbiAgVGV4dEFyZWEsXG4gIFNlZ21lbnQsXG4gIENhcmQsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY2xhc3MgVW5pc3dhcEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJyB9O1xuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG5cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IF9hZGRyID0gYXdhaXQgVW5pc3dhcC5tZXRob2RzLm93bmVyKCkuY2FsbCgpO1xuICAgIHJldHVybiB7IGFkZHJlc3M6IF9hZGRyIH07XG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNzB2aFwiIH19XG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcbiAgICAgICAgICAgIGNvbG9yPVwicGlua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICAgIDxTZWdtZW50ID5cbiAgICAgICAgICAgICAgICA8Rm9ybT4gXG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZSBpbmZvPlxuICAgICAgICAgICAgICAgICAgICBTd2FwXG4gICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgaWNvbj1cImV0aGVyZXVtXCIgcGxhY2Vob2xkZXI9XCIwLjAwXCIgZmx1aWQgLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIGljb249XCJ3b3JkcHJlc3NcIiBwbGFjZWhvbGRlcj1cIjAuMDBcIiBmbHVpZCAvPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwaW5rXCIgZmx1aWQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbmlzd2FwSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVbmlzd2FwIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIklucHV0IiwiSWNvbiIsIk1lc3NhZ2UiLCJEaXZpZGVyIiwiVGV4dEFyZWEiLCJTZWdtZW50IiwiQ2FyZCIsIkxheW91dCIsIlVuaXN3YXBJbmRleCIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJkaXYiLCJsaW5rIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwidGV4dEFsaWduIiwic3R5bGUiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY29sb3IiLCJDb2x1bW4iLCJtYXhXaWR0aCIsImluZm8iLCJzaXplIiwiaWNvbiIsInBsYWNlaG9sZGVyIiwiZmx1aWQiLCJiciIsImdldEluaXRpYWxQcm9wcyIsIl9hZGRyIiwibWV0aG9kcyIsIm93bmVyIiwiY2FsbCIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});