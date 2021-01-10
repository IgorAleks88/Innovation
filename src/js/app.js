// import styles
import '../scss/style.scss';
import '@animxyz/core';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import setHandControls from './utility/setHandControls';
import setAsideControls from './utility/setAsideControls';
// import Menu from './components/mainMenu';
import GameField from './components/GameField';
import Player from './components/Player';
import Game from './components/Game';
import cardsJSON from './cards/cards.json';
import parseCards from './cards/parseCards';
import GameUI from './components/GameUI';
import Intro from './components/Intro';
import setChat from './utility/setChat';
import shuffle from './utility/shuffle';

// display intro
// Intro.init();

// display game UI
document.body.prepend(displayPlayerTable.init());

// add event listeners to hand controls
setHandControls();

// add event listeners and animations to aside buttons
setAsideControls();

// contains dom elements
const gameUI = new GameUI();

// contains sorted card objects
const arrOfCards = parseCards(cardsJSON);

// shuffle arr of cards objects
shuffle(arrOfCards);

// create gameField which contains all cards avaiable for players
const gameField = new GameField(arrOfCards);

// contains players properties and cards
const player1 = new Player(gameUI, 'Player1', 1);
const player2 = new Player(gameUI, 'Player2', 2);

// work with all main objects
const game = new Game(gameUI, player1, player2, gameField);
game.newTurn();

// init chat
setChat();
