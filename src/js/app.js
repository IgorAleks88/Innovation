// import styles
import '../scss/style.scss';
import '@animxyz/core';

// import js modules
import intro from './components/Intro';
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import setHandControls from './utility/setHandControls';
import setAsideControls from './utility/setAsideControls';
import initHotSeatGame from './utility/initHotSeatGame';

// display intro & menu
// intro.init();

// load and display base game UI
document.body.prepend(displayPlayerTable.init());
setHandControls();
setAsideControls();

const users = {
  players: 3,
  names: ['player1', 'player2', 'player3'],
};
initHotSeatGame(users);
