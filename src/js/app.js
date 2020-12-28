// import styles
import '../scss/style.scss';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import GameField from './components/GameField'; // TEST
import Player from './components/Player'; // TEST
import Game from './components/Game'; // TEST

// app
document.body.appendChild(displayPlayerTable.init());

// TEST BLOCK
const gameField = new GameField();
const player1 = new Player();
const player2 = new Player();
const game = new Game(player1, player2, gameField);
