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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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

  console.log(router);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(" https://jsonplaceholder.typicode.com/users/".concat(parseInt(router.query.userName))).then(function (res) {
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
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW3VzZXJOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwYXJzZUludCIsInF1ZXJ5IiwidXNlck5hbWUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIm5hbWUiLCJiYWNrIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUM1QjtBQUNGO0FBRjhCLGtCQUdKQywrQ0FBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3JCQyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBSTVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBTSxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsdURBRW1EQyxRQUFRLENBQ3JEUixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsUUFEd0MsQ0FGM0QsR0FNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxhQUFPLENBQUNTLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0QsS0FSSCxXQVNTLFVBQUNDLEdBQUQsRUFBUztBQUNkVixhQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBWjtBQUNELEtBWEg7QUFZRCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0FSLGtEQUFTLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxFQUFYLENBQVQ7QUFDQSxzQkFDRTtBQUFBLGVBQ0dKLElBQUksQ0FBQ2EsSUFEUiwyQkFFRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1mLE1BQU0sQ0FBQ2dCLElBQVAsRUFBTjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTFCRDs7R0FBTWpCLEs7O0FBNEJOLCtEQUFla0IsdURBQVUsQ0FBQ2xCLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW3VzZXJOYW1lXS40NmEzYTc1YmRhZDY1MjgyZWIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7ICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBpbmRleCA9ICh7IHJvdXRlciB9KSA9PiB7XG4gIC8qICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgICBcbiAgbGV0IHBhdGhuYW1lID0gcm91dGVyLmFzUGF0aDsgKi9cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcnNlSW50KFxuICAgICAgICAgIHJvdXRlci5xdWVyeS51c2VyTmFtZVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dXNlci5uYW1lfSBwcm9maWxlXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PmdvQmFjazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihpbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9