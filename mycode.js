"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    module.exports = {
      popUpContent: {
        title: 'Le Mois Très Privé',
        subtitle: 'Complétez les informations ci-dessous pour recevoir par email votre offre Le Mois Très Privé.',
        agreement: "Je consens \xE0 l\u2019utilisation de mes donn\xE9es personnelles pour recevoir des offres personnalis\xE9es de la part de Renault SAS et des membres de son r\xE9seau commercial.*",
        subscription: {
          options: ['Par email', 'Par SMS'],
          remark: 'Champs Obligatoires.',
          errorMessage: 'Veuillez choisir une réponse'
        },
        cta: 'JE RECOIS MON OFFRE',
        legal: "Pour Renault, la protection de vos donn\xE9es personnelles est importante.<br>\n        Vos donn\xE9es personnelles sont trait\xE9es par Renault SAS et les membres de son r\xE9seau commercial, en tant que responsables conjoints de traitement. Vos donn\xE9es sont utilis\xE9es pour la gestion de la relation commerciale notamment la gestion de votre demande et l\u2019envoi d\u2019enqu\xEAte de satisfaction, le reporting sur leurs activit\xE9s, la conduite d'activit\xE9s de recherche et d\xE9veloppement, l\u2019am\xE9lioration des produits et services notamment en recourant \xE0 de l\u2019analyse avanc\xE9e, la gestion de votre participation \xE0 des \xE9tudes produits / tendances et l'envoi d'offres commerciales personnalis\xE9es susceptibles de vous int\xE9resser. Vous disposez d\u2019un droit d\u2019acc\xE8s \xE0 vos donn\xE9es personnelles. Vous pouvez en outre solliciter la rectification ou l\u2019effacement de vos donn\xE9es personnelles. Vous b\xE9n\xE9ficiez \xE9galement du droit de vous opposer au traitement de celles-ci, sans motif lorsqu\u2019il s\u2019agit de prospection commerciale (y compris par voie postale et t\xE9l\xE9phone), en justifiant d\u2019une situation particuli\xE8re dans les autres cas, ou de solliciter une limitation dudit traitement. Vous pouvez demander la communication de vos donn\xE9es personnelles dans un format structur\xE9 et standard. Vous disposez enfin d\u2019un droit de d\xE9finir des directives relatives au sort de vos donn\xE9es personnelles apr\xE8s votre d\xE9c\xE8s.<br>\n        Vous pouvez exercer ces droits \xE0 tout moment, en justifiant de votre identit\xE9, en nous adressant un email \xE0 l\u2019adresse dpo@renault.com ou un courrier postal \xE0 l\u2019adresse : Renault SAS, Direction juridique \u2013 D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es, 13/15 quai le Gallo 92100 Boulogne-Billancourt.<br>\n        Pour en savoir plus, suivez le lien\xA0<a href=\"https://www.renault.fr/donnees-personnelles.html\" target=\"_blank\">Vos donn\xE9es personnelles</a>."
      },
      models: {
        element: 'select',
        id: 'kam-model-picker',
        label: 'Quel modèle vous intéresse ?',
        options: ['Nouvelle&#160;TWINGO', 'Nouvelle&#160;CLIO', 'CAPTUR', 'MEGANE', 'SCENIC', 'KADJAR', 'TALISMAN', 'ESPACE', 'KOLEOS', 'ZOE', 'KANGOO&#160;VP'],
        placeholder: true,
        errorMessage: 'Veuillez sélectionner un modèle'
      },
      gender: {
        element: 'select',
        id: 'kam-gender-picker',
        label: 'Civilité',
        options: ['Monsieur', 'Madame'],
        placeholder: true,
        errorMessage: 'Veuillez sélectionner une civilité'
      },
      geolocation: {
        element: 'input',
        id: 'kam-geolocation',
        label: 'Sélectionnez votre établissement',
        type: 'text',
        placeholder: 'Rechercher par ville ou code postal',
        errorMessage: 'Veuillez renseigner une adresse valide'
      },
      name: {
        element: 'input',
        id: 'kam-name',
        label: 'Nom',
        type: 'text',
        errorMessage: 'Veuillez renseigner un nom valide'
      },
      surname: {
        element: 'input',
        id: 'kam-surname',
        label: 'Prénom',
        type: 'text',
        errorMessage: 'Veuillez renseigner un prénom valide'
      },
      phonenumber: {
        element: 'input',
        id: 'kam-phonenumber',
        label: 'Téléphone',
        type: 'text',
        placeholder: 'Votre numéro au format 0623456789',
        errorMessage: 'Veuillez entrer un téléphone valide'
      },
      email: {
        element: 'input',
        id: 'kam-email',
        label: 'E-mail',
        type: 'text',
        errorMessage: 'Veuillez renseigner un email valide'
      },
      successPage: {
        title: 'MERCI',
        firstParagraph: 'Votre demande a bien été prise en compte.',
        secondParagraph: 'Vous recevrez votre offre personnalisée',
        thirdParagraph: 'Le Mois Très Privé dans quelques minutes.'
      },
      errorPage: {
        title: '',
        firstParagraph: 'Une erreur est survenue, merci de réessayer ultérieurement.',
        secondParagraph: '',
        thirdParagraph: ''
      },
      modelKeys: {
        'Nouvelle TWINGO': 'X071BIVP2W3',
        'Nouvelle CLIO': 'BJA1VPVPCL5',
        'CAPTUR': 'X872MOVP87J',
        'MEGANE': 'XFB1BIVPMB4',
        'SCENIC': 'XFA1MOVPSC4',
        'KADJAR': 'XFE2SUVPFEH',
        'TALISMAN': 'XFD1TRVPFDL',
        'ESPACE': 'XFC1MOVPSP5',
        'KOLEOS': 'XZG1SUVPZGH',
        'ZOE': 'X101VEVPZOE',
        'KANGOO VP': 'X612BKVPKP2'
      }
    };
  }, {}],
  2: [function (require, module, exports) {
    var popup = require('./popup/script');

    var render = require('./render');

    var data = require('./data');

    var utils = require('./utils');

    var validation = require('./validation');

    var autocomplete = require('./inputautocomplete');

    var slider = require('./slider/slider');

    var _data$popUpContent$su = data.popUpContent.subscription,
        options = _data$popUpContent$su.options,
        remark = _data$popUpContent$su.remark,
        errorMessage = _data$popUpContent$su.errorMessage;

    function runPopup() {
      render.launch(data, popup);
      render.addNewContentRow('top', data.models, data.geolocation);
      render.addNewContentRow('gender', data.gender);
      render.addNewContentRow('customer-info', data.name, data.surname);
      render.addNewContentRow('contacts', data.phonenumber, data.email);
      render.addSubscriptionRow('.kam-form__agreement', options, remark, errorMessage);
      render.customizeInput('kam-geolocation');
      render.addNewClassToAdressError();
    }

    runPopup();
    render.addPreloader(); // render.renderBannerBottom();

    getUserJourney();
    autocomplete.autocompleteAddress();
    validation.checkValidation();
    validation.runClickValidation();

    function getUserJourney() {
      var previousUrl = document.referrer;
      console.log('[getUserJourney]');
      console.log("previousUrl = ".concat(previousUrl));
      data.models.options.forEach(function (item) {
        var carModel1 = item.split(' ')[0];
        var carModel2 = item.split(' ')[1];

        if (isUserJourneyPresent(carModel1, carModel2, previousUrl)) {
          utils._qs('#kam-model-picker').value = item;
        }
      });
    }

    function isUserJourneyPresent(carModel1, carModel2, previousUrl) {
      return carModel1.toLowerCase() != 'nouvelle' && previousUrl.match(carModel1.toLowerCase()) || carModel1.toLowerCase() == 'nouvelle' && carModel2 && previousUrl.match(carModel2.toLowerCase());
    } // ---------- slider test---------------


    var slideImages = ['https://m.economictimes.com/thumb/msid-68721421,width-640,height-480,resizemode-7/nature.jpg', 'https://cdn.pixabay.com/photo/2017/06/08/13/21/nature-2383627_640.jpg', 'https://www.studiointernational.com/images/articles/c/066-chihuly-dale-2019/Neodymium-Reeds-and-Turquoise-Marlins,-blown-glass,-(date-not-specified).jpg'];
    var wrap = document.createElement('div');
    wrap.classList.add('wrapperSlider');
    document.querySelector('#container').appendChild(wrap);
    var wrapper = '.wrapperSlider';
    var width = 640;
    new slider(slideImages, wrapper, width, {
      arrowButtons: true,
      controlDots: true,
      infiniteScrolling: true,
      auto: true,
      autoplaySpeed: 5000,
      slideIndex: 1,
      widthOfTheSlide: width,
      amountSlidesToMove: 1
    }); // -------------------------------------

    /* // logic of reopening popup with banner
    
    let numberOfBannerAppears = 0;
    
    function clickOnBannerAndShowPopup() {
        Kameleoon.API.runWhenElementPresent('.kam-banner__button', button => {
            button[0].addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, () => {
                if (!Kameleoon.Internals.runtime.touchMoveEvent) {
                    let overlay = document.querySelector('.kam-overlay');
                    let banner = utils._qs('.kam-banner');
                    let form = utils._qs('.kam-form');
                    let afterSendContent = utils._qs('.kam-form-result');
        
                    render.resetFormValue();
                    form.style.display = 'block';
                    afterSendContent.parentNode.removeChild(afterSendContent);
                    overlay.classList.remove('kam-popup_hidden');
                    document.body.classList.add('kam-overflow');
        
                    banner.classList.add('kam-banner_hidden');
        
                }
            })
        })
    }
    clickOnBannerAndShowPopup();
    
    
    
    function closePopupAndShowBanner() {
        // onclick instead of addEventListener if something's wrong
        Kameleoon.API.runWhenElementPresent('.kam-popup__close-popup', button => {
            button[0].addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, () => {
                if (!Kameleoon.Internals.runtime.touchMoveEvent) {
                    let banner = utils._qs('.kam-banner');
        
                    if (render.isSuccessMessage() && banner && banner.classList.contains('kam-banner_hidden') && 
                        numberOfBannerAppears == 0) {
                        banner.classList.remove('kam-banner_hidden');
                        numberOfBannerAppears++;
        
                    }
                }
            })
        })
    }
    closePopupAndShowBanner();
    
    */
  }, {
    "./data": 1,
    "./inputautocomplete": 3,
    "./popup/script": 4,
    "./render": 5,
    "./slider/slider": 7,
    "./utils": 8,
    "./validation": 9
  }],
  3: [function (require, module, exports) {
    var utils = require('./utils');

    function hideErrorMessage() {
      var address = utils._qs('#kam-geolocation');

      var errorMessage = address.parentNode.nextElementSibling;

      if (!errorMessage.classList.contains('kam-form__error-message_hidden')) {
        errorMessage.classList.add('kam-form__error-message_hidden');
      }
    }

    function createFullAddress(address) {
      var dealerInfo = [];

      for (var key in address) {
        if (key != 'extendedAddress') {
          dealerInfo.push(address[key]);
        }
      }

      return dealerInfo.join(', ').replace(/\s+/g, ' ').trim();
    }

    function resentWithWiderRange(arrayResults, address, radius) {
      var sendData = null;
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.responseText) {
          var response = JSON.parse(this.responseText);

          if (response.data) {
            var dealers = response.data;
            var addressesAndDealerIds = dealers.map(function (dealer) {
              return {
                address: dealer.address,
                dealerId: dealer.dealerId,
                name: dealer.name
              };
            });
            addressesAndDealerIds.forEach(function (item) {
              var fullDealerInfo = createFullAddress(item.address);
              var nameAndAddress = "".concat(item.name, ": ").concat(fullDealerInfo);
              arrayResults.push({
                address: nameAndAddress,
                dealerId: item.dealerId
              });
            });

            var addressInput = utils._qs('#kam-geolocation');

            drawDealersList(addressInput, arrayResults);
          }
        }
      });
      var url = "https://api-wired-valid-1-euw1.wrd-aws.com/commerce/v1/dealers?radius=" + radius + "&address=" + address + "&country=fr&filters=renault.blacklisted==false;dealerNature==MAJOR;renault.receiveLead==true;activities=in=%2801%29&language=fr&country=FR&%20country=fr";
      xhr.open("GET", url);
      xhr.setRequestHeader("apikey", "RrZaCIJl1xINexBqadvYKAUizO00DFMy");
      xhr.send(sendData);
    }

    function drawEmptyDealerList(addressInput) {
      var dealersContainer = document.createElement('ul');
      dealersContainer.classList.add('kam-dealers-container');
      addressInput.parentNode.appendChild(dealersContainer);
      dealersContainer.insertAdjacentHTML('beforeend', '<li class="kam-dealers-container__option">pas de revendeurs</li>');
      setTimeout(function () {
        var renderedResults = utils._qs('.kam-dealers-container');

        if (renderedResults) {
          utils.removeElement(renderedResults);
        }
      }, 1500);
    }

    function drawCurrentDealerAddress(addressInput) {
      var dealersContainer = document.createElement('ul');
      dealersContainer.classList.add('kam-dealers-container');
      addressInput.parentNode.appendChild(dealersContainer);
      dealersContainer.insertAdjacentHTML('beforeend', "<li class=\"kam-dealers-container__option\" data-dealerId=\"".concat(window.sessionStorage.getItem('kam-chosenDealerId').toString(), "\">").concat(window.sessionStorage.getItem('kam-chosenDealer').toString(), "</li>")); // the option here is only one

      var option = utils._qs('.kam-dealers-container__option');

      option.addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function () {
        if (!Kameleoon.Internals.runtime.touchMoveEvent) {
          addressInput.value = option.textContent;
          window.sessionStorage.setItem('kam-chosenDealer', option.textContent);
          window.sessionStorage.setItem('kam-chosenDealerId', option.getAttribute('data-dealerId'));
          utils.removeElement(dealersContainer);
          hideErrorMessage();
        }
      });
    }

    function getMatchingDealers(addressesAndDealerIds, data, arrayResults, isGeolocator) {
      if (isGeolocator) {
        addressesAndDealerIds.forEach(function (item) {
          if (item.address.postalCode.match(RegExp("^".concat(data.substring(0, data.length).toLowerCase())))) {
            //console.log('match full');
            var fullDealerInfo = createFullAddress(item.address);
            var nameAndAddress = "".concat(item.name, ": ").concat(fullDealerInfo);
            arrayResults.push({
              address: nameAndAddress,
              dealerId: item.dealerId
            });
          }
        });

        if (arrayResults.length == 0) {
          addressesAndDealerIds.forEach(function (item) {
            if (item.address.postalCode.match(RegExp("^".concat(data.substring(0, data.length - 1).toLowerCase())))) {
              //console.log('match without last number');
              var fullDealerInfo = createFullAddress(item.address);
              var nameAndAddress = "".concat(item.name, ": ").concat(fullDealerInfo);
              arrayResults.push({
                address: nameAndAddress,
                dealerId: item.dealerId
              });
            }
          });
        }

        if (arrayResults.length == 0) {
          addressesAndDealerIds.forEach(function (item) {
            if (item.address.postalCode.match(RegExp("^".concat(data.substring(0, data.length - 2).toLowerCase())))) {
              //console.log('match without 2 last numbers');
              var fullDealerInfo = createFullAddress(item.address);
              var nameAndAddress = "".concat(item.name, ": ").concat(fullDealerInfo);
              arrayResults.push({
                address: nameAndAddress,
                dealerId: item.dealerId
              });
            }
          });
        }
      } else {
        addressesAndDealerIds.forEach(function (item) {
          var regForPostalCode = new RegExp("^".concat(data.toLowerCase()));
          var regForLocality = new RegExp("^".concat(data.toUpperCase()));
          var regForStreet = new RegExp("^".concat(data.toUpperCase(), "$"));

          if (item.address.postalCode.match(regForPostalCode) || item.address.locality.match(regForLocality) || item.address.streetAddress.match(regForStreet)) {
            //console.log('not geolocator');
            var fullDealerInfo = createFullAddress(item.address);
            var nameAndAddress = "".concat(item.name, ": ").concat(fullDealerInfo);
            arrayResults.push({
              address: nameAndAddress,
              dealerId: item.dealerId
            });
          }
        });
      }

      if (arrayResults.length == 0) {
        var range = 10;
        resentWithWiderRange(arrayResults, data, range);
      }

      return arrayResults;
    }

    function drawDealersList(addressInput, arrayResults) {
      if (arrayResults.length > 0) {
        var dealersContainer = document.createElement('ul');
        dealersContainer.classList.add('kam-dealers-container');
        addressInput.parentNode.appendChild(dealersContainer);
        arrayResults.reduce(function (acc, option) {
          var dealerInfo = "<li class=\"kam-dealers-container__option\" data-dealerId=\"".concat(option.dealerId, "\">").concat(option.address, "</li>");

          if (acc.length < 6) {
            dealersContainer.insertAdjacentHTML('beforeend', dealerInfo);
            return [option].concat(_toConsumableArray(acc));
          } else {
            return acc;
          }
        }, []);
        var options = [].slice.call(document.querySelectorAll('.kam-dealers-container__option'));
        options.forEach(function (dealer) {
          dealer.addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function () {
            if (!Kameleoon.Internals.runtime.touchMoveEvent) {
              addressInput.value = dealer.textContent;
              window.sessionStorage.setItem('kam-chosenDealer', dealer.textContent);
              window.sessionStorage.setItem('kam-chosenDealerId', dealer.getAttribute('data-dealerId'));
              utils.removeElement(dealersContainer);
              hideErrorMessage();
            }
          });
        });
      } else if (arrayResults.length == 0 && !utils._qs('.kam-dealers-container')) {//drawEmptyDealerList(addressInput);
      }
    }

    function sendAddressData(addressInput, data, addressesAndDealerIds) {
      var isGeolocator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (data) {
        var arrayResults = [];
        utils.removeElement(utils._qs('.kam-dealers-container'));
        arrayResults = getMatchingDealers(addressesAndDealerIds, data, arrayResults, isGeolocator);
        drawDealersList(addressInput, arrayResults);
      } else {
        utils.removeElement(utils._qs('.kam-dealers-container'));
      }
    }

    function isDealerChosenBefore() {
      return !utils._qs('.kam-dealers-container') && window.sessionStorage.getItem('kam-chosenDealer');
    }

    function isDealerNotChosenBefore() {
      return !utils._qs('.kam-dealers-container') && !window.sessionStorage.getItem('kam-chosenDealer');
    }

    module.exports = {
      autocompleteAddress: function autocompleteAddress() {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && this.responseText) {
            var response = JSON.parse(this.responseText);

            if (response.data) {
              var dealers = response.data;
              var addressesAndDealerIds = dealers.map(function (dealer) {
                return {
                  address: dealer.address,
                  dealerId: dealer.dealerId,
                  name: dealer.name
                };
              }); // search address - input

              var addressInput = utils._qs('#kam-geolocation');

              var customTimeout;
              addressInput.addEventListener('input', function () {
                //console.log('search address - input');
                clearTimeout(customTimeout);
                customTimeout = setTimeout(function () {
                  return sendAddressData(addressInput, addressInput.value, addressesAndDealerIds);
                }, 800);
              }); // search address - geolocator click

              var geolocator = utils._qs('.kam-form__geolocator');

              geolocator && geolocator.addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function () {
                if (!Kameleoon.Internals.runtime.touchMoveEvent) {
                  //console.log('search address - geolocator click');
                  var currentGeoposition = JSON.parse(sessionStorage.getItem('KameleoonGeolocation'));
                  var currentPostalCode = currentGeoposition ? currentGeoposition.postalCode : '75009';
                  sendAddressData(addressInput, currentPostalCode, addressesAndDealerIds, true);
                }
              }); // search address - search button click

              var searchButton = utils._qs('.kam-form__search-icon');

              searchButton && searchButton.addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function () {
                if (!Kameleoon.Internals.runtime.touchMoveEvent) {
                  //console.log('search address - search button click');
                  // if (!utils._qs('.kam-dealers-container') && 
                  //     !window.sessionStorage.getItem('kam-chosenDealer') && 
                  //      utils._qs('#kam-geolocation').value != "") {
                  //     drawEmptyDealerList(addressInput);
                  // }
                  if (isDealerChosenBefore()) {
                    drawCurrentDealerAddress(addressInput);
                  } else if (isDealerNotChosenBefore()) {
                    //console.log('search -<> geolocator');
                    var currentGeoposition = JSON.parse(sessionStorage.getItem('KameleoonGeolocation'));
                    var currentPostalCode = currentGeoposition ? currentGeoposition.postalCode : '75009';
                    sendAddressData(addressInput, currentPostalCode, addressesAndDealerIds, true);
                  }
                }
              });
            }
          }
        });
        var url = "https://api-wired-valid-1-euw1.wrd-aws.com/commerce/v1/dealers?country=FR&filters=renault.blacklisted==false;dealerNature==MAJOR;renault.receiveLead==true;activities=in=(01)&pageSize=1000";
        xhr.open("GET", url);
        xhr.setRequestHeader("apikey", "RrZaCIJl1xINexBqadvYKAUizO00DFMy");
        xhr.send(data);
      }
    };
  }, {
    "./utils": 8
  }],
  4: [function (require, module, exports) {
    var PopUp =
    /*#__PURE__*/
    function () {
      function PopUp(markup) {
        _classCallCheck(this, PopUp);

        this.markup = markup || '<div class="kam-markup"><h2>Countdown Template</h2></div>';
        this.overlay = null;
      }

      _createClass(PopUp, [{
        key: "init",
        value: function init() {
          var popup = "<div class=\"kam-overlay\">\n\t\t\t\t<div class=\"kam-popup\">\n\t\t\t\t\t<div class=\"kam-popup__close-popup\"></div>\n\t\t\t\t\t".concat(this.markup, "\n\t\t\t\t</div>\n\t\t\t</div>");
          document.body.insertAdjacentHTML('beforeend', popup);
          document.body.classList.add('kam-overflow');
          this.clickForClose();
        }
      }, {
        key: "clickForClose",
        value: function clickForClose() {
          var _this = this;

          this.overlay = document.querySelector('.kam-overlay');
          var closeButton = this.overlay.querySelector('.kam-popup__close-popup');
          closeButton.addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function () {
            if (!Kameleoon.Internals.runtime.touchMoveEvent) {
              _this.overlay.classList.add('kam-popup_hidden');

              document.body.classList.remove('kam-overflow');
            }
          });
        }
      }]);

      return PopUp;
    }();

    module.exports = PopUp;
  }, {}],
  5: [function (require, module, exports) {
    var utils = require('./utils');

    module.exports = {
      insertSelectItem: function insertSelectItem(item, parent) {
        var id = item.id,
            label = item.label,
            options = item.options,
            errorMessage = item.errorMessage;
        var currentRow = document.createElement('div');
        currentRow.classList.add('kam-form__content-item');
        currentRow.innerHTML =
        /*html*/
        "\n        <label for=".concat(id, ">").concat(label, "*</label>\n        <div class=\"kam-form__content-select\"><select id=").concat(id, "></select></div>");
        parent.appendChild(currentRow);
        var selectElement = currentRow.querySelector('.kam-form__content-select select');
        options.map(function (option) {
          return selectElement.insertAdjacentHTML('beforeend', "<option value=".concat(option, ">").concat(option, "</option>"));
        });
        var placeholder = '<option selected="selected" disabled="disabled" value="">Sélectionnez</option>';
        var errorElement = "<span class=\"kam-form__error-message kam-form__error-message_hidden\">".concat(errorMessage, "</span>");
        item.placeholder && selectElement.insertAdjacentHTML('afterbegin', placeholder);
        currentRow.insertAdjacentHTML('beforeend', errorElement);
      },
      insertInputItem: function insertInputItem(item, parent) {
        var id = item.id,
            label = item.label,
            type = item.type,
            errorMessage = item.errorMessage;
        var markup =
        /*html*/
        "\n        <div class=\"kam-form__content-item\">\n            <label for=".concat(id, ">").concat(label, "*</label>\n            <div class=\"kam-form__content-input\">\n                <input id=").concat(id, " type=").concat(type, ">\n            </div>\n            <span class=\"kam-form__error-message kam-form__error-message_hidden\">").concat(errorMessage, "</span>\n        </div>");
        parent.insertAdjacentHTML('beforeend', markup);
      },
      hideSmsSwitch: function hideSmsSwitch() {
        var lastSwitch = utils._qs('.kam-form__subscription-element')[1];

        lastSwitch.classList.add('kam-form__subscription-element_hidden');
      },
      insertSwitchItem: function insertSwitchItem(heading, parent, errorMessage) {
        var groupName = heading.split(' ')[1].toLowerCase();
        console.log(groupName);
        var markup =
        /*html*/
        "\n        <div class=\"kam-form__subscription-element\">\n            <span class=\"kam-form__subscription-option\">".concat(heading, "</span>\n            <div class=\"kam-switch\">\n                <label class=\"kam-switch__container\">\n                    <input type=\"radio\" name=\"kam-").concat(groupName, "\" value=\"Y\">\n                    <span class=\"kam-switch__slider\"></span>\n                </label>\n                <span class=\"kam-switch__text\">OUI</span>\n            </div>\n            <div class=\"kam-switch\">\n                <label class=\"kam-switch__container\">\n                    <input type=\"radio\" name=\"kam-").concat(groupName, "\" value=\"N\">\n                    <span class=\"kam-switch__slider\"></span>\n                </label>\n                <span class=\"kam-switch__text\">NON</span>\n            </div>\n            <span class=\"kam-form__error-message kam-form__error-message_hidden\">").concat(errorMessage, "</span>\n        </div>");
        parent.insertAdjacentHTML('beforeend', markup);
      },
      customizeInput: function customizeInput(id) {
        var addressInput = document.getElementById(id);
        var searchIcon = document.createElement('div');
        var geolocator = document.createElement('span');
        var message = 'Utiliser ma position actuelle';
        geolocator.textContent = message;
        searchIcon.classList.add('kam-form__search-icon');
        geolocator.classList.add('kam-form__geolocator');
        addressInput.parentElement.appendChild(searchIcon);
        addressInput.parentElement.appendChild(geolocator);
      },
      addSubscriptionRow: function addSubscriptionRow(prevElementSelector, options, remark, errorMessage) {
        var _this2 = this;

        var prevElement = document.querySelector(prevElementSelector);
        var currentRow = document.createElement('div');
        var nodeRemark = "<div class=\"kam-form__subscription-remark\">*".concat(remark, "</div>");
        currentRow.classList.add('kam-form__subscription-block');
        options.map(function (heading) {
          return _this2.insertSwitchItem(heading, currentRow, errorMessage);
        });
        currentRow.insertAdjacentHTML('beforeend', nodeRemark);
        prevElement.insertAdjacentElement('afterend', currentRow);
        this.hideSmsSwitch();
      },
      addNewContentRow: function addNewContentRow(modification) {
        var _this3 = this;

        var mainContainer = document.querySelector('.kam-form__content');
        var markup = "<div class=\"kam-form__content-row kam-form__content-row_".concat(modification, "\"></div>");
        mainContainer.insertAdjacentHTML('beforeend', markup);
        var currentRow = document.querySelector(".kam-form__content-row_".concat(modification));

        var addPlaceholder = function addPlaceholder(item) {
          return document.getElementById(item.id).placeholder = item.placeholder;
        };

        for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          items[_key - 1] = arguments[_key];
        }

        items.map(function (item) {
          switch (item.element) {
            case 'select':
              _this3.insertSelectItem(item, currentRow);

              break;

            case 'input':
              _this3.insertInputItem(item, currentRow);

              item.placeholder && addPlaceholder(item);
          }
        });
      },
      renderAfterSendPage: function renderAfterSendPage(data) {
        var verstka =
        /*html*/
        "\n        <div class=\"kam-form-result kam-form-result_visibility_hidden\">\n             <div class=\"kam-form-result__content\">\n                <div class=\"kam-form-result__heading\">".concat(data.successPage.title, "</div>\n                <div class=\"kam-form-result__first-paragraph\">").concat(data.successPage.firstParagraph, "</div>\n                <div class=\"kam-form-result__second-paragraph\">").concat(data.successPage.secondParagraph, "</div>\n                <div class=\"kam-form-result__third-paragraph\">").concat(data.successPage.thirdParagraph, "</div>\n             </div>\n        </div>");

        var form = utils._qs('.kam-form');

        form.insertAdjacentHTML('afterend', verstka);
        form.style.display = 'none';
      },
      renderSuccessPage: function renderSuccessPage(data) {
        utils._qs('.kam-form-result__heading').textContent = data.successPage.title;
        utils._qs('.kam-form-result__first-paragraph').textContent = data.successPage.firstParagraph;
        utils._qs('.kam-form-result__second-paragraph').textContent = data.successPage.secondParagraph;
        utils._qs('.kam-form-result__third-paragraph').textContent = data.successPage.thirdParagraph;

        var content = utils._qs('.kam-form-result');

        if (content.classList.contains('kam-form-result_visibility_hidden')) {
          content.classList.remove('kam-form-result_visibility_hidden');
        }
      },
      renderErrorPage: function renderErrorPage(data) {
        utils._qs('.kam-form-result__heading').textContent = data.errorPage.title;
        utils._qs('.kam-form-result__first-paragraph').textContent = data.errorPage.firstParagraph;
        utils._qs('.kam-form-result__second-paragraph').textContent = data.errorPage.secondParagraph;

        var content = utils._qs('.kam-form-result');

        console.log(content);
        console.log("content.classList.contains('visibility_hidden'): ".concat(content.classList.contains('kam-form-result_visibility_hidden')));

        if (content.classList.contains('kam-form-result_visibility_hidden')) {
          content.classList.remove('kam-form-result_visibility_hidden');
        }
      },
      addNewClassToAdressError: function addNewClassToAdressError() {
        var addressInput = utils._qs('#kam-geolocation');

        var errorMessage = addressInput.parentNode.nextElementSibling;

        if (!errorMessage.classList.contains('kam-form__error-message_address')) {
          errorMessage.classList.add('kam-form__error-message_address');
        }
      },
      addPreloader: function addPreloader() {
        var overlayPopup = utils._qs('.kam-overlay');

        var markup =
        /*html*/
        "\n        <div class=\"kam-overlay-spinner kam-overlay-spinner_hidden\">\n            <span class=\"kam-spinner\"></span>\n        </div>";
        overlayPopup.insertAdjacentHTML('afterend', markup);
      },
      showPreloader: function showPreloader() {
        var overlayPreloader = utils._qs('.kam-overlay-spinner');

        if (overlayPreloader.classList.contains('kam-overlay-spinner_hidden')) {
          overlayPreloader.classList.remove('kam-overlay-spinner_hidden');
        }
      },
      hidePreloader: function hidePreloader() {
        var overlayPreloader = utils._qs('.kam-overlay-spinner');

        if (!overlayPreloader.classList.contains('kam-overlay-spinner_hidden')) {
          overlayPreloader.classList.add('kam-overlay-spinner_hidden');
        }
      },
      renderBannerBottom: function renderBannerBottom() {
        var markup =
        /*html*/
        "\n        <div class=\"kam-banner kam-banner_hidden\">\n            <div class=\"kam-banner__content\">\n                <div class=\"kam-banner__text\">\n                    Vous souhaitez recevoir votre offre personnalis\xE9e Le Mois Tr\xE8s Priv\xE9 ?\n                </div>\n            </div>\n            <div class=\"kam-banner__cta\">\n                <div class=\"kam-banner__button\">Je m\u2019inscris</div>\n            </div>\n        </div>";
        document.body.insertAdjacentHTML('beforeend', markup);
      },
      isSuccessMessage: function isSuccessMessage() {
        var content = utils._qs('.kam-form-result');

        var header = utils._qs('.kam-form-result__heading');

        if (content && header && header.textContent == 'MERCI') {
          return true;
        } else return false;
      },
      resetFormValue: function resetFormValue() {
        utils._qs('#kam-model-picker').value = '';
        utils._qs('#kam-gender-picker').value = '';
        utils._qs('#kam-geolocation').value = '';
        utils._qs('#kam-name').value = '';
        utils._qs('#kam-surname').value = '';
        utils._qs('#kam-phonenumber').value = '';
        utils._qs('#kam-email').value = '';
        utils._qs('.kam-form__subscription-block [name="kam-email"]:checked').checked = false;

        var smsSwitch = utils._qs('.kam-form__subscription-block [name="kam-sms"]:checked');

        if (smsSwitch) {
          smsSwitch.checked = false;
        } //hide error Messages


        var errorMessages = [].slice.call(utils._qs('.kam-form__error-message'));
        errorMessages.forEach(function (item) {
          if (!item.classList.contains('kam-form__error-message_hidden')) {
            item.classList.add('kam-form__error-message_hidden');
          }
        }); //hide sms option

        var smsOption = utils._qs('.kam-form__subscription-element')[1];

        if (!smsOption.classList.contains('kam-form__subscription-element_hidden')) {
          smsOption.classList.add('kam-form__subscription-element_hidden');
        }
      },
      launch: function launch(data, component) {
        var markup =
        /*html*/
        "\n        <div class=\"kam-form\">\n            <div class=\"kam-form__heading\">".concat(data.popUpContent.title, "</div>\n            <div class=\"kam-form__heading kam-form__heading_sub\">").concat(data.popUpContent.subtitle, "</div>\n            <div class=\"kam-form__content\"></div>\n            <div class=\"kam-form__agreement\">").concat(data.popUpContent.agreement, "</div>\n            <div class=\"kam-form__cta\">").concat(data.popUpContent.cta, "</div>\n            <div class=\"kam-form__legal\"><span>").concat(data.popUpContent.legal, "</span></div>\n        </div>");
        new component(markup).init();
      }
    };
  }, {
    "./utils": 8
  }],
  6: [function (require, module, exports) {
    var utils = require('./utils');

    var render = require('./render');

    var DATARender = require('./data');

    function isMobilePhoneNumber(phoneNumber) {
      return phoneNumber && (phoneNumber.length === 10 && phoneNumber.match(/^0[6-7]/) || phoneNumber.length === 13 && phoneNumber.match(/^0033[6-7]/) || phoneNumber.length === 12 && phoneNumber.match(/^\+33[6-7]/));
    }

    function isFixedPhoneNumber(phoneNumber) {
      return phoneNumber && (phoneNumber.length === 10 && phoneNumber.match(/^0[1-58-9]/) || phoneNumber.length === 13 && phoneNumber.match(/^0033[1-58-9]/) || phoneNumber.length === 12 && phoneNumber.match(/^\+33[1-58-9]/));
    }

    function randomNumber(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;

      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }

    function setCustomInfoAccordingToCars(value) {
      var clientRequestDescription = '';

      switch (value) {
        case 'ZOE':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre ZOE à 149 €/mois (LLD 37 mois, 1er loyer de 2000 €, location de batterie incluse) + 500 € de remise supplémentaire";
          break;

        case 'Nouvelle TWINGO':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéressé par l'offre TWINGO à 99 €/mois avec Easy Pack (LLD 49 mois, 1er loyer de 1500 €, sous condition de reprise)";
          break;

        case 'Nouvelle CLIO':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéressé par l'offre CLIO à 129 €/mois (LLD 49 mois, 1er loyer de 1500 €, sous condition de reprise)";
          break;

        case 'CAPTUR':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre CAPTUR de 4000 € d'aide à la reprise";
          break;

        case 'MEGANE':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre MEGANE de 4500 € d'aide à la reprise";
          break;

        case 'SCENIC':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre SCENIC de 5000 € d'aide à la reprise";
          break;

        case 'KADJAR':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre KADJAR de 5000 € d'aide à la reprise";
          break;

        case 'TALISMAN':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre TALISMAN de 6000 € d'aide à la reprise";
          break;

        case 'KOLEOS':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre KOLEOS de 5000 € d'aide à la reprise";
          break;

        case 'ESPACE':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre ESPACE de 7000 € d'aide à la reprise";
          break;

        case 'KANGOO VP':
          clientRequestDescription = "Formulaire Le Mois Très Privé :\nclient intéréssé par l'offre KANGOO VP de 4500 € d'aide à la reprise";
          break;
      }

      return clientRequestDescription;
    }

    function setUserData() {
      var _ref;

      var model = utils._qs('#kam-model-picker');

      var gender = utils._qs('#kam-gender-picker');

      var address = utils._qs('#kam-geolocation');

      var name = utils._qs('#kam-name');

      var surname = utils._qs('#kam-surname');

      var email = utils._qs('#kam-email');

      var phone = utils._qs('#kam-phonenumber');

      var emailMarket = utils._qs('.kam-form__subscription-block [name="kam-email"]:checked');

      var smsMarket = utils._qs('.kam-form__subscription-block [name="kam-sms"]:checked');

      var fixedPhone = "",
          mobilePhone = "",
          smsOption = "";

      if (phone && isMobilePhoneNumber(phone.value)) {
        mobilePhone = phone.value;
        smsOption = smsMarket ? smsMarket.value : "";
      } else if (phone && isFixedPhoneNumber(phone.value)) {
        fixedPhone = phone.value;
      }

      var dealerOfInterest = window.sessionStorage.getItem('kam-chosenDealerId') ? window.sessionStorage.getItem('kam-chosenDealerId').toString().split('_')[0] : false;
      var phenom = surname.value;
      var clientRequestDescription = setCustomInfoAccordingToCars(model.value);
      return _ref = {
        firstName: surname ? phenom.split(' ').map(function (part) {
          return part.substr(0, 1).toUpperCase() + part.substr(1);
        }).join(' ') : false,
        lastName: name ? name.value.toUpperCase() : false,
        address: address ? address.value : false,
        email: email ? email.value : false,
        mobilePhone: mobilePhone,
        fixedPhone: fixedPhone,
        model: model ? model.value : false,
        gender: gender && gender.value == "Monsieur" ? "Mr." : "Mrs.",
        emailMarket: emailMarket ? emailMarket.value : false,
        smsMarket: smsOption
      }, _defineProperty(_ref, "model", model ? model.value : false), _defineProperty(_ref, "modelKey", DATARender.modelKeys[model.value]), _defineProperty(_ref, "dealerOfInterest", dealerOfInterest), _defineProperty(_ref, "clientRequestDescription", clientRequestDescription), _ref;
    }

    function setSystemData() {
      return {
        userDevice: Kameleoon.Internals.runtime.deviceType.toLowerCase() === 'desktop' ? 'desktop' : 'mobile',
        leadSubmissionId: "KAMELEOON-".concat(randomNumber(11)),
        leadSubmissionTimestamp: new Date().toISOString(),
        origin: Kameleoon.Utils.readLocalData('REN_ORIGIN', 'COOKIE') ? Kameleoon.Utils.readLocalData('REN_ORIGIN', 'COOKIE') : "",
        campaign: Kameleoon.Utils.readLocalData('REN_CAMPAIGN', 'COOKIE') ? Kameleoon.Utils.readLocalData('REN_CAMPAIGN', 'COOKIE') : ""
      };
    }

    function setLeadData(userData, systemData) {
      return {
        "leadInfo": {
          "leadCountry": "France",
          "leadProvider": "KAMELEOON",
          "leadFormName": "KAMELEOON-ACHAT",
          "platformBrand": "RENAULT",
          "typeOfInterest": "VN",
          "subTypeOfInterest": "Purchase request",
          "origin": systemData.origin,
          "context": "lemoistresprivee",
          "device": systemData.userDevice,
          "campaign": systemData.campaign,
          "leadSource": "INTERNET",
          "leadSubmissionId": systemData.leadSubmissionId,
          "leadSubmissionTimestamp": systemData.leadSubmissionTimestamp
        },
        "client": {
          "title": userData.gender,
          "firstName": userData.firstName,
          "lastName": userData.lastName,
          "email": userData.email,
          "fixedPhone": userData.fixedPhone,
          "mobilePhone": userData.mobilePhone,
          "emailMarketingOptin": userData.emailMarket,
          "smsMarketingOptin": userData.smsMarket,
          "clientRequestDescription": userData.clientRequestDescription
        },
        "vehicle": {
          "brandOfInterest": "RENAULT",
          "modelOfInterest": userData.model,
          "modelKey": userData.modelKey
        },
        "dealer": {
          "dealerOfInterest": userData.dealerOfInterest
        }
      };
    }

    function sendDataToServer(leadData) {
      var xhr = new XMLHttpRequest(); // prod url
      //const url = "https://api-wired-prod-1.wired-aws.com/commerce/v1/leads";
      // test url

      var url = "https://api-wired-valid-1-euw1.wrd-aws.com/commerce/v1/leads";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json"); // prod api
      //xhr.setRequestHeader("Apikey", "Lxq4zxfhQ3MB3N7AWkiTxP1HsbACQtDA");
      // test api

      xhr.setRequestHeader("Apikey", "RrZaCIJl1xINexBqadvYKAUizO00DFMy");
      render.showPreloader();
      setTimeout(render.hidePreloader, 2900);
      render.renderAfterSendPage(DATARender);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && (xhr.status === 202 || xhr.status === 200)) {
          //console.log('DATE SUCCESSFULY SENT');
          // Validation formulaire Mois très privé
          Kameleoon.API.processConversion(158563);
          render.renderSuccessPage(DATARender);
        } else {
          //console.log('ERROR DURING SENT');
          render.renderErrorPage(DATARender);
        }
      };

      var data = JSON.stringify(leadData);
      xhr.send(data);
    }

    module.exports = {
      sendLead: function sendLead() {
        //console.log('SEND LEAD');
        var userData = setUserData();
        var systemData = setSystemData();
        var leadData = setLeadData(userData, systemData);
        sendDataToServer(leadData);
      }
    };
  }, {
    "./data": 1,
    "./render": 5,
    "./utils": 8
  }],
  7: [function (require, module, exports) {
    var Slider =
    /*#__PURE__*/
    function () {
      function Slider(arrSrc, wrapperBlock, widthSlide, sliderOptions) {
        _classCallCheck(this, Slider);

        this.countSlide = arrSrc.length;
        this.wrapperBlock = wrapperBlock;
        this.defaultParams = {
          arrowButtons: true,
          controlDots: false,
          infiniteScrolling: true,
          auto: false,
          autoplaySpeed: 5000,
          slideIndex: 1,
          widthOfTheSlide: widthSlide,
          amountSlidesToMove: 1
        };
        this.sliderOptions = _objectSpread({}, this.defaultParams, sliderOptions);

        this._initSlider(wrapperBlock, arrSrc);
      }

      _createClass(Slider, [{
        key: "_initSlider",
        value: function _initSlider(wrapperBlock, arrSrc) {
          var sliderBlock = "\n            <div class=\"wrapperOverflow\">\n                ".concat(this._addArrow('rightArrow'), "\n                <ul class=\"k_slider\">\n                ").concat(this._addSlide(arrSrc), "\n                </ul>\n                ").concat(this._addArrow('leftArrow'), "\n            </div>\n        ");
          var wrapper = document.querySelector(wrapperBlock);
          wrapper.insertAdjacentHTML('afterbegin', sliderBlock);
          var parentElem = document.querySelector('.k_slider');

          if (this.sliderOptions.arrowButtons) {
            var rightArrow = document.querySelector('.wrapperOverflow .rightArrow');
            var leftArrow = document.querySelector('.wrapperOverflow .leftArrow');

            this._nextSlide(rightArrow, parentElem);

            this._previousSlide(leftArrow, parentElem);
          }

          if (this.sliderOptions.auto) {
            this._autoSwitchSlide(parentElem);
          }

          this._changePositionSlide(parentElem);

          wrapper.style.width = "".concat(this.defaultParams.widthOfTheSlide * this.defaultParams.amountSlidesToMove, "px");
        }
      }, {
        key: "_addSlide",
        value: function _addSlide(arrElem) {
          var _this4 = this;

          var allSlide = arrElem.map(function (item, i) {
            return "<li class=\"k_Slide slide_".concat(i, "\" style=\"width:").concat(_this4.sliderOptions.widthOfTheSlide, "px;\">\n                                <img src=\"").concat(item, "\"/>\n            </li>");
          });

          if (this.sliderOptions.auto || this.sliderOptions.infiniteScrolling) {
            allSlide.push(allSlide[0]);
            allSlide.unshift(allSlide[allSlide.length - 2]);
            this.countSlide = this.countSlide + 2;
          }

          return allSlide.join('');
        }
      }, {
        key: "_addArrow",
        value: function _addArrow(className) {
          return this.sliderOptions.arrowButtons ? "<div class=\"".concat(className, " arrow\"></div>") : '';
        }
      }, {
        key: "_nextSlide",
        value: function _nextSlide(nextBtn, parentElem) {
          var _this5 = this;

          this._changePositionSlide(parentElem);

          var weitTransitionEnd = 0;
          nextBtn.addEventListener('click', function () {
            if (_this5.countSlide - _this5.sliderOptions.amountSlidesToMove > _this5.sliderOptions.slideIndex && weitTransitionEnd === 0) {
              weitTransitionEnd++;
              _this5.sliderOptions.slideIndex = _this5.sliderOptions.slideIndex + _this5.sliderOptions.amountSlidesToMove;
            }

            _this5._changePositionSlide(parentElem);
          });
          parentElem.addEventListener('transitionend', function () {
            weitTransitionEnd = 0;
          });
        }
      }, {
        key: "_previousSlide",
        value: function _previousSlide(previousBtn, parentElem) {
          var _this6 = this;

          var weitTransitionEnd = 0;

          this._changePositionSlide(parentElem);

          previousBtn.addEventListener('click', function () {
            if (_this6.sliderOptions.slideIndex >= 1 && weitTransitionEnd === 0) {
              weitTransitionEnd++;
              _this6.sliderOptions.slideIndex = _this6.sliderOptions.slideIndex - _this6.sliderOptions.amountSlidesToMove;
            }

            _this6._changePositionSlide(parentElem);
          });
          parentElem.addEventListener('transitionend', function () {
            weitTransitionEnd = 0;
          });
        }
      }, {
        key: "_changePositionSlide",
        value: function _changePositionSlide(parentElem) {
          var _this7 = this;

          var slideIndex = this.sliderOptions.slideIndex;
          var checkLastElem = slideIndex === this.countSlide - 1;
          var checkFirstElem = slideIndex === 0;
          parentElem.style.transition = 'left 1s';
          parentElem.style.left = "-".concat(this.sliderOptions.slideIndex * this.sliderOptions.widthOfTheSlide, "px");
          parentElem.addEventListener('transitionend', function () {
            if (_this7.sliderOptions.infiniteScrolling && (checkLastElem || checkFirstElem)) {
              if (checkLastElem) {
                _this7.sliderOptions.slideIndex = 1;
              } else if (checkFirstElem) {
                _this7.sliderOptions.slideIndex = _this7.countSlide - 2;
              }

              parentElem.style.transition = 'none';
              parentElem.style.left = "-".concat(_this7.sliderOptions.slideIndex * _this7.sliderOptions.widthOfTheSlide, "px");
            }
          }, {
            once: true
          });
        }
      }, {
        key: "_autoSwitchSlide",
        value: function _autoSwitchSlide(parentElem) {
          var _this8 = this;

          setInterval(function () {
            _this8.sliderOptions.slideIndex++;

            _this8._changePositionSlide(parentElem);
          }, this.sliderOptions.autoplaySpeed);
        }
      }]);

      return Slider;
    }();

    module.exports = Slider;
  }, {}],
  8: [function (require, module, exports) {
    module.exports = {
      // shortcut for document.querySelector()
      _qs: function _qs(selector) {
        if (document.querySelectorAll(selector).length > 1) {
          return [].slice.call(document.querySelectorAll(selector));
        } else if (document.querySelector(selector)) {
          return document.querySelector(selector);
        } else {
          return null;
        }
      },
      removeElement: function removeElement(element) {
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, {}],
  9: [function (require, module, exports) {
    var utils = require('./utils');

    var sendData = require('./sendData');

    var validationFormRegexp = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      name: /^[a-zA-ZÂâÀàÇçÉéÊêÈèËëÎîÏïÔôÛûÙùÜüŸÿ ]+$/,
      address: /^.*$/
    };

    function isMobilePhoneNumber(phoneNumber) {
      //return (phoneNumber && phoneNumber.length === 10 && phoneNumber.match(/^0[1-9]/));
      return phoneNumber && (phoneNumber.length === 10 && phoneNumber.match(/^0[6-7]/) || phoneNumber.length === 13 && phoneNumber.match(/^0033[6-7]/) || phoneNumber.length === 12 && phoneNumber.match(/^\+33[6-7]/));
    }

    function isFixedPhoneNumber(phoneNumber) {
      return phoneNumber && (phoneNumber.length === 10 && phoneNumber.match(/^0[1-58-9]/) || phoneNumber.length === 13 && phoneNumber.match(/^0033[1-58-9]/) || phoneNumber.length === 12 && phoneNumber.match(/^\+33[1-58-9]/));
    }

    function showLastSwitch() {
      var lastSwitch = utils._qs('.kam-form__subscription-element')[1];

      if (lastSwitch.classList.contains('kam-form__subscription-element_hidden')) {
        lastSwitch.classList.remove('kam-form__subscription-element_hidden');
      }
    }

    function hideLastSwitch() {
      var lastSwitch = utils._qs('.kam-form__subscription-element')[1];

      if (!lastSwitch.classList.contains('kam-form__subscription-element_hidden')) {
        lastSwitch.classList.add('kam-form__subscription-element_hidden');
      }
    }

    function fieldValidation(input, regexp, min) {
      var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 99;
      var errorMessage = input.parentNode.nextElementSibling;
      input.addEventListener('input', function () {
        if (input.value.match(regexp) && input.value.length >= min && input.value.length <= max || input.value == "") {
          //input.parentElement.classList.remove('kam-input-field_error');
          errorMessage.classList.add('kam-form__error-message_hidden');
        } else {
          //input.parentElement.classList.add('kam-input-field_error');
          errorMessage.classList.remove('kam-form__error-message_hidden');
        }
      });
    }

    function mobileValidation(input) {
      var errorMessage = input.parentNode.nextElementSibling;
      input.addEventListener('input', function () {
        if (isMobilePhoneNumber(input.value)) {
          showLastSwitch();
          errorMessage.classList.add('kam-form__error-message_hidden');
        } else if (isFixedPhoneNumber(input.value) || input.value == "") {
          hideLastSwitch();
          errorMessage.classList.add('kam-form__error-message_hidden');
        } else {
          hideLastSwitch();
          errorMessage.classList.remove('kam-form__error-message_hidden');
        }
      });
    }

    function selectValidation(select) {
      var errorMessage = select.parentNode.nextElementSibling;
      select.addEventListener('change', function () {
        if (this.value == "") {
          errorMessage.classList.remove('kam-form__error-message_hidden');
        } else if (this.value != "" && !errorMessage.classList.contains('kam-form__error-message_hidden')) {
          errorMessage.classList.add('kam-form__error-message_hidden');
        }
      });
    }

    function isTextInputsValid(inputFields) {
      inputFields.forEach(function (input) {
        // const parent = input.parentElement;
        var errorMessage = input.parentNode.nextElementSibling;

        if (!input.value || !errorMessage.classList.contains('kam-form__error-message_hidden')) {
          // parent.classList.add('kam-input-field_error');
          // setTimeout(() => parent.classList.remove('kam-input-field_error'), 500);
          errorMessage.classList.remove('kam-form__error-message_hidden');
        }
      });
    }

    function isSelectInputsValid(selectFields) {
      selectFields.forEach(function (input) {
        var errorMessage = input.parentNode.nextElementSibling;

        if (!input.value || !errorMessage.classList.contains('kam-form__error-message_hidden')) {
          // parent.classList.add('kam-input-field_error');
          // setTimeout(() => parent.classList.remove('kam-input-field_error'), 500);
          errorMessage.classList.remove('kam-form__error-message_hidden');
        }
      });
    }

    function isGeolocationValid() {
      var address = utils._qs('#kam-geolocation');

      var errorMessage = address.parentNode.nextElementSibling;

      if ((!window.sessionStorage.getItem('kam-chosenDealer') || window.sessionStorage.getItem('kam-chosenDealer').toString() != address.value) && errorMessage.classList.contains('kam-form__error-message_hidden')) {
        errorMessage.classList.remove('kam-form__error-message_hidden');
      }
    }

    function isRadioInputsValid(radioInputs) {
      var flag = false;
      radioInputs.forEach(function (item) {
        if (item.checked) {
          flag = true;
        }
      });
      return flag;
    }

    function showErrorMessageForSwitch(radioInputs) {
      var errorMessage = radioInputs[0].parentNode.parentNode.nextElementSibling.nextElementSibling;

      if (errorMessage.classList.contains('kam-form__error-message_hidden')) {
        errorMessage.classList.remove('kam-form__error-message_hidden');
      }
    }

    function radioButtonValidation(option) {
      var errorMessage = option[0].parentNode.parentNode.nextElementSibling.nextElementSibling;
      option.forEach(function (item) {
        item.addEventListener('change', function () {
          if (!errorMessage.classList.contains('kam-form__error-message_hidden')) {
            errorMessage.classList.add('kam-form__error-message_hidden');
          }
        });
      });
    }

    function isArray(arr) {
      return Object.prototype.toString.call(arr) == '[object Array]';
    }

    module.exports = {
      checkValidation: function checkValidation() {
        var model = utils._qs('#kam-model-picker');

        var gender = utils._qs('#kam-gender-picker');

        var address = utils._qs('#kam-geolocation');

        var name = utils._qs('#kam-name');

        var surname = utils._qs('#kam-surname');

        var email = utils._qs('#kam-email');

        var phone = utils._qs('#kam-phonenumber');

        var radioFieldsEmail = [].slice.call(utils._qs('.kam-form__subscription-block [name="kam-email"]'));
        var radioFieldsSms = [].slice.call(utils._qs('.kam-form__subscription-block [name="kam-sms"]'));
        selectValidation(model);
        selectValidation(gender);
        fieldValidation(address, validationFormRegexp.address, 1);
        fieldValidation(name, validationFormRegexp.name, 2);
        fieldValidation(surname, validationFormRegexp.name, 2);
        fieldValidation(email, validationFormRegexp.email, 2);
        mobileValidation(phone);
        radioButtonValidation(radioFieldsEmail);
        radioButtonValidation(radioFieldsSms);
      },
      runClickValidation: function runClickValidation() {
        var inputFields = [].slice.call(utils._qs('.kam-form__content input'));
        var selectFields = [].slice.call(utils._qs('.kam-form__content select'));
        var radioFieldsEmail = [].slice.call(utils._qs('.kam-form__subscription-block [name="kam-email"]'));
        var radioFieldsSms = [].slice.call(utils._qs('.kam-form__subscription-block [name="kam-sms"]'));

        var submitButton = utils._qs('.kam-form__cta');

        submitButton.onclick = function (e) {
          isTextInputsValid(inputFields);
          isSelectInputsValid(selectFields);
          isGeolocationValid();

          if (!isRadioInputsValid(radioFieldsEmail)) {
            showErrorMessageForSwitch(radioFieldsEmail);
          }

          if (!isRadioInputsValid(radioFieldsSms)) {
            showErrorMessageForSwitch(radioFieldsSms);
          }

          var hiddenErrorMessages = utils._qs('.kam-form__error-message_hidden'); //let errorsCount = (isArray(hiddenErrorMessages)) ? [...hiddenErrorMessages].length : 1;


          var errorsCount = isArray(hiddenErrorMessages) ? [].slice.call(utils._qs('.kam-form__error-message_hidden')).length : 1;

          if (errorsCount == 9 || errorsCount == 8 && utils._qs('.kam-form__subscription-element_hidden')) {
            sendData.sendLead();
          }
        };
      }
    };
  }, {
    "./sendData": 6,
    "./utils": 8
  }]
}, {}, [2]);