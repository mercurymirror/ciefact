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

/***/ "./pages/spectacle/index.js":
/*!**********************************!*\
  !*** ./pages/spectacle/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mac/Documents/Documents - macs MacBook Pro/cieFact/my-project/frontend/pages/spectacle/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Spectacles = function Spectacles(_ref) {\n  _s();\n\n  var spectacles = _ref.spectacles;\n  var imagesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n\n  var handleHover = function handleHover(e, id) {\n    gsap__WEBPACK_IMPORTED_MODULE_4__.default.to(imagesRef.current[id], {\n      display: \"block\",\n      delay: \"none\"\n    });\n  };\n\n  var handleHoverExit = function handleHoverExit(e, id) {\n    gsap__WEBPACK_IMPORTED_MODULE_4__.default.to(imagesRef.current[id], {\n      display: \"none\",\n      delay: \"none\"\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"tableau\",\n        children: spectacles.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n            onMouseEnter: function onMouseEnter(e) {\n              return handleHover(e, item.id);\n            },\n            onMouseOut: function onMouseOut(e) {\n              return handleHoverExit(e, item.id);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              as: \"/spectacle/\".concat(item.title),\n              href: \"/spectacle/\".concat(item.id),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                className: \"titre\",\n                children: [item.title, \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n              className: \"imgHome\",\n              src: item.image.url,\n              width: \"900\",\n              ref: function ref(el) {\n                return imagesRef.current[item.id] = el;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this)]\n          }, item.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Spectacles, \"3QCmPH1gS8wwrKKGhK5CQNtK6H4=\");\n\n_c = Spectacles;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spectacles);\n\nvar _c;\n\n$RefreshReg$(_c, \"Spectacles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcGVjdGFjbGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBRXJDLE1BQU1DLFNBQVMsR0FBR1QsNkNBQU0sQ0FBQyxFQUFELENBQXhCOztBQUVBLE1BQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFXO0FBQzdCUCxJQUFBQSw0Q0FBQSxDQUFRSSxTQUFTLENBQUNLLE9BQVYsQ0FBa0JGLEVBQWxCLENBQVIsRUFBK0I7QUFDN0JHLE1BQUFBLE9BQU8sRUFBRSxPQURvQjtBQUU3QkMsTUFBQUEsS0FBSyxFQUFFO0FBRnNCLEtBQS9CO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNOLENBQUQsRUFBSUMsRUFBSixFQUFXO0FBQ2pDUCxJQUFBQSw0Q0FBQSxDQUFRSSxTQUFTLENBQUNLLE9BQVYsQ0FBa0JGLEVBQWxCLENBQVIsRUFBK0I7QUFDN0JHLE1BQUFBLE9BQU8sRUFBRSxNQURvQjtBQUU3QkMsTUFBQUEsS0FBSyxFQUFFO0FBRnNCLEtBQS9CO0FBSUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxrQkFDR1IsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNkLDhEQUFDLGdEQUFEO0FBQ0Usd0JBQVksRUFBRSxzQkFBQ1IsQ0FBRDtBQUFBLHFCQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSVEsSUFBSSxDQUFDUCxFQUFULENBQWxCO0FBQUEsYUFEaEI7QUFFRSxzQkFBVSxFQUFFLG9CQUFDRCxDQUFEO0FBQUEscUJBQU9NLGVBQWUsQ0FBQ04sQ0FBRCxFQUFJUSxJQUFJLENBQUNQLEVBQVQsQ0FBdEI7QUFBQSxhQUZkO0FBQUEsb0NBSUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBRSx1QkFBZ0JPLElBQUksQ0FBQ0MsS0FBckIsQ0FBUjtBQUFzQyxrQkFBSSx1QkFBZ0JELElBQUksQ0FBQ1AsRUFBckIsQ0FBMUM7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsT0FBYjtBQUFBLDJCQUNFTyxJQUFJLENBQUNDLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQVFFO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQXlCLGlCQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxHQUF6QztBQUNFLG1CQUFLLEVBQUMsS0FEUjtBQUVFLGlCQUFHLEVBQUUsYUFBQ0MsRUFBRDtBQUFBLHVCQUFTZCxTQUFTLENBQUNLLE9BQVYsQ0FBa0JLLElBQUksQ0FBQ1AsRUFBdkIsSUFBNkJXLEVBQXRDO0FBQUE7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUEsYUFBVUosSUFBSSxDQUFDUCxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0ExQ0Q7O0dBQU1MOztLQUFBQTs7QUF3RE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlY3RhY2xlL2luZGV4LmpzPzRjYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCI7XG5cblxuY29uc3QgU3BlY3RhY2xlcyA9ICh7IHNwZWN0YWNsZXMgfSkgPT4ge1xuXG4gIGNvbnN0IGltYWdlc1JlZiA9IHVzZVJlZih7fSk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAoZSwgaWQpID0+IHtcbiAgICBnc2FwLnRvKGltYWdlc1JlZi5jdXJyZW50W2lkXSwge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgZGVsYXk6IFwibm9uZVwiXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUhvdmVyRXhpdCA9IChlLCBpZCkgPT4ge1xuICAgIGdzYXAudG8oaW1hZ2VzUmVmLmN1cnJlbnRbaWRdLCB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgIGRlbGF5OiBcIm5vbmVcIlxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlYXVcIj5cbiAgICAgICAgICB7c3BlY3RhY2xlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxSb3cga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiBoYW5kbGVIb3ZlcihlLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IGhhbmRsZUhvdmVyRXhpdChlLCBpdGVtLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2Avc3BlY3RhY2xlLyR7aXRlbS50aXRsZX1gfSBocmVmPXtgL3NwZWN0YWNsZS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0cmVcIlxuICAgICAgICAgICAgICAgID57aXRlbS50aXRsZX0gPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nSG9tZVwiIHNyYz17aXRlbS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI5MDBcIlxuICAgICAgICAgICAgICAgIHJlZj17KGVsKSA9PiAoaW1hZ2VzUmVmLmN1cnJlbnRbaXRlbS5pZF0gPSBlbCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbIHNwZWN0YWNsZXMgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi9zcGVjdGFjbGVzXCIpLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc3BlY3RhY2xlcyB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlY3RhY2xlcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlJvdyIsIkNvbCIsIkNvbnRhaW5lciIsIkxpbmsiLCJnc2FwIiwiZ2V0U3RyYXBpTWVkaWEiLCJTcGVjdGFjbGVzIiwic3BlY3RhY2xlcyIsImltYWdlc1JlZiIsImhhbmRsZUhvdmVyIiwiZSIsImlkIiwidG8iLCJjdXJyZW50IiwiZGlzcGxheSIsImRlbGF5IiwiaGFuZGxlSG92ZXJFeGl0IiwibWFwIiwiaXRlbSIsInRpdGxlIiwiaW1hZ2UiLCJ1cmwiLCJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/spectacle/index.js\n");

/***/ })

});