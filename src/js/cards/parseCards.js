// get JSON and return array of card objects
export default function parseCards(cardsJSON) {
  const resultArr = [];

  cardsJSON.forEach((setOfCards) => {
    setOfCards.cards.forEach((card) => {
      const cardObject = {};
      Object.assign(cardObject, setOfCards, card);
      // remove duplicated field
      delete cardObject.cards;
      resultArr.push(cardObject);
    });
  });

  return resultArr;
}
