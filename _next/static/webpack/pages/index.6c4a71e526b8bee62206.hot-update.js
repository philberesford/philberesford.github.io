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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    transform: 'edges'
  }),
      transformState = _useState4[0],
      setTransformState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visiblyhidden),
      printButtonClasses = _useState5[0],
      setPrintButtonClasses = _useState5[1];

  var isLandscape = function isLandscape(width, height) {
    return width > height;
  };

  var rawImageFileContents = null; // The file contents 

  var imageSelected = /*#__PURE__*/function () {
    var _ref = Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var imageSource, image, _image$meta, width, height, edges, firstHalf, secondHalf, midPoint, _midPoint;

      return C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              imageSource = rawImageFileContents;
              setImgSource(imageSource);
              _context.next = 4;
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_3__["imageTransform"])().load(imageSource);

            case 4:
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

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function imageSelected() {
      return _ref.apply(this, arguments);
    };
  }();

  var fileChanged = function fileChanged(args) {
    var _args$target, _args$target2, _args$target3;

    var file = ((_args$target = args.target) === null || _args$target === void 0 ? void 0 : _args$target.files) && ((_args$target2 = args.target) === null || _args$target2 === void 0 ? void 0 : _args$target2.files.length) > 0 ? (_args$target3 = args.target) === null || _args$target3 === void 0 ? void 0 : _args$target3.files[0] : null;
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      rawImageFileContents = reader.result; // store the result for further filtering if needed

      imageSelected();
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
    imageSelected();
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
    checked: transformState.transform == 'edges',
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
    checked: transformState.transform == 'grey',
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

_s(ImagePicker, "pfWLO69/uT1H/TeJP7sU76RryT0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1TdGF0ZSIsInNldFRyYW5zZm9ybVN0YXRlIiwidmlzaWJseWhpZGRlbiIsInByaW50QnV0dG9uQ2xhc3NlcyIsInNldFByaW50QnV0dG9uQ2xhc3NlcyIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJyYXdJbWFnZUZpbGVDb250ZW50cyIsImltYWdlU2VsZWN0ZWQiLCJpbWFnZVNvdXJjZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsImltYWdlIiwibWV0YSIsImVkZ2VzIiwiZmluZEVkZ2VzIiwiaW52ZXJ0IiwidG9JbWFnZSIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJtaWRQb2ludCIsImNyb3AiLCJ0b0RhdGFVUkwiLCJ4IiwieSIsImZpbGVDaGFuZ2VkIiwiYXJncyIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInRyYW5zZm9ybUNoYW5nZWQiLCJuZXdUcmFuc2Zvcm0iLCJuZXdTdGF0ZSIsImxvYWRlciIsIndpbmRvdyIsInByaW50IiwicHJpbnRlZFBhZ2UiLCJQYXBlckRpbWVuc2lvbnMiLCJBNCIsImEzRmlyc3RJbWFnZSIsImEzU2Vjb25kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN3RTs7QUFDeEU7QUFDQTtBQUVBOztBQUVBLElBQU1B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LFlBQU0sRUFBRXFDLHNGQUFlLENBQUNDLEVBQWhCLENBQW1CdEMsTUFBbkIsR0FBMEIsQ0FBMUIsR0FBNEI7QUFBckMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFbEIsd0RBQU0sQ0FBQ3lELFlBQXZCO0FBQXFDLE9BQUcsRUFBRW5ELFlBQTFDO0FBQXdELE9BQUcsRUFBQyxFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFTix3REFBTSxDQUFDc0QsV0FBdkI7QUFBb0MsU0FBSyxFQUFFO0FBQUNwQyxZQUFNLEVBQUVxQyxzRkFBZSxDQUFDQyxFQUFoQixDQUFtQnRDLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCO0FBQXJDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWxCLHdEQUFNLENBQUMwRCxhQUF2QjtBQUFzQyxPQUFHLEVBQUVsRCxhQUEzQztBQUEwRCxPQUFHLEVBQUMsRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0F2QkYsQ0FERjtBQWtDRCxDQWpHRDs7R0FBTU4sVzs7TUFBQUEsVztBQW1HU0gsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmM0YTcxZTUyNmI4YmVlNjIyMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgaW1hZ2VUcmFuc2Zvcm0gfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL2ltYWdlVHJhbnNmb3JtJzsgLy8gVE9ETyBmaWd1cmUgb3V0IGhvdyB0byBoYXZlIHRoZSBUeXBlU2NyaXB0IGxvYWRlcnMgd29yayB3aXRoIFdlYlBhY2tcbmltcG9ydCB7IFBhcGVyRGltZW5zaW9ucyB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvUGFwZXJEaW1lbnNpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJQaG90byB0cmFjaW5nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3ByaW50fT5cbiAgICAgIDxoMT5QaG90byB0cmFjaW5nPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGFwcCBjYW4gYmUgdXNlZCB0byB0YWtlIGFuIGltYWdlIHRoYXQgeW91IGhhdmUgc2F2ZWQsIGFuZCByZXNpemUgaXQgdG8gQTMgYnV0IGlzIHByaW50YWJsZSB1c2luZyBhIHN0YW5kYXJkIEE0IHByaW50ZXIuXG4gICAgICAgIEFsbCB5b3UnbGwgbmVlZCB0byBkbyBpcyB0YXBlIHRoZSB0d28gcHJpbnRlZCBpbWFnZXMgdG9nZXRoZXIgdXNpbmcgc2NlbGxvdGFwZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUbyB1c2UgdGhlIHJlc2l6ZXI6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5DbGljayB0aGUgJ0Jyb3dzZS4uLicgYnV0dG9uIHRvIGNob29zZSBhIGZpbGUgdGhhdCB5b3Ugd2FudCB0byByZXNpemUgdG8gcHJpbnQgYXMgQTM8L2xpPlxuICAgICAgICA8bGk+UHJlc3MgdGhlICdQcmludCByZXN1bHRzJyBidXR0b24gdG8gc2VuZCBpdCB0byB5b3VyIHByaW50ZXI8L2xpPlxuICAgICAgPC9vbD4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8SW1hZ2VQaWNrZXIgLz4gICAgXG4gIDwvTGF5b3V0PlxuKTtcblxuY29uc3QgSW1hZ2VQaWNrZXIgPSAoKSA9PiB7ICBcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW2ZpcnN0SGFsZlNyYywgc2V0Rmlyc3RIYWxmU291cmNlXSA9IHVzZVN0YXRlKG51bGwgYXMgYW55KTtcbiAgY29uc3QgW3NlY29uZEhhbGZTcmMsIHNldFNlY29uZEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbdHJhbnNmb3JtU3RhdGUsIHNldFRyYW5zZm9ybVN0YXRlXSA9IHVzZVN0YXRlKHt0cmFuc2Zvcm06ICdlZGdlcyd9IGFzIGFueSk7XG5cbiAgY29uc3QgW3ByaW50QnV0dG9uQ2xhc3Nlcywgc2V0UHJpbnRCdXR0b25DbGFzc2VzXSA9IHVzZVN0YXRlKHN0eWxlcy52aXNpYmx5aGlkZGVuIGFzIGFueSk7XG4gIFxuICBjb25zdCBpc0xhbmRzY2FwZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB3aWR0aCA+IGhlaWdodDsgICAgXG4gIH07XG5cbiAgbGV0IHJhd0ltYWdlRmlsZUNvbnRlbnRzID0gbnVsbDsgIC8vIFRoZSBmaWxlIGNvbnRlbnRzIFxuICBcbiAgY29uc3QgaW1hZ2VTZWxlY3RlZCA9IGFzeW5jICgpID0+IHsgICAgICAgXG4gICAgY29uc3QgaW1hZ2VTb3VyY2UgPSByYXdJbWFnZUZpbGVDb250ZW50cztcbiAgICBzZXRJbWdTb3VyY2UoaW1hZ2VTb3VyY2UpO1xuICAgIFxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgaW1hZ2VUcmFuc2Zvcm0oKS5sb2FkKGltYWdlU291cmNlKTtcblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UubWV0YSgpO1xuXG4gICAgY29uc3QgZWRnZXMgPSBpbWFnZS5maW5kRWRnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAuaW52ZXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgLnRvSW1hZ2UoKVxuXG4gICAgbGV0IGZpcnN0SGFsZiA9IFwiXCI7XG4gICAgbGV0IHNlY29uZEhhbGYgPSBcIlwiO1xuXG4gICAgaWYgKGlzTGFuZHNjYXBlKHdpZHRoLCBoZWlnaHQpKSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IGVkZ2VzLndpZHRoLzI7XG4gICAgICBmaXJzdEhhbGYgPSBlZGdlcy5jcm9wKHt3aWR0aDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gZWRnZXMuY3JvcCh7eDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gZWRnZXMuaGVpZ2h0LzI7XG4gICAgICBmaXJzdEhhbGYgPSBlZGdlcy5jcm9wKHtoZWlnaHQ6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IGVkZ2VzLmNyb3Aoe3k6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7XG4gICAgfVxuXG4gICAgc2V0UHJpbnRCdXR0b25DbGFzc2VzKHt9KTtcbiAgICBzZXRGaXJzdEhhbGZTb3VyY2UoZmlyc3RIYWxmKTtcbiAgICBzZXRTZWNvbmRIYWxmU291cmNlKHNlY29uZEhhbGYpOyAgICAgXG4gIH07XG5cbiAgY29uc3QgZmlsZUNoYW5nZWQgPSAoYXJnczogYW55KSA9PiB7IFxuICAgIGNvbnN0IGZpbGUgPSAoYXJncy50YXJnZXQ/LmZpbGVzICYmIGFyZ3MudGFyZ2V0Py5maWxlcy5sZW5ndGggPiAwKSA/IGFyZ3MudGFyZ2V0Py5maWxlc1swXSA6IG51bGw7IFxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIHJhd0ltYWdlRmlsZUNvbnRlbnRzID0gcmVhZGVyLnJlc3VsdDsgICAvLyBzdG9yZSB0aGUgcmVzdWx0IGZvciBmdXJ0aGVyIGZpbHRlcmluZyBpZiBuZWVkZWRcbiAgICAgIGltYWdlU2VsZWN0ZWQoKVxuICAgIH0sIGZhbHNlKTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHJhbnNmb3JtQ2hhbmdlZCA9IChuZXdUcmFuc2Zvcm06IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge3RyYW5zZm9ybTogbmV3VHJhbnNmb3JtfTtcbiAgICBzZXRUcmFuc2Zvcm1TdGF0ZShuZXdTdGF0ZSk7XG4gICAgaW1hZ2VTZWxlY3RlZCgpO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3ByaW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGVcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlZH0gLz4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmluZEVkZ2VzXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPkZpbmQgZWRnZXM8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZmluZEVkZ2VzXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIG9uQ2hhbmdlPXsoKSA9PiB0cmFuc2Zvcm1DaGFuZ2VkKCdlZGdlcycpfSBuYW1lPVwiaW1hZ2VPcHRpb25zXCIgY2hlY2tlZD17dHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtID09ICdlZGdlcyd9IC8+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3JleVNjYWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPkdyZXlzY2FsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9eygpID0+IHRyYW5zZm9ybUNoYW5nZWQoJ2dyZXknKX0gbmFtZT1cImltYWdlT3B0aW9uc1wiIGNoZWNrZWQ9e3RyYW5zZm9ybVN0YXRlLnRyYW5zZm9ybSA9PSAnZ3JleSd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwcmludEJ1dHRvbkNsYXNzZXN9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfT5QcmludCByZXN1bHQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gc3R5bGU9e3toZWlnaHQ6IDIwMH19IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzRmlyc3RJbWFnZX0gc3JjPXtmaXJzdEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaW50ZWRQYWdlfSBzdHlsZT17e2hlaWdodDogUGFwZXJEaW1lbnNpb25zLkE0LmhlaWdodC8yKydtbSd9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmEzU2Vjb25kSW1hZ2V9IHNyYz17c2Vjb25kSGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=