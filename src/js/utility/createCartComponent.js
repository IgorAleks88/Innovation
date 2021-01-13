export default class CreateCardComponent {
  constructor(objectOfCard) {
    this.objectOfCard = objectOfCard;
    return this.createCardComponent(this.objectOfCard);
  }

  createCardComponent(cardObj) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style = `background: url(${cardObj.cardImg})`;
    card.innerHTML = /* html */ `
        <div class="card__card-header card__color--${cardObj.color}">
          <div class="card__topLeft"></div>
          <div class="card-header__title">${cardObj.innovation}</div>
        </div>
        <div class="card__card-main card__color--${cardObj.color}-transparent">
          <div class="card__dogma" data-dogmatype="${cardObj.dogma[0].dogmaType}">
            <i class=" ${cardObj.dogma[0].dogmaIcon[0]} ${cardObj.dogma[0].dogmaIcon[1]} card__icon card__icon-color--${cardObj.dogma[0].dogmaColor}" aria-hidden="true"></i>
            <span class="dogma__effect">${cardObj.dogma[0].dogmaEffect}
            </span>
          </div>
          ${cardObj.dogma[1] ? /* html */ `
          <div class="card__dogma" data-dogmatype="corporate">
            <i class=" ${cardObj.dogma[1].dogmaIcon[0]} ${cardObj.dogma[1].dogmaIcon[1]} card__icon card__icon-color--${cardObj.dogma[1].dogmaColor}" aria-hidden="true"></i>
            <span class="dogma__effect">${cardObj.dogma[1].dogmaEffect}.</span>
          </div>
          ` : ''}
        </div>
        <div class="card__card-footer">
          <div class="card__bottomLeft"></div>
          <div class="card__bottomCenter"></div>
          <div class="card__bottomRight"></div>
        </div>
    `;
    const ageSlot = card.querySelector(`.card__${cardObj.agePosition}`);
    ageSlot.textContent = cardObj.age;
    ageSlot.classList.add(`card__color--${cardObj.color}`, 'card__age--border');

    const [res0, res1, res2] = cardObj.resourses;

    const resSlot0 = card.querySelector(`.card__${res0.resoursePosition}`);
    resSlot0.classList.add(res0.resourseType[0], res0.resourseType[1], `card__icon-color--${res0.resourseColor}`, `card__icon-border--${cardObj.color}`);
    resSlot0.setAttribute('aria-hidden', 'true');

    const resSlot1 = card.querySelector(`.card__${res1.resoursePosition}`);
    resSlot1.classList.add(res1.resourseType[0], res1.resourseType[1], `card__icon-color--${res1.resourseColor}`, `card__icon-border--${cardObj.color}`);
    resSlot1.setAttribute('aria-hidden', 'true');

    const resSlot2 = card.querySelector(`.card__${res2.resoursePosition}`);
    resSlot2.classList.add(res2.resourseType[0], res2.resourseType[1], `card__icon-color--${res2.resourseColor}`, `card__icon-border--${cardObj.color}`);
    resSlot2.setAttribute('aria-hidden', 'true');
    return card;
  }
}
