// import styles
import '../scss/style.scss';

// import js modules
import displayPlayerTable from './display/playerTable/displayPlayerTable';
import CardsUI from './cards-ui/cards-ui';

// app
document.body.appendChild(displayPlayerTable.init());
CardsUI.init();
