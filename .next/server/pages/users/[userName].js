(function() {
var exports = {};
exports.id = "pages/users/[userName]";
exports.ids = ["pages/users/[userName]"];
exports.modules = {

/***/ "./pages/users/[userName]/index.js":
/*!*****************************************!*\
  !*** ./pages/users/[userName]/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Jesus\\Documents\\ProyectosPractica\\nextjsPractica\\pages\\users\\[userName]\\index.js";

/* import { useRouter } from "next/router"; */




const index = ({
  user,
  router
}) => {
  /*   const router = useRouter(); */

  /*let pathname = router.asPath; */

  /*   const [user, setUser] = useState({});
    useEffect(() => {
    axios
      .get(
        ` https://jsonplaceholder.typicode.com/users/${parseInt(
          router.query.userName
        )}`
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [user.name, " profile", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => router.back(),
      children: "goBack"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(index));
const getServerSideProps = async context => {
  /* Esto solo se hara si se necesita pre cargar data antes de que renderizar el componente 
  https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
  */
  let user = [],
      errors = undefined;

  try {
    const res = await fetch(` https://jsonplaceholder.typicode.com/users/${parseInt(context.params.userName)}`);
    user = await res.json();
  } catch (error) {
    errors = error;
  }

  if (errors) {
    return {
      errors
    };
  }

  if (!user) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      user
    } // will be passed to the page component as props

  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/users/[userName]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNwcmFjdGljYS8uL3BhZ2VzL3VzZXJzL1t1c2VyTmFtZV0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzcHJhY3RpY2EvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRqc3ByYWN0aWNhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anNwcmFjdGljYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzcHJhY3RpY2EvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbmRleCIsInVzZXIiLCJyb3V0ZXIiLCJuYW1lIiwiYmFjayIsIndpdGhSb3V0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZXJyb3JzIiwidW5kZWZpbmVkIiwicmVzIiwiZmV0Y2giLCJwYXJzZUludCIsInBhcmFtcyIsInVzZXJOYW1lIiwianNvbiIsImVycm9yIiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQXNCO0FBQ2xDOztBQUNBOztBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFLHNCQUNFO0FBQUEsZUFDR0QsSUFBSSxDQUFDRSxJQURSLDJCQUVFO0FBQVEsYUFBTyxFQUFFLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBMUJEOztBQTRCQSwrREFBZUMsdURBQVUsQ0FBQ0wsS0FBRCxDQUF6QjtBQUVPLE1BQU1NLGtCQUFrQixHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDbkQ7QUFDRjtBQUNBO0FBQ0UsTUFBSU4sSUFBSSxHQUFHLEVBQVg7QUFBQSxNQUNFTyxNQUFNLEdBQUdDLFNBRFg7O0FBRUEsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLCtDQUE4Q0MsUUFBUSxDQUNyREwsT0FBTyxDQUFDTSxNQUFSLENBQWVDLFFBRHNDLENBRXJELEVBSG1CLENBQXZCO0FBS0FiLFFBQUksR0FBRyxNQUFNUyxHQUFHLENBQUNLLElBQUosRUFBYjtBQUNELEdBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFIsVUFBTSxHQUFHUSxLQUFUO0FBQ0Q7O0FBRUQsTUFBSVIsTUFBSixFQUFZO0FBQ1YsV0FBTztBQUNMQTtBQURLLEtBQVA7QUFHRDs7QUFFRCxNQUFJLENBQUNQLElBQUwsRUFBVztBQUNULFdBQU87QUFDTGdCLGNBQVEsRUFBRTtBQURMLEtBQVA7QUFHRDs7QUFFRCxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMakI7QUFESyxLQURGLENBR0Y7O0FBSEUsR0FBUDtBQUtELENBbENNLEM7Ozs7Ozs7Ozs7O0FDbENQLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3VzZXJzL1t1c2VyTmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IGluZGV4ID0gKHsgdXNlciwgcm91dGVyIH0pID0+IHtcbiAgLyogICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgKi9cbiAgLypsZXQgcGF0aG5hbWUgPSByb3V0ZXIuYXNQYXRoOyAqL1xuICAvKiAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYCBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJzZUludChcbiAgICAgICAgICByb3V0ZXIucXVlcnkudXNlck5hbWVcbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pOyAqL1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHt1c2VyLm5hbWV9IHByb2ZpbGVcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+Z29CYWNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8qIEVzdG8gc29sbyBzZSBoYXJhIHNpIHNlIG5lY2VzaXRhIHByZSBjYXJnYXIgZGF0YSBhbnRlcyBkZSBxdWUgcmVuZGVyaXphciBlbCBjb21wb25lbnRlIFxuICBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHNlcnZlcnNpZGVwcm9wcy1zZXJ2ZXItc2lkZS1yZW5kZXJpbmdcbiAgKi9cbiAgbGV0IHVzZXIgPSBbXSxcbiAgICBlcnJvcnMgPSB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcnNlSW50KFxuICAgICAgICBjb250ZXh0LnBhcmFtcy51c2VyTmFtZVxuICAgICAgKX1gXG4gICAgKTtcbiAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvcnMgPSBlcnJvcjtcbiAgfVxuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzLFxuICAgIH07XG4gIH1cblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXIsXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9