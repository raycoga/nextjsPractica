self["webpackHotUpdate_N_E"]("pages/users/[userName]",{

/***/ "./pages/users/[userName]/index.js":
/*!*****************************************!*\
  !*** ./pages/users/[userName]/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jesus\\Documents\\ProyectosPractica\\nextjsPractica\\pages\\users\\[userName]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/* import { useRouter } from "next/router"; */



var index = function index(_ref) {
  _s();

  var router = _ref.router;

  /*  const router = useRouter();   
  let pathname = router.asPath; */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      user = _useState[0],
      setUser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios.get(" https://jsonplaceholder.typicode.com/users/".concat(router.query.userName)).then(function (res) {
      setUser(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [user.name, " profile", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        return router.back();
      },
      children: "goBack"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(index, "9rrlmW18dif2CWdjQtBz3mD1j4E=");

/* harmony default export */ __webpack_exports__["default"] = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(index));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW3VzZXJOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInF1ZXJ5IiwidXNlck5hbWUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYmFjayIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUM1QjtBQUNGO0FBRjhCLGtCQUdKQywrQ0FBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3JCQyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBSTVCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUNGQyxHQURILHVEQUVtRE4sTUFBTSxDQUFDTyxLQUFQLENBQWFDLFFBRmhFLEdBSUdDLElBSkgsQ0FJUSxVQUFDQyxHQUFELEVBQVM7QUFDYlAsYUFBTyxDQUFDTyxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNELEtBTkgsV0FPUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxLQVRIO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQVlBUixrREFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0FBQ0Esc0JBQ0U7QUFBQSxlQUNHRixJQUFJLENBQUNhLElBRFIsMkJBRUU7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNZixNQUFNLENBQUNnQixJQUFQLEVBQU47QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0F2QkQ7O0dBQU1qQixLOztBQXlCTiwrREFBZWtCLHVEQUFVLENBQUNsQixLQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzL1t1c2VyTmFtZV0uYmFjYWM4NjI3MTI3YmRmMzVhODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgaW5kZXggPSAoeyByb3V0ZXIgfSkgPT4ge1xuICAvKiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7ICAgXG4gIGxldCBwYXRobmFtZSA9IHJvdXRlci5hc1BhdGg7ICovXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYCBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtyb3V0ZXIucXVlcnkudXNlck5hbWV9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHt1c2VyLm5hbWV9IHByb2ZpbGVcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+Z29CYWNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGluZGV4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=