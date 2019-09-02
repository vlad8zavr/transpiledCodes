(function () {
    'use strict';
  
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
  
      return obj;
    }
  
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
  
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
  
      return keys;
    }
  
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
  
        if (i % 2) {
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
  
      return target;
    }
  
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
  
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
  
        return arr2;
      }
    }
  
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
  
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
  
    var elementIsset = {
      size: false //global variables
  
    };
    var gv = {
      heightSortLink: 29
    };
    var base64img = {
      redHeart: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRDc1QTRBOyIgZD0iTTI0Ljg1LDEwLjEyNmMyLjAxOC00Ljc4Myw2LjYyOC04LjEyNSwxMS45OS04LjEyNWM3LjIyMywwLDEyLjQyNSw2LjE3OSwxMy4wNzksMTMuNTQzICBjMCwwLDAuMzUzLDEuODI4LTAuNDI0LDUuMTE5Yy0xLjA1OCw0LjQ4Mi0zLjU0NSw4LjQ2NC02Ljg5OCwxMS41MDNMMjQuODUsNDhMNy40MDIsMzIuMTY1Yy0zLjM1My0zLjAzOC01Ljg0LTcuMDIxLTYuODk4LTExLjUwMyAgYy0wLjc3Ny0zLjI5MS0wLjQyNC01LjExOS0wLjQyNC01LjExOUMwLjczNCw4LjE3OSw1LjkzNiwyLDEzLjE1OSwyQzE4LjUyMiwyLDIyLjgzMiw1LjM0MywyNC44NSwxMC4xMjZ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
      borderHeart: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk5NyA1MS45OTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk5NyA1MS45OTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik01MS45MTEsMTYuMjQyQzUxLjE1Miw3Ljg4OCw0NS4yMzksMS44MjcsMzcuODM5LDEuODI3Yy00LjkzLDAtOS40NDQsMi42NTMtMTEuOTg0LDYuOTA1ICAgYy0yLjUxNy00LjMwNy02Ljg0Ni02LjkwNi0xMS42OTctNi45MDZjLTcuMzk5LDAtMTMuMzEzLDYuMDYxLTE0LjA3MSwxNC40MTVjLTAuMDYsMC4zNjktMC4zMDYsMi4zMTEsMC40NDIsNS40NzggICBjMS4wNzgsNC41NjgsMy41NjgsOC43MjMsNy4xOTksMTIuMDEzbDE4LjExNSwxNi40MzlsMTguNDI2LTE2LjQzOGMzLjYzMS0zLjI5MSw2LjEyMS03LjQ0NSw3LjE5OS0xMi4wMTQgICBDNTIuMjE2LDE4LjU1Myw1MS45NywxNi42MTEsNTEuOTExLDE2LjI0MnogTTQ5LjUyMSwyMS4yNjFjLTAuOTg0LDQuMTcyLTMuMjY1LDcuOTczLTYuNTksMTAuOTg1TDI1Ljg1NSw0Ny40ODFMOS4wNzIsMzIuMjUgICBjLTMuMzMxLTMuMDE4LTUuNjExLTYuODE4LTYuNTk2LTEwLjk5Yy0wLjcwOC0yLjk5Ny0wLjQxNy00LjY5LTAuNDE2LTQuNzAxbDAuMDE1LTAuMTAxQzIuNzI1LDkuMTM5LDcuODA2LDMuODI2LDE0LjE1OCwzLjgyNiAgIGM0LjY4NywwLDguODEzLDIuODgsMTAuNzcxLDcuNTE1bDAuOTIxLDIuMTgzbDAuOTIxLTIuMTgzYzEuOTI3LTQuNTY0LDYuMjcxLTcuNTE0LDExLjA2OS03LjUxNCAgIGM2LjM1MSwwLDExLjQzMyw1LjMxMywxMi4wOTYsMTIuNzI3QzQ5LjkzOCwxNi41Nyw1MC4yMjksMTguMjY0LDQ5LjUyMSwyMS4yNjF6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==",
      like: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDU2LjgxNCA0NTYuODE0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTYuODE0IDQ1Ni44MTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQxLjExLDI1Mi42NzdjMTAuNDY4LTExLjk5LDE1LjcwNC0yNi4xNjksMTUuNzA0LTQyLjU0YzAtMTQuODQ2LTUuNDMyLTI3LjY5Mi0xNi4yNTktMzguNTQ3ICAgIGMtMTAuODQ5LTEwLjg1NC0yMy42OTUtMTYuMjc4LTM4LjU0MS0xNi4yNzhoLTc5LjA4MmMwLjc2LTIuNjY0LDEuNTIyLTQuOTQ4LDIuMjgyLTYuODUxYzAuNzUzLTEuOTAzLDEuODExLTMuOTk5LDMuMTM4LTYuMjgzICAgIGMxLjMyOC0yLjI4NSwyLjI4My0zLjk5OSwyLjg1Mi01LjEzOWMzLjQyNS02LjQ2OCw2LjA0Ny0xMS44MDEsNy44NTctMTUuOTg1YzEuODA3LTQuMTkyLDMuNjA2LTkuOSw1LjQyLTE3LjEzMyAgICBjMS44MTEtNy4yMjksMi43MTEtMTQuNDY1LDIuNzExLTIxLjY5OGMwLTQuNTY2LTAuMDU1LTguMjgxLTAuMTQ1LTExLjEzNGMtMC4wODktMi44NTUtMC41NzQtNy4xMzktMS40MjMtMTIuODUgICAgYy0wLjg2Mi01LjcwOC0yLjAwNi0xMC40NjctMy40My0xNC4yNzJjLTEuNDMtMy44MDYtMy43MTYtOC4wOTItNi44NTEtMTIuODQ3Yy0zLjE0Mi00Ljc2NC02Ljk0Ny04LjYxMy0xMS40MjQtMTEuNTY1ICAgIGMtNC40NzYtMi45NS0xMC4xODQtNS40MjQtMTcuMTMxLTcuNDIxYy02Ljk1NC0xLjk5OS0xNC44MDEtMi45OTgtMjMuNTYyLTIuOTk4Yy00Ljk0OCwwLTkuMjI3LDEuODA5LTEyLjg0Nyw1LjQyNiAgICBjLTMuODA2LDMuODA2LTcuMDQ3LDguNTY0LTkuNzA5LDE0LjI3MmMtMi42NjYsNS43MTEtNC41MjMsMTAuNjYtNS41NzEsMTQuODQ5Yy0xLjA0Nyw0LjE4Ny0yLjIzOCw5Ljk5NC0zLjU2NSwxNy40MTUgICAgYy0xLjcxOSw3Ljk5OC0yLjk5OCwxMy43NTItMy44NiwxNy4yNzNjLTAuODU1LDMuNTIxLTIuNTI1LDguMTM2LTQuOTk3LDEzLjg0NWMtMi40NzcsNS43MTMtNS40MjQsMTAuMjc4LTguODUxLDEzLjcwNiAgICBjLTYuMjgsNi4yOC0xNS44OTEsMTcuNzAxLTI4LjgzNywzNC4yNTljLTkuMzI5LDEyLjE4LTE4Ljk0LDIzLjY5NS0yOC44MzcsMzQuNTQ1Yy05Ljg5OSwxMC44NTItMTcuMTMxLDE2LjQ2Ni0yMS42OTgsMTYuODQ3ICAgIGMtNC43NTUsMC4zOC04Ljg0OCwyLjMzMS0xMi4yNzUsNS44NTRjLTMuNDI3LDMuNTIxLTUuMTQsNy42NjItNS4xNCwxMi40MTl2MTgzLjAxYzAsNC45NDksMS44MDcsOS4xODIsNS40MjQsMTIuNzAzICAgIGMzLjYxNSwzLjUyNSw3Ljg5OCw1LjM4LDEyLjg0Nyw1LjU3MWM2LjY2MSwwLjE5MSwyMS42OTgsNC4zNzQsNDUuMTExLDEyLjU2NmMxNC42NTQsNC45NDEsMjYuMTIsOC43MDYsMzQuNCwxMS4yNzIgICAgYzguMjc4LDIuNTY2LDE5Ljg0OSw1LjMyOCwzNC42ODQsOC4yODJjMTQuODQ5LDIuOTQ5LDI4LjU1MSw0LjQyOCw0MS4xMSw0LjQyOGg0Ljg1NWgyMS43aDEwLjI3NiAgICBjMjUuMzIxLTAuMzgsNDQuMDYxLTcuODA2LDU2LjI0Ny0yMi4yNjhjMTEuMDM2LTEzLjEzNSwxNS42OTctMzAuMzYxLDEzLjk5LTUxLjY3OWM3LjQyMi03LjA0MiwxMi41NjUtMTUuOTg0LDE1LjQxNi0yNi44MzYgICAgYzMuMjMxLTExLjYwNCwzLjIzMS0yMi43NCwwLTMzLjM5N2M4Ljc1NC0xMS42MTEsMTIuODQ3LTI0LjY0OSwxMi4yNzItMzkuMTE1QzQ0NS4zOTUsMjY4LjI4Niw0NDMuOTcxLDI2MS4wNTUsNDQxLjExLDI1Mi42Nzd6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTEwMC41LDE5MS44NjRIMTguMjc2Yy00Ljk1MiwwLTkuMjM1LDEuODA5LTEyLjg1MSw1LjQyNkMxLjgwOSwyMDAuOTA1LDAsMjA1LjE4OCwwLDIxMC4xMzd2MTgyLjczMiAgICBjMCw0Ljk0MiwxLjgwOSw5LjIyNyw1LjQyNiwxMi44NDdjMy42MTksMy42MTEsNy45MDIsNS40MjEsMTIuODUxLDUuNDIxSDEwMC41YzQuOTQ4LDAsOS4yMjktMS44MSwxMi44NDctNS40MjEgICAgYzMuNjE2LTMuNjIsNS40MjQtNy45MDQsNS40MjQtMTIuODQ3VjIxMC4xMzdjMC00Ljk0OS0xLjgwOS05LjIzMS01LjQyNC0xMi44NDdDMTA5LjczLDE5My42NzIsMTA1LjQ0OSwxOTEuODY0LDEwMC41LDE5MS44NjR6ICAgICBNNjcuNjY1LDM2OS4zMDhjLTMuNjE2LDMuNTIxLTcuODk4LDUuMjgxLTEyLjg0Nyw1LjI4MWMtNS4xNCwwLTkuNDcxLTEuNzYtMTIuOTktNS4yODFjLTMuNTIxLTMuNTIxLTUuMjgxLTcuODUtNS4yODEtMTIuOTkgICAgYzAtNC45NDgsMS43NTktOS4yMzIsNS4yODEtMTIuODQ3YzMuNTItMy42MTcsNy44NS01LjQyOCwxMi45OS01LjQyOGM0Ljk0OSwwLDkuMjMxLDEuODExLDEyLjg0Nyw1LjQyOCAgICBjMy42MTcsMy42MTQsNS40MjYsNy44OTgsNS40MjYsMTIuODQ3QzczLjA5MSwzNjEuNDU4LDcxLjI4NiwzNjUuNzg2LDY3LjY2NSwzNjkuMzA4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    };
    Kameleoon.API.runWhenElementPresent('.main-product-container', function (e) {
      var productInfo = e[0];
      /**
      * Function return first DOMelement by selector
      *
      * @param {string} selector
      * @param {nodeElement=} from
      * @return {nodeElement}
      */
  
      var getElem = function getElem(selector) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : productInfo;
        return from.querySelector(selector);
      };
  
      var getAllElem = function getAllElem(selector) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : productInfo;
        return from.querySelectorAll(selector);
      };
      /**
      * Function return data for first product block from:
      * - children of .main-product-container
      * - window.tc_vars
      *
      * @return {object}
      */
  
  
      var getDataProduct = function getDataProduct() {
        /**
        * Save path product without name in arrCategoriesPath{object}
        *
        * @type arrFullProductPath{array} !array with all DOMelements of path
        * @type arrCategoriesPath{array} !array with elements of path without product name
        */
        var arrFullProductPath = _toConsumableArray(productInfo.querySelectorAll('.breadcrumb-wrapper .breadcrumb-link')),
            arrCategoriesPath = [];
  
        for (var i = 0, len = arrFullProductPath.length - 1; i < len; i++) {
          arrCategoriesPath[i] = {
            name: arrFullProductPath[i].textContent.trim(),
            link: arrFullProductPath[i].href
          };
        }
        /**
        * Save all data about color variations in arrProductColors{array}
        *
        * @type arrElemetntsColors{array} !array with all DOMelements for change color
        * @type arrProductColors{array} !array with elements of path without product name
        */
  
  
        var arrElemetntsColors = _toConsumableArray(productInfo.querySelectorAll('#product-thumnail .swiper-wrapper > *')),
            arrProductColors = [];
  
        for (var _i = 0, _len2 = arrElemetntsColors.length; _i < _len2; _i++) {
          var buttonColor = arrElemetntsColors[_i].querySelector('a'),
              linkColor = buttonColor.href,
              nameColor = buttonColor.getAttribute('data-title'),
              imgColor = buttonColor.querySelector('img').src,
              idColor = buttonColor.id;
  
          arrProductColors[_i] = {
            idColor: idColor,
            imgColor: imgColor,
            nameColor: nameColor,
            linkColor: linkColor
          };
        }
        /**
        * Save all data about sizes in objProductSizes{object}
        *
        * @type productSizeInputs{nodeList} !nodeList with all input:hidden with info about productSize and quantity
        * @type objProductSizes{object} !object with objects with info for product size
        */
  
  
        var productSizeInputs = productInfo.querySelectorAll('.product-size > input[type="hidden"]'),
            objProductSizes = {};
  
        for (var _i2 = 0, _len3 = productSizeInputs.length; _i2 < _len3; _i2++) {
          var productSizeSplit = productSizeInputs[_i2].id.split('_'),
              productSizeId = productSizeSplit[0],
              productSizeOption = productSizeSplit[1],
              productSizeValue = productSizeInputs[_i2].value;
  
          objProductSizes[productSizeId] = _objectSpread2({}, objProductSizes[productSizeId], {}, _defineProperty({}, productSizeOption, productSizeValue));
        }
  
        var productArticle = getElem('.ref-product') ? getElem('.ref-product').textContent.trim() : null,
            productButtonWishList = getElem('#add_to_wishlist_button'),
            productBrandImg = tc_vars['product_trademark'],
            productName = getElem('#productName') ? getElem('#productName').textContent.trim() : null,
            productRating = getElem('.product-rating-wrapper'),
            productPrice = getElem('#real_price'),
            productPromo = getElem('#promo_percent') ? getElem('#promo_percent').textContent.trim() : null,
            productOldPrice = getElem('#old_price') ? getElem('#old_price') : null,
            productSliderBox = getElem('.prod_view'),
            productSliderImg = getElem('#viewerImage', productSliderBox),
            productReservationButton = getElem('#AddToErep_buttonReservation'),
            productReservation = getElem('#tab-store'),
            productAddToCart = getElem('.add_to_cart'),
            helpWidthSelectSize = getElem('#Sizolution') || document.createElement('div'),
            tableWithSize = getElem('.guide_size') || getElem('#SmartSizeGuide'),
            productDesc = getElem('.concuPourBloc.concuPourBlocExpressBuy') ? getElem('.concuPourBloc.concuPourBlocExpressBuy').textContent.trim() : '',
            productDescCatch = getElem('.catchline') ? getElem('.catchline').textContent.trim() : '',
            productDropDown = getElem('#dropdown-list-size'),
            productStoreInformation = getElem('.store-product-availability-component'),
            productVideoButton = getElem('#showVideo'),
            productContainerSlider = getElem('#main-product-thumbnails-container .swiper-container'),
            selectedStore = getElem('#store_login') || false,
            productPdtPicto = getElem('.pdtPicto'),
            productSliderImages = getAllElem('li.swiper-slide > img'),
            productImgBox = getElem('#viewerImage img'),
            productOnlyStore = getElem('.in-store-only-container');
        return {
          arrCategoriesPath: arrCategoriesPath,
          productArticle: productArticle,
          productBrandImg: productBrandImg,
          productButtonWishList: productButtonWishList,
          productName: productName,
          productRating: productRating,
          productDesc: productDesc,
          productDescCatch: productDescCatch,
          arrProductColors: arrProductColors,
          objProductSizes: objProductSizes,
          productPrice: productPrice,
          productPromo: productPromo,
          productOldPrice: productOldPrice,
          productSliderBox: productSliderBox,
          productReservation: productReservation,
          productAddToCart: productAddToCart,
          helpWidthSelectSize: helpWidthSelectSize,
          tableWithSize: tableWithSize,
          productDropDown: productDropDown,
          productReservationButton: productReservationButton,
          productStoreInformation: productStoreInformation,
          productVideoButton: productVideoButton,
          productContainerSlider: productContainerSlider,
          productSliderImg: productSliderImg,
          selectedStore: selectedStore,
          productPdtPicto: productPdtPicto,
          productSliderImages: productSliderImages,
          productImgBox: productImgBox,
          productOnlyStore: productOnlyStore
        };
      };
      /**
      * Create header element
      *
      * @param {object} data
      * @return {object}
      */
  
  
      var createHeaderElement = function createHeaderElement(data) {
        var element = document.createElement('div');
        element.id = 'kam_header-info';
        element.innerHTML = "\n            <div class=\"kam_header-info_wrapper\">\n              <div class=\"kam_header-info_path\">\n                <!-- insert path element -->\n              </div>\n              <!-- insert slider element -->\n              <div class=\"kam_header-info_general-info\">\n                <div class=\"kam_header-info_brand\">".concat(data.productBrandImg, "</div>\n                <div class=\"kam_header-info_article\">").concat(data.productArticle, "</div>\n                <div class=\"kam_header-info_product-name\">").concat(data.productName, "</div>\n                <div class=\"kam_header-info_rating-wishlist\">\n                  <div class=\"kam_header-info_rating\">\n                    <!-- insert element -->\n                  </div>\n                  <div class=\"kam_header-info_wishlist\" title='\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0436\u0435\u043B\u0430\u043D\u0438\u0439'>\n                    <!-- insert element -->\n                  </div>\n                </div>\n                <div class=\"kam_header-info_price-promo\">\n                  <!-- insert element -->\n                </div>\n                <div class=\"kam_header-info_color-wrap\">\n                  <!-- insert element -->\n                </div>\n                <div class=\"kam_header-info_size\">\n                  <div class=\"kam_header-info_size-title-prompt\">\n                    <div class=\"kam_header-info_size-title\">\u0420\u0430\u0437\u043C\u0435\u0440</div>\n                    <div class=\"kam_header-info_size-how-change-size\"><!-- insert element --></div>\n                  </div>\n                  <div class=\"kam_header-info_size-wrapper\">\n                    <!-- <div class=\"\"><div class=\"kam_header-info_size-element_fix-centr\">\n                    size 1 2 3</div>\n                    </div> -->\n                  </div>\n                  <div class=\"kam_header-info_size-sizelution\">\n                    <!-- insert element -->\n                  </div>\n                </div>\n                <div class=\"kam_header-info_message\">\n                  T\u043E\u0432\u0430\u0440 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435\n                </div>\n                <div class=\"kam_header-info_add-to-cart-reserve\">\n                  <div class=\"kam_header-info_add-to-cart\">\n                    <div class=\"kam_header-info_add-error\">\n                      \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\n                    </div>\n                    <!-- insert element -->\n                  </div>\n                  <div class=\"kam_header-info_reserve\">\n                    <!-- insert element -->\n                  </div>\n                </div>\n                <div class=\"kam_header-info_notice\">* \u0426\u0435\u043D\u0430 \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432</div>\n                <div class=\"kam_header-info_description\">").concat(data.productDesc).concat(data.productDescCatch, "</div>\n                <a href=\"#anchor_ProductTechnicalInfos\" class=\"kam_header-info_more-info\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</a>\n                <a href=\"#anchor_ProductComposition\" class=\"kam_header-info_advice\">\u0421\u043E\u0432\u0435\u0442\u044B/\u0421\u043E\u0441\u0442\u0430\u0432</a>\n              </div>\n            </div>\n            ");
        /**
        * function for simply insert element in DOM
        *
        * @param {string} selector !selector for search in object
        * @param {nodeELement} elem !element for insert
        * @param {string} pos !position for insertAdjacentElement
        * @param {nodeELement} object !element in which is inserted
        */
  
        var insertElement = function insertElement(selector, elem) {
          var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'afterBegin';
          var object = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : element;
          object.querySelector(selector).insertAdjacentElement(pos, elem);
        };
        /**
        * create path element without name of product
        *
        * @param {array} path
        * @return {nodeELement} createPathElement
        */
  
  
        var createPathElement = function createPathElement(path) {
          var pathElement = document.createElement('div');
          pathElement.className = 'kam_header-info_path-wrap';
          var pathLength = path.length;
  
          var addNewElement = function addNewElement(selector, elem) {
            pathElement.insertAdjacentHTML('beforeEnd', "\n          <a href='".concat(elem.link, "' class='").concat(selector, "'>").concat(elem.name, "</a>\n        "));
          };
  
          for (var i = 0; i < pathLength; i++) {
            if (path[i + 1] === undefined) {
              addNewElement('kam_header-info_path_last-catg', path[i]);
            } else if (path[i + 2] === undefined) {
              addNewElement('kam_header-info_path_bold', path[i]);
            } else {
              addNewElement('kam_header-info_path_simply', path[i]);
            }
          }
  
          return pathElement;
        };
  
        var hasBeenSelected = false;
  
        var createSliderElement = function createSliderElement(images, sliderBox) {
          var sliderElement = document.createElement('div');
          sliderElement.className = 'kam_header-info_slider';
          var imagesLen = images.length;
  
          for (var i = 3; i >= 0; i--) {
            var img = images[i];
  
            if (img !== undefined) {
              var _ret = function () {
                var normalImg = images[i].getAttribute('data-src-normal');
                var slide = document.createElement('div');
                slide.className = 'kam_header-info_slider_image';
                slide.innerHTML = "<img src=\"".concat(normalImg, "\">");
                slide.addEventListener('mouseover', function () {
                  sliderBox.src = normalImg; // slide.insertAdjacentElement('afterBegin', sliderBox);
                });
                slide.addEventListener('mouseup', function () {
                  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
                  var eventClick = document.createEvent('MouseEvents');
                  eventClick.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
                  sliderBox.dispatchEvent(eventClick);
                });
  
                if (i == 3) {
                  slide.className = 'kam_header-info_slider_image kam_header-info_slider_image_more';
  
                  if (imagesLen > 4) {
                    var showMoreElem = document.createElement('div');
                    showMoreElem.className = 'kam_header-info_slider_show-more';
                    showMoreElem.innerHTML = "+".concat(imagesLen - 3);
                    slide.insertAdjacentElement('afterBegin', showMoreElem);
                  }
                }
  
                sliderElement.insertAdjacentElement('afterBegin', slide);
  
                if (imagesLen === 1) {
                  slide.classList.add('kam_header-info-slider_image-one');
                  return "break";
                }
              }();
  
              if (_ret === "break") break;
            }
          }
  
          return sliderElement;
        };
        /**
        * create element with button to change size
        *
        * @param {array} dropDown
        * @param {object} sizeInfo
        * @param {bool} onlyFive
        * @return {nodeElement} sizeElement
        */
  
  
        var createSizeElement = function createSizeElement(dropDown, sizeInfo) {
          var fix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var sizeElement = document.createElement('div');
          if (dropDown == null && !fix) return sizeElement;
          sizeElement.className = 'kam_header-info_size-elements';
          /**
          * function change classes of:
          * - buttons (addToCart and reserve)
          * - buttons to change size
          * and
          * - added amountElement
          */
  
          var selectSize = function selectSize(e) {
            var choice = {};
  
            if (!fix) {
              choice = {
                id: e.childNodes[1].id.split('-')[2],
                quantity: sizeInfo[e.childNodes[1].id.split('-')[2]].quantity,
                name: e.textContent.trim()
              };
            } else {
              choice = {
                id: e.id,
                quantity: e.quantity,
                name: e.desc
              };
            }
  
            if (!hasBeenSelected) {
              tooltip.addListener();
            }
  
            data.productReservationButton.style.opacity = 1;
            var errMsg = element.querySelector('.kam_header-info_add-error');
            hasBeenSelected = true;
            errMsg.classList.remove('kam_add-error-show');
            var allSizeElements = [];
  
            if (!fix) {
              allSizeElements = _toConsumableArray(dropDown.querySelectorAll('li > a'));
              allSizeElements.forEach(function (elem) {
                return elem.classList.remove('kam_size-active');
              });
              e.childNodes[1].classList.add('kam_size-active');
            }
  
            var amountElement = element.querySelector('.kam_header-product-info_amount');
          };
          /**
          * change height element and block addToCart
          *
          */
  
  
          var changeHeightElements = function changeHeightElements(elements) {
            var selectAvailable = false,
                onlyOne = {
              one: false,
              id: false
            },
                i = 0;
            elements.forEach(function (e) {
              ++i;
  
              if (!e.classList.contains('unavailable')) {
                selectAvailable = true;
              }
  
              if (e.classList.contains('available')) {
                if (onlyOne.one === false) {
                  onlyOne.one = true;
                  onlyOne.id = i;
                } else if (onlyOne.one === true) {
                  onlyOne.one = null;
                  onlyOne.id = null;
                }
              }
            });
  
            if (!selectAvailable) {
              data.productAddToCart.classList.add('kam_add-to-cart_block');
              data.productReservation.classList.add('kam_reverve_active');
            }
  
            if (elements.length === 1) {
              selectSize(elements[0]);
            }
  
            if (onlyOne.one === true && data.productReservationButton.style.display !== 'none') {
              selectSize(elements[onlyOne.id - 1]);
            }
          };
  
          var keysObj = Object.keys(sizeInfo);
  
          if (fix) {
            selectSize(_objectSpread2({}, {
              id: keysObj[0]
            }, {}, sizeInfo[keysObj[0]]));
          }
  
          if (fix) return 0;
  
          var arrayDropDownElem = _toConsumableArray(dropDown.querySelectorAll('.dropdown-menu li'));
  
          dropDown.querySelector('.dropdown-menu').style.height = "".concat(Math.ceil(arrayDropDownElem.length / 5) * 50, "px");
          arrayDropDownElem.forEach(function (e) {
            var lengthString = e.textContent.trim().length;
            e.classList.add('kam_header-info_size-element');
            var sizeButton = e.querySelector('a');
            sizeButton.innerHTML = "<span class=\"kam_size_center-text\">".concat(sizeButton.innerHTML, "</span>");
            e.addEventListener('click', function () {
              return selectSize(e);
            });
          });
          changeHeightElements(arrayDropDownElem);
          var buttonOfDropdown = data.productDropDown.querySelector('button');
  
          if (buttonOfDropdown.value !== '') {
  
            for (var i in data.objProductSizes) {
              if (data.objProductSizes[i].desc === buttonOfDropdown.value) {
                selectSize(data.objProductSizes[i]);
                break;
              }
            }
          }
  
          sizeElement.insertAdjacentElement('afterBegin', dropDown);
          sizeElement.querySelector('.dropdown').classList.add('open');
          return sizeElement;
        };
        /**
        * create element to select color product
        *
        * @param {array} colors
        * @return {nodeELement} colorElement
        */
  
  
        var createColorElement = function createColorElement(colors) {
          var colorElement = document.createElement('div');
          var lenColors = colors.length;
          if (lenColors === 0) return colorElement;
          colorElement.className = 'kam_header-info_color';
  
          for (var i = 0; i < lenColors; i++) {
            colorElement.innerHTML += "\n        <a  class=\"kam_header-info_color-element\"\n            href=\"".concat(colors[i].linkColor, "\"\n            title=\"").concat(colors[i].nameColor, "\">\n            <img src=\"").concat(colors[i].imgColor, "\">\n        </a>");
          }
  
          return colorElement;
        };
        /**
        *
        *
        */
  
  
        var createPriceElement = function createPriceElement(price) {
          var oldPrice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var promo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var priceElement = document.createElement('div');
          priceElement.className = 'kam_header-info_price';
  
          var mutationTracking = function mutationTracking(element, func, config) {
            var observer = new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                func();
              });
            });
  
            this.start = function () {
              observer.observe(element, config);
            };
  
            this.stop = function () {
              observer.disconnect();
            };
          };
  
          var createOutputPrice = function createOutputPrice() {
            var outputPrice = document.createElement('div');
            var oldPriceString = '';
  
            var getOldPrice = function getOldPrice(oldPriceElement) {
              oldPriceString = '';
              var oldPriceSplited = oldPriceElement.textContent.trim().split('').filter(function (key) {
                return key.match(/[\w.]/);
              });
  
              for (var i = 0, len = oldPriceSplited.length; i < len; i++) {
                if ('1234567890'.match(oldPriceSplited[i]) && (oldPriceSplited[i] !== '.' || oldPriceSplited[i] === '.' && oldPriceSplited[i + 1] !== undefined)) {
                  oldPriceString += oldPriceSplited[i];
                }
              }
  
              return oldPriceString;
            };
  
            if (promo == '-%') {
              var clearPrice = price.textContent.trim().replace(/[Стало,руб.,*]/gi, '');
              outputPrice.className = 'kam_header-info_price kam_header-info_price_black';
              outputPrice.innerHTML = "".concat(getOldPrice(price), "<span class=\"kam_header-info_price-rub\">\u0440\u0443\u0431</span>");
              var Price = new mutationTracking(price, function () {
                var pricePlace = priceElement.querySelector('.kam_header-info_price');
                pricePlace.innerHTML = "".concat(getOldPrice(price), "<span class=\"kam_header-info_price-rub\">\u0440\u0443\u0431</span>");
              }, {
                childList: true,
                subtree: true,
                characterData: true
              });
              Price.start();
            } else {
              outputPrice.className = 'kam_output-price';
              outputPrice.innerHTML = "\n            <div class=\"kam_header-info_price\">".concat(price.textContent.split('руб.')[0], "<span class=\"kam_header-info_price-rub\">\u0440\u0443\u0431</span></div>\n            <div class=\"kam_header-info_promo\">").concat(getOldPrice(oldPrice), "<span class=\"kam_header-info_promo-rub\">\u0440\u0443\u0431</span></div>\n          ");
  
              var _Price = new mutationTracking(price, function () {
                var pricePlace = priceElement.querySelector('.kam_header-info_price'),
                    oldPricePlace = priceElement.querySelector('.kam_header-info_promo');
                pricePlace.innerHTML = "".concat(price.textContent.split('руб.')[0], "<span class=\"kam_header-info_price-rub\">\u0440\u0443\u0431</span>");
                oldPricePlace.innerHTML = "".concat(getOldPrice(oldPrice), "<span class=\"kam_header-info_promo-rub\">\u0440\u0443\u0431</span>");
              }, {
                childList: true,
                subtree: true,
                characterData: true
              });
  
              _Price.start();
            }
  
            return outputPrice;
          };
  
          priceElement.insertAdjacentElement('afterBegin', createOutputPrice());
          return priceElement;
        };
  
        var errMsg = element.querySelector('.kam_header-info_add-error');
        /**
        *
        *
        */
  
        var showErrMsgAddToCard = function showErrMsgAddToCard() {
          errMsg.classList.add('kam_add-error-show');
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          /**
          *
          *
            */
  
          var hideErrMsg = function hideErrMsg() {
            errMsg.classList.remove('kam_add-error-show');
            errMsg.removeEventListener('mouseover', hideErrMsg);
          };
  
          errMsg.addEventListener('mouseover', hideErrMsg);
        };
        /**
        *
        *
        */
  
  
        var addErrorMessage = function addErrorMessage(button) {
          button.addEventListener('click', function () {
            if (!hasBeenSelected) {
              showErrMsgAddToCard();
            }
          });
        };
  
        var storeInfo = data.productStoreInformation,
            reservButton = data.productReservationButton,
            openingHourMsg = storeInfo.querySelector('.store-opening-hour-message'),
            storeName = storeInfo.querySelector('.store-name'),
            telNumber = storeInfo.querySelector('#storeConversionZonePhoneNumber'),
            hoursInfo = storeInfo.querySelector('.store-opening-hour-info');
  
        var createTooltipElement = function createTooltipElement() {
          var tooltip = this;
          this.element = data.productStoreInformation;
  
          this.createHourMsgElement = function () {
            var splitedMsg = openingHourMsg.textContent.trim().toLowerCase().split('.');
            var hourMsgElement = document.createElement('div');
            hourMsgElement.className = 'kam_opening-hour-message';
            var hours = hoursInfo.textContent.trim();
  
            if (splitedMsg[0].match('закрыт')) {
              hourMsgElement.innerHTML = "\u0417\u0430\u043A\u0440\u044B\u0442 \u0434\u043E ".concat(hours);
            } else if (splitedMsg[0].match('открыт')) {
              hourMsgElement.innerHTML = "\u041E\u0442\u043A\u0440\u044B\u0442 \u0434\u043E ".concat(hours);
            }
  
            return hourMsgElement;
          };
  
          var hourMsgElement;
          var stopInterval = 0;
          Kameleoon.API.runWhenConditionTrue(function () {
            if (!!storeInfo && openingHourMsg.innerHTML != '' && hoursInfo.innerHTML != '') {
              return true;
            } else {
              ++stopInterval;
  
              if (stopInterval == 10) {
                return true;
              }
            }
          }, function () {
            if (stopInterval != 10) {
              hourMsgElement = tooltip.createHourMsgElement();
            }
          }, 400);
  
          this.showTooltip = function () {
            var heightTooltip = storeInfo.querySelector('.box-availability').offsetHeight;
            storeInfo.style.cssText = "\n          height: ".concat(heightTooltip, "px !important;\n          opacity: 1;\n          z-index: 4;\n        ");
          };
  
          this.hideTooltip = function () {
            storeInfo.style.cssText = "\n          height: 0px !important;\n          margin-top: 0px;\n          opacity: 0;\n          z-index: 2;\n        ";
          };
  
          this.addHoursMsg = function (msg) {
            var avStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
            var addElement = function addElement(selector, place, width) {
              tooltip.element.querySelectorAll(selector)[+avStore].insertAdjacentElement('afterEnd', msg);
              msg.style.width = width;
            };
  
            if (!avStore) {
              addElement('#storeConversionZonePhoneNumber', 'afterEnd', '160px');
            } else {
              addElement('.availability-store', 'beforeEnd', '100%');
            }
          };
  
          this.activateButton = function () {
            reservButton.style.cssText = 'opacity: 1 !important;';
          };
  
          this.addListener = function () {
            data.productReservationButton.addEventListener('mouseover', tooltip.showTooltip);
            data.productStoreInformation.addEventListener('mouseover', tooltip.showTooltip);
            data.productReservationButton.addEventListener('mouseout', tooltip.hideTooltip);
            data.productStoreInformation.addEventListener('mouseout', tooltip.hideTooltip);
          };
  
          this.checkStoreContact = function () {
            return storeInfo.querySelector('.store-contact-availability').classList.contains('hidden');
          };
  
          var oldStoreName = storeName.textContent.trim();
  
          this.checkNewStore = function () {
            var config = {
              attributes: true,
              childList: true,
              characterData: true
            };
            var observer = new MutationObserver(function () {
              location.reload();
            });
            observer.observe(storeName, config);
          };
  
          tooltip.checkNewStore();
        };
  
        var changedWidhlistButton = function changedWidhlistButton(button) {
          var newWishlist = "\n        <img class=\"kam_wishlist_redHeart\" src=\"".concat(base64img.redHeart, "\">\n        <img class=\"kam_wishlist_borderHeart\" src=\"").concat(base64img.borderHeart, "\">\n        <div class=\"kam_wishlist_text\">\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</div>\n      ");
          button.innerHTML = button.innerHTML.replace('Добавить в избранное', newWishlist);
          return button;
        };
  
        var replaceText = function replaceText(elem, oldText, newText) {
          var reg = new RegExp(oldText, 'gi');
          elem.innerHTML = elem.innerHTML.replace(reg, newText);
          return elem;
        };
  
        var tooltip = new createTooltipElement();
        insertElement('.kam_header-info_path', createPathElement(data.arrCategoriesPath));
        insertElement('.kam_header-info_path', createSliderElement(_toConsumableArray(data.productSliderImages), data.productImgBox), 'afterEnd');
        insertElement('.kam_header-info_slider', data.productPdtPicto);
        insertElement('.kam_header-info_price-promo', createPriceElement(data.productPrice, data.productOldPrice, data.productPromo));
        insertElement('.kam_header-info_rating', data.productRating);
        insertElement('.kam_header-info_wishlist', changedWidhlistButton(data.productButtonWishList));
        insertElement('.kam_header-info_color-wrap', createColorElement(data.arrProductColors));
  
        if (elementIsset.size) {
          insertElement('.kam_header-info_size-wrapper', createSizeElement(data.productDropDown, data.objProductSizes), 'afterEnd');
          insertElement('.kam_header-info_size-how-change-size', data.tableWithSize);
          insertElement('.kam_header-info_size-sizelution', data.helpWidthSelectSize);
        } else {
          tooltip.addListener();
          hasBeenSelected = true;
          data.productReservationButton.style.cssText = 'opacity: 1 !important;';
          element.querySelector('.kam_header-info_size').style.display = 'none';
  
          if (Object.keys(data.objProductSizes)[0]) {
            createSizeElement(data.productDropDown, data.objProductSizes, null, true);
          }
        }
  
        if (!data.productOnlyStore) {
          insertElement('.kam_header-info_add-to-cart', data.productAddToCart, 'beforeEnd');
          addErrorMessage(data.productAddToCart.querySelector('#add_to_cart_button'));
        } else {
          element.querySelector('.kam_header-info_message').classList.add('kam_message_active');
          element.querySelector('.kam_header-info_add-to-cart-reserve').classList.add('kam_header-info__reservation-only');
        }
  
        insertElement('.kam_header-info_reserve', data.productReservation);
        replaceText(data.productReservation.querySelector('a'), 'Забронировать в магазине', 'ЗАБРАТЬ ЧЕРЕЗ ЧАС');
        addErrorMessage(data.productReservation);
  
        if (storeName.textContent.trim() !== '') {
          insertElement('.kam_header-info_reserve', replaceText(data.productReservationButton, 'Забронировать в магазине', 'ЗАБРАТЬ ЧЕРЕЗ ЧАС'));
          insertElement('.kam_header-info_add-to-cart-reserve', tooltip.element, 'afterEnd');
        } else {
          Kameleoon.API.runWhenElementPresent('#store-link-content .icon-text', function (e) {
            if (e[0].textContent.trim() !== 'Мой магазин') {
              insertElement('.kam_header-info_reserve', replaceText(data.productReservationButton, 'Забронировать в магазине', 'ЗАБРАТЬ ЧЕРЕЗ ЧАС'));
              insertElement('.kam_header-info_add-to-cart-reserve', tooltip.element, 'afterEnd');
            } else {
              data.productReservationButton.style.display = 'none';
              tooltip.activateButton();
            }
          });
        }
  
        return element;
      };
      /**
      *
      *
      */
  
  
      var renderHeader = function renderHeader(header) {
        productInfo.insertAdjacentElement('afterBegin', header);
        var counterToStop = 0;
        Kameleoon.API.runWhenConditionTrue(function () {
          if (counterToStop != 10) {
            var complement = productInfo.querySelector('.free-html-compario.free-html-compario-legal-zone'),
                selector = document.querySelector('#ProductPageByFloor_1_secondaryProductContainer_0_ComponentComplementaryZone_0_ComponentComplementaryZone_2_t2s-like_t2s-like');
  
            if (complement && selector) {
              return true;
            } else {
              counterToStop++;
            }
          } else {
            return true;
          }
        }, function () {
          if (counterToStop != 10) {
            var complement = productInfo.querySelector('.free-html-compario.free-html-compario-legal-zone'),
                selector = '#ProductPageByFloor_1_secondaryProductContainer_0_ComponentComplementaryZone_0_ComponentComplementaryZone_2_t2s-like_t2s-like';
  
            if (complement) {
              document.querySelector(selector).insertAdjacentElement('beforeBegin', complement);
            }
          }
        });
      };
      Kameleoon.API.runWhenConditionTrue(function () {
        var refLoad = getElem('.ref-product'),
            brandLoad = getElem('.brand > img'),
            brandWrap = getElem('.brand'),
            wishLoad = getElem('#add_to_wishlist_button'),
            nameLoad = getElem('#productName'),
            ratingLoad = getElem('.product-rating-wrapper'),
            promoLoad = getElem('#promo_percent'),
            priceLoad = getElem('#old_price'),
            prodLoad = getElem('#ProductPageByFloor_0_mainProductContainer_2_templateImageProduit_templateImageProduit'),
            tabLoad = getElem('#tab-store'),
            addToCartLoad = getElem('.add_to_cart'),
            sizolLoad = getElem('#Sizolution') || document.createElement('div'),
            guideLoad = getElem('.guide_size') || getElem('#SmartSizeGuide'),
            concuPourLoad = getElem('.concuPourBloc.concuPourBlocExpressBuy'),
            catchLoad = getElem('.catchline'),
            dropDownLoad = getElem('#dropdown-list-size'),
            swiperLoad = getElem('.swiper-wrapper'),
            storeInfoLoad = getElem('.store-product-availability-component'),
            videoButton = getElem('#showVideo'),
            containerSlider = getElem('#main-product-thumbnails-container .swiper-container'),
            price = getElem('#real_price'),
            productOnlyStore = getElem('.in-store-only-container');
  
        if (!!refLoad && (!!brandLoad || !!brandWrap) && !!wishLoad && !!nameLoad && !!ratingLoad && !!promoLoad && !!priceLoad && !!price && !!prodLoad && !!containerSlider && !!tabLoad && (!!addToCartLoad || !!productOnlyStore) && (!!guideLoad && !!dropDownLoad || !guideLoad && !dropDownLoad) && (!!concuPourLoad || !!catchLoad) && !!swiperLoad && !!storeInfoLoad && (videoButton.innerHTML.trim() !== '' || videoButton && window.getComputedStyle(videoButton).getPropertyValue('display') === 'none') && typeof tc_vars !== 'undefined') {
          if (!!dropDownLoad) {
            elementIsset.size = true;
          }
  
          return true;
        }
      }, function () {
        var data = getDataProduct();
        renderHeader(createHeaderElement(data));
      });
      Kameleoon.API.runWhenElementPresent('.floor-complementary', function (e) {
        var containerElements = e[0];
        var complementary, technical, composition, liability;
        Kameleoon.API.runWhenConditionTrue(function () {
          complementary = getElem('.block-complementary-container.container-even', containerElements);
          technical = getElem('.technical-infos-container', containerElements);
          composition = getElem('.product-composition-component', containerElements);
          liability = getElem('.block-complementary-container.container-odd', containerElements);
  
          if (!!complementary && !!technical && !!composition && !!liability) {
            return true;
          }
        }, function () {
        });
      });
    });
    Kameleoon.API.runWhenElementPresent('.main-reviews-container', function (e) {
      var reviewsWrap = e[0];
  
      var arrReviews = _toConsumableArray(reviewsWrap.querySelectorAll('.review-container'));
  
      var getElem = function getElem(selector) {
        var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : reviewsWrap;
        return object.querySelector(selector);
      };
  
      var text = function text(object) {
        return object.textContent.trim();
      };
  
      var getDataForReviews = function getDataForReviews() {
        var arrNewReviews = [];
  
        var countOfStars = function countOfStars(arr) {
          var stars = 0;
  
          for (var i = 0, len = arr.length; i < len; i++) {
            if (!arr[i].classList.contains('rating-star--empty')) {
              stars++;
            }
          }
  
          return stars;
        };
  
        var response = function response(resp) {
          return resp || document.createElement('div');
        };
  
        for (var i = 0, len = arrReviews.length; i < len; i++) {
          var oldReview = arrReviews[i];
          var newReview = {
            title: text(getElem('.r-title-resume', oldReview)),
            date: text(getElem('.r-date-and-user > p:nth-child(1)', oldReview)),
            userInfo: text(getElem('.r-user', oldReview)),
            used: text(getElem('.r-used-for', oldReview)),
            review: text(getElem('.r-desc', oldReview)),
            helpful: getElem('.r-usefull-review', oldReview),
            textHelpful: text(getElem('.r-usefull-review > p:nth-child(2)', oldReview)).slice(0, 30),
            buttonYes: getElem('.r-usefull-review > p:nth-child(2) > span > button:nth-child(1)', oldReview),
            buttonNo: getElem('.r-usefull-review > p:nth-child(2) > span > button:nth-child(2)', oldReview),
            response: response(getElem('.review-reponse', oldReview)),
            abuse: getElem('.abuse', oldReview),
            stars: countOfStars(_toConsumableArray(oldReview.querySelectorAll('p.r-title > span')))
          };
          arrNewReviews.push(newReview);
        }
  
        return arrNewReviews;
      };
  
      var getDataForTotalInfo = function getDataForTotalInfo() {
        var getAllPercents = function getAllPercents() {
          var getAllPercentsElements = function getAllPercentsElements() {
            return reviewsWrap.querySelectorAll('.rating-progress-bar-percent');
          };
  
          var getPercents = function getPercents(elements) {
            var percents = [];
  
            for (var i = 0, len = elements.length; i < len; i++) {
              percents[5 - i] = parseInt(elements[i].style.width);
            }
  
            return percents;
          };
  
          return getPercents(getAllPercentsElements());
        };
  
        var data = {
          percents: getAllPercents(),
          button: getElem('.reviews-btn-write'),
          text: text(getElem('.rs-global-rating'))
        };
        return data;
      };
  
      var insert = function insert() {
        for (var i = 0, len = arguments.length; i < len; i++) {
          var obj = i < 0 || arguments.length <= i ? undefined : arguments[i];
          obj.in.insertAdjacentElement(obj.pos, obj.elem);
        }
      };
  
      var createReviewsElement = function createReviewsElement(data) {
        var reviewsElement = document.createElement('div');
        reviewsElement.className = 'kam_reviews-element';
  
        var createStarsElement = function createStarsElement(stars) {
          var starsElement = document.createElement('div');
          starsElement.className = 'kam_review_title_stars';
  
          for (var i = 0; i < 5; i++, stars--) {
            var star = document.createElement('div');
  
            if (stars <= 0) {
              star.className = 'cube-icon icon-star rating-star--epmty';
            } else {
              star.className = 'cube-icon icon-star rating-star';
            }
  
            insert({
              in: starsElement,
              pos: 'beforeEnd',
              elem: star
            });
          }
  
          return starsElement;
        };
  
        var addReviews = function addReviews(reviews) {
          for (var i = reviews.length - 1; i >= 0; i--) {
            var rev = reviews[i];
            var reviewElement = document.createElement('div');
            reviewElement.className = 'kam_reviews-element_review';
            reviewElement.innerHTML = "\n                <div class=\"kam_review_title\">\n                  <!-- insert stars element -->\n                  <div class=\"kam_review_title_title\">".concat(rev.title, "</div>\n                  <div class=\"kam_review_info\">\n                    <div class=\"kam_review_info_date\">").concat(rev.date, "</div>\n                    <div class=\"kam_review_info_user\">").concat(rev.userInfo, "</div>\n                  </div>\n                </div>\n                <div class=\"kam_review_used\">").concat(rev.used, "</div>\n                <div class=\"kam_review_inside\">\n                  <div class=\"kam_review_inside_text\">").concat(rev.review, "</div>\n                  <div class=\"kam_review_inside_response\">\n                    <!-- insert response element -->\n                  </div>\n                </div>\n                <div class=\"kam_review_footer\">\n                  <div class=\"kam_review_footer_abuse\">\n                    <!-- insert abuse element -->\n                  </div>\n                  <!-- insert rating element -->\n                </div>\n              ");
            insert({
              in: reviewsElement,
              pos: 'afterBegin',
              elem: reviewElement
            }, {
              in: getElem('.kam_review_title', reviewElement),
              pos: 'afterBegin',
              elem: createStarsElement(rev.stars - 1) // -1 - fix for correct display stars of review
  
            }, {
              in: getElem('.kam_review_inside_response', reviewElement),
              pos: 'afterBegin',
              elem: rev.response
            }, {
              in: getElem('.kam_review_footer_abuse', reviewElement),
              pos: 'afterBegin',
              elem: rev.abuse // ,
              // {
              //   in: getElem('.kam_review_footer', reviewElement),
              //   pos: 'beforeEnd',
              //   elem: createRatingElement(rev.textHelpful, rev.buttonYes, rev.buttonNo)
              // }
  
            });
          }
        };
  
        addReviews(data);
        return reviewsElement;
      };
  
      var createSortElement = function createSortElement() {
        var idModel = tc_vars['product_id_model'];
        var sortElement = document.createElement('div');
        sortElement.className = 'kam_sort-element';
        sortElement.innerHTML = "<div class=\"kam_sort-element_text\">\u0421\u041E\u0420\u0422\u0418\u0420\u041E\u0412\u0410\u0422\u042C \u041F\u041E:</div>";
  
        var createDropdownElement = function createDropdownElement(obj) {
          var dropdownElement = document.createElement('div');
          dropdownElement.className = 'kam_sort-element_dropdown';
          var dropdownName = document.createElement('div');
          dropdownName.className = 'kam_sort-element_dropdown-name';
          dropdownName.innerHTML = "".concat(obj.name);
  
          dropdownName.onclick = function () {
            return openDropdownElement(obj.linkInfo.length);
          };
  
          var createOverflowElement = function createOverflowElement(linkInfo) {
            var overflowElement = document.createElement('div');
            overflowElement.className = 'kam_sort-element_dropdown-overflow';
  
            for (var i = 0, len = linkInfo.length; i < len; i++) {
              var info = linkInfo[i];
              var linkElement = document.createElement('a');
              linkElement.className = 'kam_sort-element_dropdown-link';
              linkElement.href = "https://www.decathlon.ru/ru/pageReviews?productId=".concat(idModel, "&collaborator=0&").concat(info.headers);
              linkElement.innerHTML = "".concat(info.name);
              insert({
                in: overflowElement,
                pos: 'beforeEnd',
                elem: linkElement
              });
            }
  
            return overflowElement;
          };
  
          var overflowElement = createOverflowElement(obj.linkInfo);
  
          var closeDropdownElement = function closeDropdownElement() {
            overflowElement.style.height = "0px";
            window.removeEventListener('mouseup', closeDropdownElement);
          };
  
          var openDropdownElement = function openDropdownElement(count) {
            overflowElement.style.height = "".concat(count * gv.heightSortLink + 10, "px");
            window.addEventListener('mouseup', closeDropdownElement);
          };
  
          insert({
            in: dropdownElement,
            pos: 'afterBegin',
            elem: dropdownName
          }, {
            in: dropdownElement,
            pos: 'beforeEnd',
            elem: overflowElement
          });
          return dropdownElement;
        };
  
        insert({
          in: sortElement,
          pos: 'beforeEnd',
          elem: createDropdownElement({
            name: 'ДАТЕ',
            linkInfo: [{
              headers: 'filterReviews=5&sortReviews=newest',
              name: 'ПОСЛЕДНИЕ'
            }, {
              headers: 'filterReviews=5&sortReviews=oldest',
              name: 'ПЕРВЫЕ'
            }]
          })
        }, {
          in: sortElement,
          pos: 'beforeEnd',
          elem: createDropdownElement({
            name: 'ОЦЕНКЕ',
            linkInfo: [{
              headers: 'filterReviews=5',
              name: 'ОТЛИЧНО (5)'
            }, {
              headers: 'filterReviews=4',
              name: 'ХОРОШО (4)'
            }, {
              headers: 'filterReviews=3',
              name: 'СРЕДНЕ (3)'
            }, {
              headers: 'filterReviews=2',
              name: 'ПЛОХО (2)'
            }, {
              headers: 'filterReviews=1',
              name: 'УЖАСНО (1)'
            }]
          })
        }, {
          in: sortElement,
          pos: 'beforeEnd',
          elem: createDropdownElement({
            name: 'ПОЛЕЗНОСТИ',
            linkInfo: [{
              headers: 'filterReviews=&sortReviews=helpful',
              name: 'ПОЛЕЗНЫЕ'
            }]
          })
        });
        return sortElement;
      };
  
      var createReviewsInfoElement = function createReviewsInfoElement(data) {
        var reviewsInfoElement = document.createElement('div');
        reviewsInfoElement.className = 'kam_reviews-info_element';
  
        var createRatingElement = function createRatingElement(obj) {
          var ratingElement = document.createElement('div');
          ratingElement.className = 'kam_reviews-info_element-rating';
  
          var createProgressElement = function createProgressElement(procent) {
            var progressElement = document.createElement('div');
            progressElement.className = 'kam_rating_progress-bar';
            progressElement.innerHTML = "<div class=\"kam_rating_progress-bar_line\" style=\"width: ".concat(procent, "%\"></div>");
            return progressElement;
          };
  
          var createStarsElement = function createStarsElement(count) {
            var starsElement = document.createElement('div');
            starsElement.className = 'kam_rating_stars';
  
            for (var i = 0; i < count; i++) {
              var star = document.createElement('div');
              star.className = 'cube-icon icon-star rating-star';
              insert({
                in: starsElement,
                pos: 'afterBegin',
                elem: star
              });
            }
  
            return starsElement;
          };
  
          var createLeftElement = function createLeftElement(percents) {
            for (var i = 5; i > 0; i--) {
              var ratingRow = document.createElement('div');
              ratingRow.className = 'kam_reviews-info_element-rating_row';
              insert({
                in: ratingRow,
                pos: 'afterBegin',
                elem: createProgressElement(percents[i])
              }, {
                in: ratingRow,
                pos: 'afterBegin',
                elem: createStarsElement(i)
              }, {
                in: ratingElement,
                pos: 'beforeEnd',
                elem: ratingRow
              });
            }
          };
  
          createLeftElement(obj.percents);
          return ratingElement;
        };
  
        var createRightElement = function createRightElement(obj) {
          var rightElement = document.createElement('div');
          rightElement.className = 'kam_reviews-info_right-element';
  
          var createAssessElement = function createAssessElement(text) {
            var array = text.split('/');
            var assessElement = document.createElement('div');
            assessElement.className = 'kam_reviews-info_right-element_assess';
            assessElement.innerHTML = "<span class=\"kam_assess-big\">".concat(array[0], "</span> \u0438\u0437 ").concat(array[1]);
            return assessElement;
          };
  
          insert({
            in: rightElement,
            pos: 'afterBegin',
            elem: obj.button
          }, {
            in: rightElement,
            pos: 'afterBegin',
            elem: createAssessElement(obj.text)
          });
          return rightElement;
        };
  
        insert({
          in: reviewsInfoElement,
          pos: 'afterBegin',
          elem: createRatingElement(data)
        }, {
          in: reviewsInfoElement,
          pos: 'afterBegin',
          elem: createRightElement({
            button: data.button,
            text: data.text
          })
        });
        return reviewsInfoElement;
      };
  
      var insertReviewElement = function insertReviewElement() {
        var listOfReviews = reviewsWrap.querySelector('.reviews-list-container');
        listOfReviews.innerHTML = '';
  
        for (var i = 0, len = arguments.length; i < len; i++) {
          listOfReviews.insertAdjacentElement('afterBegin', i < 0 || arguments.length <= i ? undefined : arguments[i]);
        }
      };
  
      insertReviewElement(createReviewsElement(getDataForReviews()), createSortElement(), createReviewsInfoElement(getDataForTotalInfo()));
    }); // global code
  
    if (location.href.match('-id_')) {
      (function () {
        var goal = function goal(id) {
          Kameleoon.API.processConversion(id);
        };
  
        var createRecomendLocalStorage = function createRecomendLocalStorage() {
          localStorage.setItem('kam_recomendation-page', location.pathname);
        };
  
        var hasBeenClicked = function hasBeenClicked() {
          localStorage.setItem('kam_has-been-clicked', 1);
        };
  
        var removeRecomendLocalStorage = function removeRecomendLocalStorage() {
          localStorage.removeItem('kam_recomendation-page');
        };
  
        var removeHasBeenClicked = function removeHasBeenClicked() {
          localStorage.removeItem('kam_has-been-clicked');
        };
  
        var checkRecomendPage = function checkRecomendPage() {
          return localStorage.getItem('kam_recomendation-page') === location.pathname;
        };
  
        var checkHasBeenClicked = function checkHasBeenClicked() {
          return localStorage.getItem('kam_has-been-clicked') !== null;
        };
  
        var checkDisabled = function checkDisabled(button) {
          return button.classList.contains('disabled');
        };
  
        var checkSize = function checkSize() {
          var sizeElement = document.querySelector('#dropdown-list-size .btn.btn-default.dropdown-toggle');
          return sizeElement ? sizeElement.value !== '' : true;
        };
  
        var addFuncWhenButtonsPresents = function addFuncWhenButtonsPresents(arr) {
          var _loop = function _loop(i, len) {
            var elementInfo = arr[i];
            Kameleoon.API.runWhenElementPresent(elementInfo.selector, function (e) {
              var button = e[0];
              button.addEventListener('click', function () {
                if (!checkDisabled(button) && checkSize()) {
                  goal(elementInfo.idGoal);
  
                  if (elementInfo.idRecomGoal && checkRecomendPage()) {
                    goal(elementInfo.idRecomGoal);
                  }
                }
              });
            });
          };
  
          for (var i = 0, len = arr.length; i < len; i++) {
            _loop(i);
          }
        };
  
        var addEventListenerOnRecomendWhenPres = function addEventListenerOnRecomendWhenPres(arr) {
          for (var i = 0, len = arr.length; i < len; i++) {
            var elementInfo = arr[i];
            Kameleoon.API.runWhenElementPresent(elementInfo.selector + ' .slick-active', function (e) {
              var elements = [].slice.call(e[0].parentNode.querySelectorAll('.t2s_block_product'));
  
              for (var y = 0, _len = elements.length; y < _len; y++) {
                elements[y].addEventListener('click', hasBeenClicked);
              }
            });
          }
        };
  
        var idRecomGoal = 136402;
  
        if (checkHasBeenClicked()) {
          removeHasBeenClicked();
          createRecomendLocalStorage();
        }
  
        if (!checkRecomendPage()) {
          idRecomGoal = false;
          removeRecomendLocalStorage();
        }
  
        addEventListenerOnRecomendWhenPres([{
          selector: '.custom-product-slider'
        }, {
          selector: '.custom-product-slider-similar'
        }]);
        addFuncWhenButtonsPresents([{
          selector: '#add_to_cart_button',
          idGoal: 87590,
          idRecomGoal: idRecomGoal
        }, {
          selector: '#AddToErep_buttonReservation',
          idGoal: 113824
        }]);
      })();
    }
  
  }());
  