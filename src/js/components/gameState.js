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
    hand: ['парус'],
    currentAge: 1,
    currentDeck: 'age1',
    activeDecks: {
      red: {
        cards: [],
        shift: '',
      },
      green: {
        cards: ['парус'],
        shift: '',
      },
      blue: {
        cards: ['гончарное дело'],
        shift: '',
      },
      purple: {
        cards: ['города'],
        shift: '',
      },
      yellow: {
        cards: ['земледелие'],
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
  player1: {
    name: null,
    id: 1,
    actionPoints: 0,
    hand: ['города'],
    currentAge: 1,
    activeDecks: {
      red: {
        cards: [],
        shift: '',
      },
      green: {
        cards: ['парус'],
        shift: '',
      },
      blue: {
        cards: [],
        shift: '',
      },
      purple: {
        cards: ['свод законов', 'мистицизм'],
        shift: '',
      },
      yellow: {
        cards: ['каменная кладка'],
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
        cards: ['парус'],
        shift: null,
      },
      blue: {
        cards: [],
        shift: null,
      },
      purple: {
        cards: ['мистицизм'],
        shift: null,
      },
      yellow: {
        cards: ['каменная кладка'],
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
        cards: [],
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
