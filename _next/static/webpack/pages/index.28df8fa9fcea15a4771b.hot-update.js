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

  var defaultTransformState = {
    transform: 'grey'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      imgSrc = _useState[0],
      setImgSource = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      firstHalfSrc = _useState2[0],
      setFirstHalfSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      secondHalfSrc = _useState3[0],
      setSecondHalfSource = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultTransformState),
      transformState = _useState4[0],
      setTransformState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visiblyhidden),
      printButtonClasses = _useState5[0],
      setPrintButtonClasses = _useState5[1];

  var isLandscape = function isLandscape(width, height) {
    return width > height;
  };

  var imageSelected = /*#__PURE__*/function () {
    var _ref = Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageSource) {
      var image, _image$meta, width, height, outputImage, firstHalf, secondHalf, midPoint, _midPoint;

      return C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              image = imgSrc;

              if (!imageSource) {
                _context.next = 8;
                break;
              }

              setImgSource(imageSource);
              _context.next = 5;
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__["imageTransform"])().load(imageSource);

            case 5:
              image = _context.sent;
              _context.next = 15;
              break;

            case 8:
              if (!imgSrc) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__["imageTransform"])().load(imgSrc);

            case 11:
              image = _context.sent;
              _context.next = 15;
              break;

            case 14:
              return _context.abrupt("return");

            case 15:
              _image$meta = image.meta(), width = _image$meta.width, height = _image$meta.height;
              outputImage = transformState.transform === 'edges' ? image.findEdges().invert().toImage() : image.toGrey().toImage();
              firstHalf = "";
              secondHalf = "";

              if (isLandscape(width, height)) {
                midPoint = outputImage.width / 2;
                firstHalf = outputImage.crop({
                  width: midPoint
                }).toDataURL();
                secondHalf = outputImage.crop({
                  x: midPoint
                }).toDataURL();
              } else {
                _midPoint = outputImage.height / 2;
                firstHalf = outputImage.crop({
                  height: _midPoint
                }).toDataURL();
                secondHalf = outputImage.crop({
                  y: _midPoint
                }).toDataURL();
              }

              setPrintButtonClasses({});
              setFirstHalfSource(firstHalf);
              setSecondHalfSource(secondHalf);

            case 23:
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

    transformChanged('grey');
    var file = ((_args$target = args.target) === null || _args$target === void 0 ? void 0 : _args$target.files) && ((_args$target2 = args.target) === null || _args$target2 === void 0 ? void 0 : _args$target2.files.length) > 0 ? (_args$target3 = args.target) === null || _args$target3 === void 0 ? void 0 : _args$target3.files[0] : null;
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      return imageSelected(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  var transformChanged = function transformChanged(newTransform) {
    var newState = {
      transform: newTransform
    };
    console.log(newState);
    console.log(transformState);
    setTransformState(newState);
    console.log(transformState);
    imageSelected(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-control-file",
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Find edges"), __jsx("input", {
    type: "radio",
    id: "findEdges",
    className: "form-check-input",
    onChange: function onChange() {
      return transformChanged('edges');
    },
    name: "imageOptions",
    checked: transformState.transform == 'edges',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Greyscale"), __jsx("input", {
    type: "radio",
    id: "greyScale",
    className: "form-check-input",
    onChange: function onChange() {
      return transformChanged('grey');
    },
    name: "imageOptions",
    checked: transformState.transform == 'grey',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Print result")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 114,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }))));
};

_s(ImagePicker, "M1altBASOaWMxRbh7ldCjERjj74=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsImRlZmF1bHRUcmFuc2Zvcm1TdGF0ZSIsInRyYW5zZm9ybSIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJ0cmFuc2Zvcm1TdGF0ZSIsInNldFRyYW5zZm9ybVN0YXRlIiwidmlzaWJseWhpZGRlbiIsInByaW50QnV0dG9uQ2xhc3NlcyIsInNldFByaW50QnV0dG9uQ2xhc3NlcyIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsIm1ldGEiLCJvdXRwdXRJbWFnZSIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJ0b0dyZXkiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJ0cmFuc2Zvcm1DaGFuZ2VkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibmV3VHJhbnNmb3JtIiwibmV3U3RhdGUiLCJjb25zb2xlIiwibG9nIiwibG9hZGVyIiwid2luZG93IiwicHJpbnQiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNvbmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NB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c0MsT0FBRyxFQUFFbkQsYUFBM0M7QUFBMEQsT0FBRyxFQUFDLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBdkJGLENBREY7QUFrQ0QsQ0FuR0Q7O0dBQU1SLFc7O01BQUFBLFc7QUFxR1NILHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4ZGY4ZmE5ZmNlYTE1YTQ3NzFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IGltYWdlVHJhbnNmb3JtIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9pbWFnZVRyYW5zZm9ybSc7IC8vIFRPRE8gZmlndXJlIG91dCBob3cgdG8gaGF2ZSB0aGUgVHlwZVNjcmlwdCBsb2FkZXJzIHdvcmsgd2l0aCBXZWJQYWNrXG5pbXBvcnQgeyBQYXBlckRpbWVuc2lvbnMgfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL1BhcGVyRGltZW5zaW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiUGhvdG8gdHJhY2luZ1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICA8aDE+UGhvdG8gdHJhY2luZzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBhcHAgY2FuIGJlIHVzZWQgdG8gdGFrZSBhbiBpbWFnZSB0aGF0IHlvdSBoYXZlIHNhdmVkLCBhbmQgcmVzaXplIGl0IHRvIEEzIGJ1dCBpcyBwcmludGFibGUgdXNpbmcgYSBzdGFuZGFyZCBBNCBwcmludGVyLlxuICAgICAgICBBbGwgeW91J2xsIG5lZWQgdG8gZG8gaXMgdGFwZSB0aGUgdHdvIHByaW50ZWQgaW1hZ2VzIHRvZ2V0aGVyIHVzaW5nIHNjZWxsb3RhcGUuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVG8gdXNlIHRoZSByZXNpemVyOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+Q2xpY2sgdGhlICdCcm93c2UuLi4nIGJ1dHRvbiB0byBjaG9vc2UgYSBmaWxlIHRoYXQgeW91IHdhbnQgdG8gcmVzaXplIHRvIHByaW50IGFzIEEzPC9saT5cbiAgICAgICAgPGxpPlByZXNzIHRoZSAnUHJpbnQgcmVzdWx0cycgYnV0dG9uIHRvIHNlbmQgaXQgdG8geW91ciBwcmludGVyPC9saT5cbiAgICAgIDwvb2w+ICAgICAgXG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4geyBcbiAgY29uc3QgZGVmYXVsdFRyYW5zZm9ybVN0YXRlID0ge3RyYW5zZm9ybTogJ2dyZXknfTtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW2ZpcnN0SGFsZlNyYywgc2V0Rmlyc3RIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3NlY29uZEhhbGZTcmMsIHNldFNlY29uZEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbdHJhbnNmb3JtU3RhdGUsIHNldFRyYW5zZm9ybVN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRUcmFuc2Zvcm1TdGF0ZSBhcyBhbnkpO1xuICBcbiAgY29uc3QgW3ByaW50QnV0dG9uQ2xhc3Nlcywgc2V0UHJpbnRCdXR0b25DbGFzc2VzXSA9IHVzZVN0YXRlKHN0eWxlcy52aXNpYmx5aGlkZGVuIGFzIGFueSk7XG4gIFxuICBjb25zdCBpc0xhbmRzY2FwZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB3aWR0aCA+IGhlaWdodDsgICAgXG4gIH07XG5cbiAgY29uc3QgaW1hZ2VTZWxlY3RlZCA9IGFzeW5jIChpbWFnZVNvdXJjZTogYW55KSA9PiB7IFxuICAgIGxldCBpbWFnZSA9IGltZ1NyYztcbiAgICBpZiAoaW1hZ2VTb3VyY2UpIHtcbiAgICAgIHNldEltZ1NvdXJjZShpbWFnZVNvdXJjZSk7ICAgIFxuICAgICAgaW1hZ2UgPSBhd2FpdCBpbWFnZVRyYW5zZm9ybSgpLmxvYWQoaW1hZ2VTb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAoaW1nU3JjKSB7XG4gICAgICBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWdTcmMpOyAgLy8gRWxzZSBnZXQgaXQgZnJvbSB0aGUgY3VycmVudCBzdGF0ZS4gVE9ETy4gVGhpcyBpcyBkaXNndXN0aW5nIVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47IC8vIE5vIGltYWdlIHRvIG9wZXJhdGUgb24uXG4gICAgfSAgIFxuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5tZXRhKCk7XG4gICAgY29uc3Qgb3V0cHV0SW1hZ2UgPSAodHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtID09PSAnZWRnZXMnKSA/IGltYWdlLmZpbmRFZGdlcygpLmludmVydCgpLnRvSW1hZ2UoKSA6IGltYWdlLnRvR3JleSgpLnRvSW1hZ2UoKTtcbiAgICBcbiAgICBsZXQgZmlyc3RIYWxmID0gXCJcIjtcbiAgICBsZXQgc2Vjb25kSGFsZiA9IFwiXCI7XG5cbiAgICBpZiAoaXNMYW5kc2NhcGUod2lkdGgsIGhlaWdodCkpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gb3V0cHV0SW1hZ2Uud2lkdGgvMjtcbiAgICAgIGZpcnN0SGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe3dpZHRoOiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBvdXRwdXRJbWFnZS5jcm9wKHt4OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBvdXRwdXRJbWFnZS5oZWlnaHQvMjtcbiAgICAgIGZpcnN0SGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe2hlaWdodDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gb3V0cHV0SW1hZ2UuY3JvcCh7eTogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTtcbiAgICB9XG5cbiAgICBzZXRQcmludEJ1dHRvbkNsYXNzZXMoe30pO1xuICAgIHNldEZpcnN0SGFsZlNvdXJjZShmaXJzdEhhbGYpO1xuICAgIHNldFNlY29uZEhhbGZTb3VyY2Uoc2Vjb25kSGFsZik7ICAgICBcbiAgfTtcblxuICBjb25zdCBmaWxlQ2hhbmdlZCA9IChhcmdzOiBhbnkpID0+IHsgXG4gICAgdHJhbnNmb3JtQ2hhbmdlZCgnZ3JleScpO1xuICAgIGNvbnN0IGZpbGUgPSAoYXJncy50YXJnZXQ/LmZpbGVzICYmIGFyZ3MudGFyZ2V0Py5maWxlcy5sZW5ndGggPiAwKSA/IGFyZ3MudGFyZ2V0Py5maWxlc1swXSA6IG51bGw7IFxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGltYWdlU2VsZWN0ZWQocmVhZGVyLnJlc3VsdCksIGZhbHNlKTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHJhbnNmb3JtQ2hhbmdlZCA9IChuZXdUcmFuc2Zvcm06IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge3RyYW5zZm9ybTogbmV3VHJhbnNmb3JtfTtcbiAgICBjb25zb2xlLmxvZyhuZXdTdGF0ZSk7XG4gICAgY29uc29sZS5sb2codHJhbnNmb3JtU3RhdGUpO1xuICAgIHNldFRyYW5zZm9ybVN0YXRlKG5ld1N0YXRlKTsgXG4gICAgY29uc29sZS5sb2codHJhbnNmb3JtU3RhdGUpO1xuICAgIGltYWdlU2VsZWN0ZWQobnVsbCk7ICAgXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtZmlsZVwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VkfSAvPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+RmluZCBlZGdlczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9eygpID0+IHRyYW5zZm9ybUNoYW5nZWQoJ2VkZ2VzJyl9IG5hbWU9XCJpbWFnZU9wdGlvbnNcIiBjaGVja2VkPXt0cmFuc2Zvcm1TdGF0ZS50cmFuc2Zvcm0gPT0gJ2VkZ2VzJ30gLz5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+R3JleXNjYWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdyZXlTY2FsZVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBvbkNoYW5nZT17KCkgPT4gdHJhbnNmb3JtQ2hhbmdlZCgnZ3JleScpfSBuYW1lPVwiaW1hZ2VPcHRpb25zXCIgY2hlY2tlZD17dHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtID09ICdncmV5J30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3ByaW50QnV0dG9uQ2xhc3Nlc30gb25DbGljaz17KCkgPT4gd2luZG93LnByaW50KCl9PlByaW50IHJlc3VsdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBzdHlsZT17e2hlaWdodDogMjAwfX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+ICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNGaXJzdEltYWdlfSBzcmM9e2ZpcnN0SGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNTZWNvbmRJbWFnZX0gc3JjPXtzZWNvbmRIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==