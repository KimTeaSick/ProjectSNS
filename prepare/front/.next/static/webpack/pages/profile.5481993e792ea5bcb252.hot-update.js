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
        onClick: onClickMore,
        loading: loading,
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
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClickMore: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0ZvbGxvd2VyTGlzdC5qcyJdLCJuYW1lcyI6WyJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsIm9uQ2xpY2tNb3JlIiwibG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNhbmNlbCIsImlkIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQztBQUFBOztBQUFBLE1BQXhDQyxNQUF3QyxRQUF4Q0EsTUFBd0M7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTtBQUN6RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxXQUFRLFlBQUs7QUFDMUIsVUFBR1AsTUFBTSxLQUFLLEtBQWQsRUFBb0I7QUFDaEJJLGdCQUFRLENBQUM7QUFDTEksY0FBSSxFQUFFQywrREFERDtBQUVMUixjQUFJLEVBQUVNO0FBRkQsU0FBRCxDQUFSO0FBSUg7O0FBQ0dILGNBQVEsQ0FBQztBQUNMSSxZQUFJLEVBQUVFLHNFQUREO0FBRUxULFlBQUksRUFBRU07QUFGRCxPQUFELENBQVI7QUFJSCxLQVhZO0FBQUEsR0FBakI7O0FBYUEsc0JBQ0kscUVBQUMseUNBQUQ7QUFDQSxTQUFLLEVBQUk7QUFBRUksa0JBQVksRUFBRTtBQUFoQixLQURUO0FBRUEsUUFBSSxFQUFHO0FBQUNDLFlBQU0sRUFBQyxDQUFSO0FBQVdDLFFBQUUsRUFBQyxDQUFkO0FBQWlCQyxRQUFFLEVBQUM7QUFBcEIsS0FGUDtBQUdBLFFBQUksRUFBQyxPQUhMO0FBSUEsVUFBTSxlQUFFO0FBQUEsZ0JBQU9kO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpSO0FBS0EsWUFBUSxlQUFFO0FBQUssV0FBSyxFQUFFO0FBQUNlLGlCQUFTLEVBQUMsUUFBWDtBQUFxQkMsY0FBTSxFQUFDO0FBQTVCLE9BQVo7QUFBQSw2QkFBbUQscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVkLFdBQWpCO0FBQThCLGVBQU8sRUFBRUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxWO0FBTUEsWUFBUSxNQU5SO0FBT0EsY0FBVSxFQUFJRixJQVBkO0FBUUEsY0FBVSxFQUFFLG9CQUFDZ0IsSUFBRDtBQUFBLDBCQUNSLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFDRCxnQkFBTSxFQUFDO0FBQVIsU0FBbEI7QUFBQSwrQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLGlCQUFPLEVBQUUsY0FBQyxxRUFBQyw4REFBRDtBQUF5QixtQkFBTyxFQUFFVixRQUFRLENBQUNXLElBQUksQ0FBQ1YsRUFBTjtBQUExQyxhQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFELENBQWY7QUFBQSxpQ0FDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyx1QkFBVyxFQUFFVSxJQUFJLENBQUNDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FqQ0Q7O0dBQU1uQixVO1VBQ2VNLHVEOzs7S0FEZk4sVTtBQW1DTkEsVUFBVSxDQUFDb0IsU0FBWCxHQUF1QjtBQUNuQm5CLFFBQU0sRUFBRW9CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJyQixNQUFJLEVBQUltQixpREFBUyxDQUFDRyxLQUFWLENBQWdCRCxVQUZMO0FBR25CcEIsYUFBVyxFQUFHaUIsU0FBUyxDQUFDSyxJQUFWLENBQWVGLFVBSFY7QUFJbkJuQixTQUFPLEVBQUdnQixTQUFTLENBQUNNLElBQVYsQ0FBZUg7QUFKTixDQUF2QjtBQU9ldkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41NDgxOTkzZTc5MmVhNWJjYjI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe2hlYWRlciwgZGF0YSwgb25DbGlja01vcmUsIGxvYWRpbmd9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT57XHJcbiAgICAgICAgaWYoaGVhZGVyID09PSAn7YyU66Gc7J6JJyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZSA9IHt7IG1hcmdpbkJvdHRvbTogMjB9fVxyXG4gICAgICAgIGdyaWQgPXt7Z3V0dGVyOjQsIHhzOjIsIG1kOjN9fVxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgaGVhZGVyPXs8ZGl2PnsgaGVhZGVyIH08L2Rpdj59XHJcbiAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbjonMTBweCAwJ319PjxCdXR0b24gb25DbGljaz17b25DbGlja01vcmV9IGxvYWRpbmc9e2xvYWRpbmd9PuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICBkYXRhU291cmNlID0ge2RhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luOjIwfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgb25DbGljaz17b25DYW5jZWwoaXRlbS5pZCl9IC8+XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIClcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhICA6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCBcclxuICAgIG9uQ2xpY2tNb3JlIDogcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGxvYWRpbmcgOiBwcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9