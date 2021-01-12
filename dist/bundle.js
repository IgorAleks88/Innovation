/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _animxyz_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @animxyz/core */ "./node_modules/@animxyz/core/dist/animxyz.css");
/* harmony import */ var _display_playerTable_displayPlayerTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/playerTable/displayPlayerTable */ "./src/js/display/playerTable/displayPlayerTable.js");
/* harmony import */ var _utility_setHandControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/setHandControls */ "./src/js/utility/setHandControls.js");
/* harmony import */ var _utility_setAsideControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/setAsideControls */ "./src/js/utility/setAsideControls.js");
/* harmony import */ var _utility_initHotSeatGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility/initHotSeatGame */ "./src/js/utility/initHotSeatGame.js");
// import styles

 // import js modules



 // import Intro from './components/Intro';

 // display intro & menu
// Intro.init();
// display game UI

document.body.prepend(_display_playerTable_displayPlayerTable__WEBPACK_IMPORTED_MODULE_2__.default.init()); // add event listeners to hand controls

(0,_utility_setHandControls__WEBPACK_IMPORTED_MODULE_3__.default)(); // add event listeners and animations to aside buttons

(0,_utility_setAsideControls__WEBPACK_IMPORTED_MODULE_4__.default)();
(0,_utility_initHotSeatGame__WEBPACK_IMPORTED_MODULE_5__.default)('Player1', 'Player2');

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
      divDogma.setAttribute('data-dogmatype', item.dogmaType);
      var icon = document.createElement('i');
      icon.classList.add(item.dogmaIcon[0], item.dogmaIcon[1], 'card__icon', "card__icon-color--".concat(item.dogmaColor));
      divDogma.appendChild(icon);
      var dogma = document.createElement('span');
      dogma.classList.add('dogma__effect');
      dogma.innerHTML = item.dogmaEffect;
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
      var pos = divCard.querySelector(".card__".concat(res.resoursePosition));
      pos.classList.add("".concat(res.resourseType[0]), "".concat(res.resourseType[1]), "card__icon-color--".concat(res.resourseColor), "card__icon-border--".concat(card.color));
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

