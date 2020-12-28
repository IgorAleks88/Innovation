const displayAside = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('aside-wrapper');
    this.wrapper.textContent = 'I\'m an aside. Here will be decks for all ages in slider, cards of leaderships and speacial win point cards';
    // TEST
    this.decksBlock = document.createElement('div');
    this.decksBlock.classList.add('aside-wrapper__decks-block');

    const agesNumber = 4;
    for (let i = 0; i < agesNumber; i += 1) {
      const deck = document.createElement('div');
      deck.classList.add('aside-wrapper__deck');
      deck.id = `deck${i + 1}`;
      deck.innerText = `${i + 1} Age`;
      this.decksBlock.append(deck);
    }

    this.wrapper.append(this.decksBlock);

    return this.wrapper;
  },
};

export default displayAside;
