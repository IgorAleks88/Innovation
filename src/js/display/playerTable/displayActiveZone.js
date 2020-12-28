const displayActiveZone = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('active-zone-wrapper');
    this.wrapper.textContent = 'I\'m an active zone. Here will be five card decks of each color';
    return this.wrapper;
  },
};

export default displayActiveZone;
