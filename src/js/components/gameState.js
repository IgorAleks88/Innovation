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
    hand: ['письменность'],
    currentAge: 1,
    currentDeck: 'age1', // test
    activeDecks: {
      red: {
        cards: [],
        shift: 'top',
      },
      green: {
        cards: [],
        shift: 'top',
      },
      blue: {
        cards: [],
        shift: 'top',
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
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: ['инструменты', 'земледелие'],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: 'right',
      },
      green: {
        cards: [],
        shift: 'right',
      },
      blue: {
        cards: [],
        shift: 'right',
      },
      purple: {
        cards: [],
        shift: 'right',
      },
      yellow: {
        cards: [],
        shift: 'right',
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
        shift: '',
      },
      green: {
        cards: [],
        shift: '',
      },
      blue: {
        cards: [],
        shift: '',
      },
      purple: {
        cards: [],
        shift: '',
      },
      yellow: {
        cards: [],
        shift: '',
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
    hand: [],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: '',
      },
      green: {
        cards: [],
        shift: '',
      },
      blue: {
        cards: [],
        shift: '',
      },
      purple: {
        cards: [],
        shift: '',
      },
      yellow: {
        cards: [
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
          'каменная кладка',
        ],
        shift: 'right',
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
