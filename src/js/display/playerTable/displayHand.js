const displayHand = {
  wrapper: null,
  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('hand');

    this.cardsBlock = document.createElement('div');
    this.cardsBlock.classList.add('hand__cards')

    this.controlsBlock = document.createElement('div');
    this.controlsBlock.classList.add('hand__controls');

    // disabled by default
    this.arrowTop = document.createElement('button');
    this.arrowTop.classList.add('hand__controls--top');
    this.arrowTop.classList.add('hand__controls--disabled');
    this.arrowTop.disabled = true;
    this.arrowTop.innerText = 'Красивая кнопка вверх'; // TODO remove later

    // disabled by default
    this.arrowBottom = document.createElement('button');
    this.arrowBottom.classList.add('hand__controls--bottom');
    this.arrowBottom.classList.add('hand__controls--disabled');
    this.arrowBottom.disabled = true;
    this.arrowBottom.innerText = 'Красивая кнопка вниз'; // TODO remove later

    this.controlsBlock.append(this.arrowTop);
    this.controlsBlock.append(this.arrowBottom);

    this.wrapper.append(this.cardsBlock);
    this.wrapper.append(this.controlsBlock);
    return this.wrapper;
  },
};

export default displayHand;
