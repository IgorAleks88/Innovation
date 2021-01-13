// import styles
import '../scss/style.scss';
import '@animxyz/core';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import setHandControls from './utility/setHandControls';
import setAsideControls from './utility/setAsideControls';
import intro from './components/Intro';

// display intro & menu
intro.init();

// display game UI
document.body.prepend(displayPlayerTable.init());

// add event listeners to hand controls
setHandControls();

// add event listeners and animations to aside buttons
setAsideControls();

//! Added for testing! Uncomment next 2 lines and comment line 12 with Intro.init()
// import initHotSeatGame from './utility/initHotSeatGame';
// initHotSeatGame('Player1', 'Player2');
