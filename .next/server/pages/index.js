"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/NumberBaseball.tsx":
/*!*******************************************!*\
  !*** ./src/components/NumberBaseball.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberBaseball)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Projects\\\\number-baseball-tdd\\\\src\\\\components\\\\NumberBaseball.tsx\";\n\n\n\nfunction NumberBaseball() {\n  let answerNumber = [];\n  const {\n    0: startButtonState,\n    1: setStartButtonState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const {\n    0: inputNumber,\n    1: setInputNumber\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const handleOnChangeInputNumber = event => {\n    setInputNumber(event.target.value);\n    console.log(inputNumber);\n  };\n\n  const onClickStartButton = () => {\n    while (answerNumber.length <= 2) {\n      const randomNumber = Math.floor(Math.random() * 10);\n\n      if (!answerNumber.includes(randomNumber)) {\n        answerNumber = [...answerNumber, randomNumber];\n        console.log(answerNumber);\n      }\n    }\n\n    console.log(answerNumber);\n    setStartButtonState(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StartButton, {\n      onClick: onClickStartButton,\n      startButtonState: startButtonState,\n      children: \"\\uC2DC\\uC791\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NumberInput, {\n      type: \"text\",\n      value: inputNumber,\n      onChange: handleOnChangeInputNumber\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"NumberBaseball__Wrapper\",\n  componentId: \"sc-ors208-0\"\n})([\"display:flex;flex-direction:column;\"]);\nconst StartButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({\n  displayName: \"NumberBaseball__StartButton\",\n  componentId: \"sc-ors208-1\"\n})([\"display:\", \";width:100px;height:50px;border:1px solid black;cursor:pointer;\"], props => props.startButtonState === false ? \"none\" : \"\");\nconst NumberInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({\n  displayName: \"NumberBaseball__NumberInput\",\n  componentId: \"sc-ors208-2\"\n})([\"width:500px;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OdW1iZXJCYXNlYmFsbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLGNBQVQsR0FBMEI7RUFDdkMsSUFBSUMsWUFBc0IsR0FBRyxFQUE3QjtFQUVBLE1BQU07SUFBQSxHQUFDQyxnQkFBRDtJQUFBLEdBQW1CQztFQUFuQixJQUEwQ0wsK0NBQVEsQ0FBVSxJQUFWLENBQXhEO0VBQ0EsTUFBTTtJQUFBLEdBQUNNLFdBQUQ7SUFBQSxHQUFjQztFQUFkLElBQWdDUCwrQ0FBUSxDQUFTLEVBQVQsQ0FBOUM7O0VBRUEsTUFBTVEseUJBQXlCLEdBQzdCQyxLQURnQyxJQUU3QjtJQUNIRixjQUFjLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWQ7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLFdBQVo7RUFDRCxDQUxEOztFQU9BLE1BQU1RLGtCQUFrQixHQUFHLE1BQU07SUFDL0IsT0FBT1gsWUFBWSxDQUFDWSxNQUFiLElBQXVCLENBQTlCLEVBQWlDO01BQy9CLE1BQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFyQjs7TUFDQSxJQUFJLENBQUNoQixZQUFZLENBQUNpQixRQUFiLENBQXNCSixZQUF0QixDQUFMLEVBQTBDO1FBQ3hDYixZQUFZLEdBQUcsQ0FBQyxHQUFHQSxZQUFKLEVBQWtCYSxZQUFsQixDQUFmO1FBQ0FKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixZQUFaO01BQ0Q7SUFDRjs7SUFDRFMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFlBQVo7SUFDQUUsbUJBQW1CLENBQUMsS0FBRCxDQUFuQjtFQUNELENBVkQ7O0VBWUEsb0JBQ0UsOERBQUMsT0FBRDtJQUFBLHdCQUNFLDhEQUFDLFdBQUQ7TUFDRSxPQUFPLEVBQUVTLGtCQURYO01BRUUsZ0JBQWdCLEVBQUVWLGdCQUZwQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBT0UsOERBQUMsV0FBRDtNQUNFLElBQUksRUFBQyxNQURQO01BRUUsS0FBSyxFQUFFRSxXQUZUO01BR0UsUUFBUSxFQUFFRTtJQUhaO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFQRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWVEO0FBRUQsTUFBTWEsT0FBTyxHQUFHcEIsdUVBQUg7RUFBQTtFQUFBO0FBQUEsMkNBQWI7QUFLQSxNQUFNc0IsV0FBVyxHQUFHdEIsMEVBQUg7RUFBQTtFQUFBO0FBQUEsb0ZBQ0h3QixLQUFELElBQVlBLEtBQUssQ0FBQ3JCLGdCQUFOLEtBQTJCLEtBQTNCLEdBQW1DLE1BQW5DLEdBQTRDLEVBRHBELENBQWpCO0FBUUEsTUFBTXNCLFdBQVcsR0FBR3pCLHlFQUFIO0VBQUE7RUFBQTtBQUFBLG9CQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL251bWJlci1iYXNlYmFsbC8uL3NyYy9jb21wb25lbnRzL051bWJlckJhc2ViYWxsLnRzeD85YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJCYXNlYmFsbCgpIHtcclxuICBsZXQgYW5zd2VyTnVtYmVyOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBjb25zdCBbc3RhcnRCdXR0b25TdGF0ZSwgc2V0U3RhcnRCdXR0b25TdGF0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbaW5wdXROdW1iZXIsIHNldElucHV0TnVtYmVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlSW5wdXROdW1iZXIgPSAoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICApID0+IHtcclxuICAgIHNldElucHV0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dE51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1N0YXJ0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgd2hpbGUgKGFuc3dlck51bWJlci5sZW5ndGggPD0gMikge1xyXG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGlmICghYW5zd2VyTnVtYmVyLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpIHtcclxuICAgICAgICBhbnN3ZXJOdW1iZXIgPSBbLi4uYW5zd2VyTnVtYmVyLCByYW5kb21OdW1iZXJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuc3dlck51bWJlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGFuc3dlck51bWJlcik7XHJcbiAgICBzZXRTdGFydEJ1dHRvblN0YXRlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxTdGFydEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tTdGFydEJ1dHRvbn1cclxuICAgICAgICBzdGFydEJ1dHRvblN0YXRlPXtzdGFydEJ1dHRvblN0YXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAg7Iuc7J6RXHJcbiAgICAgIDwvU3RhcnRCdXR0b24+XHJcbiAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17aW5wdXROdW1iZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlSW5wdXROdW1iZXJ9XHJcbiAgICAgID48L051bWJlcklucHV0PlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IHN0YXJ0QnV0dG9uU3RhdGU6IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5zdGFydEJ1dHRvblN0YXRlID09PSBmYWxzZSA/IFwibm9uZVwiIDogXCJcIil9O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDUwMHB4O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJOdW1iZXJCYXNlYmFsbCIsImFuc3dlck51bWJlciIsInN0YXJ0QnV0dG9uU3RhdGUiLCJzZXRTdGFydEJ1dHRvblN0YXRlIiwiaW5wdXROdW1iZXIiLCJzZXRJbnB1dE51bWJlciIsImhhbmRsZU9uQ2hhbmdlSW5wdXROdW1iZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2tTdGFydEJ1dHRvbiIsImxlbmd0aCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwiV3JhcHBlciIsImRpdiIsIlN0YXJ0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJOdW1iZXJJbnB1dCIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NumberBaseball.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _components_NumberBaseball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/NumberBaseball */ \"./src/components/NumberBaseball.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Projects\\\\number-baseball-tdd\\\\src\\\\pages\\\\index.tsx\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NumberBaseball__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7RUFDN0Isb0JBQ0U7SUFBQSx1QkFDRSw4REFBQyxrRUFBRDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL251bWJlci1iYXNlYmFsbC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVtYmVyQmFzZWJhbGwgZnJvbSBcIkAvY29tcG9uZW50cy9OdW1iZXJCYXNlYmFsbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE51bWJlckJhc2ViYWxsPjwvTnVtYmVyQmFzZWJhbGw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOdW1iZXJCYXNlYmFsbCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();