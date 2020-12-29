const displayHand = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('hand-wrapper');
    // this.wrapper.textContent = 'I\'m a hand. Here will be '
    // + 'player\'s hand cards'; //TODO remove later
    return this.wrapper;
  },
};

export default displayHand;
