export default class GameUI {
  constructor() {
    this.ageDecks = {};
    this.getAgeDecks();

    this.activeStacks = {};
    this.getActiveStacks();

    this.hand = document.querySelector('.hand__cards');
  }

  getAgeDecks() {
    const ageDecksElements = Array.from(document.getElementsByClassName('aside-wrapper__deck'));
    ageDecksElements.forEach((ageDeck, i) => {
      this.ageDecks[`age${i + 1}`] = ageDecksElements[i];
    });
  }

  getActiveStacks() {
    const activeStacksElements = Array.from(document.getElementsByClassName('active-zone-wrapper__stack'));
    activeStacksElements.forEach((activeStack) => {
      this.activeStacks[activeStack.id] = activeStack;
    });
  }
}
