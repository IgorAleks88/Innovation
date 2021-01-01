import getCard from '../cards/getCard';

export default class Player {
  constructor(gameUI, name) {
    // player name
    this.name = name;

    // this field will be set at game object initialization
    this.game = null;

    this.gameUI = gameUI;

    // current age default value
    this.currentAge = 1;

    // player hand object
    this.hand = [];

    // player active cards object
    //! Names of stacks are color fields in card objects
    this.activeStacks = {
      blue: [],
      red: [],
      green: [],
      purple: [],
      yellow: [],
    };

    // player leadership and influence objects
    // TODO LATER
    this.ownedLeadership = {
      domElement: null,
      cardsArray: [],
    };
    // TODO LATER
    this.influence = {
      domElement: null,
      cardsArray: [],
    };

    // add dom elems to stacks
    this.setActiveCardsDomElems();
  }

  // TODO control dom fill when add 10 decks
  // fill stack dom elements fields
  // !Important! Control order of elements on page. Be sure that dom already builded.
  setActiveCardsDomElems() {
    const stackElems = Array.from(document.getElementsByClassName('active-zone-wrapper__stack'));
    Object.keys(this.activeStacks).forEach((activeStackKey) => {
      this.activeStacks[activeStackKey].domElement = stackElems.shift();
    });
  }

  // calculate and set current age, iterates througth each stack
  //! Runs from Game each time when card taken
  setCurrentAge() {
    Object.keys(this.activeStacks).forEach((stack) => {
      this.activeStacks[stack].forEach((card) => {
        if (+card.age > this.currentAge) {
          this.currentAge = +card.age;
        }
      });
    });
  }

  // render last taken card.
  // TODO hand currently use hand, change later
  renderLastTakenCard() {
    const lastTakenCard = this.hand[this.hand.length - 1];
    const cardElement = getCard.frontSide(lastTakenCard);
    cardElement.onclick = () => { this.playCard(lastTakenCard, cardElement); };
    this.gameUI.hand.append(cardElement);
  }

  // used in game to render game of next player. Previously hand cleared
  renderHand() {
    this.gameUI.hand.innerHTML = '';
    this.hand.forEach((card) => {
      const cardElement = getCard.frontSide(card);
      cardElement.onclick = () => {
        this.playCard(card, cardElement);
      };
      this.gameUI.hand.append(cardElement);
    });
  }

  // render all cards in active zone of current player
  renderActiveZone() {
    Object.keys(this.activeStacks).forEach((stackName) => {
      // clear previous rendered active zone
      this.gameUI.activeStacks[stackName].innerHTML = '';
      this.activeStacks[stackName].forEach((card) => {
        this.activeStacks[stackName].domElement.append(getCard.frontSide(card));
      });
    });
  }

  // on click event for cards in head. Play card in stack depends on category
  // TODO: later this method should add dogma function to each played card
  playCard(cardObj, cardElement) {
    Object.keys(this.activeStacks).forEach((stackName) => {
      if (stackName === cardObj.color) {
        this.hand.forEach((e, i) => {
          if (e === cardObj) {
            this.hand.splice(i, 1);
          }
        });
        this.activeStacks[stackName].push(cardObj);
        this.gameUI.activeStacks[stackName].append(cardElement);
      }
    });
    this.game.actionDone();
  }
}
