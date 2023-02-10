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






var usuarios = [{
  name: "usuario1",
  edad: "26",
  sexo: "masculino"
}, {
  name: "usuario2",
  edad: "24",
  sexo: "femenino"
}];

var Users = function Users() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://jsonplaceholder.typicode.com/users").then(function (res) {
      console.log(res);
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
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemUsers_ItemUsers__WEBPACK_IMPORTED_MODULE_2__.default, {
      usuarios: usuarios
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Users, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzdWFyaW9zIiwibmFtZSIsImVkYWQiLCJzZXhvIiwiVXNlcnMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsTUFBSSxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRSxJQUExQjtBQUFnQ0MsTUFBSSxFQUFFO0FBQXRDLENBRGUsRUFFZjtBQUFFRixNQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBSSxFQUFFLElBQTFCO0FBQWdDQyxNQUFJLEVBQUU7QUFBdEMsQ0FGZSxDQUFqQjs7QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsQ0FDTyw0Q0FEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNHLEdBQUQsRUFBUztBQUNkRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNELEtBUEg7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsc0VBQWY7QUFBQSw0Q0FFRTtBQUFNLGlCQUFTLEVBQUVBLHFFQUFqQjtBQUE4QixVQUFFLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLDhEQUFDLG9FQUFEO0FBQWEsY0FBUSxFQUFFWjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXRCRDs7R0FBTUksSzs7S0FBQUEsSztBQXdCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy4zNzM0ZWYyNTZiMzRlYWZlZTRhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVuZGVyVXNlcnMgZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtVXNlcnMvSXRlbVVzZXJzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdXNlcnNTdHlsZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QgdXN1YXJpb3MgPSBbXG4gIHsgbmFtZTogXCJ1c3VhcmlvMVwiLCBlZGFkOiBcIjI2XCIsIHNleG86IFwibWFzY3VsaW5vXCIgfSxcbiAgeyBuYW1lOiBcInVzdWFyaW8yXCIsIGVkYWQ6IFwiMjRcIiwgc2V4bzogXCJmZW1lbmlub1wiIH0sXG5dO1xuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgVXNlcnMgcGFnZVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufSBpZD1cImhvbGFcIj5cbiAgICAgICAgICBhc2Rhc2RcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxSZW5kZXJVc2VycyB1c3Vhcmlvcz17dXN1YXJpb3N9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=