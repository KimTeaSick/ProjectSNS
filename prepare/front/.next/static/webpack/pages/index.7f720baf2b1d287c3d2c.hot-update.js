webpackHotUpdate_N_E("pages/index",{

/***/ "./componets/PostImages.js":
/*!*********************************!*\
  !*** ./componets/PostImages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./componets/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Kim\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\React\\nodeBird\\prepare\\front\\componets\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImageZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImageZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "100%"
        },
        src: "http://localhost:3065/uploads/".concat(images[0].src),
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "50%"
        },
        src: "http://localhost:3065/".concat(images[0].src),
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "50%"
        },
        src: "http://localhost:3065/".concat(images[1].src),
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
  }

  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
      role: "presentation",
      style: {
        width: "50%"
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      role: "presentation",
      style: {
        display: 'inline-block',
        width: "50%",
        textAlign: "center",
        verticalAlign: 'middle'
      },
      onClick: onZoom,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(PostImages, "5vzXCW+w8Jd4h9y7THY/SmKiQPs=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1Bvc3RJbWFnZXMuanMiXSwibmFtZXMiOlsiUG9zdEltYWdlcyIsImltYWdlcyIsInVzZVN0YXRlIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2Vab29tIiwib25ab29tIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwibGVuZ3RoIiwid2lkdGgiLCJzcmMiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFFL0Isa0JBQTJDQyxzREFBUSxDQUFDLEtBQUQsQ0FBbkQ7QUFBQSxNQUFPQyxjQUFQO0FBQUEsTUFBdUJDLGdCQUF2Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUM3QkYsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILEdBRnlCLEVBRXZCLEVBRnVCLENBQTFCO0FBSUEsTUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDOUJGLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjs7QUFJQSxNQUFJSCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFoQztBQUFtRCxXQUFHLDBDQUFtQ1IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUE3QyxDQUF0RDtBQUEwRyxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsR0FBekg7QUFBOEgsZUFBTyxFQUFFTDtBQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0YsY0FBYyxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLGNBQU0sRUFBRUYsTUFBcEI7QUFBNEIsZUFBTyxFQUFFTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnZCO0FBQUEsb0JBREo7QUFNSDs7QUFDRCxNQUFJTixNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFoQztBQUFrRCxXQUFHLGtDQUEyQlIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUFyQyxDQUFyRDtBQUFpRyxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsR0FBaEg7QUFBcUgsZUFBTyxFQUFFTDtBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFFSSxlQUFLLEVBQUU7QUFBVCxTQUFoQztBQUFrRCxXQUFHLGtDQUEyQlIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUFyQyxDQUFyRDtBQUFpRyxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsR0FBaEg7QUFBcUgsZUFBTyxFQUFFTDtBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHS0YsY0FBYyxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLGNBQU0sRUFBRUYsTUFBcEI7QUFBNEIsZUFBTyxFQUFFTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSHZCO0FBQUEsb0JBREo7QUFPSDs7QUFBQTtBQUNELHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxVQUFJLEVBQUMsY0FBVjtBQUF5QixXQUFLLEVBQUU7QUFBRUUsYUFBSyxFQUFFO0FBQVQsT0FBaEM7QUFBa0QsU0FBRyxrQ0FBMkJSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsR0FBckMsQ0FBckQ7QUFBaUcsU0FBRyxFQUFFVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVTLEdBQWhIO0FBQXFILGFBQU8sRUFBRUw7QUFBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFDSSxVQUFJLEVBQUMsY0FEVDtBQUVJLFdBQUssRUFBRTtBQUFFTSxlQUFPLEVBQUUsY0FBWDtBQUEyQkYsYUFBSyxFQUFFLEtBQWxDO0FBQXlDRyxpQkFBUyxFQUFFLFFBQXBEO0FBQThEQyxxQkFBYSxFQUFFO0FBQTdFLE9BRlg7QUFHSSxhQUFPLEVBQUVSLE1BSGI7QUFBQSw4QkFJSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosRUFNS0osTUFBTSxDQUFDTyxNQUFQLEdBQWdCLENBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBV0tMLGNBQWMsaUJBQUkscUVBQUMsbURBQUQ7QUFBWSxZQUFNLEVBQUVGLE1BQXBCO0FBQTRCLGFBQU8sRUFBRU07QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBNUNEOztHQUFNUCxVOztLQUFBQSxVO0FBOENOQSxVQUFVLENBQUNjLFNBQVgsR0FBdUI7QUFDbkJiLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEVyxDQUF2QjtBQUllakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2Y3MjBiYWYyYjFkMjg3YzNkMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IEltYWdlc1pvb20gZnJvbSAnLi9JbWFnZXNab29tJztcclxuXHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZVpvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2Vab29tKHRydWUpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2Vab29tKGZhbHNlKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvdXBsb2Fkcy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX0gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiBcIjUwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblpvb219PlxyXG4gICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzOyJdLCJzb3VyY2VSb290IjoiIn0=