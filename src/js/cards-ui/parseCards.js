import arrCards from './cards.json';

function parseCards() {
  const resultArr = [];

  arrCards.forEach((setOfCards) => {
    setOfCards.cards.forEach((card, i) => {
      const cardObject = {};
      Object.assign(cardObject, setOfCards, card);
      delete cardObject.cards;
      resultArr.push(cardObject);
    });
  });

  return resultArr;
}

const arrOfCardObjects = parseCards();

export default arrOfCardObjects;
