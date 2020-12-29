// import styles
import '../scss/style.scss';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import GameField from './components/GameField'; // TEST
import Player from './components/Player'; // TEST
import Game from './components/Game'; // TEST

// app
document.body.appendChild(displayPlayerTable.init());

//! TEST BLOCK
// TODO remove commented console.logs, added for tests
// create default game field object
const gameField = new GameField();
// console.log('Default gamefield is');
// console.log(gameField);
// console.log('================================');

// create 2 players (set number of players later)
// TODO remove commented console.logs, added for tests
const player1 = new Player('Player1');
const player2 = new Player('Player2');
// console.log('Default player is');
// console.log(player1);
// console.log('================================');

// create main game object which operate with players and gamefield
const game = new Game(player1, player2, gameField);
