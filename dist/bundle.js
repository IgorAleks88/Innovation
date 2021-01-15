/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/NEW/NEWgameState.js":
/*!************************************!*\
  !*** ./src/js/NEW/NEWgameState.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var NEWgameState = {
  ageDecks: {
    age1: [],
    age2: [],
    age3: [],
    age4: [],
    age5: [],
    age6: [],
    age7: [],
    age8: [],
    age9: [],
    age10: []
  },
  leadershipDeck: [],
  specialDeck: [],
  players: [],
  currentPlayer: null,
  activePlayer: null,
  player0: {
    name: null,
    id: 0,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    currentDeck: 'age1',
    activeDecks: {
      red: {
        cards: [],
        shift: 'top' //! test

      },
      green: {
        cards: [],
        shift: 'top' //! test

      },
      blue: {
        cards: [],
        shift: 'top' //! test

      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: 'top' //! test

      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: 'top' //! test

      },
      green: {
        cards: [],
        shift: 'top' //! test

      },
      blue: {
        cards: [],
        shift: 'top' //! test

      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player2: {
    name: null,
    id: 2,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null
      },
      green: {
        cards: [],
        shift: null
      },
      blue: {
        cards: [],
        shift: null
      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player3: {
    name: null,
    id: 3,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null
      },
      green: {
        cards: [],
        shift: null
      },
      blue: {
        cards: [],
        shift: null
      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NEWgameState);

/***/ }),

/***/ "./src/js/NEW/NEWinitHotSeatGame.js":
/*!******************************************!*\
  !*** ./src/js/NEW/NEWinitHotSeatGame.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initHotSeatGame
/* harmony export */ });
/* harmony import */ var _initGameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initGameState */ "./src/js/NEW/initGameState.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/js/NEW/gameBoard.js");
/* harmony import */ var _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/playerTable/displayHeader */ "./src/js/display/playerTable/displayHeader.js");



function initHotSeatGame(usersInfo) {
  (0,_initGameState__WEBPACK_IMPORTED_MODULE_0__.default)(usersInfo);
  _gameBoard__WEBPACK_IMPORTED_MODULE_1__.default.display();
  _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_2__.default.initPlayerNames(usersInfo.names);
  _gameBoard__WEBPACK_IMPORTED_MODULE_1__.default.init();
}

/***/ }),

/***/ "./src/js/NEW/displayNewTurnModal.js":
/*!*******************************************!*\
  !*** ./src/js/NEW/displayNewTurnModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ displayModal
/* harmony export */ });
function displayModal(playerName) {
  var modalBg = document.createElement('div');
  modalBg.classList.add('modal');
  modalBg.classList.add('modal--hidden');
  var modalBlock = document.createElement('div');
  modalBlock.classList.add('modal__block');
  var modalText = document.createElement('div');
  modalText.classList.add('modal__text');
  modalText.innerText = "\u0421\u0435\u0439\u0447\u0430\u0441 \u0445\u043E\u0434 \u0438\u0433\u0440\u043E\u043A\u0430 ".concat(playerName);
  var modalBtn = document.createElement('button');
  modalBtn.classList.add('modal__btn');
  modalBtn.innerText = 'Начать ход!';
  modalBtn.addEventListener('click', function () {
    modalBg.style = '';
    modalBg.classList.toggle('modal--hidden');
    setTimeout(function () {
      modalBg.remove();
    }, 500);
  });
  modalBlock.append(modalText, modalBtn);
  modalBg.append(modalBlock);
  document.body.prepend(modalBg);
  setTimeout(function () {
    modalBg.classList.toggle('modal--hidden');
  }, 0);
}

/***/ }),

/***/ "./src/js/NEW/gameBoard.js":
/*!*********************************!*\
  !*** ./src/js/NEW/gameBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _NEWgameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NEWgameState */ "./src/js/NEW/NEWgameState.js");
/* harmony import */ var _getCardObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCardObject */ "./src/js/NEW/getCardObject.js");
/* harmony import */ var _getCardElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCardElement */ "./src/js/NEW/getCardElement.js");
/* harmony import */ var _cards_renderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/renderCard */ "./src/js/cards/renderCard.js");
/* harmony import */ var _updateGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateGameState */ "./src/js/NEW/updateGameState.js");
/* harmony import */ var _displayNewTurnModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayNewTurnModal */ "./src/js/NEW/displayNewTurnModal.js");
/* harmony import */ var _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display/playerTable/displayHeader */ "./src/js/display/playerTable/displayHeader.js");







var gameBoard = {
  display: function display() {
    var _this = this;

    // set info block aside =========================================================
    var nameBlock = document.querySelector('.info-table__player-name');
    nameBlock.innerText = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.name;
    var actionPointsBlock = document.querySelector('.info-table__action-points');
    actionPointsBlock.innerText = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.actionPoints; // remove previous active age decks ================================================

    var cloneCurrentDeck = document.querySelector('#cloneCurrentDeck');
    if (cloneCurrentDeck !== null) cloneCurrentDeck.onclick = '';
    var activeDeck = document.querySelector('.age-deck--active');

    if (activeDeck !== null) {
      activeDeck.classList.remove('age-deck--active');
      activeDeck.onclick = '';
    } // set avaiable age deck in modal ===============================================


    while (_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks["age".concat(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.currentAge)].length === 0) {
      _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.currentAge += 1;
    }

    var avaiableAgeDeck = document.querySelector("#age".concat(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.currentAge));
    avaiableAgeDeck.classList.add('age-deck--active'); // set avaiable age deck in aside ===============================================

    var prevDeckClone = document.querySelector('#cloneCurrentDeck');
    if (prevDeckClone !== null) prevDeckClone.remove(); // clone current active deck

    cloneCurrentDeck = avaiableAgeDeck.cloneNode();
    cloneCurrentDeck.innerText = avaiableAgeDeck.innerText;
    cloneCurrentDeck.id = 'cloneCurrentDeck';
    cloneCurrentDeck.classList.add('age-deck--active');
    cloneCurrentDeck.classList.remove('xyz-in'); // display cloned deck in currentDeck block

    document.querySelector('.current-deck__cards').append(cloneCurrentDeck); // get hand cards of active player ==============================================

    var hand = document.querySelector('.hand__cards');
    hand.innerHTML = '';
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.hand.forEach(function (cardID) {
      var cardObject = _getCardObject__WEBPACK_IMPORTED_MODULE_1__.default.byID(cardID);
      var cardElement = (0,_getCardElement__WEBPACK_IMPORTED_MODULE_2__.default)(cardObject);
      cardElement.onclick = _this.playCard;
      hand.append(cardElement);
    }); // get active cards of active player ============================================

    var stacks = document.querySelectorAll('.active-zone__stack');
    stacks.forEach(function (stackElement) {
      stackElement.innerHTML = '';
      stackElement.classList.add('active-zone__stack--empty');
      Object.keys(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.activeDecks).forEach(function (activeDeckName) {
        if (activeDeckName === stackElement.id) {
          _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer.activeDecks[activeDeckName].cards.forEach(function (card) {
            var cardObj = _getCardObject__WEBPACK_IMPORTED_MODULE_1__.default.byID(card);
            var cardElement = (0,_getCardElement__WEBPACK_IMPORTED_MODULE_2__.default)(cardObj);

            cardElement.onclick = function () {
              //! TODO
              console.log('DOGMA! :)');
            };

            _cards_renderCard__WEBPACK_IMPORTED_MODULE_3__.default.toActive(cardElement, _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default);
            cardElement.classList.remove('xyz-in');
          });
        }
      });
    });
  },
  update: function update() {
    if (_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints === 0) {
      this.displayNextTurnBtn();
    }

    (0,_updateGameState__WEBPACK_IMPORTED_MODULE_4__.default)(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default);
    _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_6__.default.changePlayerStats(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer);
    document.querySelector('.info-table__player-name').innerText = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.name;
    document.querySelector('.info-table__action-points').innerText = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints;
  },
  init: function init() {
    var _this2 = this;

    var cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function (elem) {
      if (_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.hand.indexOf(elem.dataset.innovation) > -1) {
        elem.onclick = _this2.playCard;
      }
    });
    var activeDeckElements = document.querySelectorAll('.age-deck--active');
    activeDeckElements.forEach(function (elem) {
      elem.onclick = _this2.takeCard;
    });
  },
  takeCard: function takeCard(e) {
    var sourceDeck = e.target.id;

    if (sourceDeck === 'cloneCurrentDeck') {
      sourceDeck = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.currentDeck;
    }

    var movingCardInnovation = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks[sourceDeck].pop();
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.hand.push(movingCardInnovation);
    var movingCardObj = _getCardObject__WEBPACK_IMPORTED_MODULE_1__.default.byID(movingCardInnovation);
    var movingCardElement = (0,_getCardElement__WEBPACK_IMPORTED_MODULE_2__.default)(movingCardObj);
    movingCardElement.onclick = gameBoard.playCard;
    _cards_renderCard__WEBPACK_IMPORTED_MODULE_3__.default.toHand(movingCardElement, _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default);
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints -= 1;
    gameBoard.update();
  },
  playCard: function playCard(e) {
    var playingCardInnovation = e.target.closest('.card').dataset.innovation;
    var playingCardElement = e.target.closest('.card');
    playingCardElement.onclick = null;
    var playIndex = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.hand.indexOf(playingCardInnovation);
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.hand.splice(playIndex, 1);
    var playingCardObj = _getCardObject__WEBPACK_IMPORTED_MODULE_1__.default.byID(playingCardInnovation);
    var targetDeckArray = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.activeDecks[playingCardObj.color].cards;
    targetDeckArray.push(playingCardInnovation);

    playingCardElement.onclick = function () {
      //! TODO
      console.log('DOGMA! :)');
    };

    _cards_renderCard__WEBPACK_IMPORTED_MODULE_3__.default.toActive(playingCardElement, _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default);
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints -= 1;
    gameBoard.update();
  },
  displayNextTurnBtn: function displayNextTurnBtn() {
    var nextTurnBtn = document.createElement('div');
    nextTurnBtn.classList.add('info-table__next-turn-btn');
    nextTurnBtn.innerText = 'Закончить ход';
    nextTurnBtn.addEventListener('click', function () {
      for (var i = 0; i < _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players.length; i += 1) {
        if (_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer === _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players[i]) {
          i += 1;
          if (i === _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players.length) i = 0;
          _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players[i];
          _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer;
          _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints = 2;
          break;
        }
      }

      (0,_displayNewTurnModal__WEBPACK_IMPORTED_MODULE_5__.default)(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.name);
      setTimeout(function () {
        gameBoard.display();
        gameBoard.init();
        var excistedNextTurnBtn = document.querySelector('.info-table__next-turn-btn');
        excistedNextTurnBtn.remove();
      }, 500);
    });
    var infoTable = document.querySelector('.info-table');
    this.disableEvents();
    infoTable.append(nextTurnBtn);
  },
  disableEvents: function disableEvents() {
    var cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach(function (card) {
      card.onclick = '';
      card.style.cursor = 'default';
      card.style.transform = 'none';
    });
    var cardDogms = Array.from(document.querySelectorAll('.card__dogma'));
    cardDogms.forEach(function (cardDogma) {
      cardDogma.onclick = '';
      cardDogma.style.cursor = 'default';
      cardDogma.style.transform = 'none';
    });
    var decks = Array.from(document.querySelectorAll('.age-deck'));
    decks.forEach(function (deck) {
      deck.onclick = '';
      deck.classList.remove('age-deck--active');
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/js/NEW/getCardElement.js":
/*!**************************************!*\
  !*** ./src/js/NEW/getCardElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getCardElement
/* harmony export */ });
function getCardElement(cardObj) {
  // get card header
  function getCardHeader(card) {
    var divHeader = document.createElement('div');
    divHeader.classList.add('card__card-header', "card__color--".concat(card.color));
    var posTopLeft = document.createElement('div');
    posTopLeft.classList.add('card__topLeft');
    var title = document.createElement('div');
    title.classList.add('card-header__title');
    title.textContent = card.innovation;
    divHeader.appendChild(posTopLeft);
    divHeader.appendChild(title);
    return divHeader;
  } // get card body


  function getCardMain(card) {
    var divMain = document.createElement('div');
    divMain.classList.add('card__card-main', "card__color--".concat(card.color, "-transparent"));
    card.dogma.forEach(function (item) {
      var divDogma = document.createElement('div');
      divDogma.classList.add('card__dogma');
      divDogma.setAttribute('data-type', item.type);
      var icon = document.createElement('i');
      icon.classList.add(item.icon[0], item.icon[1], 'card__icon', "card__icon-color--".concat(item.color));
      divDogma.appendChild(icon);
      var dogma = document.createElement('span');
      dogma.classList.add('dogma__effect');
      dogma.innerHTML = item.effect;
      divDogma.appendChild(dogma);
      divMain.appendChild(divDogma);
    });
    return divMain;
  } // get card footer


  function getCardFooter() {
    var divFooter = document.createElement('div');
    divFooter.classList.add('card__card-footer');
    var posBottomLeft = document.createElement('div');
    posBottomLeft.classList.add('card__bottomLeft');
    divFooter.appendChild(posBottomLeft);
    var posBottomCenter = document.createElement('div');
    posBottomCenter.classList.add('card__bottomCenter');
    divFooter.appendChild(posBottomCenter);
    var posBottomRight = document.createElement('div');
    posBottomRight.classList.add('card__bottomRight');
    divFooter.appendChild(posBottomRight);
    return divFooter;
  } // place age number and resourses by card position


  function setObjByPosition(divCard, card) {
    var agePos = divCard.querySelector(".card__".concat(card.agePosition));
    agePos.classList.add("card__color--".concat(card.color), 'card__age--border');
    agePos.textContent = card.age;
    card.resourses.forEach(function (res) {
      var pos = divCard.querySelector(".card__".concat(res.position));
      pos.classList.add("".concat(res.type[0]), "".concat(res.type[1]), "card__icon-color--".concat(res.color), "card__icon-border--".concat(card.color));
    });
  }

  var divCard = document.createElement('div');
  divCard.classList.add('card');
  divCard.style.background = "url(\"".concat(cardObj.cardImg, "\")");
  divCard.dataset.innovation = cardObj.innovation;
  divCard.appendChild(getCardHeader(cardObj));
  divCard.appendChild(getCardMain(cardObj));
  divCard.appendChild(getCardFooter());
  setObjByPosition(divCard, cardObj, cardObj.age, cardObj.color);
  return divCard;
}

/***/ }),

