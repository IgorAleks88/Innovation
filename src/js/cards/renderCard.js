function getRenderCard() {
  let hand = null;
  let activeStacks = null;

  const renderCard = {
    initObject() {
      hand = document.querySelector('.hand__cards');
      activeStacks = document.querySelectorAll('.active-zone__stack');
    },

    toHand(cardElement) {
      if (hand === null || activeStacks === null) this.initObject();
      cardElement.setAttribute('xyz', 'fade right-3 flip-right rotate-left');
      cardElement.classList.add('xyz-in');
      setTimeout(() => {
        cardElement.classList.remove('xyz-in');
      }, 450);
      hand.append(cardElement);
    },

    toActive(cardElement) {
      if (hand === null || activeStacks === null) this.initObject();
      let targetStack = null;
      activeStacks.forEach((stack) => {
        if (cardElement.children[0].classList.contains(`card__color--${stack.id}`)) targetStack = stack;
      });
      
    }
  };

  renderCard.initObject();
  return renderCard;
}

const renderCard = getRenderCard();

export { renderCard };
