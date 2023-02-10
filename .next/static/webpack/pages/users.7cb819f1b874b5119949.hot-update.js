self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users/index.jsx":
/*!*******************************!*\
  !*** ./pages/users/index.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_itemUsers_ItemUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/itemUsers/ItemUsers */ "./pages/users/components/itemUsers/ItemUsers.jsx");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.jsx");
/* harmony import */ var _usersStyle_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usersStyle.module.scss */ "./pages/users/usersStyle.module.scss");
/* harmony import */ var _usersStyle_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usersStyle_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jesus\\Documents\\ProyectosPractica\\nextjsPractica\\pages\\users\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Users = function Users() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      users = _useState[0],
      setUsers = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://jsonplaceholder.typicode.com/users").then(function (res) {
      console.log(res);
      setUsers(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_usersStyle_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
      children: ["Users page", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_usersStyle_module_scss__WEBPACK_IMPORTED_MODULE_5___default().span),
        id: "hola",
        children: "asdasd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemUsers_ItemUsers__WEBPACK_IMPORTED_MODULE_2__.default, {
      usuarios: users
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Users, "JadZszbqna06PpJs9hMo7Hl/LOY=");

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlVzZXJzIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNYQyxLQURXO0FBQUEsTUFDSkMsUUFESTs7QUFFbEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxvREFBQSxDQUNPLDRDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUosY0FBUSxDQUFDSSxHQUFHLENBQUNHLElBQUwsQ0FBUjtBQUNELEtBTEgsV0FNUyxVQUFDQyxHQUFELEVBQVM7QUFDZEgsYUFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRCxLQVJIO0FBU0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVdBLHNCQUNFLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVDLHNFQUFmO0FBQUEsNENBRUU7QUFBTSxpQkFBUyxFQUFFQSxxRUFBakI7QUFBOEIsVUFBRSxFQUFDLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxvRUFBRDtBQUFhLGNBQVEsRUFBRVY7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0F4QkQ7O0dBQU1GLEs7O0tBQUFBLEs7QUEwQk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuN2NiODE5ZjFiODc0YjUxMTk5NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZW5kZXJVc2VycyBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1Vc2Vycy9JdGVtVXNlcnNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dHMvTWFpbkxheW91dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi91c2Vyc1N0eWxlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBzZXRVc2VycyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIFVzZXJzIHBhZ2VcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0gaWQ9XCJob2xhXCI+XG4gICAgICAgICAgYXNkYXNkXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8UmVuZGVyVXNlcnMgdXN1YXJpb3M9e3VzZXJzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9