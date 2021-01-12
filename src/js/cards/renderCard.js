function getRenderCard() {
  let hand = null;
  let active = null;

  const renderCard = {
    initObject() {
      hand = document.querySelector('.hand__cards');
      active = document.querySelector('.active-zone__cards-wrapper');
    },

    toHand(cardElement) {
      if (hand === null || active === null) this.initObject();
      cardElement.setAttribute('xyz', 'fade right-3 flip-right rotate-left');
      cardElement.classList.add('xyz-in');
      setTimeout(() => {
        cardElement.classList.remove('xyz-in');
      }, 450);
      hand.append(cardElement);
    },

    toActive() {
      if (hand === null || active === null) this.initObject();
      console.log(active)
    }
  };

  renderCard.initObject();
  return renderCard;
}

const renderCard = getRenderCard();

export { renderCard };
