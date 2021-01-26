import gameState from '../components/gameState';

export default function resetGameState() {
  Object.keys(gameState.ageDecks).forEach((key) => {
    gameState.ageDecks[key] = [];
  });
  gameState.leadershipDeck = [];
  gameState.specialDeck = [];
  gameState.players = [];
  gameState.currentPlayer = null;
  gameState.activePlayer = null;
  gameState.dogmPlayers = null;
  for (let i = 0; i < 4; i += 1) {
    gameState[`player${i}`].name = null;
    gameState[`player${i}`].actionPoints = 0;
    // gameState[`player${i}`].hand = [];
    gameState[`player${i}`].currentAge = 1;
    gameState[`player${i}`].currentDeck = 'age1';
    // Object.keys(gameState[`player${i}`].activeDecks).forEach((key) => {
    //   gameState[`player${i}`].activeDecks[key].cards = [];
    //   gameState[`player${i}`].activeDecks[key].shift = '';
    // });
  }
}
