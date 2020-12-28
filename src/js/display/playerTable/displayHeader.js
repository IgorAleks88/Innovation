const displayHeader = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header-wrapper');
    this.wrapper.textContent = 'I\'m a header. Here will be resources, win points and influence points of each player';
    return this.wrapper;
  },
};

export default displayHeader;
