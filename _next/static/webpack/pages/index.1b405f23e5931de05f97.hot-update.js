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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('edges'),
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
              outputImage = transformState === 'edges' ? image.findEdges().invert().toImage() : image.toGrey().toImage();
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

    transformChanged('edges');
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
    console.log(newTransform);
    console.log(transformState);
    setTransformState(newTransform);
    console.log(transformState);
    imageSelected(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-control-file",
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
    checked: transformState == 'edges',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
    checked: transformState == 'grey',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Print result")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 112,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }))));
};

_s(ImagePicker, "LLNnVECumzx/IkM91zHPVEH1o20=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJ0cmFuc2Zvcm1TdGF0ZSIsInNldFRyYW5zZm9ybVN0YXRlIiwidmlzaWJseWhpZGRlbiIsInByaW50QnV0dG9uQ2xhc3NlcyIsInNldFByaW50QnV0dG9uQ2xhc3NlcyIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsIm1ldGEiLCJvdXRwdXRJbWFnZSIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJ0b0dyZXkiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJ0cmFuc2Zvcm1DaGFuZ2VkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibmV3VHJhbnNmb3JtIiwiY29uc29sZSIsImxvZyIsImxvYWRlciIsIndpbmRvdyIsInByaW50IiwicHJpbnRlZFBhZ2UiLCJQYXBlckRpbWVuc2lvbnMiLCJBNCIsImEzRmlyc3RJbWFnZSIsImEzU2Vjb25kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN3RTs7QUFDeEU7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFa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ZGUwNWY5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBpbWFnZVRyYW5zZm9ybSB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvaW1hZ2VUcmFuc2Zvcm0nOyAvLyBUT0RPIGZpZ3VyZSBvdXQgaG93IHRvIGhhdmUgdGhlIFR5cGVTY3JpcHQgbG9hZGVycyB3b3JrIHdpdGggV2ViUGFja1xuaW1wb3J0IHsgUGFwZXJEaW1lbnNpb25zIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9QYXBlckRpbWVuc2lvbnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IChcbiAgPExheW91dCB0aXRsZT1cIlBob3RvIHRyYWNpbmdcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgPGgxPlBob3RvIHRyYWNpbmc8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgYXBwIGNhbiBiZSB1c2VkIHRvIHRha2UgYW4gaW1hZ2UgdGhhdCB5b3UgaGF2ZSBzYXZlZCwgYW5kIHJlc2l6ZSBpdCB0byBBMyBidXQgaXMgcHJpbnRhYmxlIHVzaW5nIGEgc3RhbmRhcmQgQTQgcHJpbnRlci5cbiAgICAgICAgQWxsIHlvdSdsbCBuZWVkIHRvIGRvIGlzIHRhcGUgdGhlIHR3byBwcmludGVkIGltYWdlcyB0b2dldGhlciB1c2luZyBzY2VsbG90YXBlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRvIHVzZSB0aGUgcmVzaXplcjpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPkNsaWNrIHRoZSAnQnJvd3NlLi4uJyBidXR0b24gdG8gY2hvb3NlIGEgZmlsZSB0aGF0IHlvdSB3YW50IHRvIHJlc2l6ZSB0byBwcmludCBhcyBBMzwvbGk+XG4gICAgICAgIDxsaT5QcmVzcyB0aGUgJ1ByaW50IHJlc3VsdHMnIGJ1dHRvbiB0byBzZW5kIGl0IHRvIHlvdXIgcHJpbnRlcjwvbGk+XG4gICAgICA8L29sPiAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxJbWFnZVBpY2tlciAvPiAgICBcbiAgPC9MYXlvdXQ+XG4pO1xuXG5jb25zdCBJbWFnZVBpY2tlciA9ICgpID0+IHsgXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtmaXJzdEhhbGZTcmMsIHNldEZpcnN0SGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtzZWNvbmRIYWxmU3JjLCBzZXRTZWNvbmRIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3RyYW5zZm9ybVN0YXRlLCBzZXRUcmFuc2Zvcm1TdGF0ZV0gPSB1c2VTdGF0ZSgnZWRnZXMnIGFzIGFueSk7XG4gIFxuICBjb25zdCBbcHJpbnRCdXR0b25DbGFzc2VzLCBzZXRQcmludEJ1dHRvbkNsYXNzZXNdID0gdXNlU3RhdGUoc3R5bGVzLnZpc2libHloaWRkZW4gYXMgYW55KTtcbiAgXG4gIGNvbnN0IGlzTGFuZHNjYXBlID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHdpZHRoID4gaGVpZ2h0OyAgICBcbiAgfTtcblxuICBjb25zdCBpbWFnZVNlbGVjdGVkID0gYXN5bmMgKGltYWdlU291cmNlOiBhbnkpID0+IHsgXG4gICAgbGV0IGltYWdlID0gaW1nU3JjO1xuICAgIGlmIChpbWFnZVNvdXJjZSkge1xuICAgICAgc2V0SW1nU291cmNlKGltYWdlU291cmNlKTsgICAgXG4gICAgICBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWFnZVNvdXJjZSk7XG4gICAgfSBlbHNlIGlmIChpbWdTcmMpIHtcbiAgICAgIGltYWdlID0gYXdhaXQgaW1hZ2VUcmFuc2Zvcm0oKS5sb2FkKGltZ1NyYyk7ICAvLyBFbHNlIGdldCBpdCBmcm9tIHRoZSBjdXJyZW50IHN0YXRlLiBUT0RPLiBUaGlzIGlzIGRpc2d1c3RpbmchXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjsgLy8gTm8gaW1hZ2UgdG8gb3BlcmF0ZSBvbi5cbiAgICB9ICAgXG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLm1ldGEoKTtcbiAgICBjb25zdCBvdXRwdXRJbWFnZSA9ICh0cmFuc2Zvcm1TdGF0ZSA9PT0gJ2VkZ2VzJykgPyBpbWFnZS5maW5kRWRnZXMoKS5pbnZlcnQoKS50b0ltYWdlKCkgOiBpbWFnZS50b0dyZXkoKS50b0ltYWdlKCk7XG4gICAgXG4gICAgbGV0IGZpcnN0SGFsZiA9IFwiXCI7XG4gICAgbGV0IHNlY29uZEhhbGYgPSBcIlwiO1xuXG4gICAgaWYgKGlzTGFuZHNjYXBlKHdpZHRoLCBoZWlnaHQpKSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IG91dHB1dEltYWdlLndpZHRoLzI7XG4gICAgICBmaXJzdEhhbGYgPSBvdXRwdXRJbWFnZS5jcm9wKHt3aWR0aDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gb3V0cHV0SW1hZ2UuY3JvcCh7eDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gb3V0cHV0SW1hZ2UuaGVpZ2h0LzI7XG4gICAgICBmaXJzdEhhbGYgPSBvdXRwdXRJbWFnZS5jcm9wKHtoZWlnaHQ6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe3k6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7XG4gICAgfVxuXG4gICAgc2V0UHJpbnRCdXR0b25DbGFzc2VzKHt9KTtcbiAgICBzZXRGaXJzdEhhbGZTb3VyY2UoZmlyc3RIYWxmKTtcbiAgICBzZXRTZWNvbmRIYWxmU291cmNlKHNlY29uZEhhbGYpOyAgICAgXG4gIH07XG5cbiAgY29uc3QgZmlsZUNoYW5nZWQgPSAoYXJnczogYW55KSA9PiB7IFxuICAgIHRyYW5zZm9ybUNoYW5nZWQoJ2VkZ2VzJyk7XG4gICAgY29uc3QgZmlsZSA9IChhcmdzLnRhcmdldD8uZmlsZXMgJiYgYXJncy50YXJnZXQ/LmZpbGVzLmxlbmd0aCA+IDApID8gYXJncy50YXJnZXQ/LmZpbGVzWzBdIDogbnVsbDsgXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gaW1hZ2VTZWxlY3RlZChyZWFkZXIucmVzdWx0KSwgZmFsc2UpO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0cmFuc2Zvcm1DaGFuZ2VkID0gKG5ld1RyYW5zZm9ybTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2cobmV3VHJhbnNmb3JtKTtcbiAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1TdGF0ZSk7XG4gICAgc2V0VHJhbnNmb3JtU3RhdGUobmV3VHJhbnNmb3JtKTsgXG4gICAgY29uc29sZS5sb2codHJhbnNmb3JtU3RhdGUpO1xuICAgIGltYWdlU2VsZWN0ZWQobnVsbCk7ICAgXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtZmlsZVwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VkfSAvPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+RmluZCBlZGdlczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9eygpID0+IHRyYW5zZm9ybUNoYW5nZWQoJ2VkZ2VzJyl9IG5hbWU9XCJpbWFnZU9wdGlvbnNcIiBjaGVja2VkPXt0cmFuc2Zvcm1TdGF0ZSA9PSAnZWRnZXMnfSAvPlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdyZXlTY2FsZVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5HcmV5c2NhbGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZ3JleVNjYWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIG9uQ2hhbmdlPXsoKSA9PiB0cmFuc2Zvcm1DaGFuZ2VkKCdncmV5Jyl9IG5hbWU9XCJpbWFnZU9wdGlvbnNcIiBjaGVja2VkPXt0cmFuc2Zvcm1TdGF0ZSA9PSAnZ3JleSd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwcmludEJ1dHRvbkNsYXNzZXN9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfT5QcmludCByZXN1bHQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gc3R5bGU9e3toZWlnaHQ6IDIwMH19IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzRmlyc3RJbWFnZX0gc3JjPXtmaXJzdEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzU2Vjb25kSW1hZ2V9IHNyYz17c2Vjb25kSGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=