/***/ "./src/js/NEW/getCardObject.js":
/*!*************************************!*\
  !*** ./src/js/NEW/getCardObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _cards_cards_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/cards.json */ "./src/js/cards/cards.json");

var getCardObject = {
  all: function all() {
    var resultArr = [];
    _cards_cards_json__WEBPACK_IMPORTED_MODULE_0__.forEach(function (setOfCards) {
      setOfCards.cards.forEach(function (card) {
        var cardObject = {};
        Object.assign(cardObject, setOfCards, card);
        delete cardObject.cards; // remove duplicated field

        resultArr.push(cardObject);
      });
    });
    return resultArr;
  },
  byID: function byID(id) {
    var cardObject = {};
    _cards_cards_json__WEBPACK_IMPORTED_MODULE_0__.forEach(function (setOfCards) {
      setOfCards.cards.forEach(function (card) {
        if (card.innovation === id) {
          Object.assign(cardObject, setOfCards, card);
          delete cardObject.cards; // remove duplicated field
        }
      });
    });
    return cardObject;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCardObject);

/***/ }),

/***/ "./src/js/NEW/initGameState.js":
/*!*************************************!*\
  !*** ./src/js/NEW/initGameState.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initGameState
/* harmony export */ });
/* harmony import */ var _NEWgameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NEWgameState */ "./src/js/NEW/NEWgameState.js");
/* harmony import */ var _getCardObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCardObject */ "./src/js/NEW/getCardObject.js");
/* harmony import */ var _shuffleArr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shuffleArr */ "./src/js/NEW/shuffleArr.js");



function initGameState(usersInfo) {
  // fill age decks
  var arrOfCardObjects = _getCardObject__WEBPACK_IMPORTED_MODULE_1__.default.all();
  arrOfCardObjects.forEach(function (cardObj) {
    switch (+cardObj.age) {
      case 1:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age1.push(cardObj.innovation);
        break;

      case 2:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age2.push(cardObj.innovation);
        break;

      case 3:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age3.push(cardObj.innovation);
        break;

      case 4:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age4.push(cardObj.innovation);
        break;

      case 5:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age5.push(cardObj.innovation);
        break;

      case 6:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age6.push(cardObj.innovation);
        break;

      case 7:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age7.push(cardObj.innovation);
        break;

      case 8:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age8.push(cardObj.innovation);
        break;

      case 9:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age9.push(cardObj.innovation);
        break;

      case 10:
        _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks.age10.push(cardObj.innovation);
        break;

      default:
        throw new Error("Wrong number on age field in ".concat(cardObj));
    }
  }); // shuffle each age deck & fill leadership deck

  Object.values(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks).forEach(function (ageDeck, i) {
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.ageDecks["age".concat(i + 1)] = (0,_shuffleArr__WEBPACK_IMPORTED_MODULE_2__.default)(ageDeck);
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.leadershipDeck.push(ageDeck.pop());
  }); // set up players fields

  for (var i = 0; i < usersInfo.players; i += 1) {
    var player = "player".concat(i);
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default[player].name = usersInfo.names[i];
    _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players.push(_NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default[player]);
  }

  _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players[0];
  _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.activePlayer = _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.players[0];
  _NEWgameState__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer.actionPoints = 2;
}

/***/ }),

/***/ "./src/js/NEW/shuffleArr.js":
/*!**********************************!*\
  !*** ./src/js/NEW/shuffleArr.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ shuffleArr
/* harmony export */ });
function shuffleArr(array) {
  for (var i = array.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }

  return array;
}

/***/ }),

/***/ "./src/js/NEW/updateGameState.js":
/*!***************************************!*\
  !*** ./src/js/NEW/updateGameState.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ updateGameState
/* harmony export */ });
/* harmony import */ var _getCardObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCardObject */ "./src/js/NEW/getCardObject.js");

function updateGameState(gameState) {
  // update resources for each player
  gameState.players.forEach(function (player) {
    player.tree = 0;
    player.tower = 0;
    player.crown = 0;
    player.bulb = 0;
    player.factory = 0;
    player.clock = 0;
    Object.keys(player.activeDecks).forEach(function (stack) {
      var currentStack = player.activeDecks[stack];

      if (currentStack.cards.length > 0) {
        var highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
        var highestCard = _getCardObject__WEBPACK_IMPORTED_MODULE_0__.default.byID(highestCardInnovation);
        highestCard.resourses.forEach(function (e) {
          player[e.resourceName] += 1;
        });
      }
    });
  }); // update currentAge for each player

  gameState.players.forEach(function (player) {
    player.currentAge = 1;
    Object.keys(player.activeDecks).forEach(function (stack) {
      var currentStack = player.activeDecks[stack];

      if (currentStack.cards.length > 0) {
        var highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
        var highestCard = _getCardObject__WEBPACK_IMPORTED_MODULE_0__.default.byID(highestCardInnovation);

        if (highestCard.age > player.currentAge) {
          player.currentAge = highestCard.age;
        }
      }
    });
  }); // update currentDeck for each player

  gameState.players.forEach(function (player) {
    for (var i = player.currentAge; i < 11; i += 1) {
      var deck = gameState.ageDecks["age".concat(i)];

      if (deck.length > 0) {
        player.currentDeck = "age".concat(i);
        break;
      }
    }
  });
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _animxyz_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @animxyz/core */ "./node_modules/@animxyz/core/dist/animxyz.css");
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Intro */ "./src/js/components/Intro.js");
/* harmony import */ var _display_playerTable_displayPlayerTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/playerTable/displayPlayerTable */ "./src/js/display/playerTable/displayPlayerTable.js");
/* harmony import */ var _utility_setHandControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/setHandControls */ "./src/js/utility/setHandControls.js");
/* harmony import */ var _utility_setAsideControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility/setAsideControls */ "./src/js/utility/setAsideControls.js");
// import styles

 // import js modules




 // display intro & menu

_components_Intro__WEBPACK_IMPORTED_MODULE_2__.default.init(); // display game UI

document.body.prepend(_display_playerTable_displayPlayerTable__WEBPACK_IMPORTED_MODULE_3__.default.init()); // add event listeners to hand controls

(0,_utility_setHandControls__WEBPACK_IMPORTED_MODULE_4__.default)(); // add event listeners and animations to aside buttons

(0,_utility_setAsideControls__WEBPACK_IMPORTED_MODULE_5__.default)();

/***/ }),

/***/ "./src/js/cards/getCard.js":
/*!*********************************!*\
  !*** ./src/js/cards/getCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// take card object and return builded card DOM element
var getCard = {
  // get playing card
  frontSide: function frontSide(cardObj) {
    var divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.style.background = "url(\"".concat(cardObj.cardImg, "\")");
    divCard.appendChild(this.getCardHeader(cardObj));
    divCard.appendChild(this.getCardMain(cardObj));
    divCard.appendChild(this.getCardFooter());
    this.setObjByPosition(divCard, cardObj, cardObj.age, cardObj.color);
    return divCard;
  },
  // get card header
  getCardHeader: function getCardHeader(card) {
    var divHeader = document.createElement('div');
    divHeader.classList.add('card__card-header', "card__color--".concat(card.color));
    var posTopLeft = document.createElement('div');
    posTopLeft.classList.add('card__topLeft');
    var title = document.createElement('div');
    title.classList.add('card-header__title');
    title.textContent = card.innovation;
    divHeader.appendChild(posTopLeft);
    divHeader.appendChild(title);
    return divHeader;
  },
  // get card body
  getCardMain: function getCardMain(card) {
    var divMain = document.createElement('div');
    divMain.classList.add('card__card-main', "card__color--".concat(card.color, "-transparent"));
    card.dogma.forEach(function (item) {
      var divDogma = document.createElement('div');
      divDogma.classList.add('card__dogma');
      divDogma.setAttribute('data-type', item.type);
      var icon = document.createElement('i');
      icon.classList.add(item.icon[0], item.icon[1], 'card__icon', "card__icon-color--".concat(item.color));
      divDogma.appendChild(icon);
      var dogma = document.createElement('span');
      dogma.classList.add('dogma__effect');
      dogma.innerHTML = item.effect;
      divDogma.appendChild(dogma);
      divMain.appendChild(divDogma);
    });
    return divMain;
  },
  // get card footer
  getCardFooter: function getCardFooter() {
    var divFooter = document.createElement('div');
    divFooter.classList.add('card__card-footer');
    var posBottomLeft = document.createElement('div');
    posBottomLeft.classList.add('card__bottomLeft');
    divFooter.appendChild(posBottomLeft);
    var posBottomCenter = document.createElement('div');
    posBottomCenter.classList.add('card__bottomCenter');
    divFooter.appendChild(posBottomCenter);
    var posBottomRight = document.createElement('div');
    posBottomRight.classList.add('card__bottomRight');
    divFooter.appendChild(posBottomRight);
    return divFooter;
  },
  // place age number and resourses by card position
  setObjByPosition: function setObjByPosition(divCard, card) {
    var agePos = divCard.querySelector(".card__".concat(card.agePosition));
    agePos.classList.add("card__color--".concat(card.color), 'card__age--border');
    agePos.textContent = card.age;
    card.resourses.forEach(function (res) {
      var pos = divCard.querySelector(".card__".concat(res.position));
      pos.classList.add("".concat(res.type[0]), "".concat(res.type[1]), "card__icon-color--".concat(res.color), "card__icon-border--".concat(card.color));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCard);

/***/ }),

/***/ "./src/js/cards/parseCards.js":
/*!************************************!*\
  !*** ./src/js/cards/parseCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ parseCards
/* harmony export */ });
// get JSON and return array of card objects
function parseCards(cardsJSON) {
  var resultArr = [];
  cardsJSON.forEach(function (setOfCards) {
    setOfCards.cards.forEach(function (card) {
      var cardObject = {};
      Object.assign(cardObject, setOfCards, card);
      delete cardObject.cards; // remove duplicated field

      resultArr.push(cardObject);
    });
  });
  return resultArr;
}

/***/ }),

/***/ "./src/js/cards/renderCard.js":
/*!************************************!*\
  !*** ./src/js/cards/renderCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function getRenderCard() {
  var hand = null;
  var activeStacks = null;
  var renderCard = {
    initObject: function initObject() {
      hand = document.querySelector('.hand__cards');
      activeStacks = document.querySelectorAll('.active-zone__stack');
    },
    toHand: function toHand(cardElement) {
      if (hand === null || activeStacks === null) this.initObject();
      cardElement.setAttribute('xyz', 'fade right-3 flip-right rotate-left');
      cardElement.classList.add('xyz-in');
      setTimeout(function () {
        cardElement.classList.remove('xyz-in');
      }, 450);
      hand.append(cardElement);
    },
    toActive: function toActive(cardElement, gameState) {
      if (hand === null || activeStacks === null) this.initObject(); // get properties of target stack to calcualte later

      var targetStack = {};
      activeStacks.forEach(function (stack) {
        if (cardElement.children[0].classList.contains("card__color--".concat(stack.id))) {
          stack.classList.remove('active-zone__stack--empty');
          targetStack.dom = stack;
          stack.style.width = null;
          targetStack.width = stack.offsetWidth;
          targetStack.height = stack.offsetHeight;
          targetStack.shift = gameState.activePlayer.activeDecks[targetStack.dom.id].shift;
          targetStack.length = gameState.activePlayer.activeDecks[targetStack.dom.id].cards.length;
        }
      });
      cardElement.style.position = 'absolute';
      cardElement.setAttribute('xyz', 'fade right-3 flip-right rotate-left');
      cardElement.classList.add('xyz-in');
      var cardHeight = cardElement.offsetHeight;
      var cardShiftValue = 40;

      switch (targetStack.shift) {
        case 'top':
          while (targetStack.height < cardHeight + targetStack.length * cardShiftValue && cardShiftValue !== 10) {
            cardShiftValue -= 10;
          }

          Array.from(targetStack.dom.children).forEach(function (card, i) {
            card.style.bottom = "".concat(i * cardShiftValue, "px");
          });
          if (targetStack.length !== 1) cardElement.style.bottom = "".concat((targetStack.length - 1) * cardShiftValue, "px");
          break;

        case 'left':
          while (targetStack.dom.parentElement.offsetWidth / 2.5 < targetStack.width + targetStack.length * cardShiftValue && cardShiftValue !== 10) {
            cardShiftValue -= 10;
          }

          Array.from(targetStack.dom.children).forEach(function (card, i) {
            card.style.right = "".concat(i * cardShiftValue, "px");
          });
          cardElement.style.right = "".concat(targetStack.length * cardShiftValue, "px");

          if (targetStack.length !== 0) {
            targetStack.dom.style.width = "".concat(targetStack.width + cardShiftValue * targetStack.length, "px");
          }

          break;

        case 'right':
          while (targetStack.dom.parentElement.offsetWidth / 2.5 < targetStack.width + targetStack.length * cardShiftValue && cardShiftValue !== 10) {
            cardShiftValue -= 10;
          }

          Array.from(targetStack.dom.children).forEach(function (card, i) {
            card.style.left = "".concat(i * cardShiftValue, "px");
          });
          cardElement.style.left = "".concat(targetStack.length * cardShiftValue, "px");

          if (targetStack.length !== 0) {
            targetStack.dom.style.width = "".concat(targetStack.width + cardShiftValue * targetStack.length, "px");
          }

          break;

        default:
          break;
      }

      targetStack.dom.append(cardElement);
      targetStack.dom.scrollIntoView();
    }
  };
  return renderCard;
}

var renderCard = getRenderCard();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCard);

/***/ }),

