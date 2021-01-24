const gameState = {
  ageDecks: {
    age1: [],
    age2: [],
    age3: [],
    age4: [],
    age5: [],
    age6: [],
    age7: [],
    age8: [],
    age9: [],
    age10: [],
  },
  leadershipDeck: [],
  specialDeck: [],
  players: [],
  currentPlayer: null,
  activePlayer: null,
  dogmPlayers: null,
  player0: {
    name: null,
    id: 0,
    actionPoints: 0,
    hand: ['скотоводство', 'письменность', 'парус', 'инструменты'], //! remove
    currentAge: 1,
    currentDeck: 'age1', // test
    activeDecks: {
      red: {
        cards: ['станки'],
        shift: 'right', //! test
      },
      green: {
        cards: [],
        shift: 'right', //! test
      },
      blue: {
        cards: ['генетика'],
        shift: 'right', //! test
      },
      purple: {
        cards: [],
        shift: 'right', //! test
      },
      yellow: {
        cards: ['консервы', 'скотоводство', 'земледелие'],
        shift: 'left', //! test
      },
    },
    influence: {
      points: 0,
      cards: [],
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0,
  },
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: ['алхимия', 'одежда', 'вёсла'],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: 'top', //! test
      },
      green: {
        cards: [],
        shift: 'top', //! test
      },
      blue: {
        cards: [],
        shift: 'top', //! test
      },
      purple: {
        cards: [],
        shift: 'top',
      },
      yellow: {
        cards: [],
        shift: 'top',
      },
    },
    influence: {
      points: 0,
      cards: [],
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0,
  },
  player2: {
    name: null,
    id: 2,
    actionPoints: 0,
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null,
      },
      green: {
        cards: [],
        shift: null,
      },
      blue: {
        cards: [],
        shift: null,
      },
      purple: {
        cards: [],
        shift: null,
      },
      yellow: {
        cards: ['земледелие'],
        shift: null,
      },
    },
    influence: {
      points: 0,
      cards: [],
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0,
  },
  player3: {
    name: null,
    id: 3,
    actionPoints: 0,
    hand: ['инструменты', 'кузнечное дело'],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: null,
      },
      green: {
        cards: [],
        shift: null,
      },
      blue: {
        cards: [],
        shift: null,
      },
      purple: {
        cards: [],
        shift: null,
      },
      yellow: {
        cards: ['земледелие'],
        shift: null,
      },
    },
    influence: {
      points: 0,
      cards: [],
    },
    tree: 0,
    tower: 0,
    crown: 0,
    bulb: 0,
    factory: 0,
    clock: 0,
  },
};

export default gameState;
