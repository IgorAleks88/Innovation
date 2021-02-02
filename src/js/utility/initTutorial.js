import initTutorialGameState from './initTutorialGameState';
import gameBoard from '../components/gameBoard';
import header from '../display/playerTable/displayHeader';
import resetGameState from './resetGameState';

export default function initTutorial() {
  // remove existed btn left from previous game
  const existedBtn = document.querySelector('.info-table__next-turn-btn');
  if (existedBtn !== null) existedBtn.remove();
  // reset gameState
  resetGameState();
  // reset header
  [...document.querySelectorAll('.player-container')].forEach((playerBlock) => {
    playerBlock.classList.add('player-container__hidden');
  });

  // initialize game board shaders

  document.querySelector('.active-zone').style.zIndex = 120;
  document.querySelector('.active-zone__shader').classList.remove('active-zone__shader--hidden');
  document.querySelector('.active-zone__title').classList.add('active-zone__title--shade');
  document.querySelector('.aside').style.zIndex = 120;
  document.querySelector('.aside__shader').classList.remove('aside__shader--hidden');
  document.querySelector('.hand').style.zIndex = 120;
  document.querySelector('.aside').style.zIndex = 120;
  document.querySelector('.aside__shader').classList.remove('aside__shader--hidden');
  document.querySelector('.header').style.zIndex = 120;
  document.querySelector('.header__shader').classList.remove('header__shader--hidden');
  document.querySelector('#player1-hand').style.zIndex = 0;
  document.querySelector('#player1-influence').style.zIndex = 0;
  document.querySelector('#player1-active').style.zIndex = 0;
  document.querySelector('.header__title').style.zIndex = 0;
  document.querySelector('.active-zone__title').style.zIndex = 15;
  document.querySelector('.hand__title').style.zIndex = 10;
  // initialize new game
  initTutorialGameState();
  gameBoard.display();
  header.initPlayerNames(['Игрок1', 'Игрок2']);
  gameBoard.init();
}
