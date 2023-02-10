self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users/components/itemUsers/ItemUsers.jsx":
/*!********************************************************!*\
  !*** ./pages/users/components/itemUsers/ItemUsers.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jesus\\Documents\\ProyectosPractica\\nextjsPractica\\pages\\users\\components\\itemUsers\\ItemUsers.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var ItemUsers = function ItemUsers(_ref) {
  _s();

  var _ref$usuarios = _ref.usuarios,
      usuarios = _ref$usuarios === void 0 ? [{
    name: "usuario1",
    edad: "26",
    sexo: "masculino"
  }] : _ref$usuarios;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  /*  const handleClick = (e, user) => {
    e.preventDefault();
    router.push(`/users/${user}`);
  }; */

  var renderUsers = usuarios.map(function (res, key) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/users/[userName]",
          as: "/users/".concat(res.username),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: res.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [res.phone, " - ", res.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, key, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Lista de usuarios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), renderUsers]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(ItemUsers, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = ItemUsers;
/* harmony default export */ __webpack_exports__["default"] = (ItemUsers);

var _c;

$RefreshReg$(_c, "ItemUsers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvY29tcG9uZW50cy9pdGVtVXNlcnMvSXRlbVVzZXJzLmpzeCJdLCJuYW1lcyI6WyJJdGVtVXNlcnMiLCJ1c3VhcmlvcyIsIm5hbWUiLCJlZGFkIiwic2V4byIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlclVzZXJzIiwibWFwIiwicmVzIiwia2V5IiwidXNlcm5hbWUiLCJwaG9uZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FFWjtBQUFBOztBQUFBLDJCQURKQyxRQUNJO0FBQUEsTUFESkEsUUFDSSw4QkFETyxDQUFDO0FBQUVDLFFBQUksRUFBRSxVQUFSO0FBQW9CQyxRQUFJLEVBQUUsSUFBMUI7QUFBZ0NDLFFBQUksRUFBRTtBQUF0QyxHQUFELENBQ1A7QUFDSixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7O0FBRUUsTUFBTUMsV0FBVyxHQUFHTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3Qyx3QkFDRTtBQUFBLDhCQUNFO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsbUJBQVg7QUFBK0IsWUFBRSxtQkFBWUQsR0FBRyxDQUFDRSxRQUFoQixDQUFqQztBQUFBLGlDQUNFO0FBQUEsc0JBQW9ERixHQUFHLENBQUNQO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBQSxtQkFDR08sR0FBRyxDQUFDRyxLQURQLFNBQ2lCSCxHQUFHLENBQUNJLEtBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUEsT0FBVUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRCxHQWJtQixDQUFwQjtBQWVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHSCxXQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0EvQkQ7O0dBQU1QLFM7VUFHV00sa0Q7OztLQUhYTixTO0FBaUNOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzLjllODQ4YTM4YzhhZTZhZmMxZTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSXRlbVVzZXJzID0gKHtcbiAgdXN1YXJpb3MgPSBbeyBuYW1lOiBcInVzdWFyaW8xXCIsIGVkYWQ6IFwiMjZcIiwgc2V4bzogXCJtYXNjdWxpbm9cIiB9XSxcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLyogIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIHVzZXIpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goYC91c2Vycy8ke3VzZXJ9YCk7XG4gIH07ICovXG5cbiAgY29uc3QgcmVuZGVyVXNlcnMgPSB1c3Vhcmlvcy5tYXAoKHJlcywga2V5KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlck5hbWVdXCIgYXM9e2AvdXNlcnMvJHtyZXMudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8YSAvKiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgcmVzLm5hbWUpfSAqLz57cmVzLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3Jlcy5waG9uZX0gLSB7cmVzLmVtYWlsfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TGlzdGEgZGUgdXN1YXJpb3M8L2gyPlxuICAgICAge3JlbmRlclVzZXJzfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVVzZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==