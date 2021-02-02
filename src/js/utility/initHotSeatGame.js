import initGameState from './initGameState';
import gameBoard from '../components/gameBoard';
import header from '../display/playerTable/displayHeader';
import resetGameState from './resetGameState';
import displayModal from '../display/displayModal';

export default function initHotSeatGame(usersInfo) {
  // remove existed btn left from previous game
  const existedBtn = document.querySelector('.info-table__next-turn-btn');
  if (existedBtn !== null) existedBtn.remove();
  // reset gameState
  resetGameState();
  // reset header
  [...document.querySelectorAll('.player-container')].forEach((playerBlock) => {
    playerBlock.classList.add('player-container__hidden');
  });

  if (displayModal.modalBlock) {
    displayModal.modalBlock.classList.add('modal-tutorial__block--hidden');
  }
  document.querySelector('.active-zone__shader').classList.add('active-zone__shader--hidden');
  document.querySelector('.active-zone__title').classList.remove('active-zone__title--shade');
  document.querySelector('.aside__shader').classList.add('aside__shader--hidden');
  document.querySelector('.header__shader').classList.add('header__shader--hidden');
  document.querySelector('.hand__shader').classList.add('hand__shader--hidden');
  document.querySelector('.hand__title').classList.remove('hand__title--shade');
  document.querySelector('.header__title').style.zIndex = 3;
  document.querySelector('.active-zone__title').style.zIndex = 25;
  document.querySelector('.hand__title').style.zIndex = 25;

  // initialize new game
  initGameState(usersInfo);
  gameBoard.display();
  header.initPlayerNames(usersInfo.names);
  gameBoard.init();
}
