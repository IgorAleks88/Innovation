// import styles
import '../scss/style.scss';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import CardsUI from './cards-ui/cards-ui';
import Menu from './mainMenu';

// app
document.body.appendChild(displayPlayerTable.init());
const menu = new Menu(document.body);
menu.render();

CardsUI.init();
