import arrOfCardObjects from '../cards-ui/parseCards';

export default class GameField {
  constructor() {
    // TODO add 10 decks
    // create empty decks with array and dom element for each age
    this.ageDecks = {
      age1: {
        domElement: null,
        cardsArray: [],
      },
      age2: {
        domElement: null,
        cardsArray: [],
      },
      age3: {
        domElement: null,
        cardsArray: [],
      },
      age4: {
        domElement: null,
        cardsArray: [],
      },
      age5: {
        domElement: null,
        cardsArray: [],
      },
      age6: {
        domElement: null,
        cardsArray: [],
      },
      age7: {
        domElement: null,
        cardsArray: [],
      },
      age8: {
        domElement: null,
        cardsArray: [],
      },
      age9: {
        domElement: null,
        cardsArray: [],
      },
      age10: {
        domElement: null,
        cardsArray: [],
      },
    };

    // TODO leadership later (method + array + dom)
    // create empty leadership deck
    this.leadershipDeck = [];
    // TODO special deck later (method + array + dom)
    // create empty special deck
    this.specialDeck = [];

    // fill age decks with objects and DOM elements
    this.setDeckArrays(arrOfCardObjects);
    this.setDeckDomElems();
  }

  // TODO add cases for all 10 ages
  // fill deck arays depends on card age field
  setDeckArrays(cardsObj) {
    cardsObj.forEach((e) => {
      switch (+e.age) {
        case 1:
          this.ageDecks.age1.cardsArray.push(e);
          break;
        case 2:
          this.ageDecks.age2.cardsArray.push(e);
          break;
        case 3:
          this.ageDecks.age3.cardsArray.push(e);
          break;
        case 4:
          this.ageDecks.age4.cardsArray.push(e);
          break;
        case 5:
          this.ageDecks.age5.cardsArray.push(e);
          break;
        case 6:
          this.ageDecks.age6.cardsArray.push(e);
          break;
        case 7:
          this.ageDecks.age7.cardsArray.push(e);
          break;
        case 8:
          this.ageDecks.age8.cardsArray.push(e);
          break;
        case 9:
          this.ageDecks.age9.cardsArray.push(e);
          break;
        case 10:
          this.ageDecks.age10.cardsArray.push(e);
          break;
        default:
          throw new Error(`Wrong number on age field in ${e}`);
      }
    });
  }

  // TODO control dom fill when add 10 decks
  // fill deck dom elements fields
  // !Important! Control order of elements on page. Be sure that dom already builded.
  setDeckDomElems() {
    const deckElems = Array.from(document.getElementsByClassName('aside-wrapper__deck'));
    Object.keys(this.ageDecks).forEach((ageDecksKey) => {
      this.ageDecks[ageDecksKey].domElement = deckElems.shift();
    });
  }
}
