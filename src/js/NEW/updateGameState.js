import getCardObject from './getCardObject';

export default function updateGameState(gameState) {
  // update resources for each player
  gameState.players.forEach((player) => {
    player.tree = 0;
    player.tower = 0;
    player.crown = 0;
    player.bulb = 0;
    player.factory = 0;
    player.clock = 0;
    Object.keys(player.activeDecks).forEach((stack) => {
      const currentStack = player.activeDecks[stack];
      if (currentStack.cards.length > 0) {
        const highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
        const highestCard = getCardObject.byID(highestCardInnovation);
        highestCard.resourses.forEach((e) => {
          player[e.resourceName] += 1;
        });
      }
    });
  });

  // update currentAge for each player
  gameState.players.forEach((player) => {
    player.currentAge = 1;
    Object.keys(player.activeDecks).forEach((stack) => {
      const currentStack = player.activeDecks[stack];
      if (currentStack.cards.length > 0) {
        const highestCardInnovation = currentStack.cards[currentStack.cards.length - 1];
        const highestCard = getCardObject.byID(highestCardInnovation);
        if (highestCard.age > player.currentAge) { player.currentAge = highestCard.age; }
      }
    });
  });

  // update currentDeck for each player
  gameState.players.forEach((player) => {
    for (let i = player.currentAge; i < 11; i += 1) {
      const deck = gameState.ageDecks[`age${i}`];
      if (deck.length > 0) {
        player.currentDeck = `age${i}`;
        break;
      }
    }
  });
}
