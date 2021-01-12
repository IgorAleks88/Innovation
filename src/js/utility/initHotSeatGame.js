import GameField from '../components/GameField';
import Player from '../components/Player';
import Game from '../components/Game';
import cardsJSON from '../cards/cards.json';
import parseCards from '../cards/parseCards';
import GameUI from '../components/GameUI';
import setChat from './setChat';
import shuffle from './shuffle';
import getCardObject from './getCardObject';

import gameStateService from '../components/gameStateService';

export default function initHotSeatGame() {
  // contains dom elements
  const gameUI = new GameUI();

  // contains sorted card objects
  const arrOfCards = parseCards(cardsJSON);

  // shuffle arr of cards objects
  shuffle(arrOfCards);

  // create gameField which contains all cards avaiable for players
  const gameField = new GameField(arrOfCards);

  // contains players properties and cards
  const players = [];
  for (let i = 0; i < arguments.length; i += 1) {
    const player = new Player(gameUI, arguments[i], i + 1);
    players.push(player);
  }

  // work with all main objects
  const game = new Game(gameUI, gameField, players);
  game.newTurn();
  // display first modal without animation
  document.querySelector('.modal').style.opacity = '1';

  gameStateService.initPlayers('Player1', 'Player2');
  gameStateService.initAgeDecks(arrOfCards);
  console.log(getCardObject('колесо', arrOfCards));
  // init chat
  setChat();
}
