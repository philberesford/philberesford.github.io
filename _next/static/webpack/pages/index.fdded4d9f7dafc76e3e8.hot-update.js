webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! image-manipulation/lib/imageTransform */ "../image-manipulation/lib/imageTransform.js");
/* harmony import */ var image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! image-manipulation/lib/PaperDimensions */ "../image-manipulation/lib/PaperDimensions.js");
/* harmony import */ var image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\dev\\personal\\photo-tracing\\packages\\web\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

 // TODO figure out how to have the TypeScript loaders work with WebPack





var IndexPage = function IndexPage() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Photo tracing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Photo tracing")), __jsx(ImagePicker, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

_c = IndexPage;

var ImagePicker = function ImagePicker() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      imgSrc = _useState[0],
      setImgSource = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      firstHalfSrc = _useState2[0],
      setFirstHalfSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      secondHalfSrc = _useState3[0],
      setSecondHalfSource = _useState3[1];

  var isLandscape = function isLandscape(width, height) {
    return width > height;
  };

  var imageSelected = /*#__PURE__*/function () {
    var _ref = Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageSource) {
      var image, _image$meta, width, height, edges, firstHalf, secondHalf, midPoint, _midPoint;

      return C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setImgSource(imageSource);
              _context.next = 3;
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__["imageTransform"])().load(imageSource);

            case 3:
              image = _context.sent;
              _image$meta = image.meta(), width = _image$meta.width, height = _image$meta.height;
              edges = image.findEdges().invert().toImage();
              firstHalf = "";
              secondHalf = "";

              if (isLandscape(width, height)) {
                midPoint = edges.width / 2;
                firstHalf = edges.crop({
                  width: midPoint
                }).toDataURL();
                secondHalf = edges.crop({
                  x: midPoint
                }).toDataURL();
              } else {
                _midPoint = edges.height / 2;
                firstHalf = edges.crop({
                  height: _midPoint
                }).toDataURL();
                secondHalf = edges.crop({
                  y: _midPoint
                }).toDataURL();
              }

              setFirstHalfSource(firstHalf);
              setSecondHalfSource(secondHalf);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function imageSelected(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fileChanged = function fileChanged(args) {
    var _args$target, _args$target2, _args$target3;

    var file = ((_args$target = args.target) === null || _args$target === void 0 ? void 0 : _args$target.files) && ((_args$target2 = args.target) === null || _args$target2 === void 0 ? void 0 : _args$target2.files.length) > 0 ? (_args$target3 = args.target) === null || _args$target3 === void 0 ? void 0 : _args$target3.files[0] : null;
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      return imageSelected(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return __jsx("div", {
    className: "loadingContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: imgSrc,
    style: {
      height: 200
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.printedPage,
    style: {
      height: image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_4__["PaperDimensions"].A4.height / 2 + 'mm'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.printedPage,
    style: {
      height: image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_4__["PaperDimensions"].A4.height / 2 + 'mm'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }))));
};

_s(ImagePicker, "JTnapvREaJHHh3AKgSexGUWp5F0=");

_c2 = ImagePicker;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2;

$RefreshReg$(_c, "IndexPage");
$RefreshReg$(_c2, "ImagePicker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIkltYWdlUGlja2VyIiwidXNlU3RhdGUiLCJpbWdTcmMiLCJzZXRJbWdTb3VyY2UiLCJmaXJzdEhhbGZTcmMiLCJzZXRGaXJzdEhhbGZTb3VyY2UiLCJzZWNvbmRIYWxmU3JjIiwic2V0U2Vjb25kSGFsZlNvdXJjZSIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVRyYW5zZm9ybSIsImxvYWQiLCJpbWFnZSIsIm1ldGEiLCJlZGdlcyIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJsb2FkZXIiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNvbmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3dFOztBQUN4RTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUNoQixNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFbUMsd0RBQU0sQ0FBQ0UsV0FBdkI7QUFBb0MsU0FBSyxFQUFFO0FBQUMvQixZQUFNLEVBQUVnQyxzRkFBZSxDQUFDQyxFQUFoQixDQUFtQmpDLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCO0FBQXJDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRTZCLHdEQUFNLENBQUNNLGFBQXZCO0FBQXNDLE9BQUcsRUFBRXZDLGFBQTNDO0FBQTBELE9BQUcsRUFBQyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVBGLENBREY7QUFrQkQsQ0FsRUQ7O0dBQU1OLFc7O01BQUFBLFc7QUFvRVNELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkZGVkNGQ5ZjdkYWZjNzZlM2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IGltYWdlVHJhbnNmb3JtIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9pbWFnZVRyYW5zZm9ybSc7IC8vIFRPRE8gZmlndXJlIG91dCBob3cgdG8gaGF2ZSB0aGUgVHlwZVNjcmlwdCBsb2FkZXJzIHdvcmsgd2l0aCBXZWJQYWNrXG5pbXBvcnQgeyBQYXBlckRpbWVuc2lvbnMgfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL1BhcGVyRGltZW5zaW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiUGhvdG8gdHJhY2luZ1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgPGgxPlBob3RvIHRyYWNpbmc8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxJbWFnZVBpY2tlciAvPiAgICBcbiAgPC9MYXlvdXQ+XG4pO1xuXG5jb25zdCBJbWFnZVBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW2ZpcnN0SGFsZlNyYywgc2V0Rmlyc3RIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3NlY29uZEhhbGZTcmMsIHNldFNlY29uZEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBcbiAgY29uc3QgaXNMYW5kc2NhcGUgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gd2lkdGggPiBoZWlnaHQ7ICAgIFxuICB9O1xuXG4gIGNvbnN0IGltYWdlU2VsZWN0ZWQgPSBhc3luYyAoaW1hZ2VTb3VyY2U6IGFueSkgPT4geyAgIFxuICAgIHNldEltZ1NvdXJjZShpbWFnZVNvdXJjZSk7XG4gICAgXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZVRyYW5zZm9ybSgpLmxvYWQoaW1hZ2VTb3VyY2UpO1xuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5tZXRhKCk7XG5cbiAgICBjb25zdCBlZGdlcyA9IGltYWdlLmZpbmRFZGdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgIC5pbnZlcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAudG9JbWFnZSgpXG5cbiAgICBsZXQgZmlyc3RIYWxmID0gXCJcIjtcbiAgICBsZXQgc2Vjb25kSGFsZiA9IFwiXCI7XG5cbiAgICBpZiAoaXNMYW5kc2NhcGUod2lkdGgsIGhlaWdodCkpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gZWRnZXMud2lkdGgvMjtcbiAgICAgIGZpcnN0SGFsZiA9IGVkZ2VzLmNyb3Aoe3dpZHRoOiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBlZGdlcy5jcm9wKHt4OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBlZGdlcy5oZWlnaHQvMjtcbiAgICAgIGZpcnN0SGFsZiA9IGVkZ2VzLmNyb3Aoe2hlaWdodDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gZWRnZXMuY3JvcCh7eTogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTtcbiAgICB9XG5cbiAgICBzZXRGaXJzdEhhbGZTb3VyY2UoZmlyc3RIYWxmKTtcbiAgICBzZXRTZWNvbmRIYWxmU291cmNlKHNlY29uZEhhbGYpOyAgICAgXG5cbiAgfTtcblxuICBjb25zdCBmaWxlQ2hhbmdlZCA9IChhcmdzOiBhbnkpID0+IHsgXG4gICAgY29uc3QgZmlsZSA9IChhcmdzLnRhcmdldD8uZmlsZXMgJiYgYXJncy50YXJnZXQ/LmZpbGVzLmxlbmd0aCA+IDApID8gYXJncy50YXJnZXQ/LmZpbGVzWzBdIDogbnVsbDsgXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gaW1hZ2VTZWxlY3RlZChyZWFkZXIucmVzdWx0KSwgZmFsc2UpO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbn07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdDb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VkfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gc3R5bGU9e3toZWlnaHQ6IDIwMH19IGFsdD1cIlwiIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM0ZpcnN0SW1hZ2V9IHNyYz17Zmlyc3RIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM1NlY29uZEltYWdlfSBzcmM9e3NlY29uZEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=