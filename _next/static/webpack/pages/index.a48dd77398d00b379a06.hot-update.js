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
  }, "To use the resizer:", __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Click the 'Browse...' button to choose a file that you want to resize to A3")))), __jsx(ImagePicker, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visiblyhidden),
      printButtonClasses = _useState4[0],
      setPrintButtonClasses = _useState4[1];

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noprint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: fileChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: printButtonClasses,
    onClick: function onClick() {
      return window.print();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 55
    }
  }, "Print result"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3FirstImage,
    src: firstHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.a3SecondImage,
    src: secondHalfSrc,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }))));
};

_s(ImagePicker, "1WOkTBMeePPO0fECw38AWgzMrBY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInN0eWxlcyIsIm5vcHJpbnQiLCJJbWFnZVBpY2tlciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU291cmNlIiwiZmlyc3RIYWxmU3JjIiwic2V0Rmlyc3RIYWxmU291cmNlIiwic2Vjb25kSGFsZlNyYyIsInNldFNlY29uZEhhbGZTb3VyY2UiLCJ2aXNpYmx5aGlkZGVuIiwicHJpbnRCdXR0b25DbGFzc2VzIiwic2V0UHJpbnRCdXR0b25DbGFzc2VzIiwiaXNMYW5kc2NhcGUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlU2VsZWN0ZWQiLCJpbWFnZVNvdXJjZSIsImltYWdlVHJhbnNmb3JtIiwibG9hZCIsImltYWdlIiwibWV0YSIsImVkZ2VzIiwiZmluZEVkZ2VzIiwiaW52ZXJ0IiwidG9JbWFnZSIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJtaWRQb2ludCIsImNyb3AiLCJ0b0RhdGFVUkwiLCJ4IiwieSIsImZpbGVDaGFuZ2VkIiwiYXJncyIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImxvYWRlciIsIndpbmRvdyIsInByaW50IiwicHJpbnRlZFBhZ2UiLCJQYXBlckRpbWVuc2lvbnMiLCJBNCIsImEzRmlyc3RJbWFnZSIsImEzU2Vjb25kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN3RTs7QUFDeEU7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDaEIsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1GQURGLENBRkYsQ0FGRixDQURGLEVBVUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURnQjtBQUFBLENBQWxCOztLQUFNRixTOztBQWVOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxJQUFELENBRGY7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxZQURTOztBQUFBLG1CQUVtQkYsc0RBQVEsQ0FBQyxJQUFELENBRjNCO0FBQUEsTUFFakJHLFlBRmlCO0FBQUEsTUFFSEMsa0JBRkc7O0FBQUEsbUJBR3FCSixzREFBUSxDQUFDLElBQUQsQ0FIN0I7QUFBQSxNQUdqQkssYUFIaUI7QUFBQSxNQUdGQyxtQkFIRTs7QUFBQSxtQkFJNEJOLHNEQUFRLENBQUNILHdEQUFNLENBQUNVLGFBQVIsQ0FKcEM7QUFBQSxNQUlqQkMsa0JBSmlCO0FBQUEsTUFJR0MscUJBSkg7O0FBTXhCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBZ0JDLE1BQWhCLEVBQW1DO0FBQ3JELFdBQU9ELEtBQUssR0FBR0MsTUFBZjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsYUFBYTtBQUFBLDRTQUFHLGlCQUFPQyxXQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJaLDBCQUFZLENBQUNZLFdBQUQsQ0FBWjtBQURvQjtBQUFBLHFCQUdBQyw0RkFBYyxHQUFHQyxJQUFqQixDQUFzQkYsV0FBdEIsQ0FIQTs7QUFBQTtBQUdkRyxtQkFIYztBQUFBLDRCQUtNQSxLQUFLLENBQUNDLElBQU4sRUFMTixFQUtaUCxLQUxZLGVBS1pBLEtBTFksRUFLTEMsTUFMSyxlQUtMQSxNQUxLO0FBT2RPLG1CQVBjLEdBT05GLEtBQUssQ0FBQ0csU0FBTixHQUNNQyxNQUROLEdBRU1DLE9BRk4sRUFQTTtBQVdoQkMsdUJBWGdCLEdBV0osRUFYSTtBQVloQkMsd0JBWmdCLEdBWUgsRUFaRzs7QUFjcEIsa0JBQUlkLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLENBQWYsRUFBZ0M7QUFDeEJhLHdCQUR3QixHQUNiTixLQUFLLENBQUNSLEtBQU4sR0FBWSxDQURDO0FBRTlCWSx5QkFBUyxHQUFHSixLQUFLLENBQUNPLElBQU4sQ0FBVztBQUFDZix1QkFBSyxFQUFFYztBQUFSLGlCQUFYLEVBQThCRSxTQUE5QixFQUFaO0FBQ0FILDBCQUFVLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXO0FBQUNFLG1CQUFDLEVBQUVIO0FBQUosaUJBQVgsRUFBMEJFLFNBQTFCLEVBQWI7QUFDRCxlQUpELE1BSU87QUFDQ0YseUJBREQsR0FDWU4sS0FBSyxDQUFDUCxNQUFOLEdBQWEsQ0FEekI7QUFFTFcseUJBQVMsR0FBR0osS0FBSyxDQUFDTyxJQUFOLENBQVc7QUFBQ2Qsd0JBQU0sRUFBRWE7QUFBVCxpQkFBWCxFQUErQkUsU0FBL0IsRUFBWjtBQUNBSCwwQkFBVSxHQUFHTCxLQUFLLENBQUNPLElBQU4sQ0FBVztBQUFDRyxtQkFBQyxFQUFFSjtBQUFKLGlCQUFYLEVBQTBCRSxTQUExQixFQUFiO0FBQ0Q7O0FBRURsQixtQ0FBcUIsQ0FBQyxFQUFELENBQXJCO0FBQ0FMLGdDQUFrQixDQUFDbUIsU0FBRCxDQUFsQjtBQUNBakIsaUNBQW1CLENBQUNrQixVQUFELENBQW5COztBQTFCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYlgsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUE2QkEsTUFBTWlCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBZTtBQUFBOztBQUNqQyxRQUFNQyxJQUFJLEdBQUksaUJBQUFELElBQUksQ0FBQ0UsTUFBTCw4REFBYUMsS0FBYixLQUFzQixrQkFBQUgsSUFBSSxDQUFDRSxNQUFMLGdFQUFhQyxLQUFiLENBQW1CQyxNQUFuQixJQUE0QixDQUFuRCxvQkFBd0RKLElBQUksQ0FBQ0UsTUFBN0Qsa0RBQXdELGNBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBeEQsR0FBZ0YsSUFBN0Y7QUFDQSxRQUFNRSxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFBQSxhQUFNekIsYUFBYSxDQUFDdUIsTUFBTSxDQUFDRyxNQUFSLENBQW5CO0FBQUEsS0FBaEMsRUFBb0UsS0FBcEU7O0FBRUEsUUFBSVAsSUFBSixFQUFVO0FBQ1JJLFlBQU0sQ0FBQ0ksYUFBUCxDQUFxQlIsSUFBckI7QUFDRDtBQUNKLEdBUkM7O0FBVUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRW5DLHdEQUFNLENBQUNDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsd0RBQU0sQ0FBQzRDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRVgsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBQzhDO0FBQVEsYUFBUyxFQUFFdEIsa0JBQW5CO0FBQXVDLFdBQU8sRUFBRTtBQUFBLGFBQU1rQyxNQUFNLENBQUNDLEtBQVAsRUFBTjtBQUFBLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRDlDLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBSyxPQUFHLEVBQUUxQyxNQUFWO0FBQWtCLFNBQUssRUFBRTtBQUFDVyxZQUFNLEVBQUU7QUFBVCxLQUF6QjtBQUF3QyxPQUFHLEVBQUMsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFZix3REFBTSxDQUFDK0MsV0FBdkI7QUFBb0MsU0FBSyxFQUFFO0FBQUNoQyxZQUFNLEVBQUVpQyxzRkFBZSxDQUFDQyxFQUFoQixDQUFtQmxDLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCO0FBQXJDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWYsd0RBQU0sQ0FBQ2tELFlBQXZCO0FBQXFDLE9BQUcsRUFBRTVDLFlBQTFDO0FBQXdELE9BQUcsRUFBQyxFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFTix3REFBTSxDQUFDK0MsV0FBdkI7QUFBb0MsU0FBSyxFQUFFO0FBQUNoQyxZQUFNLEVBQUVpQyxzRkFBZSxDQUFDQyxFQUFoQixDQUFtQmxDLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCO0FBQXJDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWYsd0RBQU0sQ0FBQ21ELGFBQXZCO0FBQXNDLE9BQUcsRUFBRTNDLGFBQTNDO0FBQTBELE9BQUcsRUFBQyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVZGLENBREY7QUFxQkQsQ0F0RUQ7O0dBQU1OLFc7O01BQUFBLFc7QUF3RVNILHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0OGRkNzczOThkMDBiMzc5YTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IGltYWdlVHJhbnNmb3JtIH0gZnJvbSAnaW1hZ2UtbWFuaXB1bGF0aW9uL2xpYi9pbWFnZVRyYW5zZm9ybSc7IC8vIFRPRE8gZmlndXJlIG91dCBob3cgdG8gaGF2ZSB0aGUgVHlwZVNjcmlwdCBsb2FkZXJzIHdvcmsgd2l0aCBXZWJQYWNrXG5pbXBvcnQgeyBQYXBlckRpbWVuc2lvbnMgfSBmcm9tICdpbWFnZS1tYW5pcHVsYXRpb24vbGliL1BhcGVyRGltZW5zaW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiUGhvdG8gdHJhY2luZ1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9wcmludH0+XG4gICAgICA8aDE+UGhvdG8gdHJhY2luZzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVG8gdXNlIHRoZSByZXNpemVyOlxuICAgICAgICA8b2w+XG4gICAgICAgICAgPGxpPkNsaWNrIHRoZSAnQnJvd3NlLi4uJyBidXR0b24gdG8gY2hvb3NlIGEgZmlsZSB0aGF0IHlvdSB3YW50IHRvIHJlc2l6ZSB0byBBMzwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPEltYWdlUGlja2VyIC8+ICAgIFxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbZmlyc3RIYWxmU3JjLCBzZXRGaXJzdEhhbGZTb3VyY2VdID0gdXNlU3RhdGUobnVsbCBhcyBhbnkpO1xuICBjb25zdCBbc2Vjb25kSGFsZlNyYywgc2V0U2Vjb25kSGFsZlNvdXJjZV0gPSB1c2VTdGF0ZShudWxsIGFzIGFueSk7XG4gIGNvbnN0IFtwcmludEJ1dHRvbkNsYXNzZXMsIHNldFByaW50QnV0dG9uQ2xhc3Nlc10gPSB1c2VTdGF0ZShzdHlsZXMudmlzaWJseWhpZGRlbiBhcyBhbnkpO1xuICBcbiAgY29uc3QgaXNMYW5kc2NhcGUgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gd2lkdGggPiBoZWlnaHQ7ICAgIFxuICB9O1xuXG4gIGNvbnN0IGltYWdlU2VsZWN0ZWQgPSBhc3luYyAoaW1hZ2VTb3VyY2U6IGFueSkgPT4geyAgIFxuICAgIHNldEltZ1NvdXJjZShpbWFnZVNvdXJjZSk7XG4gICAgXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZVRyYW5zZm9ybSgpLmxvYWQoaW1hZ2VTb3VyY2UpO1xuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5tZXRhKCk7XG5cbiAgICBjb25zdCBlZGdlcyA9IGltYWdlLmZpbmRFZGdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgIC5pbnZlcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAudG9JbWFnZSgpXG5cbiAgICBsZXQgZmlyc3RIYWxmID0gXCJcIjtcbiAgICBsZXQgc2Vjb25kSGFsZiA9IFwiXCI7XG5cbiAgICBpZiAoaXNMYW5kc2NhcGUod2lkdGgsIGhlaWdodCkpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gZWRnZXMud2lkdGgvMjtcbiAgICAgIGZpcnN0SGFsZiA9IGVkZ2VzLmNyb3Aoe3dpZHRoOiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlY29uZEhhbGYgPSBlZGdlcy5jcm9wKHt4OiBtaWRQb2ludH0pLnRvRGF0YVVSTCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWlkUG9pbnQgPSBlZGdlcy5oZWlnaHQvMjtcbiAgICAgIGZpcnN0SGFsZiA9IGVkZ2VzLmNyb3Aoe2hlaWdodDogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBzZWNvbmRIYWxmID0gZWRnZXMuY3JvcCh7eTogbWlkUG9pbnR9KS50b0RhdGFVUkwoKTtcbiAgICB9XG5cbiAgICBzZXRQcmludEJ1dHRvbkNsYXNzZXMoe30pO1xuICAgIHNldEZpcnN0SGFsZlNvdXJjZShmaXJzdEhhbGYpO1xuICAgIHNldFNlY29uZEhhbGZTb3VyY2Uoc2Vjb25kSGFsZik7ICAgICBcbiAgfTtcblxuICBjb25zdCBmaWxlQ2hhbmdlZCA9IChhcmdzOiBhbnkpID0+IHsgXG4gICAgY29uc3QgZmlsZSA9IChhcmdzLnRhcmdldD8uZmlsZXMgJiYgYXJncy50YXJnZXQ/LmZpbGVzLmxlbmd0aCA+IDApID8gYXJncy50YXJnZXQ/LmZpbGVzWzBdIDogbnVsbDsgXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gaW1hZ2VTZWxlY3RlZChyZWFkZXIucmVzdWx0KSwgZmFsc2UpO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbn07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3ByaW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlZH0gLz48YnV0dG9uIGNsYXNzTmFtZT17cHJpbnRCdXR0b25DbGFzc2VzfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX0+UHJpbnQgcmVzdWx0PC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+ICAgICAgICAgIFxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdTcmN9IHN0eWxlPXt7aGVpZ2h0OiAyMDB9fSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+ICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNGaXJzdEltYWdlfSBzcmM9e2ZpcnN0SGFsZlNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbnRlZFBhZ2V9IHN0eWxlPXt7aGVpZ2h0OiBQYXBlckRpbWVuc2lvbnMuQTQuaGVpZ2h0LzIrJ21tJ319PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYTNTZWNvbmRJbWFnZX0gc3JjPXtzZWNvbmRIYWxmU3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==