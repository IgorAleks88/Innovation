const displayActiveZone = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('active-zone');

    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('active-zone__cards');

    this.cardsBlockOverlay = document.createElement('div');
    this.cardsBlockOverlay.classList.add('active-zone__overlay');

    // create players active stacks
    // !Stack names are the color fields of cards object
    const stacksNames = ['blue', 'red', 'green', 'purple', 'yellow'];
    for (let i = 0; i < stacksNames.length; i += 1) {
      const stack = document.createElement('div');
      stack.classList.add('active-zone__stack');
      stack.id = stacksNames[i]; // id stackName for each stack
      this.cardsBlock.append(stack);
    }

    this.wrapper.append(this.cardsBlockOverlay);
    this.wrapper.append(this.cardsBlock);
    return this.wrapper;
  },
};

export default displayActiveZone;