/***/ "./src/js/components/Game.js":
/*!***********************************!*\
  !*** ./src/js/components/Game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Game
/* harmony export */ });
/* harmony import */ var _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/playerTable/displayHeader */ "./src/js/display/playerTable/displayHeader.js");
/* harmony import */ var _display_displayNewTurnModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/displayNewTurnModal */ "./src/js/display/displayNewTurnModal.js");
/* harmony import */ var _display_displayNextTurnBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/displayNextTurnBtn */ "./src/js/display/displayNextTurnBtn.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ "./src/js/components/gameState.js");
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
    this.initGameState(players, arrOfCards);
  }

  _createClass(Game, [{
    key: "initGameState",
    value: function initGameState(players, arrOfCards) {
      arrOfCards.forEach(function (e) {
        switch (+e.age) {
          case 1:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age1.push(e.innovation);
            break;

          case 2:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age2.push(e.innovation);
            break;

          case 3:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age3.push(e.innovation);
            break;

          case 4:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age4.push(e.innovation);
            break;

          case 5:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age5.push(e.innovation);
            break;

          case 6:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age6.push(e.innovation);
            break;

          case 7:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age7.push(e.innovation);
            break;

          case 8:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age8.push(e.innovation);
            break;

          case 9:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age9.push(e.innovation);
            break;

          case 10:
            _gameState__WEBPACK_IMPORTED_MODULE_3__.default.ageDecks.age10.push(e.innovation);
            break;

          default:
            throw new Error("Wrong number on age field in ".concat(e));
        }
      });

      for (var i = 0; i < players.length; i += 1) {
        var player = "player".concat(i);
        _gameState__WEBPACK_IMPORTED_MODULE_3__.default[player].name = players[i].name;
        _gameState__WEBPACK_IMPORTED_MODULE_3__.default.players.push(_gameState__WEBPACK_IMPORTED_MODULE_3__.default[player]);
      }

      _gameState__WEBPACK_IMPORTED_MODULE_3__.default.currentPlayer = _gameState__WEBPACK_IMPORTED_MODULE_3__.default.players[0];
      _gameState__WEBPACK_IMPORTED_MODULE_3__.default.currentPlayer.actionPoints = 2;
      _gameState__WEBPACK_IMPORTED_MODULE_3__.default.activePlayer = _gameState__WEBPACK_IMPORTED_MODULE_3__.default.players[0];
    }
  }, {
    key: "newTurn",
    value: function newTurn() {
      var _this2 = this;

      this.setCurrentPlayer();
      (0,_display_displayNewTurnModal__WEBPACK_IMPORTED_MODULE_1__.default)(this.currentPlayer.name);
      this.turnPoints = 2; // timeout to display modal

      setTimeout(function () {
        _this2.removeActiveDeck();

        _this2.setActiveDeck(_this2.currentPlayer);

        _this2.currentPlayer.renderHand();

        _this2.currentPlayer.renderActiveZone();

        _this2.updateInfoTable();
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
        (0,_display_displayNextTurnBtn__WEBPACK_IMPORTED_MODULE_2__.default)(this.newTurn.bind(this));
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
      var _this3 = this;

      Object.keys(this.gameField.ageDecks).forEach(function (ageDeckKey) {
        if (ageDeckKey === "age".concat(currentPlayer.currentAge)) {
          // store active deck dom element
          _this3.currentDeck.domElement = _this3.gameUI.ageDecks["age".concat(currentPlayer.currentAge)]; // store active deck cards array

          _this3.currentDeck.cardsArray = _this3.gameField.ageDecks[ageDeckKey]; //! Change current players currentAge if needed deck empty to go for the next deck
          //! Need recalcualte current age after each action, done by players method setCurrentAge

          if (_this3.currentDeck.cardsArray.length === 0) {
            _this3.currentPlayer.currentAge += 1;
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
    value: function takeCard() {
      this.currentPlayer.setCurrentAge(); // recalculate current age of player

      this.currentPlayer.hand.push(this.currentDeck.cardsArray.pop());
      this.currentPlayer.renderLastTakenCard();
      _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_0__.default.changePlayerStats(this.currentPlayer); // starts next phase of turn

      this.actionDone();
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
/* harmony import */ var _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/playerTable/displayHeader */ "./src/js/display/playerTable/displayHeader.js");
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
        shift: null
      },
      red: {
        cards: [],
        shift: null
      },
      green: {
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
        cardElement.removeAttribute('xyz');
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
      var _this6 = this;

      Object.keys(this.activeStacks).forEach(function (stackName) {
        if (stackName === cardObj.color) {
          _this6.hand.forEach(function (e, i) {
            if (e === cardObj) {
              _this6.hand.splice(i, 1);
            }
          });

          _this6.activeStacks[stackName].cards.push(cardObj);

          _this6.gameUI.activeStacks[stackName].append(cardElement);
        }
      });
      this.calculateResources();
      _display_playerTable_displayHeader__WEBPACK_IMPORTED_MODULE_1__.default.changePlayerStats(this);
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
    }
  },
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: [],
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
    }
  },
  player2: {
    name: null,
    id: 2,
    actionPoints: 0,
    hand: [],
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
    }
  },
  player3: {
    name: null,
    id: 3,
    actionPoints: 0,
    hand: [],
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameState);

/***/ }),

/***/ "./src/js/display/displayNewTurnModal.js":
/*!***********************************************!*\
  !*** ./src/js/display/displayNewTurnModal.js ***!
  \***********************************************/
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

/***/ "./src/js/display/displayNextTurnBtn.js":
/*!**********************************************!*\
  !*** ./src/js/display/displayNextTurnBtn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ displayNextTurnBtn
/* harmony export */ });
function displayNextTurnBtn(newTurnFunction) {
  var nextTurnBtn = document.createElement('div');
  nextTurnBtn.classList.add('info-table__next-turn-btn');
  nextTurnBtn.innerText = 'Закончить ход';
  nextTurnBtn.addEventListener('click', function () {
    newTurnFunction();
    setTimeout(function () {
      var excistedNextTurnBtn = document.querySelector('.info-table__next-turn-btn');
      excistedNextTurnBtn.remove();
    }, 500);
  });
  var infoTable = document.querySelector('.info-table');
  infoTable.append(nextTurnBtn);
}

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
    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('active-zone__cards');
    this.cardsBlockOverlay = document.createElement('div');
    this.cardsBlockOverlay.classList.add('active-zone__overlay'); // create players active stacks
    // !Stack names are the color fields of cards object

    var stacksNames = ['blue', 'red', 'green', 'purple', 'yellow'];

    for (var i = 0; i < stacksNames.length; i += 1) {
      var stack = document.createElement('div');
      stack.classList.add('active-zone__stack');
      stack.id = stacksNames[i]; // id stackName for each stack

      this.cardsBlock.append(stack);
    }

    this.wrapper.append(this.cardsBlockOverlay);
    this.wrapper.append(this.cardsBlock);
    this.controlsBlock = document.createElement('div');
    this.controlsBlock.classList.add('active-zone__controls');
    this.wrapper.append(this.controlsBlock);
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
    this.wrapper.classList.add('aside'); // append createand blocks to aside wrapper

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
    specialCardsTitle.innerText = 'Специальные';
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
    leadershipCardsTitle.innerText = 'Лидерство';
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
  player4: {
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
    this.wrapper.appendChild(this[player].container);
  },
  changePlayerStats: function changePlayerStats(player) {
    var playerId = "player".concat(player.id);
    this[playerId].hand.textContent = player.hand.length;
    this[playerId].red.textContent = player.activeStacks.red.cards.length;
    this[playerId].green.textContent = player.activeStacks.green.cards.length;
    this[playerId].blue.textContent = player.activeStacks.blue.cards.length;
    this[playerId].purple.textContent = player.activeStacks.purple.cards.length;
    this[playerId].yellow.textContent = player.activeStacks.yellow.cards.length;
    this[playerId].tree.textContent = player.tree;
    this[playerId].tower.textContent = player.tower;
    this[playerId].crown.textContent = player.crown;
    this[playerId].bulb.textContent = player.bulb;
    this[playerId].factory.textContent = player.factory;
    this[playerId].clock.textContent = player.clock;
  },
  init: function init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header');
    this.initPlayerStats(1);
    this.initPlayerStats(2);
    /* this.initPlayerStats(this.testPlayer3);
    this.initPlayerStats(this.testPlayer4); */

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

/***/ "./src/js/utility/getCardObject.js":
/*!*****************************************!*\
  !*** ./src/js/utility/getCardObject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getCardObject
/* harmony export */ });
function getCardObject(id, arr) {
  var result = {};

  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i].innovation === id) {
      result = arr[i];
      break;
    }
  }

  return result;
}

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
/* harmony import */ var _cards_cards_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/cards.json */ "./src/js/cards/cards.json");
/* harmony import */ var _cards_parseCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/parseCards */ "./src/js/cards/parseCards.js");
/* harmony import */ var _components_GameUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameUI */ "./src/js/components/GameUI.js");
/* harmony import */ var _setChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setChat */ "./src/js/utility/setChat.js");
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shuffle */ "./src/js/utility/shuffle.js");
/* harmony import */ var _getCardObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getCardObject */ "./src/js/utility/getCardObject.js");
/* harmony import */ var _components_gameState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/gameState */ "./src/js/components/gameState.js");










