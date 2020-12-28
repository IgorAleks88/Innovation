const displayAside = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('aside-wrapper');
    this.wrapper.textContent = 'I\'m an aside. Here will be decks for all ages in slider, cards of leaderships and speacial win point cards';
    return this.wrapper;
  },
};

export default displayAside;