/***/ "./src/js/components/Game.js":
/*!***********************************!*\
  !*** ./src/js/components/Game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Game
/* harmony export */ });
/* harmony import */ var _cards_renderCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/renderCard */ "./src/js/cards/renderCard.js");
/* harmony import */ var _cards_getCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/getCard */ "./src/js/cards/getCard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* all game action happens here
* take gameUI obj which contains all dom elements
* take gameField obj which contains all cards avaiable for all players (ages/leadership/special)
* take players objects which contains all cards avaible for players (hand/table/lead/influence)
* count avaible actions per turn, reduce on each action
* when avaible ections ends - turn passed to next player
*/
// import header from '../display/playerTable/displayHeader';
// import displayNewTurnModal from '../display/displayNewTurnModal';
// import displayNextTurnBtn from '../NEW/displayNextTurnBtn';
// import gameState from './gameState';
// import getCardObject from '../OLD/getCardObject';
// import getCardElement from '../utility/getCardElement';
//! ! TEST



var Game = /*#__PURE__*/function () {
  function Game(gameUI, gameField, players, arrOfCards) {
    var _this = this;

    _classCallCheck(this, Game);

    // store passed objects
    this.players = players;
    this.gameField = gameField;
    this.gameUI = gameUI; // initialize game field in players objects

    this.players.forEach(function (player) {
      player.game = _this;
    }); // set default values

    this.currentPlayer = null;
    this.currentDeck = {
      domElement: gameUI.ageDecks.age1,
      cardsArray: gameField.ageDecks.age1
    };
    this.turnPoints = 0;
    this.arrOfCards = arrOfCards; // this.initGameState(players, this.arrOfCards);

    header.initPlayerNames(players); // test

    /* this.testCardObj = getCardObject('колесо', arrOfCards);
    console.log(this.testCardObj);
    this.testCardDOM = getCardElement(this.testCardObj);
    console.log(this.testCardDOM); */
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var cardElements = document.querySelectorAll('.card');
      cardElements.forEach(function (elem) {
        if (gameState.currentPlayer.hand.indexOf(elem.dataset.innovation) > -1) {
          elem.onclick = _this2.playCard;
        }
      });
      var activeDeckElements = document.querySelectorAll('.age-deck--active');
      activeDeckElements.forEach(function (elem) {
        elem.onclick = _this2.takeCard;
      });
    }
  }, {
    key: "initGameState",
    value: function initGameState(players, arrOfCards) {
      arrOfCards.forEach(function (e) {
        switch (+e.age) {
          case 1:
            gameState.ageDecks.age1.push(e.innovation);
            break;

          case 2:
            gameState.ageDecks.age2.push(e.innovation);
            break;

          case 3:
            gameState.ageDecks.age3.push(e.innovation);
            break;

          case 4:
            gameState.ageDecks.age4.push(e.innovation);
            break;

          case 5:
            gameState.ageDecks.age5.push(e.innovation);
            break;

          case 6:
            gameState.ageDecks.age6.push(e.innovation);
            break;

          case 7:
            gameState.ageDecks.age7.push(e.innovation);
            break;

          case 8:
            gameState.ageDecks.age8.push(e.innovation);
            break;

          case 9:
            gameState.ageDecks.age9.push(e.innovation);
            break;

          case 10:
            gameState.ageDecks.age10.push(e.innovation);
            break;

          default:
            throw new Error("Wrong number on age field in ".concat(e));
        }
      });

      for (var i = 0; i < players.length; i += 1) {
        var player = "player".concat(i);
        gameState[player].name = players[i].name;
        gameState.players.push(gameState[player]);
      }

      gameState.currentPlayer = gameState.players[0];
      gameState.currentPlayer.actionPoints = 2;
      gameState.activePlayer = gameState.players[0];
    }
  }, {
    key: "newTurn",
    value: function newTurn() {
      var _this3 = this;

      this.setCurrentPlayer();
      displayNewTurnModal(this.currentPlayer.name);
      this.turnPoints = 100; // timeout to display modal

      setTimeout(function () {
        _this3.removeActiveDeck();

        _this3.setActiveDeck(_this3.currentPlayer);

        _this3.currentPlayer.renderHand();

        _this3.currentPlayer.renderActiveZone();

        _this3.updateInfoTable();
      }, 450);
    } // use this after each action

  }, {
    key: "actionDone",
    value: function actionDone() {
      this.turnPoints -= 1;
      this.updateInfoTable();
      this.removeActiveDeck();

      if (this.turnPoints > 0) {
        this.setActiveDeck(this.currentPlayer);
      } else {
        this.disableHandEvents();
        displayNextTurnBtn(this.newTurn.bind(this));
      }
    } // set current players depends on previous player

  }, {
    key: "setCurrentPlayer",
    value: function setCurrentPlayer() {
      if (this.currentPlayer === null) {
        this.currentPlayer = this.players[0];
      } else {
        for (var i = 0; i < this.players.length; i += 1) {
          if (this.currentPlayer === this.players[i]) {
            i += 1;
            if (i === this.players.length) i = 0;
            this.currentPlayer = this.players[i];
            break;
          }
        }
      }
    } // set active deck for current player

  }, {
    key: "setActiveDeck",
    value: function setActiveDeck(currentPlayer) {
      var _this4 = this;

      Object.keys(this.gameField.ageDecks).forEach(function (ageDeckKey) {
        if (ageDeckKey === "age".concat(currentPlayer.currentAge)) {
          // store active deck dom element
          _this4.currentDeck.domElement = _this4.gameUI.ageDecks["age".concat(currentPlayer.currentAge)]; // store active deck cards array

          _this4.currentDeck.cardsArray = _this4.gameField.ageDecks[ageDeckKey]; //! Change current players currentAge if needed deck empty to go for the next deck
          //! Need recalcualte current age after each action, done by players method setCurrentAge

          if (_this4.currentDeck.cardsArray.length === 0) {
            _this4.currentPlayer.currentAge += 1;
          }
        }
      }); // set style and event listener of active deck when all calculations finished

      this.currentDeck.domElement.classList.add('age-deck--active'); //! USED onclick because got bug with AddEvenListener - cant remove listener

      this.currentDeck.domElement.onclick = this.takeCard.bind(this); // update current active deck displayed in aside

      this.updateCurrentDeckBlock();
    } // remove active deck class and eventlistener
    //! should use before each setActiveDeck method

  }, {
    key: "removeActiveDeck",
    value: function removeActiveDeck() {
      var cloneCurrentDeck = document.querySelector('#cloneCurrentDeck');
      if (cloneCurrentDeck !== null) cloneCurrentDeck.onclick = '';
      this.currentDeck.domElement.classList.remove('age-deck--active');
      this.currentDeck.domElement.onclick = '';
    }
  }, {
    key: "disableHandEvents",
    value: function disableHandEvents() {
      var cards = Array.from(document.querySelectorAll('.card'));
      cards.forEach(function (card) {
        card.onclick = '';
      });
    } // get card and render it in hand

  }, {
    key: "takeCard",
    value: function takeCard(e) {
      /* const cardObject = this.currentDeck.cardsArray.pop();
      this.currentPlayer.hand.push(cardObject);
        const cardElement = getCard.frontSide(cardObject);
        cardElement.onclick = () => { this.currentPlayer.playCard(cardObject, cardElement); }; //! TEMP
        renderCard.toHand(cardElement); */
      var sourceDeck = e.target.id;

      if (sourceDeck === 'cloneCurrentDeck') {
        sourceDeck = gameState.currentPlayer.currentDeck;
      }

      var movingCardInnovation = gameState.ageDecks[sourceDeck].pop();
      gameState.currentPlayer.hand.push(movingCardInnovation);
      gameState.currentPlayer.actionPoints -= 1;
      var movingCardObj = getCardObject(movingCardInnovation, this.arrOfCards);
      var movingCardElement = getCardElement(movingCardObj);
      movingCardElement.onclick = this.playCard.bind(this);
      _cards_renderCard__WEBPACK_IMPORTED_MODULE_0__.default.toHand(movingCardElement); // gameState.currentPlayer.setCurrentAge();

      this.updateGameState();
      header.changePlayerStats(gameState.currentPlayer);
      this.actionDone();
    }
  }, {
    key: "playCard",
    value: function playCard(e) {
      var playingCardInnovation = e.target.closest('.card').dataset.innovation;
      var playingCardElement = e.target.closest('.card');
      playingCardElement.onclick = null;
      var playIndex = gameState.currentPlayer.hand.indexOf(playingCardInnovation);
      gameState.currentPlayer.hand.splice(playIndex, 1);
      var playingCardObj = getCardObject(playingCardInnovation, this.arrOfCards);
      var targetDeckArray = gameState.currentPlayer.activeDecks[playingCardObj.color].cards;
      _cards_renderCard__WEBPACK_IMPORTED_MODULE_0__.default.toActive(playingCardElement); //! before targetDeckArray.push(playingCardInnovation);

      targetDeckArray.push(playingCardInnovation);
      gameState.currentPlayer.actionPoints -= 1;
      this.updateGameState();
      header.changePlayerStats(gameState.currentPlayer);
    } // update info table in aside, use after each action done in newTurn method

  }, {
    key: "updateInfoTable",
    value: function updateInfoTable() {
      this.gameUI.infoTable.name.innerText = this.currentPlayer.name;
      this.gameUI.infoTable.actionPoints.innerText = this.turnPoints;
    } // update current active deck displayed in aside, use after each time when setActiveDeck run

  }, {
    key: "updateCurrentDeckBlock",
    value: function updateCurrentDeckBlock() {
      // remove previous active deck if exists
      var prevDeckClone = document.querySelector('#cloneCurrentDeck');
      if (prevDeckClone !== null) prevDeckClone.remove(); // clone current active deck

      var cloneCurrentDeck = this.currentDeck.domElement.cloneNode();
      cloneCurrentDeck.innerText = this.currentDeck.domElement.innerText;
      cloneCurrentDeck.id = 'cloneCurrentDeck';
      cloneCurrentDeck.onclick = this.takeCard.bind(this); // remove animation on each update of aside current deck

      cloneCurrentDeck.classList.remove('xyz-in'); // display cloned deck in currentDeck block

      this.gameUI.currentDeck.append(cloneCurrentDeck);
    }
  }, {
    key: "updateGameState",
    value: function updateGameState() {
      var _this5 = this;

      // update resources for each player
      gameState.players.forEach(function (player) {
        player.tree = 0;
        player.tower = 0;
        player.crown = 0;
        player.bulb = 0;
        player.factory = 0;
        player.clock = 0;
        Object.keys(player.activeDecks).forEach(function (stack) {
          var currentStack = player.activeDecks[stack];

          if (currentStack.cards.length > 0) {
            var highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
            var highestCard = getCardObject(highestCardInnovation, _this5.arrOfCards);
            highestCard.resourses.forEach(function (e) {
              player[e.resourceName] += 1;
            });
          }
        });
      }); // update currentAge for each player

      gameState.players.forEach(function (player) {
        player.currentAge = 1;
        Object.keys(player.activeDecks).forEach(function (stack) {
          var currentStack = player.activeDecks[stack];

          if (currentStack.cards.length > 0) {
            var highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
            var highestCard = getCardObject(highestCardInnovation, _this5.arrOfCards);

            if (highestCard.age > player.currentAge) {
              player.currentAge = highestCard.age;
            }
          }
        });
      }); // update currentDeck for each player

      gameState.players.forEach(function (player) {
        for (var i = player.currentAge; i < 11; i += 1) {
          var deck = gameState.ageDecks["age".concat(i)];

          if (deck.length > 0) {
            player.currentDeck = "age".concat(i);
            break;
          }
        }
      });
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/js/components/GameField.js":
/*!****************************************!*\
  !*** ./src/js/components/GameField.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameField
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* take cards objects and sort them to separate decks
* store all cards avaible for all players (ages/leadership/special)
* store cards as objects
* this object passed as argument to Game constructor
*/
var GameField = /*#__PURE__*/function () {
  function GameField(arrOfCardObjects) {
    _classCallCheck(this, GameField);

    // create empty decks for each age
    this.ageDecks = {
      age1: [],
      age2: [],
      age3: [],
      age4: [],
      age5: [],
      age6: [],
      age7: [],
      age8: [],
      age9: [],
      age10: []
    }; // TODO leadership later
    // create empty leadership deck

    this.leadershipDeck = []; // TODO special deck later
    // create empty special deck

    this.specialDeck = []; // fill age decks with card objects

    this.setDeckArrays(arrOfCardObjects);
  } // TODO add shuffle later
  // fill deck arays depends on card age field


  _createClass(GameField, [{
    key: "setDeckArrays",
    value: function setDeckArrays(cardsObj) {
      var _this = this;

      cardsObj.forEach(function (e) {
        switch (+e.age) {
          case 1:
            _this.ageDecks.age1.push(e);

            break;

          case 2:
            _this.ageDecks.age2.push(e);

            break;

          case 3:
            _this.ageDecks.age3.push(e);

            break;

          case 4:
            _this.ageDecks.age4.push(e);

            break;

          case 5:
            _this.ageDecks.age5.push(e);

            break;

          case 6:
            _this.ageDecks.age6.push(e);

            break;

          case 7:
            _this.ageDecks.age7.push(e);

            break;

          case 8:
            _this.ageDecks.age8.push(e);

            break;

          case 9:
            _this.ageDecks.age9.push(e);

            break;

          case 10:
            _this.ageDecks.age10.push(e);

            break;

          default:
            throw new Error("Wrong number on age field in ".concat(e));
        }
      });
    }
  }]);

  return GameField;
}();



/***/ }),

