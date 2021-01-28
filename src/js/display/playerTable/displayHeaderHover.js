import getCardObject from '../../cards/getCardObject';
import getCardElement from '../../cards/getCardElement';
import getCardBackElement from '../../cards/getCardBackElement';

const displayHeaderHover = {
  block: null,
  overlay: null,
  wrapper: null,
  cardContainer: null,

  init() {
    this.block = document.createElement('div');
    this.block.classList.add('header-hover__block');
    this.block.classList.add('header-hover__block__hidden');
    this.overlay = document.createElement('div');
    this.overlay.classList.add('header-hover__overlay');
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('header-hover__wrapper');
    this.wrapper.addEventListener('click', () => {
      this.clearWrapper();
      this.block.classList.add('header-hover__block__hidden');
    });
    this.cardContainer = document.createElement('div');
    this.cardContainer.classList.add('header-hover__card-container');
    this.wrapper.appendChild(this.cardContainer);
    this.overlay.append(this.wrapper);
    this.block.append(this.overlay);
    document.body.prepend(this.block);
  },

  clearWrapper() {
    Object.values(this.cardContainer.children).forEach((e) => {
      e.remove();
    });
  },

  renderDeck(deck) {
    this.clearWrapper();
    for (let i = 0; i < deck.length; i += 1) {
      const currentCardObj = getCardObject.byID(deck[i]);
      const currentCardElement = getCardBackElement(currentCardObj);
      currentCardElement.style.top = `${(deck.length - 1 - i) * 4}rem`;
      this.cardContainer.append(currentCardElement);
    }
    this.cardContainer.style.width = `30rem`;
    this.cardContainer.style.height = `${Math.min(
      deck.length * 4 + 16,
      55
    )}rem`;
    this.wrapper.style.height = `${Math.min(deck.length * 4 + 22, 62)}rem`;
    this.wrapper.style.width = `40rem`;
  },
  renderActiveDeck(obj) {
    console.log(obj);
    this.clearWrapper();
    if (obj.cards.length > 0) {
      switch (obj.shift) {
        case '': {
          const activeCardId = obj.cards[obj.cards.length - 1];
          const activeCardElement = getCardElement(
            getCardObject.byID(activeCardId)
          );
          this.cardContainer.appendChild(activeCardElement);
          this.cardContainer.style.width = `32rem`;
          this.cardContainer.style.height = `22rem`;
          this.wrapper.style.height = `28rem`;
          this.wrapper.style.width = `42rem`;
          break;
        }
        case 'top': {
          for (let i = 0; i < obj.cards.length; i += 1) {
            const currentCardObj = getCardObject.byID(obj.cards[i]);
            const currentCardElement = getCardElement(currentCardObj);
            currentCardElement.style.top = `${
              (obj.cards.length - 1 - i) * 4
            }rem`;
            currentCardElement.style.position = 'absolute';
            this.cardContainer.append(currentCardElement);
          }
          this.cardContainer.style.width = `32rem`;
          this.cardContainer.style.height = `${Math.min(
            obj.cards.length * 4 + 18,
            55
          )}rem`;
          this.wrapper.style.width = `42rem`;
          this.wrapper.style.height = `${Math.min(
            obj.cards.length * 4 + 24,
            62
          )}rem`;
          break;
        }
        case 'left': {
          for (let i = 0; i < obj.cards.length; i += 1) {
            const currentCardObj = getCardObject.byID(obj.cards[i]);
            const currentCardElement = getCardElement(currentCardObj);
            currentCardElement.style.left = `${
              (obj.cards.length - 1 - i) * 4
            }rem`;
            currentCardElement.style.position = 'absolute';
            this.cardContainer.append(currentCardElement);
          }
          this.cardContainer.style.height = `22rem`;
          this.cardContainer.style.width = `${Math.min(
            obj.cards.length * 4 + 28,
            48
          )}rem`;
          this.wrapper.style.height = `28rem`;
          this.wrapper.style.width = `${Math.min(
            obj.cards.length * 4 + 38,
            58
          )}rem`;
          break;
        }
        case 'right': {
          for (let i = 0; i < obj.cards.length; i += 1) {
            const currentCardObj = getCardObject.byID(obj.cards[i]);
            const currentCardElement = getCardElement(currentCardObj);
            currentCardElement.style.left = `${i * 4}rem`;
            currentCardElement.style.position = 'absolute';
            this.cardContainer.append(currentCardElement);
          }
          this.cardContainer.style.height = `22rem`;
          this.cardContainer.style.width = `${Math.min(
            obj.cards.length * 4 + 28,
            48
          )}rem`;
          this.wrapper.style.height = `28rem`;
          this.wrapper.style.width = `${Math.min(
            obj.cards.length * 4 + 38,
            58
          )}rem`;
          break;
        }
        default:
          break;
      }
    }
  },
};

export default displayHeaderHover;
