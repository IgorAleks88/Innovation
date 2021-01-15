import cardsJSON from '../cards/cards.json';

export default function getCardObject(id) {
  let result = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].innovation === id) {
      result = arr[i];
      break;
    }
  }
  return result;
}