/***/ "./src/js/components/GameUI.js":
/*!*************************************!*\
  !*** ./src/js/components/GameUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameUI
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* store all game UI dom elements
* this obj passed as argument to Game constructor
*/
var GameUI = /*#__PURE__*/function () {
  function GameUI() {
    _classCallCheck(this, GameUI);

    this.ageDecks = {};
    this.getAgeDecks();
    this.activeStacks = {};
    this.getActiveStacks();
    this.infoTable = {};
    this.getInfoTable();
    this.currentDeck = document.querySelector('.current-deck__cards');
    this.hand = document.querySelector('.hand__cards');
  }

  _createClass(GameUI, [{
    key: "getAgeDecks",
    value: function getAgeDecks() {
      var _this = this;

      var ageDecksElements = Array.from(document.getElementsByClassName('age-deck'));
      ageDecksElements.forEach(function (ageDeck, i) {
        _this.ageDecks["age".concat(i + 1)] = ageDecksElements[i];
      });
    }
  }, {
    key: "getActiveStacks",
    value: function getActiveStacks() {
      var _this2 = this;

      var activeStacksElements = Array.from(document.getElementsByClassName('active-zone__stack'));
      activeStacksElements.forEach(function (activeStack) {
        _this2.activeStacks[activeStack.id] = activeStack;
      });
    }
  }, {
    key: "getInfoTable",
    value: function getInfoTable() {
      var currentPlayerNameBlock = document.querySelector('.info-table__player-name');
      this.infoTable.name = currentPlayerNameBlock;
      var currentPlayerActionPoints = document.querySelector('.info-table__action-points');
      this.infoTable.actionPoints = currentPlayerActionPoints;
    }
  }]);

  return GameUI;
}();



/***/ }),

/***/ "./src/js/components/Intro.js":
/*!************************************!*\
  !*** ./src/js/components/Intro.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainMenu */ "./src/js/components/mainMenu.js");

var intro = {
  init: function init() {
    var divIntro = document.createElement('div');
    divIntro.classList.add('intro');
    var introContainer = document.createElement('div');
    introContainer.classList.add('intro__container');
    var introTop = document.createElement('div');
    introTop.classList.add('intro__top'); // svg title letters - I n n o v a t i o n

    var introCenter = document.createElement('div');
    introCenter.classList.add('intro__center');
    introCenter.innerHTML = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"500px\" height=\"120px\" viewBox=\"0 0 500 120\" enable-background=\"new 0 0 500 120\" xml:space=\"preserve\">\n<path class=\"letter-1\" d=\"M27.346,80.317c3.604,1.819,7.755,0.485,7.755,2.67c0,0.728-0.656,1.334-2.075,1.334c-0.983,0-6.117-0.606-15.292-0.606\nS3.536,84.321,2.553,84.321c-1.42,0-2.184-0.606-2.184-1.334c0-2.185,4.259-0.851,7.863-2.67c3.386-1.698,3.932-4.49,3.932-9.829\nv-54.61c0-5.218-0.546-8.01-3.604-9.587C5.721,4.835,0.369,5.685,0.369,3.985c0-0.728,1.857-1.213,3.167-1.213\nc1.202,0,5.898,0.485,14.199,0.485c8.628,0,13.544-0.485,14.417-0.485c1.201,0,2.949,0.364,2.949,1.092\nc0,1.457-3.604,0.971-7.208,2.063s-4.478,4.125-4.478,9.951v54.61C23.415,75.949,24.07,78.739,27.346,80.317z\"/>\n<path class=\"letter-2\" d=\"M49.627,46.458c0-4.611-0.437-6.976-2.621-8.276c-2.075-1.183-5.242-0.354-5.242-1.892c0-1.064,1.638-1.3,4.26-1.892\nc5.789-1.3,9.065-3.191,10.157-3.191c2.075,0,1.856,3.31,2.512,11.585c4.26-7.447,10.157-11.231,18.021-11.231\nc10.375,0,16.165,5.674,16.165,15.724v27.546c0,3.901,0.109,5.439,2.622,6.74c2.839,1.419,5.243,0.709,5.243,2.6\nc0,0.592-0.546,1.064-1.639,1.064c-1.419,0-5.133-0.709-11.031-0.709c-5.898,0-9.502,0.709-10.922,0.709\nc-1.092,0-1.748-0.473-1.748-1.3c0-1.655,2.512-1.064,5.243-2.364c2.512-1.183,2.622-2.839,2.622-6.74V47.994\nc0-8.394-3.386-12.532-10.267-12.532c-7.427,0-13.762,7.094-13.762,17.024v22.345c0,3.901,0.109,5.439,2.621,6.74\nc2.84,1.419,5.243,0.709,5.243,2.6c0,0.592-0.655,1.064-1.748,1.064c-1.42,0-5.024-0.709-10.922-0.709\nc-5.898,0-9.611,0.709-11.031,0.709c-1.092,0-1.638-0.473-1.638-1.3c0-1.655,2.512-1.064,5.242-2.364\nc2.512-1.183,2.621-2.839,2.621-6.74V46.458z\"/>\n<path class=\"letter-3\" d=\"M116.135,46.458c0-4.611-0.437-6.976-2.621-8.276c-2.076-1.183-5.243-0.354-5.243-1.892c0-1.064,1.638-1.3,4.26-1.892\nc5.789-1.3,9.065-3.191,10.157-3.191c2.076,0,1.856,3.31,2.512,11.585c4.26-7.447,10.157-11.231,18.021-11.231\nc10.376,0,16.165,5.674,16.165,15.724v62.068c0,3.901,0.109,5.439,2.622,6.74c2.839,1.419,5.243,0.709,5.243,2.6\nc0,0.592-0.546,1.064-1.639,1.064c-1.42,0-5.134-0.709-11.032-0.709s-9.501,0.709-10.921,0.709c-1.092,0-1.748-0.473-1.748-1.3\nc0-1.655,2.512-1.064,5.243-2.364c2.512-1.183,2.622-2.839,2.622-6.74V47.994c0-8.394-3.386-12.532-10.267-12.532\nc-7.427,0-13.762,7.094-13.762,17.024v22.345c0,3.901,0.11,5.439,2.621,6.74c2.84,1.419,5.243,0.709,5.243,2.6\nc0,0.592-0.655,1.064-1.748,1.064c-1.419,0-5.024-0.709-10.922-0.709s-9.611,0.709-11.032,0.709c-1.092,0-1.638-0.473-1.638-1.3\nc0-1.655,2.513-1.064,5.243-2.364c2.512-1.183,2.621-2.839,2.621-6.74V46.458z\"/>\n<path class=\"letter-4\" d=\"M189.871,31.561c6.881,0,12.779,2.72,17.584,7.803c5.025,5.438,7.864,12.532,7.864,19.153c0,7.33-2.731,14.423-7.646,19.861\nc-5.133,5.677-10.813,8.275-18.131,8.275c-15.073,0-26.322-11.467-26.322-27.545C163.22,43.383,175.016,31.561,189.871,31.561z\n  M188.996,84.171c10.267,0,15.728-8.631,15.728-25.417c0-16.197-6.007-24.946-15.728-24.946c-8.737,0-15.181,9.339-15.181,25.418\nC173.815,75.305,179.385,84.171,188.996,84.171z\"/>\n<path class=\"letter-5\" d=\"M254.752,48.939c0-5.218-6.116-3.761-6.116-5.825c0-0.85,0.437-1.092,1.638-1.092c1.53,0,3.715,0.486,6.443,0.486\nc2.841,0,4.807-0.364,6.008-0.364c1.311,0,1.967,0.364,1.967,1.092c0,1.214-1.748,0.971-3.277,2.427\nc-1.747,1.699-3.387,5.583-5.68,11.892l-12.125,26.524c-0.438,1.214-0.983,1.699-1.857,1.699c-1.748,0-1.857-1.821-3.167-5.34\nl-20.852-51.993c-1.201-3.034-2.402-4.976-3.386-5.461c-3.058-1.456-4.697-0.849-4.697-2.548c0-0.85,0.656-1.092,1.857-1.092\nc2.075,0,5.679,0.485,11.031,0.485c4.37,0,7.209-0.364,8.52-0.364c1.529,0,2.293,0.243,2.293,1.092c0,1.335-1.856,0.971-4.15,1.578\nc-1.529,0.364-2.403,1.457-2.403,3.156c0,1.456,6.434,15.95,8.291,20.683l10.267,26.333\nC252.346,52.285,254.752,52.217,254.752,48.939z\"/>\n<path class=\"letter-6\" d=\"M269.073,82.822c-6.989,0-11.14-4.368-11.14-11.043c0-10.316,9.938-15.655,30.146-23.786v-9.587\nc0-6.433-3.276-9.466-10.486-9.466c-5.461,0-8.956,2.184-9.393,5.825c-0.547,3.883-0.982,6.311-4.696,6.311\nc-2.293,0-3.823-1.82-3.823-4.49c0-5.34,6.553-10.073,18.896-10.073c12.779,0,18.786,4.369,18.786,13.956v30.825\nc0,4.246,1.311,6.553,3.605,6.553c2.074,0,3.385-2.307,4.477-2.307c0.654,0,0.983,0.364,0.983,1.093c0,2.063-3.933,6.31-8.847,6.31\nc-5.134,0-8.848-3.276-9.83-8.494C282.509,79.91,275.845,82.822,269.073,82.822z M268.091,69.23c0,5.581,2.839,8.979,7.318,8.979\nc5.68,0,12.67-5.097,12.67-10.557V50.663C274.534,56.488,268.091,61.706,268.091,69.23z\"/>\n<path class=\"letter-7\" d=\"M315.265,36.43c-1.421,0-2.076-0.349-2.076-1.047c0-1.163,3.277-2.327,7.319-6.981c4.478-5.12,5.132-8.726,6.333-8.726\nc0.765,0,0.983,0.465,0.983,1.629V32.94h10.049c2.185,0,3.167,0.116,3.167,1.746c0,1.28-0.982,1.744-3.275,1.744h-9.831v35.022\nc0,7.098,1.966,10.471,6.99,10.471c5.134,0,6.444-5.584,8.192-5.584c0.655,0,1.31,0.698,1.31,1.628\nc0,2.909-5.024,7.446-13.106,7.446c-9.829,0-12.67-4.537-12.67-14.543V36.43H315.265z\"/>\n<path class=\"letter-8\" d=\"M352.395,36.349c-2.402-0.931-5.461,0.117-5.461-1.397c0-1.28,1.528-1.164,4.479-1.862\nc6.772-1.514,10.485-3.608,11.469-3.608c0.873,0,1.201,0.583,1.201,1.746v41.436c0,3.839,0.109,5.47,2.622,6.634\nc2.838,1.396,5.241,0.699,5.241,2.56c0,0.582-0.655,1.048-1.748,1.048c-1.31,0-4.913-0.699-10.921-0.699s-9.722,0.699-11.032,0.699\nc-1.092,0-1.638-0.466-1.638-1.048c0-1.86,2.402-1.163,5.242-2.56c2.402-1.164,2.621-2.677,2.621-6.634V41.004\nC354.47,38.211,354.142,37.047,352.395,36.349z M358.185-0.314c3.057,0,5.569,2.677,5.569,6.052c0,3.259-2.403,5.936-5.569,5.936\nc-3.168,0-5.68-2.677-5.68-5.936C352.505,2.363,355.017-0.314,358.185-0.314z\"/>\n<path class=\"letter-9\" d=\"M406.231,31.561c6.881,0,12.779,2.72,17.585,7.803c5.023,5.438,7.864,12.532,7.864,19.153c0,7.33-2.731,14.423-7.646,19.861\nc-5.133,5.677-10.813,8.275-18.131,8.275c-15.072,0-26.321-11.467-26.321-27.545C379.582,43.383,391.378,31.561,406.231,31.561z\n  M405.358,84.171c10.267,0,15.727-8.631,15.727-25.417c0-16.197-6.007-24.946-15.727-24.946c-8.738,0-15.182,9.339-15.182,25.418\nC390.177,75.305,395.747,84.171,405.358,84.171z\"/>\n<path class=\"letter-10\" d=\"M449.253,46.458c0-4.611-0.437-6.976-2.621-8.276c-2.075-1.183-5.243-0.354-5.243-1.892c0-1.064,1.64-1.3,4.261-1.892\nc5.788-1.3,9.064-3.191,10.156-3.191c2.076,0,1.856,3.31,2.513,11.585c4.26-7.447,10.158-11.231,18.021-11.231\nc10.378,0,16.166,5.674,16.166,15.724v27.546c0,3.901,0.108,5.439,2.621,6.74c2.84,1.419,5.243,0.709,5.243,2.6\nc0,0.592-0.547,1.064-1.639,1.064c-1.421,0-5.133-0.709-11.03-0.709c-5.898,0-9.503,0.709-10.923,0.709\nc-1.093,0-1.747-0.473-1.747-1.3c0-1.655,2.511-1.064,5.242-2.364c2.512-1.183,2.621-2.839,2.621-6.74V47.994\nc0-8.394-3.386-12.532-10.266-12.532c-7.428,0-13.764,7.094-13.764,17.024v22.345c0,3.901,0.109,5.439,2.621,6.74\nc2.841,1.419,5.244,0.709,5.244,2.6c0,0.592-0.656,1.064-1.748,1.064c-1.421,0-5.025-0.709-10.922-0.709\nc-5.898,0-9.611,0.709-11.031,0.709c-1.093,0-1.64-0.473-1.64-1.3c0-1.655,2.513-1.064,5.243-2.364\nc2.513-1.183,2.621-2.839,2.621-6.74V46.458z\"/>\n<defs>\n    <filter id=\"mySVGfilter\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">\n        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\"/>\n    </filter>\n</defs>\n</svg>";
    var introCenterTitle = document.createElement('div');
    introCenterTitle.classList.add('center__title');
    introCenter.appendChild(introCenterTitle);
    var introBottom = document.createElement('div');
    introBottom.classList.add('intro__bottom');
    var introBottomLamps = document.createElement('div');
    introBottomLamps.classList.add('bottom__lamp');

    for (var i = 0; i < 3; i += 1) {
      var introBottomLamp = document.createElement('div');
      introBottomLamp.classList.add("bottom__lamp--".concat(i + 1));
      introBottomLamps.appendChild(introBottomLamp);
    }

    introBottom.appendChild(introBottomLamps);
    var introGear = document.createElement('div');
    introGear.classList.add('intro__gear');
    var introGear1 = document.createElement('div');
    introGear1.classList.add('intro__gear1');
    var introGear2 = document.createElement('div');
    introGear2.classList.add('intro__gear2');
    introGear.appendChild(introGear1);
    introGear.appendChild(introGear2);
    introContainer.appendChild(introTop);
    introContainer.appendChild(introCenter);
    introContainer.appendChild(introBottom);
    introContainer.appendChild(introGear);
    divIntro.appendChild(introContainer);
    document.body.appendChild(divIntro);
    var img = new Image();
    img.src = './assets/img/intro/center.png';
    img.addEventListener('load', function () {
      introBottom.classList.add('show'); // set up and display main menu

      var menu = new _mainMenu__WEBPACK_IMPORTED_MODULE_0__.default(introTop);
      menu.render();
    });
    divIntro.addEventListener('click', function (event) {
      var menu = document.querySelector('.menu');

      if (event.target.closest('.intro') === divIntro) {
        menu.classList.add('menu__skip');
        introCenter.classList.add('intro__skip');
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intro);

/***/ }),

/***/ "./src/js/components/Player.js":
/*!*************************************!*\
  !*** ./src/js/components/Player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var _cards_getCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/getCard */ "./src/js/cards/getCard.js");
/* harmony import */ var _cards_renderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/renderCard */ "./src/js/cards/renderCard.js");
/* harmony import */ var _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/playerTable/displayHeader */ "./src/js/display/playerTable/displayHeader.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ "./src/js/components/gameState.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/*
* store all player cards objects (hand/table/lead/influence)
* this obj passed as argument to Game constructor
*/

