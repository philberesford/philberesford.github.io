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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: "loadingContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIkltYWdlUGlja2VyIiwidXNlU3RhdGUiLCJpbWdTcmMiLCJzZXRJbWdTb3VyY2UiLCJmaXJzdEhhbGZTcmMiLCJzZXRGaXJzdEhhbGZTb3VyY2UiLCJzZWNvbmRIYWxmU3JjIiwic2V0U2Vjb25kSGFsZlNvdXJjZSIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVRyYW5zZm9ybSIsImxvYWQiLCJpbWFnZSIsIm1ldGEiLCJlZGdlcyIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJsb2FkZXIiLCJwcmludGVkUGFnZSIsIlBhcGVyRGltZW5zaW9ucyIsIkE0IiwiYTNGaXJzdEltYWdlIiwiYTNTZWNvbmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3dFOztBQUN4RTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUNoQixNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYs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QTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVtQyx3REFBTSxDQUFDRSxXQUF2QjtBQUFvQyxTQUFLLEVBQUU7QUFBQy9CLFlBQU0sRUFBRWdDLHNGQUFlLENBQUNDLEVBQWhCLENBQW1CakMsTUFBbkIsR0FBMEIsQ0FBMUIsR0FBNEI7QUFBckMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFNkIsd0RBQU0sQ0FBQ00sYUFBdkI7QUFBc0MsT0FBRyxFQUFFdkMsYUFBM0M7QUFBMEQsT0FBRyxFQUFDLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBVEYsQ0FERjtBQW9CRCxDQXBFRDs7R0FBTU4sVzs7TUFBQUEsVztBQXNFU0Qsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjkyNWE5MWVmYTVhYWQ4YzYyZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgaW1hZ2VUcmFuc2Zvcm0gfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL2ltYWdlVHJhbnNmb3JtJzsgLy8gVE9ETyBmaWd1cmUgb3V0IGhvdyB0byBoYXZlIHRoZSBUeXBlU2NyaXB0IGxvYWRlcnMgd29yayB3aXRoIFdlYlBhY2tcbmltcG9ydCB7IFBhcGVyRGltZW5zaW9ucyB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvUGFwZXJEaW1lbnNpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJQaG90byB0cmFjaW5nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICA8aDE+UGhvdG8gdHJhY2luZzwvaDE+XG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbZmlyc3RIYWxmU3JjLCBzZXRGaXJzdEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbc2Vjb25kSGFsZlNyYywgc2V0U2Vjb25kSGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIFxuICBjb25zdCBpc0xhbmRzY2FwZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB3aWR0aCA+IGhlaWdodDsgICAgXG4gIH07XG5cbiAgY29uc3QgaW1hZ2VTZWxlY3RlZCA9IGFzeW5jIChpbWFnZVNvdXJjZTogYW55KSA9PiB7ICAgXG4gICAgc2V0SW1nU291cmNlKGltYWdlU291cmNlKTtcbiAgICBcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWFnZVNvdXJjZSk7XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLm1ldGEoKTtcblxuICAgIGNvbnN0IGVkZ2VzID0gaW1hZ2UuZmluZEVkZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgLmludmVydCgpXG4gICAgICAgICAgICAgICAgICAgICAgIC50b0ltYWdlKClcblxuICAgIGxldCBmaXJzdEhhbGYgPSBcIlwiO1xuICAgIGxldCBzZWNvbmRIYWxmID0gXCJcIjtcblxuICAgIGlmIChpc0xhbmRzY2FwZSh3aWR0aCwgaGVpZ2h0KSkge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBlZGdlcy53aWR0aC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7d2lkdGg6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IGVkZ2VzLmNyb3Aoe3g6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IGVkZ2VzLmhlaWdodC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7aGVpZ2h0OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBlZGdlcy5jcm9wKHt5OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpO1xuICAgIH1cblxuICAgIHNldEZpcnN0SGFsZlNvdXJjZShmaXJzdEhhbGYpO1xuICAgIHNldFNlY29uZEhhbGZTb3VyY2Uoc2Vjb25kSGFsZik7ICAgICBcblxuICB9O1xuXG4gIGNvbnN0IGZpbGVDaGFuZ2VkID0gKGFyZ3M6IGFueSkgPT4geyBcbiAgICBjb25zdCBmaWxlID0gKGFyZ3MudGFyZ2V0Py5maWxlcyAmJiBhcmdzLnRhcmdldD8uZmlsZXMubGVuZ3RoID4gMCkgPyBhcmdzLnRhcmdldD8uZmlsZXNbMF0gOiBudWxsOyBcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBpbWFnZVNlbGVjdGVkKHJlYWRlci5yZXN1bHQpLCBmYWxzZSk7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxufTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gc3R5bGU9e3toZWlnaHQ6IDIwMH19IGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNGaXJzdEltYWdlfSBzcmM9e2ZpcnN0SGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNTZWNvbmRJbWFnZX0gc3JjPXtzZWNvbmRIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==