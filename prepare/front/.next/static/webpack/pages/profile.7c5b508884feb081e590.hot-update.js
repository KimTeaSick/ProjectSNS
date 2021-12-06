webpackHotUpdate_N_E("pages/profile",{

/***/ "./componets/FollowerList.js":
/*!***********************************!*\
  !*** ./componets/FollowerList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Kim\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\React\\nodeBird\\prepare\\front\\componets\\FollowerList.js",
    _this = undefined,
    _s = $RefreshSig$();








var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var onCancel = function onCancel(id) {
    return function () {
      if (header === '팔로잉') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
          data: id
        });
      }

      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_FOLLOWER_REQUEST"],
        data: id
      });
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        children: "\uB354 \uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 70
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
        style: {
          margin: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["StopOutlined"], {
            onClick: onCancel(item.id)
          }, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 33
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0ZvbGxvd2VyTGlzdC5qcyJdLCJuYW1lcyI6WyJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsIm9uQ2xpY2tNb3JlIiwibG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNhbmNlbCIsImlkIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMEM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsTUFBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFDekQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsV0FBUSxZQUFLO0FBQzFCLFVBQUdQLE1BQU0sS0FBSyxLQUFkLEVBQW9CO0FBQ2hCSSxnQkFBUSxDQUFDO0FBQ0xJLGNBQUksRUFBRUMsK0RBREQ7QUFFTFIsY0FBSSxFQUFFTTtBQUZELFNBQUQsQ0FBUjtBQUlIOztBQUNHSCxjQUFRLENBQUM7QUFDTEksWUFBSSxFQUFFRSxzRUFERDtBQUVMVCxZQUFJLEVBQUVNO0FBRkQsT0FBRCxDQUFSO0FBSUgsS0FYWTtBQUFBLEdBQWpCOztBQWFBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQ0EsU0FBSyxFQUFJO0FBQUVJLGtCQUFZLEVBQUU7QUFBaEIsS0FEVDtBQUVBLFFBQUksRUFBRztBQUFDQyxZQUFNLEVBQUMsQ0FBUjtBQUFXQyxRQUFFLEVBQUMsQ0FBZDtBQUFpQkMsUUFBRSxFQUFDO0FBQXBCLEtBRlA7QUFHQSxRQUFJLEVBQUMsT0FITDtBQUlBLFVBQU0sZUFBRTtBQUFBLGdCQUFPZDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKUjtBQUtBLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRTtBQUFDZSxpQkFBUyxFQUFDLFFBQVg7QUFBcUJDLGNBQU0sRUFBQztBQUE1QixPQUFaO0FBQUEsNkJBQW1ELHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMVjtBQU1BLFlBQVEsTUFOUjtBQU9BLGNBQVUsRUFBSWYsSUFQZDtBQVFBLGNBQVUsRUFBRSxvQkFBQ2dCLElBQUQ7QUFBQSwwQkFDUixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBQ0QsZ0JBQU0sRUFBQztBQUFSLFNBQWxCO0FBQUEsK0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxpQkFBTyxFQUFFLGNBQUMscUVBQUMsOERBQUQ7QUFBeUIsbUJBQU8sRUFBRVYsUUFBUSxDQUFDVyxJQUFJLENBQUNWLEVBQU47QUFBMUMsYUFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxDQUFmO0FBQUEsaUNBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVcsRUFBRVUsSUFBSSxDQUFDQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBakNEOztHQUFNbkIsVTtVQUNlTSx1RDs7O0tBRGZOLFU7QUFtQ05BLFVBQVUsQ0FBQ29CLFNBQVgsR0FBdUI7QUFDbkJuQixRQUFNLEVBQUVvQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0FBRW5CckIsTUFBSSxFQUFJbUIsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGTCxDQUF2QjtBQUtldkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS43YzViNTA4ODg0ZmViMDgxZTU5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe2hlYWRlciwgZGF0YSwgb25DbGlja01vcmUsIGxvYWRpbmd9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT57XHJcbiAgICAgICAgaWYoaGVhZGVyID09PSAn7YyU66Gc7J6JJyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZSA9IHt7IG1hcmdpbkJvdHRvbTogMjB9fVxyXG4gICAgICAgIGdyaWQgPXt7Z3V0dGVyOjQsIHhzOjIsIG1kOjN9fVxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgaGVhZGVyPXs8ZGl2PnsgaGVhZGVyIH08L2Rpdj59XHJcbiAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbjonMTBweCAwJ319PjxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgIGRhdGFTb3VyY2UgPSB7ZGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSk9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW46MjB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0gLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGEgIDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9