var Player = /*#__PURE__*/function () {
  function Player(gameUI, playerName, id) {
    _classCallCheck(this, Player);

    // store passed values
    this.name = playerName;
    this.id = id;
    this.gameUI = gameUI; // set default values

    this.game = null; //! this field will be set at game object initialization

    this.currentAge = 1;
    this.hand = []; //! Names of stacks are color field in card objects

    this.activeStacks = {
      blue: {
        cards: [],
        shift: 'right' //! TEST

      },
      red: {
        cards: [],
        shift: 'top' //! TEST

      },
      green: {
        cards: [],
        shift: null //! TEST

      },
      purple: {
        cards: [],
        shift: 'left' //! TEST

      },
      yellow: {
        cards: [],
        shift: 'top' //! TEST

      }
    }; // Resources

    this.tree = 0;
    this.tower = 0;
    this.crown = 0;
    this.bulb = 0;
    this.factory = 0;
    this.clock = 0; // player leadership and influence objects
    // TODO LATER

    this.ownedLeadership = {
      domElement: null,
      // TODO remove
      cardsArray: []
    }; // TODO LATER

    this.influence = {
      domElement: null,
      // TODO remove
      cardsArray: []
    };
  } // calculate current recourses


  _createClass(Player, [{
    key: "calculateResources",
    value: function calculateResources() {
      var _this = this;

      this.tree = 0;
      this.tower = 0;
      this.crown = 0;
      this.bulb = 0;
      this.factory = 0;
      this.clock = 0;
      Object.keys(this.activeStacks).forEach(function (stack) {
        var currentStack = _this.activeStacks[stack];

        if (currentStack.cards.length > 0) {
          var highestCard = currentStack.cards[currentStack.cards.length - 1];
          highestCard.resourses.forEach(function (e) {
            _this[e.resourceName] += 1;
          });
        }
      });
    } // calculate and set current age, iterates througth each stack
    //! Runs from Game each time when card taken

  }, {
    key: "setCurrentAge",
    value: function setCurrentAge() {
      var _this2 = this;

      // console.log(this);
      Object.keys(this.activeStacks).forEach(function (stack) {
        _this2.activeStacks[stack].cards.forEach(function (card) {
          if (+card.age > _this2.currentAge) {
            _this2.currentAge = +card.age;
          }
        });
      });
    } // render last taken card in hand of current player

  }, {
    key: "renderLastTakenCard",
    value: function renderLastTakenCard() {
      var _this3 = this;

      var lastTakenCard = this.hand[this.hand.length - 1];
      var cardElement = _cards_getCard__WEBPACK_IMPORTED_MODULE_0__.default.frontSide(lastTakenCard); // add animation when card render to hand

      cardElement.setAttribute('xyz', 'fade right-3 flip-right rotate-left');
      cardElement.classList.add('xyz-in');

      cardElement.onclick = function () {
        _this3.playCard(lastTakenCard, cardElement);
      };

      this.gameUI.hand.append(cardElement); // remove animation when card rendered

      setTimeout(function () {
        // cardElement.removeAttribute('xyz');
        cardElement.classList.remove('xyz-in');
      }, 450);
    } // render all cards in hand of current player

  }, {
    key: "renderHand",
    value: function renderHand() {
      var _this4 = this;

      this.gameUI.hand.innerHTML = ''; // clear previous rendered hand

      this.hand.forEach(function (card) {
        var cardElement = _cards_getCard__WEBPACK_IMPORTED_MODULE_0__.default.frontSide(card);

        cardElement.onclick = function () {
          _this4.playCard(card, cardElement);
        };

        _this4.gameUI.hand.append(cardElement);
      });
    } // render all cards in active zone of current player

  }, {
    key: "renderActiveZone",
    value: function renderActiveZone() {
      var _this5 = this;

      Object.keys(this.activeStacks).forEach(function (stackName) {
        _this5.gameUI.activeStacks[stackName].innerHTML = ''; // clear previous rendered active zone

        _this5.activeStacks[stackName].cards.forEach(function (card) {
          _this5.gameUI.activeStacks[stackName].append(_cards_getCard__WEBPACK_IMPORTED_MODULE_0__.default.frontSide(card));
        });
      });
    } // on click event for cards in hand. Play card in stack depends on category
    // TODO: later this method should add dogma function to each played card

  }, {
    key: "playCard",
    value: function playCard(cardObj, cardElement) {
      _cards_renderCard__WEBPACK_IMPORTED_MODULE_1__.default.toActive(cardElement); // test block, emulate adding card to active zone

      var test = cardElement.parentElement.id;
      _gameState__WEBPACK_IMPORTED_MODULE_3__.default.activePlayer.activeDecks[test].cards.push(1);
      this.calculateResources();
      _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_2__.default.changePlayerStats(this);
      this.game.actionDone();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/js/components/gameState.js":
/*!****************************************!*\
  !*** ./src/js/components/gameState.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var gameState = {
  ageDecks: {
    age1: [],
    age2: [],
    age3: [],
    age4: [],
    age5: [],
    age6: [],
    age7: [],
    age8: [],
    age9: [],
    age10: []
  },
  leadershipDeck: [],
  specialDeck: [],
  players: [],
  currentPlayer: null,
  activePlayer: null,
  player0: {
    name: null,
    id: 0,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    currentDeck: 'age1',
    activeDecks: {
      red: {
        cards: [],
        shift: 'right' //! test

      },
      green: {
        cards: [],
        shift: 'top' //! test

      },
      blue: {
        cards: [],
        shift: 'left' //! test

      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: 'top' //! test

      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null
      },
      green: {
        cards: [],
        shift: null
      },
      blue: {
        cards: [],
        shift: null
      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player2: {
    name: null,
    id: 2,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null
      },
      green: {
        cards: [],
        shift: null
      },
      blue: {
        cards: [],
        shift: null
      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  },
  player3: {
    name: null,
    id: 3,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null
      },
      green: {
        cards: [],
        shift: null
      },
      blue: {
        cards: [],
        shift: null
      },
      purple: {
        cards: [],
        shift: null
      },
      yellow: {
        cards: [],
        shift: null
      }
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameState);

/***/ }),

/***/ "./src/js/components/mainMenu.js":
/*!***************************************!*\
  !*** ./src/js/components/mainMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utility_initHotSeatGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/initHotSeatGame */ "./src/js/utility/initHotSeatGame.js");
/* harmony import */ var _NEW_NEWinitHotSeatGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NEW/NEWinitHotSeatGame */ "./src/js/NEW/NEWinitHotSeatGame.js");
/* harmony import */ var _NEW_displayNewTurnModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NEW/displayNewTurnModal */ "./src/js/NEW/displayNewTurnModal.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var users = {};

function validation(userObj) {
  if (userObj.names.length === userObj.players) {
    return userObj.names.every(function (name) {
      return name.length > 2 && name.length < 11;
    });
  }

  return false;
} // TODO need some refactor later, move to display folder, use function?


var Menu = /*#__PURE__*/function () {
  function Menu(parent) {
    _classCallCheck(this, Menu);

    this.parent = parent;
  }

  _createClass(Menu, [{
    key: "createMenuItem",
    value: function createMenuItem(text) {
      return (
        /* html */
        "<a href=\"#\" class=\"menu__link ".concat((arguments.length <= 1 ? undefined : arguments[1]) || '', "\" ").concat((arguments.length <= 2 ? undefined : arguments[2]) || '', ">\n      ").concat(text, "\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 152.9 43.4\" style=\"enable-background:new 0 0 152.9 43.4;\" xml:space=\"preserve\">\n        <path d=\"M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4\"/>\n      </svg>\n    </a><br>")
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.menu = document.createElement('div');
      this.menu.classList.add('menu');
      this.menu.innerHTML = "\n    ".concat(this.createMenuItem('Новая игра', 'start'), "\n    ").concat(this.createMenuItem('Продолжить'), "\n    ").concat(this.createMenuItem('Сохранить игру'), "\n    ").concat(this.createMenuItem('Правила игры', 'rules'), "\n    ").concat(this.createMenuItem('Обзор игры'), "\n    ");
      this.parent.append(this.menu);
      this.renderPdfRules();
      this.menu.addEventListener('click', function (e) {
        if (e.target.tagName !== 'A' && e.target.tagName !== 'SPAN' && e.target !== _this.menu.querySelector('button')) {
          return;
        }

        if (e.target.className.includes('start')) {
          _this.createChoosePlayersItems();
        } else if (e.target.className.includes('rules')) {
          _this.rulesWrraper.hidden = false;
        } else if (e.target.className.includes('close')) {
          _this.rulesWrraper.hidden = true;
        } else if (e.target.dataset.players) {
          _this.createNameInputField(e.target.dataset.players);
        } else if (e.target.className.includes('get-names')) {
          e.preventDefault();

          _this.addNamesToUsers();

          if (validation(users)) {
            var intro = _this.menu.parentElement.parentElement.parentElement;
            (0,_NEW_displayNewTurnModal__WEBPACK_IMPORTED_MODULE_2__.default)(users.names[0]);
            (0,_NEW_NEWinitHotSeatGame__WEBPACK_IMPORTED_MODULE_1__.default)(users);
            setTimeout(function () {
              intro.classList.toggle('intro--hide'); // initHotSeatGame(usersInfo.names);
            }, 500);
          }
        } else if (e.target.className.includes('back')) {
          _this.menu.remove();

          _this.render();

          _this.menu.classList.add('menu__used');
        }
      });
    }
  }, {
    key: "renderPdfRules",
    value: function renderPdfRules() {
      this.rulesWrraper = document.createElement('div');
      this.rulesWrraper.classList.add('iframe__wrraper');
      this.rulesWrraper.hidden = true;
      this.rulesWrraper.innerHTML =
      /* html */
      "\n        <span class=\"close\">&#10006</span>\n        <iframe class=\"iframe\" src=\"./assets/innovation_rules_rus_final.pdf\" width=\"70%\" height=\"70%\"></iframe>\n    ";
      this.menu.append(this.rulesWrraper);
    }
  }, {
    key: "createChoosePlayersItems",
    value: function createChoosePlayersItems() {
      for (var i = 0; i < this.menu.children.length; i += 1) {
        this.menu.children[i].hidden = true;
      }

      this.menu.innerHTML =
      /* html */
      "\n    ".concat(this.createMenuItem('2 игрока', '', 'data-players=2'), "\n    ").concat(this.createMenuItem('3 игрока', '', 'data-players=3'), "\n    ").concat(this.createMenuItem('4 игрока', '', 'data-players=4'), "\n    ").concat(this.createMenuItem('Главное меню', 'back'), "\n    ");
    }
  }, {
    key: "createNameInputField",
    value: function createNameInputField(numberOfFields) {
      users.players = +numberOfFields;
      this.menu.innerHTML =
      /* html */
      "\n      <form>\n        ".concat(this.createInputs(numberOfFields), "\n        <button class=\"menu__link get-names\" type=\"submit\">\u041F\u0440\u0438\u043D\u044F\u0442\u044C</button>\n      </form>\n      ").concat(this.createMenuItem('Главное меню', 'back'), "\n    ");
    }
  }, {
    key: "createInputs",
    value: function createInputs(num) {
      var inputHTML = [];

      for (var i = 1; i <= num; i += 1) {
        inputHTML.push(
        /* html */
        "\n        <label for=\"plaeyr".concat(i, "\">\u0412\u0432\u0435\u0434\u0438\u0442\u0438 \u0438\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430 \u2116 ").concat(i, "</label>\n        <input type=\"text\" id=\"player").concat(i, "\" name=\"name\" data-name=\"\" pattern=\"[a-zA-Z\u0430-\u044F\u0410-\u042F0-9_]{3,10}\" title=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442 3 \u0434\u043E 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432\" required>\n      "));
      }

      return inputHTML;
    }
  }, {
    key: "addNamesToUsers",
    value: function addNamesToUsers() {
      var inputs = this.menu.querySelectorAll('[data-name]');
      var playerNames = [];

      for (var i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value) {
          playerNames.push(inputs[i].value);
        }
      }

      users.names = playerNames;
      return playerNames;
    }
  }]);

  return Menu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/js/display/playerTable/displayActiveZone.js":
/*!*********************************************************!*\
  !*** ./src/js/display/playerTable/displayActiveZone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var displayActiveZone = {
  wrapper: null,
  init: function init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('active-zone');
    this.activeZoneTitle = document.createElement('div');
    this.activeZoneTitle.classList.add('active-zone__title');
    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('active-zone__cards-block');
    this.cardsBlockWrapper = document.createElement('div');
    this.cardsBlockWrapper.classList.add('active-zone__cards-wrapper');
    this.cardsBlock.append(this.cardsBlockWrapper);
    this.cardsBlockOverlay = document.createElement('div');
    this.cardsBlockOverlay.classList.add('active-zone__overlay'); // create players active stacks
    // !Stack names are the color fields of cards object

    var stacksNames = ['blue', 'red', 'green', 'purple', 'yellow'];

    for (var i = 0; i < stacksNames.length; i += 1) {
      var stack = document.createElement('div');
      stack.classList.add('active-zone__stack');
      stack.classList.add('active-zone__stack--empty');
      stack.id = stacksNames[i]; // id stackName for each stack

      this.cardsBlockWrapper.append(stack);
    }

    this.wrapper.append(this.activeZoneTitle);
    this.wrapper.append(this.cardsBlockOverlay);
    this.wrapper.append(this.cardsBlock);
    return this.wrapper;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayActiveZone);

/***/ }),

