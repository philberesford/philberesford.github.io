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
  }, "Wait a bit of time, the images are quite large and can take some time to process"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Press the 'Print results' button to send it to your printer"))), __jsx(ImagePicker, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
    var _ref = Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageSource, transform) {
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
              outputImage = transform === 'edges' ? image.findEdges().invert().toImage() : image.toGrey().toImage();
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

    return function imageSelected(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var fileChanged = function fileChanged(args) {
    var _args$target, _args$target2, _args$target3;

    var file = ((_args$target = args.target) === null || _args$target === void 0 ? void 0 : _args$target.files) && ((_args$target2 = args.target) === null || _args$target2 === void 0 ? void 0 : _args$target2.files.length) > 0 ? (_args$target3 = args.target) === null || _args$target3 === void 0 ? void 0 : _args$target3.files[0] : null;
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      return imageSelected(reader.result, transformState);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  var transformChanged = function transformChanged(transform) {
    setTransformState(transform);
    imageSelected(null, transform);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-control-file",
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: printButtonClasses,
    onClick: function onClick() {
      return window.print();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Print result")), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Original"), __jsx("img", {
    src: imgSrc,
    style: {
      height: 200
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJ0cmFuc2Zvcm1TdGF0ZSIsInNldFRyYW5zZm9ybVN0YXRlIiwidmlzaWJseWhpZGRlbiIsInByaW50QnV0dG9uQ2xhc3NlcyIsInNldFByaW50QnV0dG9uQ2xhc3NlcyIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJ0cmFuc2Zvcm0iLCJpbWFnZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsIm1ldGEiLCJvdXRwdXRJbWFnZSIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJ0b0dyZXkiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ0cmFuc2Zvcm1DaGFuZ2VkIiwibG9hZGVyIiwid2luZG93IiwicHJpbnQiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNvbmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3dFOztBQUN4RTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUNoQixN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dUJFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFakIsd0RBQU0sQ0FBQ29ELFdBQXZCO0FBQW9DLFNBQUssRUFBRTtBQUFDbkMsWUFBTSxFQUFFb0Msc0ZBQWUsQ0FBQ0MsRUFBaEIsQ0FBbUJyQyxNQUFuQixHQUEwQixDQUExQixHQUE0QjtBQUFyQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVqQix3REFBTSxDQUFDdUQsWUFBdkI7QUFBcUMsT0FBRyxFQUFFakQsWUFBMUM7QUFBd0QsT0FBRyxFQUFDLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVOLHdEQUFNLENBQUNvRCxXQUF2QjtBQUFvQyxTQUFLLEVBQUU7QUFBQ25DLFlBQU0sRUFBRW9DLHNGQUFlLENBQUNDLEVBQWhCLENBQW1CckMsTUFBbkIsR0FBMEIsQ0FBMUIsR0FBNEI7QUFBckMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFakIsd0RBQU0sQ0FBQ3dELGFBQXZCO0FBQXNDLE9BQUcsRUFBRWhELGFBQTNDO0FBQTBELE9BQUcsRUFBQyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQXZCRixDQURGO0FBa0NELENBN0ZEOztHQUFNTixXOztNQUFBQSxXO0FBK0ZTSCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZGU2ZTg3MTFhNDNjOThhOWNjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBpbWFnZVRyYW5zZm9ybSB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvaW1hZ2VUcmFuc2Zvcm0nOyAvLyBUT0RPIGZpZ3VyZSBvdXQgaG93IHRvIGhhdmUgdGhlIFR5cGVTY3JpcHQgbG9hZGVycyB3b3JrIHdpdGggV2ViUGFja1xuaW1wb3J0IHsgUGFwZXJEaW1lbnNpb25zIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9QYXBlckRpbWVuc2lvbnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IChcbiAgPExheW91dCB0aXRsZT1cIlBob3RvIHRyYWNpbmdcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgPGgxPlBob3RvIHRyYWNpbmc8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgYXBwIGNhbiBiZSB1c2VkIHRvIHRha2UgYW4gaW1hZ2UgdGhhdCB5b3UgaGF2ZSBzYXZlZCwgYW5kIHJlc2l6ZSBpdCB0byBBMyBidXQgaXMgcHJpbnRhYmxlIHVzaW5nIGEgc3RhbmRhcmQgQTQgcHJpbnRlci5cbiAgICAgICAgQWxsIHlvdSdsbCBuZWVkIHRvIGRvIGlzIHRhcGUgdGhlIHR3byBwcmludGVkIGltYWdlcyB0b2dldGhlciB1c2luZyBzY2VsbG90YXBlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRvIHVzZSB0aGUgcmVzaXplcjpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPkNsaWNrIHRoZSAnQnJvd3NlLi4uJyBidXR0b24gdG8gY2hvb3NlIGEgZmlsZSB0aGF0IHlvdSB3YW50IHRvIHJlc2l6ZSB0byBwcmludCBhcyBBMzwvbGk+XG4gICAgICAgIDxsaT5XYWl0IGEgYml0IG9mIHRpbWUsIHRoZSBpbWFnZXMgYXJlIHF1aXRlIGxhcmdlIGFuZCBjYW4gdGFrZSBzb21lIHRpbWUgdG8gcHJvY2VzczwvbGk+XG4gICAgICAgIDxsaT5QcmVzcyB0aGUgJ1ByaW50IHJlc3VsdHMnIGJ1dHRvbiB0byBzZW5kIGl0IHRvIHlvdXIgcHJpbnRlcjwvbGk+XG4gICAgICA8L29sPiAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxJbWFnZVBpY2tlciAvPiAgICBcbiAgPC9MYXlvdXQ+XG4pO1xuXG5jb25zdCBJbWFnZVBpY2tlciA9ICgpID0+IHsgXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtmaXJzdEhhbGZTcmMsIHNldEZpcnN0SGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtzZWNvbmRIYWxmU3JjLCBzZXRTZWNvbmRIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3RyYW5zZm9ybVN0YXRlLCBzZXRUcmFuc2Zvcm1TdGF0ZV0gPSB1c2VTdGF0ZSgnZWRnZXMnIGFzIGFueSk7XG4gIFxuICBjb25zdCBbcHJpbnRCdXR0b25DbGFzc2VzLCBzZXRQcmludEJ1dHRvbkNsYXNzZXNdID0gdXNlU3RhdGUoc3R5bGVzLnZpc2libHloaWRkZW4gYXMgYW55KTtcbiAgXG4gIGNvbnN0IGlzTGFuZHNjYXBlID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHdpZHRoID4gaGVpZ2h0OyAgICBcbiAgfTtcblxuICBjb25zdCBpbWFnZVNlbGVjdGVkID0gYXN5bmMgKGltYWdlU291cmNlOiBhbnksIHRyYW5zZm9ybTogc3RyaW5nKSA9PiB7IFxuICAgIGxldCBpbWFnZSA9IGltZ1NyYztcbiAgICBpZiAoaW1hZ2VTb3VyY2UpIHtcbiAgICAgIHNldEltZ1NvdXJjZShpbWFnZVNvdXJjZSk7ICAgIFxuICAgICAgaW1hZ2UgPSBhd2FpdCBpbWFnZVRyYW5zZm9ybSgpLmxvYWQoaW1hZ2VTb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAoaW1nU3JjKSB7XG4gICAgICBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWdTcmMpOyAgLy8gRWxzZSBnZXQgaXQgZnJvbSB0aGUgY3VycmVudCBzdGF0ZS4gVE9ETy4gVGhpcyBpcyBkaXNndXN0aW5nIVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47IC8vIE5vIGltYWdlIHRvIG9wZXJhdGUgb24uXG4gICAgfSAgIFxuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5tZXRhKCk7XG4gICAgY29uc3Qgb3V0cHV0SW1hZ2UgPSAodHJhbnNmb3JtID09PSAnZWRnZXMnKSA/IGltYWdlLmZpbmRFZGdlcygpLmludmVydCgpLnRvSW1hZ2UoKSA6IGltYWdlLnRvR3JleSgpLnRvSW1hZ2UoKTtcbiAgICBcbiAgICBsZXQgZmlyc3RIYWxmID0gXCJcIjtcbiAgICBsZXQgc2Vjb25kSGFsZiA9IFwiXCI7XG5cbiAgICBpZiAoaXNMYW5kc2NhcGUod2lkdGgsIGhlaWdodCkpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gb3V0cHV0SW1hZ2Uud2lkdGgvMjtcbiAgICAgIGZpcnN0SGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe3dpZHRoOiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBvdXRwdXRJbWFnZS5jcm9wKHt4OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBvdXRwdXRJbWFnZS5oZWlnaHQvMjtcbiAgICAgIGZpcnN0SGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe2hlaWdodDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gb3V0cHV0SW1hZ2UuY3JvcCh7eTogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTtcbiAgICB9XG5cbiAgICBzZXRQcmludEJ1dHRvbkNsYXNzZXMoe30pO1xuICAgIHNldEZpcnN0SGFsZlNvdXJjZShmaXJzdEhhbGYpO1xuICAgIHNldFNlY29uZEhhbGZTb3VyY2Uoc2Vjb25kSGFsZik7ICAgICBcbiAgfTtcblxuICBjb25zdCBmaWxlQ2hhbmdlZCA9IChhcmdzOiBhbnkpID0+IHsgXG4gICAgY29uc3QgZmlsZSA9IChhcmdzLnRhcmdldD8uZmlsZXMgJiYgYXJncy50YXJnZXQ/LmZpbGVzLmxlbmd0aCA+IDApID8gYXJncy50YXJnZXQ/LmZpbGVzWzBdIDogbnVsbDsgXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gaW1hZ2VTZWxlY3RlZChyZWFkZXIucmVzdWx0LCB0cmFuc2Zvcm1TdGF0ZSksIGZhbHNlKTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHJhbnNmb3JtQ2hhbmdlZCA9ICh0cmFuc2Zvcm06IHN0cmluZykgPT4ge1xuICAgIHNldFRyYW5zZm9ybVN0YXRlKHRyYW5zZm9ybSk7IFxuICAgIGltYWdlU2VsZWN0ZWQobnVsbCwgdHJhbnNmb3JtKTsgICBcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17ZmlsZUNoYW5nZWR9IC8+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cHJpbnRCdXR0b25DbGFzc2VzfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX0+UHJpbnQgcmVzdWx0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5GaW5kIGVkZ2VzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBvbkNoYW5nZT17KCkgPT4gdHJhbnNmb3JtQ2hhbmdlZCgnZWRnZXMnKX0gbmFtZT1cImltYWdlT3B0aW9uc1wiIGNoZWNrZWQ9e3RyYW5zZm9ybVN0YXRlID09ICdlZGdlcyd9IC8+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3JleVNjYWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPkdyZXlzY2FsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9eygpID0+IHRyYW5zZm9ybUNoYW5nZWQoJ2dyZXknKX0gbmFtZT1cImltYWdlT3B0aW9uc1wiIGNoZWNrZWQ9e3RyYW5zZm9ybVN0YXRlID09ICdncmV5J30gLz5cbiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgT3JpZ2luYWxcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBzdHlsZT17e2hlaWdodDogMjAwfX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzRmlyc3RJbWFnZX0gc3JjPXtmaXJzdEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzU2Vjb25kSW1hZ2V9IHNyYz17c2Vjb25kSGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=