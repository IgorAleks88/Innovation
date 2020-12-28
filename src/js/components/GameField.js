// TEST CLASS
import cards from '../cards/cardsObj';

export default class GameField {
  constructor() {
    this.ageDecks = {
      age1: [],
      age2: [],
      age3: [],
      age4: [],
    };
    this.leadershipDeck = [];
    this.setDecks(cards);
  }

  setDecks(cardsObj) {
    cardsObj.forEach((e) => {
      switch (+e.age) {
        case 1:
          this.ageDecks.age1.push(e);
          break;
        case 2:
          this.ageDecks.age2.push(e);
          break;
        case 3:
          this.ageDecks.age3.push(e);
          break;
        case 4:
          this.ageDecks.age4.push(e);
          break;
        default:
          throw new Error(`Wrong number on age in ${e}`);
      }
    });
  }
}