/***/ "./src/js/display/playerTable/displayAside.js":
/*!****************************************************!*\
  !*** ./src/js/display/playerTable/displayAside.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var displayAside = {
  wrapper: null,
  init: function init() {
    // create aside wrapper
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('aside'); // append block for style aside backgroung and border

    this.wrapper.append(this.getStyleBlock('overlay'));
    this.wrapper.append(this.getStyleBlock('top'));
    this.wrapper.append(this.getStyleBlock('center'));
    this.wrapper.append(this.getStyleBlock('bottom')); // append createand blocks to aside wrapper

    this.wrapper.append(this.getInfoBlock());
    this.wrapper.append(this.getCurrentDeckBlock());
    this.wrapper.append(this.getExtraCardsBlock());
    this.wrapper.append(this.getLogBlock()); // create hidden modals blocks

    this.ageDecksBlock = this.getAgeDecksBlock();
    this.leadershipCardsBlock = this.getLeadershipCardsBlock();
    this.specialCardsBlock = this.getSpecialCardsBlock(); // append hidden modal blocks to body

    document.body.append(this.ageDecksBlock);
    document.body.append(this.leadershipCardsBlock);
    document.body.append(this.specialCardsBlock);
    return this.wrapper;
  },
  getStyleBlock: function getStyleBlock(name) {
    var block = document.createElement('div');
    block.classList.add("aside__".concat(name));
    return block;
  },
  getInfoBlock: function getInfoBlock() {
    // create info block
    var infoBlock = document.createElement('div');
    infoBlock.classList.add('info-table'); // create current player block

    var currentPlayerBlock = document.createElement('div');
    currentPlayerBlock.classList.add('info-table__player-block');
    var currentPlayerText = document.createElement('div');
    currentPlayerText.innerText = 'Ход игрока: ';
    var currentPlayerName = document.createElement('div');
    currentPlayerName.classList.add('info-table__player-name');
    currentPlayerBlock.append(currentPlayerText);
    currentPlayerBlock.append(currentPlayerName); // create action points block

    var actionPointsBlock = document.createElement('div');
    actionPointsBlock.classList.add('info-table__action-points-block');
    var actionPointsText = document.createElement('div');
    actionPointsText.innerText = 'Осталось ОД: ';
    var actionPointsValue = document.createElement('div');
    actionPointsValue.classList.add('info-table__action-points');
    actionPointsBlock.append(actionPointsText);
    actionPointsBlock.append(actionPointsValue); // append created blocks to info block

    infoBlock.append(currentPlayerBlock);
    infoBlock.append(actionPointsBlock);
    return infoBlock;
  },
  getCurrentDeckBlock: function getCurrentDeckBlock() {
    var _this = this;

    // create current deck block
    var currentDeck = document.createElement('div');
    currentDeck.classList.add('current-deck');
    var currentDeckTitle = document.createElement('div');
    currentDeckTitle.classList.add('current-deck__title');
    currentDeckTitle.innerText = 'Взять карту';
    var currentDeckCards = document.createElement('div');
    currentDeckCards.classList.add('current-deck__cards'); // create hover button element

    var hoverBtn = document.createElement('button');
    hoverBtn.classList.add('hover-btn');
    hoverBtn.innerText = 'Показать все';
    hoverBtn.addEventListener('click', function () {
      _this.ageDecksBlock.classList.toggle('age-decks--hidden');
    }); // append button to deck block

    currentDeckCards.append(hoverBtn); // append title and cards blocks to current deck block

    currentDeck.append(currentDeckTitle);
    currentDeck.append(currentDeckCards);
    return currentDeck;
  },
  getExtraCardsBlock: function getExtraCardsBlock() {
    var _this2 = this;

    // create extra cards block
    var extraCards = document.createElement('div');
    extraCards.classList.add('extra-cards'); // create special cards block

    var specialCards = document.createElement('div');
    specialCards.classList.add('extra-cards__special-block');
    var specialCardsTitle = document.createElement('div');
    specialCardsTitle.classList.add('extra-cards__special-title');
    specialCardsTitle.innerText = '5 карт';
    var specialCardsCards = document.createElement('div');
    specialCardsCards.classList.add('extra-cards__special-cards'); // create hover button for special cards block

    var hoverBtnSpecial = document.createElement('button');
    hoverBtnSpecial.classList.add('hover-btn');
    hoverBtnSpecial.innerText = 'Показать все';
    hoverBtnSpecial.addEventListener('click', function () {
      _this2.specialCardsBlock.classList.toggle('special-cards--hidden');
    });
    specialCardsCards.append(hoverBtnSpecial); // append title and cards to special cards block

    specialCards.append(specialCardsTitle);
    specialCards.append(specialCardsCards); // create leadership cards block

    var leadershipCards = document.createElement('div');
    leadershipCards.classList.add('extra-cards__leadership-block');
    var leadershipCardsTitle = document.createElement('div');
    leadershipCardsTitle.classList.add('extra-cards__leadership-title');
    leadershipCardsTitle.innerText = 'Век 1';
    var leadershipCardsCards = document.createElement('div');
    leadershipCardsCards.classList.add('extra-cards__leadership-cards'); // create hover button for leadership cards block

    var hoverBtnLeadership = document.createElement('button');
    hoverBtnLeadership.classList.add('hover-btn');
    hoverBtnLeadership.innerText = 'Показать все';
    hoverBtnLeadership.addEventListener('click', function () {
      _this2.leadershipCardsBlock.classList.toggle('leadership-cards--hidden');
    });
    leadershipCardsCards.append(hoverBtnLeadership); // append title and cards to leadership cards block

    leadershipCards.append(leadershipCardsTitle);
    leadershipCards.append(leadershipCardsCards); // apend special cards and leadership blocks to extra cards block

    extraCards.append(specialCards);
    extraCards.append(leadershipCards);
    return extraCards;
  },
  getLogBlock: function getLogBlock() {
    // create log block
    var logBlock = document.createElement('div');
    logBlock.classList.add('chat-log'); // chat tab

    logBlock.innerHTML = "<div class=\"chat-log__tab\">\n      <input type=\"radio\" id=\"chat-block\" name=\"tab-group\" checked>\n      <label for=\"chat-block\" class=\"chat-log__tab-title\">\u0427\u0430\u0442</label> \n      <section class=\"chat-log__tab-content chat-block\">\n      </section> \n    </div>"; // log tab

    logBlock.innerHTML += "<div class=\"chat-log__tab\">\n      <input type=\"radio\" id=\"log-block\" name=\"tab-group\">\n      <label for=\"log-block\" class=\"chat-log__tab-title\">\u041B\u043E\u0433</label> \n      <section class=\"chat-log__tab-content log-block\">\n      </section> \n    </div>"; // input

    logBlock.innerHTML += "<form class=\"chat-log__form\" id=\"input-form\">\n      <input class=\"chat-log__input\">\n      <button class=\"chat-log__btn\" type=\"submit\" form=\"input-form\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n    </form>"; // spread button

    var spreadBtn = document.createElement('div');
    spreadBtn.classList.add('chat-log__spread');
    logBlock.append(spreadBtn);
    spreadBtn.addEventListener('click', function () {
      logBlock.classList.toggle('chat-log--full-screen');
      spreadBtn.classList.toggle('chat-log__spread--open');
    });
    return logBlock;
  },
  getAgeDecksBlock: function getAgeDecksBlock() {
    var _this3 = this;

    // create age decks modal block
    var agesNumber = 10;
    var ageDecksBlock = document.createElement('div');
    ageDecksBlock.classList.add('age-decks');
    ageDecksBlock.classList.add('age-decks--hidden'); // Animation classes and attributes for modal block here

    ageDecksBlock.classList.add('xyz-in');
    ageDecksBlock.setAttribute('xyz', 'fade-100% duration-6'); // create blocks - lines of cards

    var firstLine = document.createElement('div');
    firstLine.classList.add('age-decks__first-line');
    var secondLine = document.createElement('div');
    secondLine.classList.add('age-decks__second-line');
    var thirdLine = document.createElement('div');
    thirdLine.classList.add('age-decks__third-line');
    var btnLine = document.createElement('div');
    btnLine.classList.add('age-decks__btn-line'); // create age decks

    for (var i = 0; i < agesNumber; i += 1) {
      var deck = document.createElement('div');
      deck.classList.add('age-deck');
      deck.id = "age".concat(i + 1); // id age1-10 for each deck

      deck.innerText = "".concat(i + 1, " Age"); // TODO remove later

      deck.style.backgroundImage = 'url(./assets/img/cards-bg/age-01.jpg)'; //! use `` age-0${i+1} later

      deck.addEventListener('click', function () {
        return _this3.ageDecksBlock.classList.toggle('age-decks--hidden');
      }); // Animation classes and attributes for cards here

      deck.classList.add('xyz-in');
      deck.setAttribute('xyz', 'flip-left-25% rotate-right-25% up-5 duration-6');

      if (i < 4) {
        firstLine.append(deck);
      } else if (i < 7) {
        secondLine.append(deck);
      } else if (i < 10) {
        thirdLine.append(deck);
      }

      if (i === 9) {
        // create close button
        var button = document.createElement('button');
        button.classList.add('close-modal-btn');
        button.innerText = 'Закрыть';
        btnLine.append(button);
      }
    }

    ageDecksBlock.append(firstLine);
    ageDecksBlock.append(secondLine);
    ageDecksBlock.append(thirdLine);
    ageDecksBlock.append(btnLine);
    return ageDecksBlock;
  },
  getLeadershipCardsBlock: function getLeadershipCardsBlock() {
    // create leadership decks modal block
    var leadershipCardsBlock = document.createElement('div');
    leadershipCardsBlock.classList.add('leadership-cards');
    leadershipCardsBlock.classList.add('leadership-cards--hidden'); // Animation classes and attributes for modal block here

    leadershipCardsBlock.classList.add('xyz-in');
    leadershipCardsBlock.setAttribute('xyz', 'fade-100% duration-6'); // create blocks - lines of cards

    var firstLine = document.createElement('div');
    firstLine.classList.add('leadership-cards__first-line');
    var secondLine = document.createElement('div');
    secondLine.classList.add('leadership-cards__second-line');
    var btnLine = document.createElement('div');
    btnLine.classList.add('leadership-cards__btn-line'); // create leadership cards

    var numOfLeadershipCards = 10;

    for (var i = 0; i < numOfLeadershipCards; i += 1) {
      var leadershipCard = document.createElement('div');
      leadershipCard.classList.add('leadership-cards__card');
      leadershipCard.innerText = "".concat(i + 1); // Animation classes and attributes for cards here

      leadershipCard.classList.add('xyz-in');
      leadershipCard.setAttribute('xyz', 'flip-left-25% rotate-right-25% up-5 duration-6');
      if (i < 5) firstLine.append(leadershipCard);else if (i < 10) secondLine.append(leadershipCard);

      if (i === 9) {
        // create close button
        var button = document.createElement('button');
        button.classList.add('close-modal-btn');
        button.innerText = 'Закрыть';
        btnLine.append(button);
      }
    }

    leadershipCardsBlock.append(firstLine);
    leadershipCardsBlock.append(secondLine);
    leadershipCardsBlock.append(btnLine);
    return leadershipCardsBlock;
  },
  getSpecialCardsBlock: function getSpecialCardsBlock() {
    // create special cards modal block
    var specialCardsBlock = document.createElement('div');
    specialCardsBlock.classList.add('special-cards');
    specialCardsBlock.classList.add('special-cards--hidden'); // Animation classes and attributes for modal block here

    specialCardsBlock.classList.add('xyz-in');
    specialCardsBlock.setAttribute('xyz', 'fade-100% duration-6'); // create blocks - lines of cards

    var firstLine = document.createElement('div');
    firstLine.classList.add('special-cards__first-line');
    var secondLine = document.createElement('div');
    secondLine.classList.add('special-cards__second-line');
    var btnLine = document.createElement('div');
    btnLine.classList.add('special-cards__btn-line'); // create special cards

    var numOfSpecialCards = 5;

    for (var i = 0; i < numOfSpecialCards; i += 1) {
      var specialCard = document.createElement('div');
      specialCard.classList.add('special-cards__card'); // Animation classes and attributes for cards here

      specialCard.classList.add('xyz-in');
      specialCard.setAttribute('xyz', 'flip-left-25% rotate-right-25% up-5 duration-6');
      if (i < 3) firstLine.append(specialCard);else if (i < 5) secondLine.append(specialCard); // create close button

      if (i === 4) {
        var button = document.createElement('button');
        button.classList.add('close-modal-btn');
        button.innerText = 'Закрыть';
        btnLine.append(button);
      }
    }

    specialCardsBlock.append(firstLine);
    specialCardsBlock.append(secondLine);
    specialCardsBlock.append(btnLine);
    return specialCardsBlock;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAside);

/***/ }),

