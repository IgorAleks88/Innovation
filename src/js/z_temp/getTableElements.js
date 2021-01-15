export default function getTableElements(gameState) {
  // set info block aside =========================================================
  const nameBlock = document.querySelector('.info-table__player-name');
  nameBlock.innerText = gameState.activePlayer.name;
  const actionPointsBlock = document.querySelector('.info-table__action-points');
  actionPointsBlock.innerText = gameState.activePlayer.actionPoints;

  // remove previous active age decks ================================================
  let cloneCurrentDeck = document.querySelector('#cloneCurrentDeck');
  if (cloneCurrentDeck !== null) cloneCurrentDeck.onclick = '';
  const activeDeck = document.querySelector('.age-deck--active');
  if (activeDeck !== null) {
    activeDeck.classList.remove('age-deck--active');
    activeDeck.onclick = '';
  }

  // set avaiable age deck in modal ===============================================
  while (gameState.ageDecks[`age${gameState.activePlayer.currentAge}`].length === 0) {
    gameState.activePlayer.currentAge += 1;
  }
  const avaiableAgeDeck = document.querySelector(`#age${gameState.activePlayer.currentAge}`);
  avaiableAgeDeck.classList.add('age-deck--active');

  // set avaiable age deck in aside ===============================================
  const prevDeckClone = document.querySelector('#cloneCurrentDeck');
  if (prevDeckClone !== null) prevDeckClone.remove();
  // clone current active deck
  cloneCurrentDeck = avaiableAgeDeck.cloneNode();
  cloneCurrentDeck.innerText = avaiableAgeDeck.innerText;
  cloneCurrentDeck.id = 'cloneCurrentDeck';
  cloneCurrentDeck.classList.add('age-deck--active');
  cloneCurrentDeck.classList.remove('xyz-in');
  // display cloned deck in currentDeck block
  document.querySelector('.current-deck__cards').append(cloneCurrentDeck);

  // get hand cards of active player ==============================================

  // get active cards of active player ============================================
}
