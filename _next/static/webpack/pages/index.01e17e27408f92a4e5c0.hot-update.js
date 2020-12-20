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
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loadingContainer,
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 9
    }
  }))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIkltYWdlUGlja2VyIiwidXNlU3RhdGUiLCJpbWdTcmMiLCJzZXRJbWdTb3VyY2UiLCJmaXJzdEhhbGZTcmMiLCJzZXRGaXJzdEhhbGZTb3VyY2UiLCJzZWNvbmRIYWxmU3JjIiwic2V0U2Vjb25kSGFsZlNvdXJjZSIsImlzTGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVNlbGVjdGVkIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVRyYW5zZm9ybSIsImxvYWQiLCJpbWFnZSIsIm1ldGEiLCJlZGdlcyIsImZpbmRFZGdlcyIsImludmVydCIsInRvSW1hZ2UiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwibWlkUG9pbnQiLCJjcm9wIiwidG9EYXRhVVJMIiwieCIsInkiLCJmaWxlQ2hhbmdlZCIsImFyZ3MiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJsb2FkaW5nQ29udGFpbmVyIiwibG9hZGVyIiwicHJpbnRlZFBhZ2UiLCJQYXBlckRpbWVuc2lvbnMiLCJBNCIsImEzRmlyc3RJbWFnZSIsImEzU2Vjb25kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN3RTs7QUFDeEU7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDaEIsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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RyxFQUFFekMsWUFBMUM7QUFBd0QsT0FBRyxFQUFDLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVtQyx3REFBTSxDQUFDRyxXQUF2QjtBQUFvQyxTQUFLLEVBQUU7QUFBQ2hDLFlBQU0sRUFBRWlDLHNGQUFlLENBQUNDLEVBQWhCLENBQW1CbEMsTUFBbkIsR0FBMEIsQ0FBMUIsR0FBNEI7QUFBckMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFNkIsd0RBQU0sQ0FBQ08sYUFBdkI7QUFBc0MsT0FBRyxFQUFFeEMsYUFBM0M7QUFBMEQsT0FBRyxFQUFDLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBVEYsQ0FERjtBQW9CRCxDQXBFRDs7R0FBTU4sVzs7TUFBQUEsVztBQXNFU0Qsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDFlMTdlMjc0MDhmOTJhNGU1YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgaW1hZ2VUcmFuc2Zvcm0gfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL2ltYWdlVHJhbnNmb3JtJzsgLy8gVE9ETyBmaWd1cmUgb3V0IGhvdyB0byBoYXZlIHRoZSBUeXBlU2NyaXB0IGxvYWRlcnMgd29yayB3aXRoIFdlYlBhY2tcbmltcG9ydCB7IFBhcGVyRGltZW5zaW9ucyB9IGZyb20gJ2ltYWdlLW1hbmlwdWxhdGlvbi9saWIvUGFwZXJEaW1lbnNpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJQaG90byB0cmFjaW5nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICA8aDE+UGhvdG8gdHJhY2luZzwvaDE+XG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbZmlyc3RIYWxmU3JjLCBzZXRGaXJzdEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbc2Vjb25kSGFsZlNyYywgc2V0U2Vjb25kSGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIFxuICBjb25zdCBpc0xhbmRzY2FwZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB3aWR0aCA+IGhlaWdodDsgICAgXG4gIH07XG5cbiAgY29uc3QgaW1hZ2VTZWxlY3RlZCA9IGFzeW5jIChpbWFnZVNvdXJjZTogYW55KSA9PiB7ICAgXG4gICAgc2V0SW1nU291cmNlKGltYWdlU291cmNlKTtcbiAgICBcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGltYWdlVHJhbnNmb3JtKCkubG9hZChpbWFnZVNvdXJjZSk7XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLm1ldGEoKTtcblxuICAgIGNvbnN0IGVkZ2VzID0gaW1hZ2UuZmluZEVkZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgLmludmVydCgpXG4gICAgICAgICAgICAgICAgICAgICAgIC50b0ltYWdlKClcblxuICAgIGxldCBmaXJzdEhhbGYgPSBcIlwiO1xuICAgIGxldCBzZWNvbmRIYWxmID0gXCJcIjtcblxuICAgIGlmIChpc0xhbmRzY2FwZSh3aWR0aCwgaGVpZ2h0KSkge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBlZGdlcy53aWR0aC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7d2lkdGg6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgc2Vjb25kSGFsZiA9IGVkZ2VzLmNyb3Aoe3g6IG1pZFBvaW50fSkudG9EYXRhVVJMKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtaWRQb2ludCA9IGVkZ2VzLmhlaWdodC8yO1xuICAgICAgZmlyc3RIYWxmID0gZWRnZXMuY3JvcCh7aGVpZ2h0OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBlZGdlcy5jcm9wKHt5OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpO1xuICAgIH1cblxuICAgIHNldEZpcnN0SGFsZlNvdXJjZShmaXJzdEhhbGYpO1xuICAgIHNldFNlY29uZEhhbGZTb3VyY2Uoc2Vjb25kSGFsZik7ICAgICBcblxuICB9O1xuXG4gIGNvbnN0IGZpbGVDaGFuZ2VkID0gKGFyZ3M6IGFueSkgPT4geyBcbiAgICBjb25zdCBmaWxlID0gKGFyZ3MudGFyZ2V0Py5maWxlcyAmJiBhcmdzLnRhcmdldD8uZmlsZXMubGVuZ3RoID4gMCkgPyBhcmdzLnRhcmdldD8uZmlsZXNbMF0gOiBudWxsOyBcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBpbWFnZVNlbGVjdGVkKHJlYWRlci5yZXN1bHQpLCBmYWxzZSk7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxufTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VkfSAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBzdHlsZT17e2hlaWdodDogMjAwfX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+ICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM0ZpcnN0SW1hZ2V9IHNyYz17Zmlyc3RIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmludGVkUGFnZX0gc3R5bGU9e3toZWlnaHQ6IFBhcGVyRGltZW5zaW9ucy5BNC5oZWlnaHQvMisnbW0nfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hM1NlY29uZEltYWdlfSBzcmM9e3NlY29uZEhhbGZTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+ICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9