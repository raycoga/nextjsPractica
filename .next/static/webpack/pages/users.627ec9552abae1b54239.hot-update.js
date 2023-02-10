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
        children: [res.edad, " - ", res.sexo]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvY29tcG9uZW50cy9pdGVtVXNlcnMvSXRlbVVzZXJzLmpzeCJdLCJuYW1lcyI6WyJJdGVtVXNlcnMiLCJ1c3VhcmlvcyIsIm5hbWUiLCJlZGFkIiwic2V4byIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlclVzZXJzIiwibWFwIiwicmVzIiwia2V5IiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUVaO0FBQUE7O0FBQUEsMkJBREpDLFFBQ0k7QUFBQSxNQURKQSxRQUNJLDhCQURPLENBQUM7QUFBRUMsUUFBSSxFQUFFLFVBQVI7QUFBb0JDLFFBQUksRUFBRSxJQUExQjtBQUFnQ0MsUUFBSSxFQUFFO0FBQXRDLEdBQUQsQ0FDUDtBQUNKLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQTtBQUNGO0FBQ0E7QUFDQTs7QUFFRSxNQUFNQyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzdDLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxtQkFBWDtBQUErQixZQUFFLG1CQUFZRCxHQUFHLENBQUNFLFFBQWhCLENBQWpDO0FBQUEsaUNBQ0U7QUFBQSxzQkFBb0RGLEdBQUcsQ0FBQ1A7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFBLG1CQUNHTyxHQUFHLENBQUNOLElBRFAsU0FDZ0JNLEdBQUcsQ0FBQ0wsSUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQSxPQUFVTSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBYm1CLENBQXBCO0FBZUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdILFdBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQS9CRDs7R0FBTVAsUztVQUdXTSxrRDs7O0tBSFhOLFM7QUFpQ04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNjI3ZWM5NTUyYWJhZTFiNTQyMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBJdGVtVXNlcnMgPSAoe1xuICB1c3VhcmlvcyA9IFt7IG5hbWU6IFwidXN1YXJpbzFcIiwgZWRhZDogXCIyNlwiLCBzZXhvOiBcIm1hc2N1bGlub1wiIH1dLFxufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvKiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgdXNlcikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaChgL3VzZXJzLyR7dXNlcn1gKTtcbiAgfTsgKi9cblxuICBjb25zdCByZW5kZXJVc2VycyA9IHVzdWFyaW9zLm1hcCgocmVzLCBrZXkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICAgIDxoND5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyTmFtZV1cIiBhcz17YC91c2Vycy8ke3Jlcy51c2VybmFtZX1gfT5cbiAgICAgICAgICAgIDxhIC8qIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCByZXMubmFtZSl9ICovPntyZXMubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7cmVzLmVkYWR9IC0ge3Jlcy5zZXhvfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TGlzdGEgZGUgdXN1YXJpb3M8L2gyPlxuICAgICAge3JlbmRlclVzZXJzfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVVzZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==