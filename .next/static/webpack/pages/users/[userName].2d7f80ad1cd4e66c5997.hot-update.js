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
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(" https://jsonplaceholder.typicode.com/users/".concat(router.query.userName)).then(function (res) {
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
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW3VzZXJOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJxdWVyeSIsInVzZXJOYW1lIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJuYW1lIiwiYmFjayIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDNUI7QUFDRjtBQUY4QixrQkFHSkMsK0NBQVEsQ0FBQyxFQUFELENBSEo7QUFBQSxNQUdyQkMsSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUk1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDQU0sa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLG9EQUFBLHVEQUVtRFAsTUFBTSxDQUFDUSxLQUFQLENBQWFDLFFBRmhFLEdBSUdDLElBSkgsQ0FJUSxVQUFDQyxHQUFELEVBQVM7QUFDYlIsYUFBTyxDQUFDUSxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNELEtBTkgsV0FPUyxVQUFDQyxHQUFELEVBQVM7QUFDZFQsYUFBTyxDQUFDQyxHQUFSLENBQVlRLEdBQVo7QUFDRCxLQVRIO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQVlBUCxrREFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0FBQ0Esc0JBQ0U7QUFBQSxlQUNHSixJQUFJLENBQUNZLElBRFIsMkJBRUU7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNZCxNQUFNLENBQUNlLElBQVAsRUFBTjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXhCRDs7R0FBTWhCLEs7O0FBMEJOLCtEQUFlaUIsdURBQVUsQ0FBQ2pCLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW3VzZXJOYW1lXS4yZDdmODBhZDFjZDRlNjZjNTk5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7ICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBpbmRleCA9ICh7IHJvdXRlciB9KSA9PiB7XG4gIC8qICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgICBcbiAgbGV0IHBhdGhuYW1lID0gcm91dGVyLmFzUGF0aDsgKi9cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3JvdXRlci5xdWVyeS51c2VyTmFtZX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXIubmFtZX0gcHJvZmlsZVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5nb0JhY2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoaW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==