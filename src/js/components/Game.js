// TEST
export default class Game {
  constructor(player1, player2, gameField) {
    this.players = [
      player1,
      player2,
    ];
    this.gameField = gameField;
    this.currentPlayer = null;
    this.currentDeck = null;
    this.newTurn();
  }

  newTurn() {
    this.players.forEach((player) => {
      if (this.currentPlayer !== player) {
        this.currentPlayer = player;
      }
    });
    this.setActiveDeck(this.currentPlayer);
  }

  setActiveDeck(player) {
    this.decksElems = Array.from(document.getElementsByClassName('aside-wrapper__deck'));
    this.decksElems.forEach((deck) => {
      if (`deck${player.currentAge}` === deck.id) {
        this.currentDeck = deck;
        deck.classList.add('aside-wrapper__deck--active');
        deck.addEventListener('click', this.takeCard.bind(this));
      }
    });
  }

  takeCard() {
    for (let key in this.gameField.ageDecks) {
      if (key === `age${this.currentPlayer.currentAge}`) {
        console.log(key)
        this.currentPlayer.hand.push(this.gameField.ageDecks[key].pop());

        // RENDER CARD
        // UPDATE CURRENT AGE
      }
    }
  }
}
