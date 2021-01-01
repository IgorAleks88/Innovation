const displayActiveZone = {
  wrapper: null,
  init() {
    // create initial wrapper for aside block
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('active-zone-wrapper');
    // this.wrapper.textContent = 'I\'m an active zone. Here will '
    // + 'be five card decks of each color';  // TODO remove later

    // create playets stacks
    // !Stack names are the color fields of cards object
    const stacksNames = ['blue', 'red', 'green', 'purple', 'yellow'];
    for (let i = 0; i < stacksNames.length; i += 1) {
      const stack = document.createElement('div');
      stack.classList.add('active-zone-wrapper__stack');
      stack.id = stacksNames[i]; // id stackName for each stack
      this.wrapper.append(stack);
    }

    // return completed active zone dom element
    return this.wrapper;
  },
};

export default displayActiveZone;
