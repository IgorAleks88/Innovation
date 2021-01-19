const displayActiveZone = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('active-zone');

    this.activeZoneTitle = document.createElement('div');
    this.activeZoneTitle.classList.add('active-zone__title');

    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('active-zone__cards-block');

    this.cardsBlockWrapper = document.createElement('div');
    this.cardsBlockWrapper.classList.add('active-zone__cards-wrapper');

    this.cardsBlock.append(this.cardsBlockWrapper);

    this.cardsBlockOverlay = document.createElement('div');
    this.cardsBlockOverlay.classList.add('active-zone__overlay');

    // create players active stacks
    const stacksNames = ['red', 'green', 'blue', 'purple', 'yellow'];
    for (let i = 0; i < stacksNames.length; i += 1) {
      const stack = document.createElement('div');
      stack.classList.add('active-zone__stack');
      stack.classList.add('active-zone__stack--empty');
      stack.id = stacksNames[i];
      this.cardsBlockWrapper.append(stack);
    }

    this.wrapper.append(this.activeZoneTitle);
    this.wrapper.append(this.cardsBlockOverlay);
    this.wrapper.append(this.cardsBlock);
    return this.wrapper;
  },
};

export default displayActiveZone;
