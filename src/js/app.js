// import styles
import '../scss/style.scss';
import '@animxyz/core';

// import js modules
import intro from './components/Intro';
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import setHandControls from './utility/setHandControls';
import setAsideControls from './utility/setAsideControls';

// display intro & menu
intro.init();

// display game UI
document.body.prepend(displayPlayerTable.init());

// add event listeners to hand controls
setHandControls();

// add event listeners and animations to aside buttons
setAsideControls();
