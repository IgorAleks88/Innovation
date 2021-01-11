/*
* all game action happens here
* take gameUI obj which contains all dom elements
* take gameField obj which contains all cards avaiable for all players (ages/leadership/special)
* take players objects which contains all cards avaible for players (hand/table/lead/influence)
* count avaible actions per turn, reduce on each action
* when avaible ections ends - turn passed to next player
*/
import header from '../display/playerTable/displayHeader';
import displayNewTurnModal from '../display/displayNewTurnModal';
import displayNextTurnBtn from '../display/displayNextTurnBtn';

export default class Game {
  constructor(gameUI, gameField, players) {
    // store passed objects
    this.players = players;
    this.gameField = gameField;
    this.gameUI = gameUI;

    // initialize game field in players objects
    this.players.forEach((player) => {
      player.game = this;
    });

    // set default values
    this.currentPlayer = null;
    this.currentDeck = {
      domElement: gameUI.ageDecks.age1,
      cardsArray: gameField.ageDecks.age1,
    };
    this.turnPoints = 0;
  }

  newTurn() {
    this.setCurrentPlayer();
    displayNewTurnModal(this.currentPlayer.name);
    this.turnPoints = 2;
    // timeout to display modal
    setTimeout(() => {
      this.removeActiveDeck();
      this.setActiveDeck(this.currentPlayer);
      this.currentPlayer.renderHand();
      this.currentPlayer.renderActiveZone();
      this.updateInfoTable();
    }, 450);
  }

  // use this after each action
  actionDone() {
    this.turnPoints -= 1;
    this.updateInfoTable();
    this.removeActiveDeck();
    if (this.turnPoints > 0) {
      this.setActiveDeck(this.currentPlayer);
    } else {
      this.disableHandEvents();
      displayNextTurnBtn(this.newTurn.bind(this));
    }
  }

  // set current players depends on previous player
  setCurrentPlayer() {
    if (this.currentPlayer === null) {
      this.currentPlayer = this.players[0];
    } else {
      for (let i = 0; i < this.players.length; i += 1) {
        if (this.currentPlayer === this.players[i]) {
          i += 1;
          if (i === this.players.length) i = 0;
          this.currentPlayer = this.players[i];
          break;
        }
      }
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
    this.currentDeck.domElement.classList.add('age-deck--active');
    //! USED onclick because got bug with AddEvenListener - cant remove listener
    this.currentDeck.domElement.onclick = this.takeCard.bind(this);

    // update current active deck displayed in aside
    this.updateCurrentDeckBlock();
  }

  // remove active deck class and eventlistener
  //! should use before each setActiveDeck method
  removeActiveDeck() {
    const cloneCurrentDeck = document.querySelector('#cloneCurrentDeck');
    if (cloneCurrentDeck !== null) cloneCurrentDeck.onclick = '';

    this.currentDeck.domElement.classList.remove('age-deck--active');
    this.currentDeck.domElement.onclick = '';
  }

  disableHandEvents() {
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach((card) => {
      card.onclick = '';
    });
  }

  // get card and render it in hand
  takeCard() {
    this.currentPlayer.setCurrentAge(); // recalculate current age of player
    this.currentPlayer.hand.push(this.currentDeck.cardsArray.pop());
    this.currentPlayer.renderLastTakenCard();
    header.changePlayerStats(this.currentPlayer);
    // starts next phase of turn
    this.actionDone();
  }

  // update info table in aside, use after each action done in newTurn method
  updateInfoTable() {
    this.gameUI.infoTable.name.innerText = this.currentPlayer.name;
    this.gameUI.infoTable.actionPoints.innerText = this.turnPoints;
  }

  // update current active deck displayed in aside, use after each time when setActiveDeck run
  updateCurrentDeckBlock() {
    // remove previous active deck if exists
    const prevDeckClone = document.querySelector('#cloneCurrentDeck');
    if (prevDeckClone !== null) prevDeckClone.remove();

    // clone current active deck
    const cloneCurrentDeck = this.currentDeck.domElement.cloneNode();
    cloneCurrentDeck.innerText = this.currentDeck.domElement.innerText;
    cloneCurrentDeck.id = 'cloneCurrentDeck';
    cloneCurrentDeck.onclick = this.takeCard.bind(this);

    // remove animation on each update of aside current deck
    cloneCurrentDeck.classList.remove('xyz-in');

    // display cloned deck in currentDeck block
    this.gameUI.currentDeck.append(cloneCurrentDeck);
  }
}
