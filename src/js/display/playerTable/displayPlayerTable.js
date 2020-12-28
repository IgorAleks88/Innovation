import displayHeader from './displayHeader';
import displayAside from './displayAside';
import displayActiveZone from './displayActiveZone';
import displayHand from './displayHand';

const displayPlayerTable = {
  wrapper: null,
  header: null,
  aside: null,
  activeZone: null,
  hand: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('player-table-wrapper');
    this.header = displayHeader.init();
    this.wrapper.appendChild(this.header);
    this.aside = displayAside.init();
    this.wrapper.appendChild(this.aside);
    this.activeZone = displayActiveZone.init();
    this.wrapper.appendChild(this.activeZone);
    this.hand = displayHand.init();
    this.wrapper.appendChild(this.hand);
    return this.wrapper;
  },

};

export default displayPlayerTable;
