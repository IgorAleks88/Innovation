/*
* store all game UI dom elements
* this obj passed as argument to Game constructor
*/
export default class GameUI {
  constructor() {
    this.ageDecks = {};
    this.getAgeDecks();

    this.activeStacks = {};
    this.getActiveStacks();

    this.hand = document.querySelector('.hand__cards');
  }

  getAgeDecks() {
    const ageDecksElements = Array.from(document.getElementsByClassName('aside__deck'));
    ageDecksElements.forEach((ageDeck, i) => {
      this.ageDecks[`age${i + 1}`] = ageDecksElements[i];
    });
  }

  getActiveStacks() {
    const activeStacksElements = Array.from(document.getElementsByClassName('active-zone__stack'));
    activeStacksElements.forEach((activeStack) => {
      this.activeStacks[activeStack.id] = activeStack;
    });
  }
}