function initHotSeatGame() {
  // contains dom elements
  var gameUI = new _components_GameUI__WEBPACK_IMPORTED_MODULE_5__.default(); // contains sorted card objects

  var arrOfCards = (0,_cards_parseCards__WEBPACK_IMPORTED_MODULE_4__.default)(_cards_cards_json__WEBPACK_IMPORTED_MODULE_3__); // shuffle arr of cards objects

  (0,_shuffle__WEBPACK_IMPORTED_MODULE_7__.default)(arrOfCards); // create gameField which contains all cards avaiable for players

  var gameField = new _components_GameField__WEBPACK_IMPORTED_MODULE_0__.default(arrOfCards); // contains players properties and cards

  var players = [];

  for (var i = 0; i < arguments.length; i += 1) {
    var player = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.default(gameUI, arguments[i], i + 1);
    players.push(player);
  } // work with all main objects


  var game = new _components_Game__WEBPACK_IMPORTED_MODULE_2__.default(gameUI, gameField, players, arrOfCards);
  game.newTurn(); // display first modal without animation

  document.querySelector('.modal').style.opacity = '1'; // gameStateService.initPlayers('Player1', 'Player2');
  // gameStateService.initAgeDecks(arrOfCards);

  console.log(_components_gameState__WEBPACK_IMPORTED_MODULE_9__.default); // init chat

  (0,_setChat__WEBPACK_IMPORTED_MODULE_6__.default)();
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

/***/ "./src/js/utility/setChat.js":
/*!***********************************!*\
  !*** ./src/js/utility/setChat.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ setChat
/* harmony export */ });
function setChat() {
  // eslint-disable-next-line no-undef
  var socket = io();
  var messageContainer = document.querySelector('.chat-block');
  var messageForm = document.querySelector('.chat-log__form');
  var messageInput = document.querySelector('.chat-log__input');
  var players = document.querySelectorAll('.head-row__name');
  var userName = prompt('What is your name?');

  function appendMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
  }

  function autoScroll() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  appendMessage('You joined');
  socket.emit('new-user', userName);
  socket.on('chat-message', function (data) {
    appendMessage("".concat(data.name, ": ").concat(data.message));
    autoScroll();
  });
  socket.on('user-connected', function (name) {
    appendMessage("".concat(name, " connected"));
  });
  socket.on('players', function (name) {
    var nameOfUsers = Object.values(name);
    players.forEach(function (el, i) {
      el.textContent = nameOfUsers[i];
    });
  });
  socket.on('user-disconnected', function (name) {
    appendMessage("".concat(name, " disconnected"));
  });
  messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (messageInput.value === '') return;
    var message = messageInput.value;
    appendMessage("You: ".concat(message));
    socket.emit('send-chat-message', message);
    autoScroll();
    messageInput.value = '';
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

