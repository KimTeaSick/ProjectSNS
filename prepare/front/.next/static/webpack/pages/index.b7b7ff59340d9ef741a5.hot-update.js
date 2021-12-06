webpackHotUpdate_N_E("pages/index",{

/***/ "./componets/PostCard.js":
/*!*******************************!*\
  !*** ./componets/PostCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./componets/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./componets/CommentForm.js");
/* harmony import */ var _postCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postCardContent */ "./componets/postCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./componets/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Kim\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\React\\nodeBird\\prepare\\front\\componets\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();














var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading,
      retweetError = _useSelector.retweetError;

  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"]
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 42
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retwwet", false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 22
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 22
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, _this)],
      title: post.RetweetId ? "".concat(post.USer.nickname, "\uB2D8\uC774 \uC7AC\uAC8C\uC2DC \uD558\uC600\uC2B5\uB2C8\uB2E4.") : null,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 32
      }, _this),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 54
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
            children: post.Retweet.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }, _this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_postCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 34
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 20
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 29
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_postCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 34
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Link, {
                href: "/user/".concat(post.Retweet.User.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                    children: item.User.nickname[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 93
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 90
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "k1gynv6KjD3LW8pk+oNRVu8QpTg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    Commemnts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Liker: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJldHdlZXRFcnJvciIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2Iiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXRJZCIsIlVTZXIiLCJuaWNrbmFtZSIsIlJldHdlZXQiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVBdCIsIkNvbW1lbW50cyIsImFycmF5T2YiLCJMaWtlciIsIm9iamVjdE9mIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDekIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1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QUdsQlIsV0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhEO0FBSWxCQyxZQUFRLEVBQUVMLGlEQUFTLENBQUNJLE1BSkY7QUFLbEJFLGFBQVMsRUFBR04saURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0csTUFBNUIsQ0FMTTtBQU1sQmQsVUFBTSxFQUFFVyxpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QixDQU5VO0FBT2xCSyxTQUFLLEVBQUVSLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCLENBUFc7QUFRbEJaLGFBQVMsRUFBRVMsaURBQVMsQ0FBQ0UsTUFSSDtBQVNsQlIsV0FBTyxFQUFFTSxpREFBUyxDQUFDUyxRQUFWLENBQW1CVCxpREFBUyxDQUFDVSxHQUE3QjtBQVRTLEdBQWhCLEVBVUhDO0FBWGMsQ0FBckI7QUFjZXZELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3YjdmZjU5MzQwZDllZjc0MWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgTGlzdCwgQ29tbWVudCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFJldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBIZWFydFR3b1RvbmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vcG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QsTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nLCByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBcclxuIFxyXG5cclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodik9PiB2LmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHd3ZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgPzxIZWFydFR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVW5MaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDo8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljayA9IHtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSB7cG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVTZXIubmlja25hbWV964uY7J20IOyerOqyjOyLnCDtlZjsmIDsirXri4jri6QuYCA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgZXh0cmEgPSB7aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0ID0ge3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5SZXR3ZWV0SWQgJiYgcG9zdC5SZXR3ZWV0XHJcbiAgICAgICAgICAgICAgICA/ICg8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4pXHJcbiAgICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0vPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3QgPSB7cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0ge2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0ID0gXCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9PjxhPjxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDpQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFVzZXI6UHJvcFR5cGVzLm9iamVjdCwgXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBDb21tZW1udHMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIExpa2VyOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUmV0d2VldDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLCBcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=