const displayAside = {
  wrapper: null,
  init() {
    // create initial wrapper for aside block
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('aside-wrapper');
    // this.wrapper.textContent = 'I\'m an aside. Here will be decks for all ages in slider, '
    // + 'cards of leaderships and speacial win point cards'; // TODO remove later

    // create age decks block
    this.decksBlock = document.createElement('div');
    this.decksBlock.classList.add('aside-wrapper__decks-block');

    // create age decks
    // TODO add 10 decks later
    const agesNumber = 4;
    for (let i = 0; i < agesNumber; i += 1) {
      const deck = document.createElement('div');
      deck.classList.add('aside-wrapper__deck');
      deck.id = `age${i + 1}`; // id age1-10 for each deck
      deck.innerText = `${i + 1} Age`; // TODO remove later
      this.decksBlock.append(deck);
    }

    // append decks block to aside wrapper
    this.wrapper.append(this.decksBlock);

    // return completed aside dom element
    return this.wrapper;
  },
};

export default displayAside;
