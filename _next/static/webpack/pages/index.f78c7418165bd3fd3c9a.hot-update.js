webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! image-manipulation/lib/imageTransform */ "../image-manipulation/lib/imageTransform.js");
/* harmony import */ var image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! image-manipulation/lib/PaperDimensions */ "../image-manipulation/lib/PaperDimensions.js");
/* harmony import */ var image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);




var _this = undefined,
    _jsxFileName = "C:\\dev\\personal\\photo-tracing\\packages\\web\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

 // TODO figure out how to have the TypeScript loaders work with WebPack





var IndexPage = function IndexPage() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Photo tracing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noprint,
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
    transform: 'edges'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      imgSrc = _useState[0],
      setImgSource = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      firstHalfSrc = _useState2[0],
      setFirstHalfSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      secondHalfSrc = _useState3[0],
      setSecondHalfSource = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(defaultTransformState),
      transformState = _useState4[0],
      setTransformState = _useState4[1];

  transformState = (Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("transformState"), defaultTransformState);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.visiblyhidden),
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
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4__["imageTransform"])().load(imageSource);

            case 5:
              image = _context.sent;
              _context.next = 11;
              break;

            case 8:
              _context.next = 10;
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4__["imageTransform"])().load(imgSrc);

            case 10:
              image = _context.sent;

            case 11:
              _image$meta = image.meta(), width = _image$meta.width, height = _image$meta.height;
              debugger;
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

            case 20:
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

  var transformChanged = function transformChanged(newTransform) {
    var newState = {
      transform: newTransform
    };
    setTransformState(newState);
    imageSelected(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.loader,
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
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Print result")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 109,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.printedPage,
    style: {
      height: image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_5__["PaperDimensions"].A4.height / 2 + 'mm'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.printedPage,
    style: {
      height: image_manipulation_lib_PaperDimensions__WEBPACK_IMPORTED_MODULE_5__["PaperDimensions"].A4.height / 2 + 'mm'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.a3SecondImage,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJzdHlsZXMiLCJub3ByaW50IiwiSW1hZ2VQaWNrZXIiLCJkZWZhdWx0VHJhbnNmb3JtU3RhdGUiLCJ0cmFuc2Zvcm0iLCJ1c2VTdGF0ZSIsImltZ1NyYyIsInNldEltZ1NvdXJjZSIsImZpcnN0SGFsZlNyYyIsInNldEZpcnN0SGFsZlNvdXJjZSIsInNlY29uZEhhbGZTcmMiLCJzZXRTZWNvbmRIYWxmU291cmNlIiwidHJhbnNmb3JtU3RhdGUiLCJzZXRUcmFuc2Zvcm1TdGF0ZSIsInZpc2libHloaWRkZW4iLCJwcmludEJ1dHRvbkNsYXNzZXMiLCJzZXRQcmludEJ1dHRvbkNsYXNzZXMiLCJpc0xhbmRzY2FwZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTZWxlY3RlZCIsImltYWdlU291cmNlIiwiaW1hZ2UiLCJpbWFnZVRyYW5zZm9ybSIsImxvYWQiLCJtZXRhIiwib3V0cHV0SW1hZ2UiLCJmaW5kRWRnZXMiLCJpbnZlcnQiLCJ0b0ltYWdlIiwidG9HcmV5IiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsIm1pZFBvaW50IiwiY3JvcCIsInRvRGF0YVVSTCIsIngiLCJ5IiwiZmlsZUNoYW5nZWQiLCJhcmdzIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidHJhbnNmb3JtQ2hhbmdlZCIsIm5ld1RyYW5zZm9ybSIsIm5ld1N0YXRlIiwibG9hZGVyIiwid2luZG93IiwicHJpbnQiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNv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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0F2QkYsQ0FERjtBQWtDRCxDQTlGRDs7R0FBTVIsVzs7TUFBQUEsVztBQWdHU0gsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjc4Yzc0MTgxNjViZDNmZDNjOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgaW1hZ2VUcmFuc2Zvcm0gfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL2ltYWdlVHJhbnNmb3JtJzsgLy8gVE9ETyBmaWd1cmUgb3V0IGhvdyB0byBoYXZlIHRoZSBUeXBlU2NyaXB0IGxvYWRlcnMgd29yayB3aXRoIFdlYlBhY2tcbmltcG9ydCB7IFBhcGVyRGltZW5zaW9ucyB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvUGFwZXJEaW1lbnNpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJQaG90byB0cmFjaW5nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3ByaW50fT5cbiAgICAgIDxoMT5QaG90byB0cmFjaW5nPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGFwcCBjYW4gYmUgdXNlZCB0byB0YWtlIGFuIGltYWdlIHRoYXQgeW91IGhhdmUgc2F2ZWQsIGFuZCByZXNpemUgaXQgdG8gQTMgYnV0IGlzIHByaW50YWJsZSB1c2luZyBhIHN0YW5kYXJkIEE0IHByaW50ZXIuXG4gICAgICAgIEFsbCB5b3UnbGwgbmVlZCB0byBkbyBpcyB0YXBlIHRoZSB0d28gcHJpbnRlZCBpbWFnZXMgdG9nZXRoZXIgdXNpbmcgc2NlbGxvdGFwZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUbyB1c2UgdGhlIHJlc2l6ZXI6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5DbGljayB0aGUgJ0Jyb3dzZS4uLicgYnV0dG9uIHRvIGNob29zZSBhIGZpbGUgdGhhdCB5b3Ugd2FudCB0byByZXNpemUgdG8gcHJpbnQgYXMgQTM8L2xpPlxuICAgICAgICA8bGk+UHJlc3MgdGhlICdQcmludCByZXN1bHRzJyBidXR0b24gdG8gc2VuZCBpdCB0byB5b3VyIHByaW50ZXI8L2xpPlxuICAgICAgPC9vbD4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8SW1hZ2VQaWNrZXIgLz4gICAgXG4gIDwvTGF5b3V0PlxuKTtcblxuY29uc3QgSW1hZ2VQaWNrZXIgPSAoKSA9PiB7IFxuICBjb25zdCBkZWZhdWx0VHJhbnNmb3JtU3RhdGUgPSB7dHJhbnNmb3JtOiAnZWRnZXMnfTtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW2ZpcnN0SGFsZlNyYywgc2V0Rmlyc3RIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3NlY29uZEhhbGZTcmMsIHNldFNlY29uZEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbdHJhbnNmb3JtU3RhdGUsIHNldFRyYW5zZm9ybVN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRUcmFuc2Zvcm1TdGF0ZSBhcyBhbnkpO1xuICB0cmFuc2Zvcm1TdGF0ZSA9IGRlZmF1bHRUcmFuc2Zvcm1TdGF0ZTtcbiAgY29uc3QgW3ByaW50QnV0dG9uQ2xhc3Nlcywgc2V0UHJpbnRCdXR0b25DbGFzc2VzXSA9IHVzZVN0YXRlKHN0eWxlcy52aXNpYmx5aGlkZGVuIGFzIGFueSk7XG4gIFxuICBjb25zdCBpc0xhbmRzY2FwZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB3aWR0aCA+IGhlaWdodDsgICAgXG4gIH07XG5cbiAgY29uc3QgaW1hZ2VTZWxlY3RlZCA9IGFzeW5jIChpbWFnZVNvdXJjZTogYW55KSA9PiB7IFxuICAgIGxldCBpbWFnZSA9IGltZ1NyYztcbiAgICBpZiAoaW1hZ2VTb3VyY2UpIHtcbiAgICAgIHNldEltZ1NvdXJjZShpbWFnZVNvdXJjZSk7ICAgIFxuICAgICAgaW1hZ2UgPSBhd2FpdCBpbWFnZVRyYW5zZm9ybSgpLmxvYWQoaW1hZ2VTb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWdTcmMpOyAgLy8gRWxzZSBnZXQgaXQgZnJvbSB0aGUgY3VycmVudCBzdGF0ZS4gVE9ETy4gVGhpcyBpcyBkaXNndXN0aW5nIVxuICAgIH0gICAgXG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLm1ldGEoKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCBvdXRwdXRJbWFnZSA9ICh0cmFuc2Zvcm1TdGF0ZS50cmFuc2Zvcm0gPT09ICdlZGdlcycpID8gaW1hZ2UuZmluZEVkZ2VzKCkuaW52ZXJ0KCkudG9JbWFnZSgpIDogaW1hZ2UudG9HcmV5KCkudG9JbWFnZSgpO1xuICAgIFxuICAgIGxldCBmaXJzdEhhbGYgPSBcIlwiO1xuICAgIGxldCBzZWNvbmRIYWxmID0gXCJcIjtcblxuICAgIGlmIChpc0xhbmRzY2FwZSh3aWR0aCwgaGVpZ2h0KSkge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBvdXRwdXRJbWFnZS53aWR0aC8yO1xuICAgICAgZmlyc3RIYWxmID0gb3V0cHV0SW1hZ2UuY3JvcCh7d2lkdGg6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IG91dHB1dEltYWdlLmNyb3Aoe3g6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IG91dHB1dEltYWdlLmhlaWdodC8yO1xuICAgICAgZmlyc3RIYWxmID0gb3V0cHV0SW1hZ2UuY3JvcCh7aGVpZ2h0OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBvdXRwdXRJbWFnZS5jcm9wKHt5OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpO1xuICAgIH1cblxuICAgIHNldFByaW50QnV0dG9uQ2xhc3Nlcyh7fSk7XG4gICAgc2V0Rmlyc3RIYWxmU291cmNlKGZpcnN0SGFsZik7XG4gICAgc2V0U2Vjb25kSGFsZlNvdXJjZShzZWNvbmRIYWxmKTsgICAgIFxuICB9O1xuXG4gIGNvbnN0IGZpbGVDaGFuZ2VkID0gKGFyZ3M6IGFueSkgPT4geyBcbiAgICBjb25zdCBmaWxlID0gKGFyZ3MudGFyZ2V0Py5maWxlcyAmJiBhcmdzLnRhcmdldD8uZmlsZXMubGVuZ3RoID4gMCkgPyBhcmdzLnRhcmdldD8uZmlsZXNbMF0gOiBudWxsOyBcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBpbWFnZVNlbGVjdGVkKHJlYWRlci5yZXN1bHQpLCBmYWxzZSk7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRyYW5zZm9ybUNoYW5nZWQgPSAobmV3VHJhbnNmb3JtOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt0cmFuc2Zvcm06IG5ld1RyYW5zZm9ybX07XG4gICAgc2V0VHJhbnNmb3JtU3RhdGUobmV3U3RhdGUpO1xuICAgIGltYWdlU2VsZWN0ZWQobnVsbCk7XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtZmlsZVwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VkfSAvPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+RmluZCBlZGdlczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJmaW5kRWRnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9eygpID0+IHRyYW5zZm9ybUNoYW5nZWQoJ2VkZ2VzJyl9IG5hbWU9XCJpbWFnZU9wdGlvbnNcIiBjaGVja2VkPXt0cmFuc2Zvcm1TdGF0ZS50cmFuc2Zvcm0gPT0gJ2VkZ2VzJ30gLz5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+R3JleXNjYWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdyZXlTY2FsZVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBvbkNoYW5nZT17KCkgPT4gdHJhbnNmb3JtQ2hhbmdlZCgnZ3JleScpfSBuYW1lPVwiaW1hZ2VPcHRpb25zXCIgY2hlY2tlZD17dHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtID09ICdncmV5J30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3ByaW50QnV0dG9uQ2xhc3Nlc30gb25DbGljaz17KCkgPT4gd2luZG93LnByaW50KCl9PlByaW50IHJlc3VsdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBzdHlsZT17e2hlaWdodDogMjAwfX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+ICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNGaXJzdEltYWdlfSBzcmM9e2ZpcnN0SGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNTZWNvbmRJbWFnZX0gc3JjPXtzZWNvbmRIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==