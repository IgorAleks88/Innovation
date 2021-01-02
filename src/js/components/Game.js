/*
* all game action happens here
* take gameUI obj which contains all dom elements
* take gameField obj which contains all cards avaiable for all players (ages/leadership/special)
* take players objects which contains all cards avaible for players (hand/table/lead/influence)
* count avaible actions per turn, reduce on each action
* when avaible ections ends - turn passed to next player
*/
export default class Game {
  constructor(gameUI, player1, player2, gameField) { // TODO should take more then 2 players
    // store passed objects
    this.players = [ // TODO should take all players passed as args
      player1,
      player2,
    ];
    this.gameField = gameField;
    this.gameUI = gameUI;

    // initialize game field in players objects
    this.players.forEach((player) => {
      player.game = this;
    });

    // set default values
    this.currentPlayer = player1; // TODO should be random later
    this.currentDeck = {
      domElement: gameUI.ageDecks.age1,
      cardsArray: gameField.ageDecks.age1,
    };
    this.turnPoints = 2;
  }

  // if current player still have turn points - recalculate active deck
  // else give turn to next player
  newTurn() {
    if (this.turnPoints > 0) {
      const header = document.querySelector('.header'); // TODO remove later, added for tests
      header.innerText = this.currentPlayer.name; // TODO remove later, added for tests
      this.removeActiveDeck();
      this.setActiveDeck(this.currentPlayer);
    } else {
      // TODO HARDCODED FOR TWO PLAYERS. CHANGE LATER
      // set current player
      if (this.players[0] === this.currentPlayer) this.currentPlayer = this.players[1];
      else if (this.players[1] === this.currentPlayer) this.currentPlayer = this.players[0];

      this.currentPlayer.renderHand();
      this.currentPlayer.renderActiveZone();

      // start new turn with full(2) turn points
      this.turnPoints = 2;
      this.newTurn();
    }
  }

  // set active deck for current player
  setActiveDeck(currentPlayer) {
    Object.keys(this.gameField.ageDecks).forEach((ageDeckKey) => {
      if (ageDeckKey === `age${currentPlayer.currentAge}`) {
        // store active deck dom element
        this.currentDeck.domElement = this.gameUI.ageDecks[`age${currentPlayer.currentAge}`];
        // store active deck cards array
        this.currentDeck.cardsArray = this.gameField.ageDecks[ageDeckKey];
        //! Change current players currentAge if needed deck empty to go for the next deck
        //! Need recalcualte current age after each action, done by players method setCurrentAge
        if (this.currentDeck.cardsArray.length === 0) {
          this.currentPlayer.currentAge += 1;
        }
      }
    });
    // set style and event listener of active deck when all calculations finished
    this.currentDeck.domElement.classList.add('aside__deck--active');
    //! USED onclick because got bug with AddEvenListener - cant remove listener
    this.currentDeck.domElement.onclick = this.takeCard.bind(this);
  }

  // remove active deck class and eventlistener
  //! should use before each setActiveDeck method
  removeActiveDeck() {
    this.currentDeck.domElement.classList.remove('aside__deck--active');
    //! USED onclick because got bug with AddEvenListener - cant remove listener
    this.currentDeck.domElement.onclick = '';
  }

  // get card and render it in hand
  takeCard() {
    this.currentPlayer.setCurrentAge(); // recalculate current age of player
    this.currentPlayer.hand.push(this.currentDeck.cardsArray.pop());
    this.currentPlayer.renderLastTakenCard();
    // starts next phase of turn
    this.actionDone();
  }

  // use this after each action
  actionDone() {
    this.turnPoints -= 1;
    this.newTurn();
  }
}
