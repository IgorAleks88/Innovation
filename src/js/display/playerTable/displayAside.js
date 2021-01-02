const displayAside = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('aside');

    this.decksBlock = document.createElement('div');
    this.decksBlock.classList.add('aside__decks-block');

    // create age decks
    const agesNumber = 10;
    for (let i = 0; i < agesNumber; i += 1) {
      const deck = document.createElement('div');
      deck.classList.add('aside__deck');
      deck.id = `age${i + 1}`; // id age1-10 for each deck
      deck.innerText = `${i + 1} Age`; // TODO remove later
      deck.style.backgroundImage = 'url(./assets/img/cards-bg/age-01-back.jpg)';
      this.decksBlock.append(deck);
    }
    this.wrapper.append(this.decksBlock);

    return this.wrapper;
  },
};

export default displayAside;
