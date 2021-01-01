// import styles
import '../scss/style.scss';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import setHandControls from './utility/setHandControls';
import Menu from './components/mainMenu';
import GameField from './components/GameField';
import Player from './components/Player';
import Game from './components/Game';
import cardsJSON from './cards/cards.json';
import parseCards from './cards/parseCards';

// display game UI
document.body.appendChild(displayPlayerTable.init());

// set up and display main menu
//! important: render menu must run after display game UI block. Else - bugged.
const menu = new Menu(document.body);
menu.render();

// add event listeners to hand controls
setHandControls();

//! UNDER CONSTRUCTION
const arrOfCards = parseCards(cardsJSON);
const gameField = new GameField(arrOfCards);

const player1 = new Player('Player1');
const player2 = new Player('Player2');

const game = new Game(player1, player2, gameField);
