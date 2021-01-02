const displayHeader = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header');
    return this.wrapper;
  },
};

export default displayHeader;
