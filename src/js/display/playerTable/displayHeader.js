// import game from '../../components/Game';

const displayHeader = {
  wrapper: null,
  player1Container: null,
  player1Red: null,
  player1Green: null,
  player1Blue: null,
  player1Purple: null,
  player1Yellow: null,
  player2Container: null,
  player3Container: null,
  player4Container: null,
  testPlayer1: {
    id: 1,
    activeStacks: {
      blue: [],
      red: [1, 2, 3],
      green: [],
      purple: [],
      yellow: [],
    },
  },
  testPlayer2: {
    id: 2,
    activeStacks: {
      blue: [],
      red: [4, 5, 6, 7, 8],
      green: [],
      purple: [],
      yellow: [],
    },
  },
  testPlayer3: {
    id: 3,
    activeStacks: {
      blue: [],
      red: [9, 10, 11],
      green: [],
      purple: [],
      yellow: [],
    },
  },
  testPlayer4: {
    id: 4,
    activeStacks: {
      blue: [],
      red: [],
      green: [],
      purple: [],
      yellow: [],
    },
  },

  initPlayerStats(id) {
    const container = `player${id}Container`;
    const red = `player${id}Red`;
    const green = `player${id}Green`;
    const blue = `player${id}Blue`;
    const purple = `player${id}Purple`;
    const yellow = `player${id}Yellow`;
    this[container] = document.createElement('div');
    this[container].classList.add('player-container');

    const headRow = document.createElement('div');
    headRow.classList.add('head-row');
    this[container].appendChild(headRow);

    const activeZoneRow = document.createElement('div');
    activeZoneRow.classList.add('active-zone-row');

    this[red] = document.createElement('div');
    this[red].classList.add('active-zone-row__red');
    this[red].textContent = 0;
    activeZoneRow.appendChild(this[red]);

    this[green] = document.createElement('div');
    this[green].classList.add('active-zone-row__green');
    this[green].textContent = 0;
    activeZoneRow.appendChild(this[green]);

    this[blue] = document.createElement('div');
    this[blue].classList.add('active-zone-row__blue');
    this[blue].textContent = 0;
    activeZoneRow.appendChild(this[blue]);

    this[purple] = document.createElement('div');
    this[purple].classList.add('active-zone-row__purple');
    this[purple].textContent = 0;
    activeZoneRow.appendChild(this[purple]);

    this[yellow] = document.createElement('div');
    this[yellow].classList.add('active-zone-row__yellow');
    this[yellow].textContent = 0;
    activeZoneRow.appendChild(this[yellow]);

    this[container].appendChild(activeZoneRow);

    const recourcesRow = document.createElement('div');
    recourcesRow.classList.add('recources-row');
    this[container].appendChild(recourcesRow);
    this.wrapper.appendChild(this[container]);
  },

  changePlayerStats(player) {
    const red = `player${player.id}Red`;
    const green = `player${player.id}Green`;
    const blue = `player${player.id}Blue`;
    const purple = `player${player.id}Purple`;
    const yellow = `player${player.id}Yellow`;

    this[red].textContent = player.activeStacks.red.length;
    this[green].textContent = player.activeStacks.green.length;
    this[blue].textContent = player.activeStacks.blue.length;
    this[purple].textContent = player.activeStacks.purple.length;
    this[yellow].textContent = player.activeStacks.yellow.length;
  },

  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header');
    this.initPlayerStats(1);
    this.initPlayerStats(2);
    /* this.initPlayerStats(this.testPlayer3);
    this.initPlayerStats(this.testPlayer4); */
    return this.wrapper;
  },
};

export default displayHeader;
