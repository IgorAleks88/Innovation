export default class Game {
  constructor(player1, player2, gameField) {
    // store args objects
    this.players = [
      player1,
      player2,
    ];
    this.gameField = gameField;

    // TODO describe later wich methods changes it
    // changes on newTurn method runs
    this.currentPlayer = player1;

    // TODO describe later wich methods changes it
    // changes on setActiveDeck method runs
    this.currentDeck = {
      domElement: null,
      cardsArray: [],
    };

    // initialize game field in players object
    //! Important! HARDCODED FOR 2 PLAYERS, change later
    this.players[0].game = this;
    this.players[1].game = this;

    // !important
    // Turn points
    this.turnPoints = 2;

    // !important
    // start game
    this.newTurn();
  }

  // ! if player still have turn points - activate new deck
  newTurn() {
    if (this.turnPoints > 0) {
      // TODO remove later, added for tests
      const header = document.querySelector('.header-wrapper');
      header.innerText = this.currentPlayer.name;

      // remove all active decks
      this.removeActiveDeck();
      // set current avaible age deck for currentPlayer
      this.setActiveDeck(this.currentPlayer);
    } else {
      //! HARDCODED FOR TWO PLAYERS. CHANGE LATER
      // give turn to next player when this function run
      if (this.players[0] === this.currentPlayer) this.currentPlayer = this.players[1];
      else if (this.players[1] === this.currentPlayer) this.currentPlayer = this.players[0];
      // add timeout because cards dissapear too fast, test
      // !IMPORTANT render table for player which turn starts
      setTimeout(() => { this.currentPlayer.renderHand(); }, 100);
      setTimeout(() => { this.currentPlayer.renderActiveZone(); }, 100);

      this.turnPoints = 2;
      this.newTurn();
    }
  }

  // set active deck for current player in current moment
  setActiveDeck(currentPlayer) {
    Object.keys(this.gameField.ageDecks).forEach((ageDeckKey) => {
      if (ageDeckKey === `age${currentPlayer.currentAge}`) {
        this.currentDeck.domElement = this.gameField.ageDecks[ageDeckKey].domElement;
        this.currentDeck.cardsArray = this.gameField.ageDecks[ageDeckKey].cardsArray;
        //! IMPORTANT! Change players currentAge if needed deck empty.
        //! Need reset and recalculate after turn, mb change later!
        if (this.currentDeck.cardsArray.length === 0) {
          this.currentPlayer.currentAge += 1;
        }
      }
    });
    // set style and event listener of active deck when all calculations finished
    this.currentDeck.domElement.classList.add('aside-wrapper__deck--active');
    //! USED onclick because got bug with AddEvenListener - cant remove listener
    this.currentDeck.domElement.onclick = this.takeCard.bind(this);
  }

  // remove active deck class and eeventlistener
  //! use before each setActiveDeck method
  removeActiveDeck() {
    Object.keys(this.gameField.ageDecks).forEach((ageDeckKey) => {
      this.gameField.ageDecks[ageDeckKey].domElement.classList.remove('aside-wrapper__deck--active');
      //! USED onclick because got bug with AddEvenListener - cant remove listener
      this.gameField.ageDecks[ageDeckKey].domElement.onclick = '';
    });
  }

  //! This method consume turn points!
  takeCard() {
    this.currentPlayer.setCurrentAge();
    this.currentPlayer.hand.cardsArray.push(this.currentDeck.cardsArray.pop());
    this.turnPoints -= 1;
    // TODO remove later, added for tests
    // console.log(this.players[0]);
    // console.log(this.players[1]);

    // render last taken hand to hand
    this.currentPlayer.renderLastTakenCard();

    // starts next phase of turn
    this.newTurn();
  }

  actionDone() {
    this.turnPoints -= 1;
    this.newTurn();
  }
}
