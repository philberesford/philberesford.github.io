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
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
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
  }, "Photo tracing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "This app can be used to take an image that you have saved, and resize it to A3 but is printable using a standard A4 printer. All you'll need to do is tape the two printed images together using scellotape."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "To use the resizer:"), __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Click the 'Browse...' button to choose a file that you want to resize to print as A3"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Press the 'Print results' button to send it to your printer"))), __jsx(ImagePicker, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      findEdges = _useState4[0],
      setFindEdges = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      greyScale = _useState5[0],
      setGreyScale = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visiblyhidden),
      printButtonClasses = _useState6[0],
      setPrintButtonClasses = _useState6[1];

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

              setPrintButtonClasses({});
              setFirstHalfSource(firstHalf);
              setSecondHalfSource(secondHalf);

            case 12:
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

  var findEdgesChanged = function findEdgesChanged(args) {
    console.log('FindEdges');
    setFindEdges(args.checked);
  };

  var greyScaleChanged = function greyScaleChanged(args) {
    console.log('Grey');
    setGreyScale(args.checked);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-control-file",
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Find edges"), __jsx("input", {
    type: "radio",
    id: "findEdges",
    className: "form-check-input",
    value: "edges",
    onChange: findEdgesChanged,
    name: "imageOptions",
    checked: findEdges,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "Greyscale"), __jsx("input", {
    type: "radio",
    id: "greyScale",
    className: "form-check-input",
    value: "grey",
    onChange: greyScaleChanged,
    name: "imageOptions",
    checked: greyScale,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: printButtonClasses,
    onClick: function onClick() {
      return window.print();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Print result")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
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
      lineNumber: 111,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }))));
};

