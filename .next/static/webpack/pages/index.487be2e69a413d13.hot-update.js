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

/***/ "./src/components/NumberBaseball.tsx":
/*!*******************************************!*\
  !*** ./src/components/NumberBaseball.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NumberBaseball; }\n/* harmony export */ });\n/* harmony import */ var C_Projects_number_baseball_tdd_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"C:\\\\Projects\\\\number-baseball-tdd\\\\src\\\\components\\\\NumberBaseball.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction NumberBaseball() {\n  _s();\n\n  var answerNumber = [];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      startButtonState = _useState[0],\n      setStartButtonState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      inputNumber = _useState2[0],\n      setInputNumber = _useState2[1];\n\n  var onClickStartButton = function onClickStartButton() {\n    while (answerNumber.length <= 2) {\n      var randomNumber = Math.floor(Math.random() * 10);\n\n      if (!answerNumber.includes(randomNumber)) {\n        answerNumber = [].concat((0,C_Projects_number_baseball_tdd_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(answerNumber), [randomNumber]);\n        console.log(answerNumber);\n      }\n    }\n\n    console.log(answerNumber);\n    setStartButtonState(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StartButton, {\n      onClick: onClickStartButton,\n      startButtonState: startButtonState,\n      children: \"\\uC2DC\\uC791\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NumberBaseball, \"Pn8SBO7ZX3zcaj97YgrpUStWOvM=\");\n\n_c = NumberBaseball;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"NumberBaseball__Wrapper\",\n  componentId: \"sc-ors208-0\"\n})([\"\"]);\n_c2 = Wrapper;\nvar StartButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"NumberBaseball__StartButton\",\n  componentId: \"sc-ors208-1\"\n})([\"display:\", \";width:100px;height:50px;border:1px solid black;cursor:pointer;\"], function (props) {\n  return props.startButtonState === false ? \"none\" : \"\";\n});\n_c3 = StartButton;\nvar NumberInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n  displayName: \"NumberBaseball__NumberInput\",\n  componentId: \"sc-ors208-2\"\n})([\"\"]);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NumberBaseball\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"StartButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OdW1iZXJCYXNlYmFsbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRWUsU0FBU0UsY0FBVCxHQUEwQjtFQUFBOztFQUN2QyxJQUFJQyxZQUFzQixHQUFHLEVBQTdCOztFQUVBLGdCQUFnREgsK0NBQVEsQ0FBVSxJQUFWLENBQXhEO0VBQUEsSUFBT0ksZ0JBQVA7RUFBQSxJQUF5QkMsbUJBQXpCOztFQUNBLGlCQUFzQ0wsK0NBQVEsQ0FBUyxFQUFULENBQTlDO0VBQUEsSUFBT00sV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07SUFDL0IsT0FBT0wsWUFBWSxDQUFDTSxNQUFiLElBQXVCLENBQTlCLEVBQWlDO01BQy9CLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFyQjs7TUFDQSxJQUFJLENBQUNWLFlBQVksQ0FBQ1csUUFBYixDQUFzQkosWUFBdEIsQ0FBTCxFQUEwQztRQUN4Q1AsWUFBWSx1S0FBT0EsWUFBUCxJQUFxQk8sWUFBckIsRUFBWjtRQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsWUFBWjtNQUNEO0lBQ0Y7O0lBQ0RZLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixZQUFaO0lBQ0FFLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7RUFDRCxDQVZEOztFQVlBLG9CQUNFLDhEQUFDLE9BQUQ7SUFBQSx3QkFDRSw4REFBQyxXQUFEO01BQ0UsT0FBTyxFQUFFRyxrQkFEWDtNQUVFLGdCQUFnQixFQUFFSixnQkFGcEI7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQU9FLDZJQVBGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBV0Q7O0dBN0J1QkY7O0tBQUFBO0FBK0J4QixJQUFNZSxPQUFPLEdBQUdoQix3RUFBSDtFQUFBO0VBQUE7QUFBQSxRQUFiO01BQU1nQjtBQUVOLElBQU1FLFdBQVcsR0FBR2xCLDJFQUFIO0VBQUE7RUFBQTtBQUFBLG9GQUNKLFVBQUNvQixLQUFEO0VBQUEsT0FBWUEsS0FBSyxDQUFDakIsZ0JBQU4sS0FBMkIsS0FBM0IsR0FBbUMsTUFBbkMsR0FBNEMsRUFBeEQ7QUFBQSxDQURJLENBQWpCO01BQU1lO0FBUU4sSUFBTUcsV0FBVyxHQUFHckIsMEVBQUg7RUFBQTtFQUFBO0FBQUEsUUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTnVtYmVyQmFzZWJhbGwudHN4PzlhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE51bWJlckJhc2ViYWxsKCkge1xyXG4gIGxldCBhbnN3ZXJOdW1iZXI6IG51bWJlcltdID0gW107XHJcblxyXG4gIGNvbnN0IFtzdGFydEJ1dHRvblN0YXRlLCBzZXRTdGFydEJ1dHRvblN0YXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtpbnB1dE51bWJlciwgc2V0SW5wdXROdW1iZXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1N0YXJ0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgd2hpbGUgKGFuc3dlck51bWJlci5sZW5ndGggPD0gMikge1xyXG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGlmICghYW5zd2VyTnVtYmVyLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpIHtcclxuICAgICAgICBhbnN3ZXJOdW1iZXIgPSBbLi4uYW5zd2VyTnVtYmVyLCByYW5kb21OdW1iZXJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuc3dlck51bWJlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGFuc3dlck51bWJlcik7XHJcbiAgICBzZXRTdGFydEJ1dHRvblN0YXRlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxTdGFydEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tTdGFydEJ1dHRvbn1cclxuICAgICAgICBzdGFydEJ1dHRvblN0YXRlPXtzdGFydEJ1dHRvblN0YXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAg7Iuc7J6RXHJcbiAgICAgIDwvU3RhcnRCdXR0b24+XHJcbiAgICAgIDw+PC8+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IHN0YXJ0QnV0dG9uU3RhdGU6IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5zdGFydEJ1dHRvblN0YXRlID09PSBmYWxzZSA/IFwibm9uZVwiIDogXCJcIil9O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJOdW1iZXJCYXNlYmFsbCIsImFuc3dlck51bWJlciIsInN0YXJ0QnV0dG9uU3RhdGUiLCJzZXRTdGFydEJ1dHRvblN0YXRlIiwiaW5wdXROdW1iZXIiLCJzZXRJbnB1dE51bWJlciIsIm9uQ2xpY2tTdGFydEJ1dHRvbiIsImxlbmd0aCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIldyYXBwZXIiLCJkaXYiLCJTdGFydEJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiTnVtYmVySW5wdXQiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NumberBaseball.tsx\n"));

/***/ })

});