/***/ "./src/js/display/playerTable/displayHand.js":
/*!***************************************************!*\
  !*** ./src/js/display/playerTable/displayHand.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var displayHand = {
  init: function init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('hand');
    this.handTitle = document.createElement('div');
    this.handTitle.classList.add('hand__title');
    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('hand__cards');
    this.cardsBlockOverlay = document.createElement('div');
    this.cardsBlockOverlay.classList.add('hand__overlay');
    this.controlsBlock = document.createElement('div');
    this.controlsBlock.classList.add('hand__controls'); // disabled by default

    this.arrowTop = document.createElement('button');
    this.arrowTop.classList.add('hand__btn--top', 'hand__btn');
    this.arrowTop.classList.add('hand__btn--disabled');
    this.arrowTop.disabled = true;
    this.arrowTop.innerHTML =
    /* html */
    "\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n      xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n      x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 230 213.7\" enable-background=\"new 0 0 230 213.7\"\n      xml:space=\"preserve\">\n\n      <polygon class='hand__controls-svg--triangle' id=\"XMLID_18_\" fill=\"none\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"\n      73.5,62.5 148.5,105.8 73.5,149.1 \"/>\n\n      <circle class='hand__controls-svg--circle' id=\"XMLID_17_\" fill=\"none\"  stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  stroke-miterlimit=\"10\" cx=\"106.8\" cy=\"106.8\" r=\"103.3\"/>\n    </svg>\n    "; // disabled by default

    this.arrowBottom = document.createElement('button');
    this.arrowBottom.classList.add('hand__btn--bottom', 'hand__btn');
    this.arrowBottom.classList.add('hand__btn--disabled');
    this.arrowBottom.disabled = true;
    this.arrowBottom.innerHTML =
    /* html */
    "\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n      xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n      x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 230 213.7\" enable-background=\"new 0 0 230 213.7\"\n      xml:space=\"preserve\">\n\n      <polygon class='hand__controls-svg--triangle' id=\"XMLID_18_\" fill=\"none\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"\n      73.5,62.5 148.5,105.8 73.5,149.1 \"/>\n\n      <circle class='hand__controls-svg--circle' id=\"XMLID_17_\" fill=\"none\"  stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  stroke-miterlimit=\"10\" cx=\"106.8\" cy=\"106.8\" r=\"103.3\"/>\n    </svg>\n    ";
    this.controlsBlock.append(this.arrowTop);
    this.controlsBlock.append(this.arrowBottom);
    this.wrapper.append(this.handTitle);
    this.wrapper.append(this.cardsBlockOverlay);
    this.wrapper.append(this.cardsBlock);
    this.wrapper.append(this.controlsBlock);
    return this.wrapper;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHand);

/***/ }),

/***/ "./src/js/display/playerTable/displayHeader.js":
/*!*****************************************************!*\
  !*** ./src/js/display/playerTable/displayHeader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var displayHeader = {
  wrapper: null,
  headRowNames: [{
    hand: ['fas', 'fa-hand-paper', 'yellow']
  }, {
    influence: ['fas', 'fa-shield-alt', 'red']
  }, {
    leadership: ['fas', 'fa-trophy', 'yellow']
  }],
  resourcesNames: [{
    tree: ['fab', 'fa-pagelines', 'green']
  }, {
    tower: ['fab', 'fa-fort-awesome', 'grey']
  }, {
    crown: ['fas', 'fa-crown', 'yellow']
  }, {
    bulb: ['fas', 'fa-lightbulb', 'purple']
  }, {
    factory: ['fas', 'fa-industry', 'red']
  }, {
    clock: ['far', 'fa-clock', 'blue']
  }],
  player0: {
    container: null,
    name: null,
    hand: null,
    influence: null,
    leadership: null,
    red: null,
    green: null,
    blue: null,
    purple: null,
    yellow: null,
    tree: null,
    tower: null,
    crown: null,
    bulb: null,
    factory: null,
    clock: null
  },
  player1: {
    container: null,
    name: null,
    hand: null,
    influence: null,
    leadership: null,
    red: null,
    green: null,
    blue: null,
    purple: null,
    yellow: null,
    tree: null,
    tower: null,
    crown: null,
    bulb: null,
    factory: null,
    clock: null
  },
  player2: {
    container: null,
    name: null,
    hand: null,
    influence: null,
    leadership: null,
    red: null,
    green: null,
    blue: null,
    purple: null,
    yellow: null,
    tree: null,
    tower: null,
    crown: null,
    bulb: null,
    factory: null,
    clock: null
  },
  player3: {
    container: null,
    name: null,
    hand: null,
    influence: null,
    leadership: null,
    red: null,
    green: null,
    blue: null,
    purple: null,
    yellow: null,
    tree: null,
    tower: null,
    crown: null,
    bulb: null,
    factory: null,
    clock: null
  },
  initPlayerStats: function initPlayerStats(id) {
    var _this = this;

    var player = "player".concat(id);
    this[player].container = document.createElement('div');
    this[player].container.classList.add('player-container');
    var headRow = document.createElement('div');
    headRow.classList.add('head-row');
    this[player].name = document.createElement('div');
    this[player].name.classList.add('head-row__name');
    this[player].name.textContent = "Player".concat(id);
    headRow.appendChild(this[player].name);
    this.headRowNames.forEach(function (e) {
      var i = Object.keys(e)[0];
      var container = document.createElement('div');
      container.classList.add('cards-container');
      var iconContainer = document.createElement('div');
      iconContainer.classList.add("".concat(e[i][0]), "".concat(e[i][1]), 'cards-container__icon', "card__icon-color--".concat(e[i][2]));
      container.appendChild(iconContainer);
      _this[player][i] = document.createElement('div');

      _this[player][i].classList.add('cards-container__counter');

      _this[player][i].textContent = 0;
      container.appendChild(_this[player][i]);
      headRow.appendChild(container);
    });
    this[player].container.appendChild(headRow);
    var activeZoneRow = document.createElement('div');
    activeZoneRow.classList.add('active-zone-row');
    this[player].red = document.createElement('div');
    this[player].red.classList.add('active-zone-row__red');
    this[player].red.textContent = 0;
    activeZoneRow.appendChild(this[player].red);
    this[player].green = document.createElement('div');
    this[player].green.classList.add('active-zone-row__green');
    this[player].green.textContent = 0;
    activeZoneRow.appendChild(this[player].green);
    this[player].blue = document.createElement('div');
    this[player].blue.classList.add('active-zone-row__blue');
    this[player].blue.textContent = 0;
    activeZoneRow.appendChild(this[player].blue);
    this[player].purple = document.createElement('div');
    this[player].purple.classList.add('active-zone-row__purple');
    this[player].purple.textContent = 0;
    activeZoneRow.appendChild(this[player].purple);
    this[player].yellow = document.createElement('div');
    this[player].yellow.classList.add('active-zone-row__yellow');
    this[player].yellow.textContent = 0;
    activeZoneRow.appendChild(this[player].yellow);
    this[player].container.appendChild(activeZoneRow);
    var recourcesRow = document.createElement('div');
    recourcesRow.classList.add('recources-row');
    this.resourcesNames.forEach(function (e) {
      var i = Object.keys(e)[0]; // console.log(e[i][0]);

      var container = document.createElement('div');
      container.classList.add('recource-container');
      var iconContainer = document.createElement('div');
      iconContainer.classList.add("".concat(e[i][0]), "".concat(e[i][1]), 'recource-container__icon', "card__icon-color--".concat(e[i][2]));
      container.appendChild(iconContainer);
      _this[player][i] = document.createElement('div');

      _this[player][i].classList.add('recource-container__counter');

      _this[player][i].textContent = 0;
      container.appendChild(_this[player][i]);
      recourcesRow.appendChild(container);
    });
    this[player].container.appendChild(recourcesRow);
    this[player].container.classList.add('player-container__hidden');
    this.headerTableWrapper.appendChild(this[player].container);
  },
  changePlayerStats: function changePlayerStats(player) {
    var playerId = "player".concat(player.id);
    this[playerId].hand.textContent = player.hand.length;
    this[playerId].red.textContent = player.activeDecks.red.cards.length;
    this[playerId].green.textContent = player.activeDecks.green.cards.length;
    this[playerId].blue.textContent = player.activeDecks.blue.cards.length;
    this[playerId].purple.textContent = player.activeDecks.purple.cards.length;
    this[playerId].yellow.textContent = player.activeDecks.yellow.cards.length;
    this[playerId].tree.textContent = player.tree;
    this[playerId].tower.textContent = player.tower;
    this[playerId].crown.textContent = player.crown;
    this[playerId].bulb.textContent = player.bulb;
    this[playerId].factory.textContent = player.factory;
    this[playerId].clock.textContent = player.clock;
  },
  initPlayerNames: function initPlayerNames(players) {
    for (var i = 0; i < players.length; i += 1) {
      var currentPlayer = "player".concat(i);
      this[currentPlayer].name.textContent = players[i];
      this[currentPlayer].container.classList.remove('player-container__hidden');
    }
  },
  init: function init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header');
    this.headerTitle = document.createElement('div');
    this.headerTitle.classList.add('header__title');
    this.wrapper.appendChild(this.headerTitle);
    this.headerOverlay = document.createElement('div');
    this.headerOverlay.classList.add('header__overlay');
    this.wrapper.appendChild(this.headerOverlay);
    this.headerTable = document.createElement('div');
    this.headerTable.classList.add('header__table');
    this.headerTableWrapper = document.createElement('div');
    this.headerTableWrapper.classList.add('header__table__wrapper');
    this.headerTable.appendChild(this.headerTableWrapper);
    this.wrapper.appendChild(this.headerTable);
    this.initPlayerStats(0);
    this.initPlayerStats(1);
    this.initPlayerStats(2);
    this.initPlayerStats(3);
    return this.wrapper;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHeader);
/* 'tower', 'crown', 'bulb', 'factory', 'clock' */

