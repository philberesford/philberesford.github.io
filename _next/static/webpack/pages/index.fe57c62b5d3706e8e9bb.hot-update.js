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
  }, "To use the resizer:", __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Click the 'Browse...' button to choose a file that you want to resize to print as A3"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Press the 'Print results' button to send it to your printer")))), __jsx(ImagePicker, {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      imgSrc = _useState[0],
      setImgSource = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      firstHalfSrc = _useState2[0],
      setFirstHalfSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      secondHalfSrc = _useState3[0],
      setSecondHalfSource = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
      findEdges = _useState4[0],
      setFindEdges = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      greyScale = _useState5[0],
      setGreyScale = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.visiblyhidden),
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
              return Object(image_manipulation_lib_imageTransform__WEBPACK_IMPORTED_MODULE_4__["imageTransform"])().load(imageSource);

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

    var setFindEdges = function setFindEdges(args) {
      findEdges = (Object(C_dev_personal_photo_tracing_packages_web_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("findEdges"), args.checked);
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-control-file",
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-check form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "findEdges",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Find edges"), __jsx("input", {
    type: "radio",
    id: "findEdges",
    className: "form-check-input",
    value: "edges",
    onChange: setFindEdges,
    name: "imageOptions",
    checked: findEdges,
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
    htmlFor: "greyScale",
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Greyscale"), __jsx("input", {
    type: "radio",
    id: "greyScale",
    className: "form-check-input",
    value: "grey",
    onChange: setGreyScale,
    name: "imageOptions",
    checked: greyScale,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-floating mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Print result")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 105,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJzdHlsZXMiLCJub3ByaW50IiwiSW1hZ2VQaWNrZXIiLCJ1c2VTdGF0ZSIsImltZ1NyYyIsInNldEltZ1NvdXJjZSIsImZpcnN0SGFsZlNyYyIsInNldEZpcnN0SGFsZlNvdXJjZSIsInNlY29uZEhhbGZTcmMiLCJzZXRTZWNvbmRIYWxmU291cmNlIiwiZmluZEVkZ2VzIiwic2V0RmluZEVkZ2VzIiwiZ3JleVNjYWxlIiwic2V0R3JleVNjYWxlIiwidmlzaWJseWhpZGRlbiIsInByaW50QnV0dG9uQ2xhc3NlcyIsInNldFByaW50QnV0dG9uQ2xhc3NlcyIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVRyYW5zZm9ybSIsImxvYWQiLCJpbWFnZSIsIm1ldGEiLCJlZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJjaGVja2VkIiwibG9hZGVyIiwid2luZG93IiwicHJpbnQiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNvbmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBSyxhQUFTLEVBQUVuQix3REFBTSxDQUFDc0QsWUFBdkI7QUFBcUMsT0FBRyxFQUFFaEQsWUFBMUM7QUFBd0QsT0FBRyxFQUFDLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVOLHdEQUFNLENBQUNtRCxXQUF2QjtBQUFvQyxTQUFLLEVBQUU7QUFBQ2hDLFlBQU0sRUFBRWlDLHNGQUFlLENBQUNDLEVBQWhCLENBQW1CbEMsTUFBbkIsR0FBMEIsQ0FBMUIsR0FBNEI7QUFBckMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFbkIsd0RBQU0sQ0FBQ3VELGFBQXZCO0FBQXNDLE9BQUcsRUFBRS9DLGFBQTNDO0FBQTBELE9BQUcsRUFBQyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQXZCRixDQURGO0FBa0NELENBMUZEOztHQUFNTixXOztNQUFBQSxXO0FBNEZTSCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZTU3YzYyYjVkMzcwNmU4ZTliYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBpbWFnZVRyYW5zZm9ybSB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvaW1hZ2VUcmFuc2Zvcm0nOyAvLyBUT0RPIGZpZ3VyZSBvdXQgaG93IHRvIGhhdmUgdGhlIFR5cGVTY3JpcHQgbG9hZGVycyB3b3JrIHdpdGggV2ViUGFja1xuaW1wb3J0IHsgUGFwZXJEaW1lbnNpb25zIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9QYXBlckRpbWVuc2lvbnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IChcbiAgPExheW91dCB0aXRsZT1cIlBob3RvIHRyYWNpbmdcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vcHJpbnR9PlxuICAgICAgPGgxPlBob3RvIHRyYWNpbmc8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgYXBwIGNhbiBiZSB1c2VkIHRvIHRha2UgYW4gaW1hZ2UgdGhhdCB5b3UgaGF2ZSBzYXZlZCwgYW5kIHJlc2l6ZSBpdCB0byBBMyBidXQgaXMgcHJpbnRhYmxlIHVzaW5nIGEgc3RhbmRhcmQgQTQgcHJpbnRlci5cbiAgICAgICAgQWxsIHlvdSdsbCBuZWVkIHRvIGRvIGlzIHRhcGUgdGhlIHR3byBwcmludGVkIGltYWdlcyB0b2dldGhlciB1c2luZyBzY2VsbG90YXBlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRvIHVzZSB0aGUgcmVzaXplcjpcbiAgICAgICAgPG9sPlxuICAgICAgICAgIDxsaT5DbGljayB0aGUgJ0Jyb3dzZS4uLicgYnV0dG9uIHRvIGNob29zZSBhIGZpbGUgdGhhdCB5b3Ugd2FudCB0byByZXNpemUgdG8gcHJpbnQgYXMgQTM8L2xpPlxuICAgICAgICAgIDxsaT5QcmVzcyB0aGUgJ1ByaW50IHJlc3VsdHMnIGJ1dHRvbiB0byBzZW5kIGl0IHRvIHlvdXIgcHJpbnRlcjwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbZmlyc3RIYWxmU3JjLCBzZXRGaXJzdEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbc2Vjb25kSGFsZlNyYywgc2V0U2Vjb25kSGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtmaW5kRWRnZXMsIHNldEZpbmRFZGdlc10gPSB1c2VTdGF0ZSh0cnVlIGFzIGFueSk7XG4gIGNvbnN0IFtncmV5U2NhbGUsIHNldEdyZXlTY2FsZV0gPSB1c2VTdGF0ZShmYWxzZSBhcyBhbnkpO1xuXG4gIGNvbnN0IFtwcmludEJ1dHRvbkNsYXNzZXMsIHNldFByaW50QnV0dG9uQ2xhc3Nlc10gPSB1c2VTdGF0ZShzdHlsZXMudmlzaWJseWhpZGRlbiBhcyBhbnkpO1xuICBcbiAgY29uc3QgaXNMYW5kc2NhcGUgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gd2lkdGggPiBoZWlnaHQ7ICAgIFxuICB9O1xuXG4gIGNvbnN0IGltYWdlU2VsZWN0ZWQgPSBhc3luYyAoaW1hZ2VTb3VyY2U6IGFueSkgPT4geyAgICAgICBcbiAgICBzZXRJbWdTb3VyY2UoaW1hZ2VTb3VyY2UpO1xuICAgIFxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgaW1hZ2VUcmFuc2Zvcm0oKS5sb2FkKGltYWdlU291cmNlKTtcblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UubWV0YSgpO1xuXG4gICAgY29uc3QgZWRnZXMgPSBpbWFnZS5maW5kRWRnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAuaW52ZXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgLnRvSW1hZ2UoKVxuXG4gICAgbGV0IGZpcnN0SGFsZiA9IFwiXCI7XG4gICAgbGV0IHNlY29uZEhhbGYgPSBcIlwiO1xuXG4gICAgaWYgKGlzTGFuZHNjYXBlKHdpZHRoLCBoZWlnaHQpKSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IGVkZ2VzLndpZHRoLzI7XG4gICAgICBmaXJzdEhhbGYgPSBlZGdlcy5jcm9wKHt3aWR0aDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gZWRnZXMuY3JvcCh7eDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gZWRnZXMuaGVpZ2h0LzI7XG4gICAgICBmaXJzdEhhbGYgPSBlZGdlcy5jcm9wKHtoZWlnaHQ6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IGVkZ2VzLmNyb3Aoe3k6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7XG4gICAgfVxuXG4gICAgc2V0UHJpbnRCdXR0b25DbGFzc2VzKHt9KTtcbiAgICBzZXRGaXJzdEhhbGZTb3VyY2UoZmlyc3RIYWxmKTtcbiAgICBzZXRTZWNvbmRIYWxmU291cmNlKHNlY29uZEhhbGYpOyAgICAgXG4gIH07XG5cbiAgY29uc3QgZmlsZUNoYW5nZWQgPSAoYXJnczogYW55KSA9PiB7IFxuICAgIGNvbnN0IGZpbGUgPSAoYXJncy50YXJnZXQ/LmZpbGVzICYmIGFyZ3MudGFyZ2V0Py5maWxlcy5sZW5ndGggPiAwKSA/IGFyZ3MudGFyZ2V0Py5maWxlc1swXSA6IG51bGw7IFxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGltYWdlU2VsZWN0ZWQocmVhZGVyLnJlc3VsdCksIGZhbHNlKTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRGaW5kRWRnZXMgPSAoYXJnczogYW55KSA9PiB7XG4gICAgICBmaW5kRWRnZXMgPSBhcmdzLmNoZWNrZWRcbiAgICB9XG59O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17ZmlsZUNoYW5nZWR9IC8+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5GaW5kIGVkZ2VzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImZpbmRFZGdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cImVkZ2VzXCIgb25DaGFuZ2U9e3NldEZpbmRFZGdlc30gbmFtZT1cImltYWdlT3B0aW9uc1wiIGNoZWNrZWQ9e2ZpbmRFZGdlc30gLz5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJncmV5U2NhbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+R3JleXNjYWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdyZXlTY2FsZVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cImdyZXlcIiBvbkNoYW5nZT17c2V0R3JleVNjYWxlfSBuYW1lPVwiaW1hZ2VPcHRpb25zXCIgY2hlY2tlZD17Z3JleVNjYWxlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtYi0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cHJpbnRCdXR0b25DbGFzc2VzfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX0+UHJpbnQgcmVzdWx0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdTcmN9IHN0eWxlPXt7aGVpZ2h0OiAyMDB9fSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM0ZpcnN0SW1hZ2V9IHNyYz17Zmlyc3RIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM1NlY29uZEltYWdlfSBzcmM9e3NlY29uZEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+ICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9