export default class Player {
  constructor(name) {
    // player name
    this.name = name;

    // current age default value
    this.currentAge = 1;

    // player hand object
    this.hand = {
      domElement: null,
      cardsArray: [],
    };

    // player active cards object
    // TODO fix names, add 5 sets of cards
    this.activeStacks = {
      military: {
        domElement: null,
        cardsArray: [],
      },
      culture: {
        domElement: null,
        cardsArray: [],
      },
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

    // add dom elem to hand
    this.setHandDomElem();
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

  // TODO take hand wrapper as dom element. Change later
  setHandDomElem() {
    const handElem = document.querySelector('.hand-wrapper');
    this.hand.domElement = handElem;
  }

  // calculate and set current age, iterates througth each stack
  //! Runs from Game each time when card taken
  setCurrentAge() {
    Object.keys(this.activeStacks).forEach((stack) => {
      this.activeStacks[stack].cardsArray.forEach((card) => {
        if (+card.age > this.currentAge) {
          this.currentAge = +card.age;
        }
      });
    });
  }

  // render last taken card.
  // TODO hand currently use hand-wrapper, change later
  renderLastTakenCard() {
    this.renderCard(this.hand.cardsArray[this.hand.cardsArray.length - 1], this.hand.domElement);
  }

  // used in game to render game of next player. Previously hand cleared
  renderHand() {
    this.hand.domElement.innerHTML = '';
    this.hand.cardsArray.forEach((card) => {
      this.renderCard(card, this.hand.domElement);
    });
  }

  // render card to hand
  // TODO Here must be nice render function
  renderCard(cardObj, domElement) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card--${cardObj.category}`);
    const text = document.createElement('span');
    text.innerText = `${cardObj.age} age\n${cardObj.category}\n${cardObj.text}\n`;
    card.append(text);

    //! TODO COMPLETE PLAY CARD METHOD
    // card.onclick = this.playCard(card);

    domElement.append(card);
  }
}