/***/ }),

/***/ "./src/js/display/playerTable/displayPlayerTable.js":
/*!**********************************************************!*\
  !*** ./src/js/display/playerTable/displayPlayerTable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _displayHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHeader */ "./src/js/display/playerTable/displayHeader.js");
/* harmony import */ var _displayAside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAside */ "./src/js/display/playerTable/displayAside.js");
/* harmony import */ var _displayActiveZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayActiveZone */ "./src/js/display/playerTable/displayActiveZone.js");
/* harmony import */ var _displayHand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayHand */ "./src/js/display/playerTable/displayHand.js");




var displayPlayerTable = {
  wrapper: null,
  header: null,
  aside: null,
  activeZone: null,
  hand: null,
  init: function init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.wrapperMain = document.createElement('div');
    this.wrapperMain.classList.add('wrapper__main');
    this.header = _displayHeader__WEBPACK_IMPORTED_MODULE_0__.default.init();
    this.wrapperMain.appendChild(this.header);
    this.activeZone = _displayActiveZone__WEBPACK_IMPORTED_MODULE_2__.default.init();
    this.wrapperMain.appendChild(this.activeZone);
    this.hand = _displayHand__WEBPACK_IMPORTED_MODULE_3__.default.init();
    this.wrapperMain.appendChild(this.hand);
    this.aside = _displayAside__WEBPACK_IMPORTED_MODULE_1__.default.init();
    this.wrapper.appendChild(this.wrapperMain);
    this.wrapper.appendChild(this.aside);
    return this.wrapper;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPlayerTable);

/***/ }),

/***/ "./src/js/utility/initHotSeatGame.js":
/*!*******************************************!*\
  !*** ./src/js/utility/initHotSeatGame.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initHotSeatGame
/* harmony export */ });
/* harmony import */ var _components_GameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GameField */ "./src/js/components/GameField.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Player */ "./src/js/components/Player.js");
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game */ "./src/js/components/Game.js");
/* harmony import */ var _cards_parseCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/parseCards */ "./src/js/cards/parseCards.js");
/* harmony import */ var _components_GameUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameUI */ "./src/js/components/GameUI.js");
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuffle */ "./src/js/utility/shuffle.js");
/* harmony import */ var _cards_cards_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/cards.json */ "./src/js/cards/cards.json");




 // import setChat from './setChat';



function initHotSeatGame(playerNames) {
  // contains dom elements
  var gameUI = new _components_GameUI__WEBPACK_IMPORTED_MODULE_4__.default(); // contains sorted card objects

  var arrOfCards = (0,_cards_parseCards__WEBPACK_IMPORTED_MODULE_3__.default)(_cards_cards_json__WEBPACK_IMPORTED_MODULE_6__); // shuffle arr of cards objects

  (0,_shuffle__WEBPACK_IMPORTED_MODULE_5__.default)(arrOfCards); // create gameField which contains all cards avaiable for players

  var gameField = new _components_GameField__WEBPACK_IMPORTED_MODULE_0__.default(arrOfCards); // contains players properties and cards

  var players = [];

  for (var i = 0; i < playerNames.length; i += 1) {
    var player = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.default(gameUI, playerNames[i], i + 1);
    players.push(player);
  } // work with all main objects


  var game = new _components_Game__WEBPACK_IMPORTED_MODULE_2__.default(gameUI, gameField, players, arrOfCards);
  game.newTurn(); // display first modal without animation

  document.querySelector('.modal').style.opacity = '1'; // init chat
  // setChat();
}

/***/ }),

/***/ "./src/js/utility/setAsideControls.js":
/*!********************************************!*\
  !*** ./src/js/utility/setAsideControls.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ setAsideControls
/* harmony export */ });
function setAsideControls() {
  var buttons = Array.from(document.querySelectorAll('.close-modal-btn'));

  function animation(e) {
    var button = e.target;
    var parentBlock = e.target.parentElement.parentElement;
    var childLines = Array.from(parentBlock.children);
    var childBlocks = childLines.map(function (line) {
      return Array.from(line.children);
    }).flat();
    button.removeEventListener('click', animation);
    parentBlock.classList.remove('xyz-in');
    parentBlock.classList.add('xyz-out');
    childBlocks.forEach(function (child) {
      child.classList.remove('xyz-in');
      child.classList.add('xyz-out');
    });
    setTimeout(function () {
      parentBlock.classList.toggle("".concat(parentBlock.className.split(' ')[0], "--hidden"));
      childBlocks.forEach(function (child) {
        child.classList.remove('xyz-out');
        child.classList.add('xyz-in');
        parentBlock.classList.remove('xyz-out');
        parentBlock.classList.add('xyz-in');
      });
      button.addEventListener('click', animation);
    }, 600);
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', animation);
  });
}

/***/ }),

/***/ "./src/js/utility/setHandControls.js":
/*!*******************************************!*\
  !*** ./src/js/utility/setHandControls.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ setGameControls
/* harmony export */ });
// function which disable passed dom element button
function disableBtn(btnElement) {
  btnElement.disabled = true;
  btnElement.classList.add('hand__btn--disabled');
} // function which enable passed dom element button


function enableBtn(btnElement) {
  btnElement.disabled = false;
  btnElement.classList.remove('hand__btn--disabled');
}

function setGameControls() {
  // get needed dom elements
  var btnTop = document.querySelector('.hand__btn--top');
  var btnBottom = document.querySelector('.hand__btn--bottom');
  var hand = document.querySelector('.hand__cards'); // const height of one line of cards (current = 200px card + 70px margins/decoration)
  // dinamically calculated depends on html font-size property

  var html = document.documentElement;
  var style = window.getComputedStyle(html, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  var cardsLineHeight = fontSize * 27; // const timeout used because time needed for scroll animation before values updated

  var timeoutTime = 350; // disable scrolling in hand block

  hand.onwheel = function disableScroll() {
    return false;
  }; // event activated on each inserted card


  hand.addEventListener('DOMNodeInserted', function () {
    // scroll to inserted card (or do nothing)
    hand.scrollTop = hand.scrollHeight - cardsLineHeight;
    disableBtn(btnBottom); // if scrolled to second+ line of cards

    if (hand.scrollHeight > cardsLineHeight) {
      enableBtn(btnTop);
    }
  }); // event activated on each removed card

  hand.addEventListener('DOMNodeRemoved', function () {
    setTimeout(function () {
      // only one line of card left - disable both buttons
      if (hand.scrollHeight === cardsLineHeight) {
        disableBtn(btnBottom);
        disableBtn(btnTop); // if point of view is on last line
        //! cardsLineHeight * 2 because at different resolutions height in px may differ a bit
      } else if (hand.scrollHeight - hand.scrollTop < cardsLineHeight * 2) {
        disableBtn(btnBottom);
      }
    }, timeoutTime);
  }); // event on click at top button

  btnTop.addEventListener('click', function () {
    // block multiple clicks faster then timeoutTime value
    btnTop.disabled = true; // scroll up one line

    hand.scrollTop -= cardsLineHeight; // disable/enable buttons depends on scroll position
    // !important: dont use else here, need 2 separate if blocks

    setTimeout(function () {
      // if point of view at first line
      if (hand.scrollTop === 0) {
        disableBtn(btnTop);
        enableBtn(btnBottom);
      } // if point of view not at first line


      if (hand.scrollTop !== 0) {
        enableBtn(btnBottom); // remove disabled attribute added for blocking multiple clicks

        btnTop.disabled = false;
      }
    }, timeoutTime);
  }); // event on click at botom button

  btnBottom.addEventListener('click', function () {
    // block multiple clicks faster then timeoutTime value
    btnBottom.disabled = true; // scroll down on one line

    hand.scrollTop += cardsLineHeight; // disable/enable buttons depends on scroll position

    setTimeout(function () {
      // if point of view isnt on first line
      if (hand.scrollTop !== 0) {
        enableBtn(btnTop); // remove disabled attribute added for blocking multiple clicks

        btnBottom.disabled = false;
      } // if point of view on last line
      //! cardsLineHeight * 2 because at different resolutions height in px may differ a bit


      if (hand.scrollHeight - hand.scrollTop < cardsLineHeight * 2 && hand.scrollTop !== 0) {
        disableBtn(btnBottom);
      }
    }, timeoutTime);
  });
}

/***/ }),

/***/ "./src/js/utility/shuffle.js":
/*!***********************************!*\
  !*** ./src/js/utility/shuffle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ shuffle
/* harmony export */ });
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

/***/ }),

/***/ "./node_modules/@animxyz/core/dist/animxyz.css":
/*!*****************************************************!*\
  !*** ./node_modules/@animxyz/core/dist/animxyz.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/cards/cards.json":
/*!*********************************!*\
  !*** ./src/js/cards/cards.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse("[{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"гончарное дело\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"инструменты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\",\"resourceName\":\"bulb\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\",\"resourceName\":\"bulb\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"письменность\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>2</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\",\"resourceName\":\"bulb\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\",\"resourceName\":\"bulb\"},{\"position\":\"bottomRight\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"кузнечное дело\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"лук и стрелы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\",\"resourceName\":\"bulb\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"вёсла\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> переместите с руки в мою зону влияния карту, которая приносит <i class='fas fa-crown resourse__icon card__icon-color--yellow'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span> !\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"type\":\"corporate\",\"effect\":\"<b>Если</b> по предыдущей догме не перемещена ни одна карта, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"колесо\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"одежда\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"парус\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и сырайте</b> <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"города\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"свод законов\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"мистицизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если у вас в игре есть стопка того же цвета, сыграйте взятую карту и возьмите <span class = 'age__number'>1</span>. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"каменная кладка\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"скотоводство\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\",\"resourceName\":\"crown\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"земледелие\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> карту с руки. Если сделали это, возьмите и зачтите карту, уровень которой на 1 выше, чем у переработанной.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\",\"resourceName\":\"tree\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"календарь\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"математика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"дороги\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"укрепления\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"деньги\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"картография\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"монотеизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"философия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"каналы\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"виноделие\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"перевод\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"алхимия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"оптика\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"осадные машины\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"компас\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"бумага\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"университеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"феодализм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"медицина\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"механизмы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"печатный станок\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"эксперименты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"колонии\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"порох\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"изобретения\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"навигация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"реформация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"коммерция\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"анатомия\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"перспектива\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"физика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"химия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"добыча угля\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"пиратство\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"банковское дело\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"гуманизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"научные общества\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"астрономия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"паровая машина\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"статистика\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"атомная теория\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"энциклопедия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"фабрики\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"станки\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"метрическая система\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"систематика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"республика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"равноправие\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"вакцинация\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"консервы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"газеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"теория эволюции\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"автомобиль\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"динамит\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"велосипед\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"электричество\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"железные дороги\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"уличное освещение\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"холодильники\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"канализация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"теория относительности\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"ракеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"транспорт\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"авиация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"корпорации\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"радиовещание\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"научный метод\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"коммунизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"антибиотики\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"небоскрёбы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"генетика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"компьютеры\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"фотоэлементы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"ядерная реакция\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"спутники\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"сотрудничество\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"коммуникации\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"специализация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"пригороды\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"экология\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"биотехнологии\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]},{\"innovation\":\"виртуальность\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"type\":\"corporate\",\"effect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"icon\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"нанотехнологии\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"робототехника\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-lightbulb\"],\"color\":\"purple\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"бытовые роботы\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"базы данных\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"type\":\"corporate\",\"effect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"icon\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"искусственный интеллект\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"aggressive\",\"effect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"интернет\",\"agePosition\":\"topLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"icon\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"}],\"resourses\":[{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomCenter\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-pagelines\"],\"color\":\"green\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"стволовые клетки\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomCenter\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]},{\"innovation\":\"глобализация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"type\":\"corporate\",\"effect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"icon\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}],\"resourses\":[{\"position\":\"topLeft\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"},{\"position\":\"bottomLeft\",\"type\":[\"fas\",\"fa-crown\"],\"color\":\"yellow\"},{\"position\":\"bottomRight\",\"type\":[\"fab\",\"fa-fort-awesome\"],\"color\":\"grey\"}]}]}]");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map