_s(ImagePicker, "RNYpAo3yvqkoHH9zEZvz6Z20sMI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJmaW5kRWRnZXMiLCJzZXRGaW5kRWRnZXMiLCJncmV5U2NhbGUiLCJzZXRHcmV5U2NhbGUiLCJ2aXNpYmx5aGlkZGVuIiwicHJpbnRCdXR0b25DbGFzc2VzIiwic2V0UHJpbnRCdXR0b25DbGFzc2VzIiwiaXNMYW5kc2NhcGUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlU2VsZWN0ZWQiLCJpbWFnZVNvdXJjZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsImltYWdlIiwibWV0YSIsImVkZ2VzIiwiaW52ZXJ0IiwidG9JbWFnZSIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJtaWRQb2ludCIsImNyb3AiLCJ0b0RhdGFVUkwiLCJ4IiwieSIsImZpbGVDaGFuZ2VkIiwiYXJncyIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImZpbmRFZGdlc0NoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsImdyZXlTY2FsZUNoYW5nZWQiLCJsb2FkZXIiLCJ3aW5kb3ciLCJwcmludCIsInByaW50ZWRQYWdlIiwiUGFwZXJEaW1lbnNpb25zIiwiQTQiLCJhM0ZpcnN0SW1hZ2UiLCJhM1NlY29uZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDd0U7O0FBQ3hFO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcs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QyxZQUFNLEVBQUVxQyxzRkFBZSxDQUFDQyxFQUFoQixDQUFtQnRDLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCO0FBQXJDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW5CLHdEQUFNLENBQUMwRCxZQUF2QjtBQUFxQyxPQUFHLEVBQUVwRCxZQUExQztBQUF3RCxPQUFHLEVBQUMsRUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRU4sd0RBQU0sQ0FBQ3VELFdBQXZCO0FBQW9DLFNBQUssRUFBRTtBQUFDcEMsWUFBTSxFQUFFcUMsc0ZBQWUsQ0FBQ0MsRUFBaEIsQ0FBbUJ0QyxNQUFuQixHQUEwQixDQUExQixHQUE0QjtBQUFyQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVuQix3REFBTSxDQUFDMkQsYUFBdkI7QUFBc0MsT0FBRyxFQUFFbkQsYUFBM0M7QUFBMEQsT0FBRyxFQUFDLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBdkJGLENBREY7QUFrQ0QsQ0FoR0Q7O0dBQU1OLFc7O01BQUFBLFc7QUFrR1NILHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyOGU3ZTcxYjQ4MGUxY2YwZWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IGltYWdlVHJhbnNmb3JtIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9pbWFnZVRyYW5zZm9ybSc7IC8vIFRPRE8gZmlndXJlIG91dCBob3cgdG8gaGF2ZSB0aGUgVHlwZVNjcmlwdCBsb2FkZXJzIHdvcmsgd2l0aCBXZWJQYWNrXG5pbXBvcnQgeyBQYXBlckRpbWVuc2lvbnMgfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL1BhcGVyRGltZW5zaW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiUGhvdG8gdHJhY2luZ1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICA8aDE+UGhvdG8gdHJhY2luZzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBhcHAgY2FuIGJlIHVzZWQgdG8gdGFrZSBhbiBpbWFnZSB0aGF0IHlvdSBoYXZlIHNhdmVkLCBhbmQgcmVzaXplIGl0IHRvIEEzIGJ1dCBpcyBwcmludGFibGUgdXNpbmcgYSBzdGFuZGFyZCBBNCBwcmludGVyLlxuICAgICAgICBBbGwgeW91J2xsIG5lZWQgdG8gZG8gaXMgdGFwZSB0aGUgdHdvIHByaW50ZWQgaW1hZ2VzIHRvZ2V0aGVyIHVzaW5nIHNjZWxsb3RhcGUuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVG8gdXNlIHRoZSByZXNpemVyOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+Q2xpY2sgdGhlICdCcm93c2UuLi4nIGJ1dHRvbiB0byBjaG9vc2UgYSBmaWxlIHRoYXQgeW91IHdhbnQgdG8gcmVzaXplIHRvIHByaW50IGFzIEEzPC9saT5cbiAgICAgICAgPGxpPlByZXNzIHRoZSAnUHJpbnQgcmVzdWx0cycgYnV0dG9uIHRvIHNlbmQgaXQgdG8geW91ciBwcmludGVyPC9saT5cbiAgICAgIDwvb2w+ICAgICAgXG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4geyAgXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtmaXJzdEhhbGZTcmMsIHNldEZpcnN0SGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtzZWNvbmRIYWxmU3JjLCBzZXRTZWNvbmRIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgbGV0IFtmaW5kRWRnZXMsIHNldEZpbmRFZGdlc10gPSB1c2VTdGF0ZSh0cnVlIGFzIGFueSk7XG4gIGxldCBbZ3JleVNjYWxlLCBzZXRHcmV5U2NhbGVdID0gdXNlU3RhdGUoZmFsc2UgYXMgYW55KTtcblxuICBjb25zdCBbcHJpbnRCdXR0b25DbGFzc2VzLCBzZXRQcmludEJ1dHRvbkNsYXNzZXNdID0gdXNlU3RhdGUoc3R5bGVzLnZpc2libHloaWRkZW4gYXMgYW55KTtcbiAgXG4gIGNvbnN0IGlzTGFuZHNjYXBlID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHdpZHRoID4gaGVpZ2h0OyAgICBcbiAgfTtcblxuICBjb25zdCBpbWFnZVNlbGVjdGVkID0gYXN5bmMgKGltYWdlU291cmNlOiBhbnkpID0+IHsgICAgICAgXG4gICAgc2V0SW1nU291cmNlKGltYWdlU291cmNlKTtcbiAgICBcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWFnZVNvdXJjZSk7XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLm1ldGEoKTtcblxuICAgIGNvbnN0IGVkZ2VzID0gaW1hZ2UuZmluZEVkZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgLmludmVydCgpXG4gICAgICAgICAgICAgICAgICAgICAgIC50b0ltYWdlKClcblxuICAgIGxldCBmaXJzdEhhbGYgPSBcIlwiO1xuICAgIGxldCBzZWNvbmRIYWxmID0gXCJcIjtcblxuICAgIGlmIChpc0xhbmRzY2FwZSh3aWR0aCwgaGVpZ2h0KSkge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBlZGdlcy53aWR0aC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7d2lkdGg6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IGVkZ2VzLmNyb3Aoe3g6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IGVkZ2VzLmhlaWdodC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7aGVpZ2h0OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBlZGdlcy5jcm9wKHt5OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpO1xuICAgIH1cblxuICAgIHNldFByaW50QnV0dG9uQ2xhc3Nlcyh7fSk7XG4gICAgc2V0Rmlyc3RIYWxmU291cmNlKGZpcnN0SGFsZik7XG4gICAgc2V0U2Vjb25kSGFsZlNvdXJjZShzZWNvbmRIYWxmKTsgICAgIFxuICB9O1xuXG4gIGNvbnN0IGZpbGVDaGFuZ2VkID0gKGFyZ3M6IGFueSkgPT4geyBcbiAgICBjb25zdCBmaWxlID0gKGFyZ3MudGFyZ2V0Py5maWxlcyAmJiBhcmdzLnRhcmdldD8uZmlsZXMubGVuZ3RoID4gMCkgPyBhcmdzLnRhcmdldD8uZmlsZXNbMF0gOiBudWxsOyBcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBpbWFnZVNlbGVjdGVkKHJlYWRlci5yZXN1bHQpLCBmYWxzZSk7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRFZGdlc0NoYW5nZWQgPSAoYXJnczogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0ZpbmRFZGdlcycpXG4gICAgc2V0RmluZEVkZ2VzKGFyZ3MuY2hlY2tlZCk7XG4gIH07XG4gIFxuICBjb25zdCBncmV5U2NhbGVDaGFuZ2VkID0gKGFyZ3M6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdHcmV5JylcbiAgICBzZXRHcmV5U2NhbGUoYXJncy5jaGVja2VkKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17ZmlsZUNoYW5nZWR9IC8+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5GaW5kIGVkZ2VzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT17XCJlZGdlc1wifSBvbkNoYW5nZT17ZmluZEVkZ2VzQ2hhbmdlZH0gbmFtZT1cImltYWdlT3B0aW9uc1wiIGNoZWNrZWQ9e2ZpbmRFZGdlc30gLz5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+R3JleXNjYWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdyZXlTY2FsZVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT17XCJncmV5XCJ9IG9uQ2hhbmdlPXtncmV5U2NhbGVDaGFuZ2VkfSBuYW1lPVwiaW1hZ2VPcHRpb25zXCIgY2hlY2tlZD17Z3JleVNjYWxlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtYi0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cHJpbnRCdXR0b25DbGFzc2VzfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX0+UHJpbnQgcmVzdWx0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdTcmN9IHN0eWxlPXt7aGVpZ2h0OiAyMDB9fSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM0ZpcnN0SW1hZ2V9IHNyYz17Zmlyc3RIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM1NlY29uZEltYWdlfSBzcmM9e3NlY29uZEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+ICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9