module.exports = JSON.parse("[{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"гончарное дело\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"инструменты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\",\"resourceName\":\"bulb\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\",\"resourceName\":\"bulb\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"письменность\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>2</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\",\"resourceName\":\"bulb\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\",\"resourceName\":\"bulb\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"кузнечное дело\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"лук и стрелы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\",\"resourceName\":\"bulb\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"вёсла\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> переместите с руки в мою зону влияния карту, которая приносит <i class='fas fa-crown resourse__icon card__icon-color--yellow'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span> !\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Если</b> по предыдущей догме не перемещена ни одна карта, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"колесо\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"одежда\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"парус\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и сырайте</b> <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"города\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"свод законов\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"}]},{\"innovation\":\"мистицизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если у вас в игре есть стопка того же цвета, сыграйте взятую карту и возьмите <span class = 'age__number'>1</span>. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]}]},{\"age\":1,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"каменная кладка\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"скотоводство\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\",\"resourceName\":\"crown\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\",\"resourceName\":\"tower\"}]},{\"innovation\":\"земледелие\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> карту с руки. Если сделали это, возьмите и зачтите карту, уровень которой на 1 выше, чем у переработанной.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\",\"resourceName\":\"tree\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"календарь\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"математика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"дороги\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"укрепления\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"деньги\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"картография\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"монотеизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"философия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":2,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"каналы\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"виноделие\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"перевод\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"алхимия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"оптика\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"осадные машины\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"компас\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"бумага\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"университеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"феодализм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":3,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"медицина\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"механизмы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"печатный станок\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"эксперименты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"колонии\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"порох\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"изобретения\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"навигация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"реформация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"коммерция\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":4,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"анатомия\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"перспектива\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"физика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"химия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"добыча угля\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"пиратство\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"банковское дело\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"гуманизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"научные общества\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"астрономия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":5,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"паровая машина\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"статистика\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"атомная теория\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"энциклопедия\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"фабрики\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"станки\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"метрическая система\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"систематика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"республика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"равноправие\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":6,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"вакцинация\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"консервы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"газеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"теория эволюции\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"автомобиль\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"динамит\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"велосипед\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"электричество\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"железные дороги\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"уличное освещение\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":7,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"холодильники\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"канализация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"теория относительности\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"ракеты\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"транспорт\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"авиация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"корпорации\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"радиовещание\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"научный метод\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"коммунизм\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":8,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"антибиотики\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"небоскрёбы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"генетика\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"компьютеры\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"фотоэлементы\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"ядерная реакция\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"спутники\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"сотрудничество\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"коммуникации\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"специализация\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":9,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"пригороды\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"экология\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"blue\",\"cards\":[{\"innovation\":\"биотехнологии\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> до трех карт с руки. Если сделали это, возьмите и зачтите карту того уровня, сколько карт переработали.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]},{\"innovation\":\"виртуальность\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> три карты с руки. Если сделали это, возьмите и сыграйте <span class = 'age__number'>3</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете переработать</b> <span class = 'age__number'>3</span> с руки. Если сделали это, возьмите три <span class = 'age__number'>1</span>\",\"dogmaIcon\":[\"fas\",\"fa-lightbulb\"],\"dogmaColor\":\"purple\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"red\",\"cards\":[{\"innovation\":\"нанотехнологии\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и покажите</b> всем игрокам <span class = 'age__number'>1</span>. Если она приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i>, зачтите ее и выполните эту догму снова. В противном случае заберите ее на руку.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"робототехника\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> возьмите <span class = 'age__number'>1</span> ! Затем переместите старшую карту с руки мне на руку!\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-lightbulb\"],\"resourseColor\":\"purple\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"green\",\"cards\":[{\"innovation\":\"бытовые роботы\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите</b> две <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"базы данных\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> с руки карту, если у вас в игре нет стопки того же цвета.\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"},{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Возьмите и зачтите</b> <span class = 'age__number'>1</span> за каждый цвет, который есть у вас в игре, но отсутствует в игре у всех соперников\",\"dogmaIcon\":[\"fab\",\"fa-pagelines\"],\"dogmaColor\":\"green\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"purple\",\"cards\":[{\"innovation\":\"искусственный интеллект\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"aggressive\",\"dogmaEffect\":\"<b>Я требую:</b> если ваши карты приносят 4 <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> или больше, переместите мне в игру активную карту, которая приносит <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> ! Если сделали это, возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"интернет\",\"agePosition\":\"topLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете архивировать</b> с руки карту любого цвета, который есть у вас в игре. Если сделали это, можете сдвинуть стопку этого цвета влево.\",\"dogmaIcon\":[\"fas\",\"fa-crown\"],\"dogmaColor\":\"yellow\"}],\"resourses\":[{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-pagelines\"],\"resourseColor\":\"green\"}]}]},{\"age\":10,\"cardImg\":\"./assets/img/cards-bg/age-01.jpg\",\"color\":\"yellow\",\"cards\":[{\"innovation\":\"стволовые клетки\",\"agePosition\":\"bottomLeft\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Вы можете сыграть</b> с руки сколько угодно карт, которые приносят <i class='fab fa-fort-awesome resourse__icon card__icon-color--grey'></i> Если сыграли 4 или больше карт, добейтесь лидерства в \\\"Строительстве\\\".\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomCenter\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]},{\"innovation\":\"глобализация\",\"agePosition\":\"bottomCenter\",\"dogma\":[{\"dogmaType\":\"corporate\",\"dogmaEffect\":\"<b>Сыграйте</b> младшую карту с руки. Возьмите <span class = 'age__number'>1</span>.\",\"dogmaIcon\":[\"fab\",\"fa-fort-awesome\"],\"dogmaColor\":\"grey\"}],\"resourses\":[{\"resoursePosition\":\"topLeft\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"},{\"resoursePosition\":\"bottomLeft\",\"resourseType\":[\"fas\",\"fa-crown\"],\"resourseColor\":\"yellow\"},{\"resoursePosition\":\"bottomRight\",\"resourseType\":[\"fab\",\"fa-fort-awesome\"],\"resourseColor\":\"grey\"}]}]}]");

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