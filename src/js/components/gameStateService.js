import gameState from './gameState';

const gameStateService = {
  initPlayers(...args) {
    for (let i = 0; i < args.length; i += 1) {
      const player = `player${i}`;
      gameState[player].name = args[i];
      gameState.players.push(gameState[player]);
    }
    gameState.currentPlayer = gameState.players[0];
    gameState.currentPlayer.actionPoints = 2;
    gameState.activePlayer = gameState.players[0];
  },
  initAgeDecks(cardsObj) {
    cardsObj.forEach((e) => {
      switch (+e.age) {
        case 1:
          gameState.ageDecks.age1.push(e.innovation);
          break;
        case 2:
          gameState.ageDecks.age2.push(e.innovation);
          break;
        case 3:
          gameState.ageDecks.age3.push(e.innovation);
          break;
        case 4:
          gameState.ageDecks.age4.push(e.innovation);
          break;
        case 5:
          gameState.ageDecks.age5.push(e.innovation);
          break;
        case 6:
          gameState.ageDecks.age6.push(e.innovation);
          break;
        case 7:
          gameState.ageDecks.age7.push(e.innovation);
          break;
        case 8:
          gameState.ageDecks.age8.push(e.innovation);
          break;
        case 9:
          gameState.ageDecks.age9.push(e.innovation);
          break;
        case 10:
          gameState.ageDecks.age10.push(e.innovation);
          break;
        default:
          throw new Error(`Wrong number on age field in ${e}`);
      }
    });
  },

};

export default gameStateService;
