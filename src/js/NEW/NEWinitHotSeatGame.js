import initGameState from './initGameState';
import gameBoard from './gameBoard';
import header from '../display/playerTable/displayHeader';

export default function initHotSeatGame(usersInfo) {
  initGameState(usersInfo);
  gameBoard.display();
  header.initPlayerNames(usersInfo.names);
  gameBoard.init();
}
