import arrCards from './cards.json';

export default class CardsUI {
  static init() {
    console.log(arrCards);
    const divTmp = document.createElement('div');
    divTmp.classList.add('example_cards');
    arrCards.forEach((i) => {
      i.cards.forEach((card) => {
        divTmp.appendChild(CardsUI.getCard(i, card));
      });
      document.body.appendChild(divTmp);
    });
  }

  // get playing card
  static getCard(i, card) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.style.background = `url("${i.cardImg}")`;

    divCard.appendChild(CardsUI.cardHeader(card, i.color));
    divCard.appendChild(CardsUI.cardMain(card, i.color));
    divCard.appendChild(CardsUI.cardFooter());
    CardsUI.setObjByPosition(divCard, card, i.age, i.color);

    return divCard;
  }

  // get card header
  static cardHeader(card, color) {
    const divHeader = document.createElement('div');
    divHeader.classList.add('card__card-header', `card__color--${color}`);

    const posTopLeft = document.createElement('div');
    posTopLeft.classList.add('card__topLeft');

    const title = document.createElement('div');
    title.classList.add('card-header__title');
    title.textContent = card.innovation;

    divHeader.appendChild(posTopLeft);
    divHeader.appendChild(title);
    return divHeader;
  }

  // get card body
  static cardMain(card, color) {
    const divMain = document.createElement('div');
    divMain.classList.add('card__card-main', `card__color--${color}-transparent`);

    card.dogma.forEach((item) => {
      const divDogma = document.createElement('div');
      divDogma.classList.add('card__dogma');
      divDogma.setAttribute('data-dogmatype', item.dogmaType);

      const icon = document.createElement('i');
      icon.classList.add(item.dogmaIcon[0], item.dogmaIcon[1], 'card__icon', `card__icon-color--${item.dogmaColor}`);
      divDogma.appendChild(icon);

      const dogma = document.createElement('span');
      dogma.classList.add('dogma__effect');
      dogma.innerHTML = item.dogmaEffect;
      divDogma.appendChild(dogma);

      divMain.appendChild(divDogma);
    });
    return divMain;
  }

  // get card footer
  static cardFooter() {
    const divFooter = document.createElement('div');
    divFooter.classList.add('card__card-footer');

    const posBottomLeft = document.createElement('div');
    posBottomLeft.classList.add('card__bottomLeft');
    divFooter.appendChild(posBottomLeft);

    const posBottomCenter = document.createElement('div');
    posBottomCenter.classList.add('card__bottomCenter');
    divFooter.appendChild(posBottomCenter);

    const posBottomRight = document.createElement('div');
    posBottomRight.classList.add('card__bottomRight');
    divFooter.appendChild(posBottomRight);

    return divFooter;
  }

  // place age number and resourses by card position
  static setObjByPosition(divCard, card, age, color) {
    const agePos = divCard.querySelector(`.card__${card.agePosition}`);
    agePos.classList.add(`card__color--${color}`, 'card__age--border');
    agePos.textContent = age;

    card.resourses.forEach((res) => {
      const pos = divCard.querySelector(`.card__${res.resoursePosition}`);
      pos.classList.add(`${res.resourseType[0]}`, `${res.resourseType[1]}`, `card__icon-color--${res.resourseColor}`, `card__icon-border--${color}`);
    });
  }
}
