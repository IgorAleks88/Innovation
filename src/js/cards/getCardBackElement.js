export default function getCardBackElement(cardObj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-back');
  cardDiv.style.backgroundImage = `url(/assets/img/cards-bg/age-0${cardObj.age}-title2.png)`;
  //cardDiv.style.backgroundImage = `url(/assets/img/cards-bg/age-0${cardObj.age}.jpg)`;
  return cardDiv;
}
