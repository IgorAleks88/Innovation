import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';

const isAge = (cardID, age) => getCardObject.byID(cardID).age === age;

function getAffectedPlayers(cardObj) {
  const res = cardObj.dogma[0].resource;
  let idPlayers;
  if (cardObj.dogma[0].type === 'corporate') {
    idPlayers = gameState.players.filter((player) => player[res] >= gameState.currentPlayer[res])
      .map((player) => player.id);
  } else {
    idPlayers = gameState.players
      .filter((player) => {
        const pl = player[res] < gameState.currentPlayer[res] && player !== gameState.currentPlayer;
        return pl;
      }).map((player) => player.id);
  }
  return idPlayers;
}

function takeCard(cardsNum, ageNum, playerID, render = true) {
  while (cardsNum > 0) {
    if (gameState.ageDecks[`age${ageNum}`].length === 0) ageNum += 1;
    const cardID = gameState.ageDecks[`age${ageNum}`].pop();
    gameState.players[playerID].hand.push(cardID);
    cardsNum -= 1;
    if (gameState.players[playerID] === gameState.currentPlayer) {
      const cardObj = getCardObject.byID(cardID);
      const cardElement = getCardElement(cardObj);
      cardElement.onclick = gameBoard.playCard;
      if (render) renderCard.toHand(cardElement);
    }
  }
}

function playCard(cardID, playerID) {
  const cardIndex = gameState.players[playerID].hand.indexOf(cardID);
  gameState.players[playerID].hand.splice(cardIndex, 1);
  const cardObj = getCardObject.byID(cardID);
  const cardElement = getCardElement(cardObj);
  const renderedCard = document.querySelector(`[data-innovation='${cardID}']`);
  if (renderedCard !== null) renderedCard.remove();
  const targetStack = gameState.players[playerID].activeDecks[cardObj.color].cards;
  targetStack.push(cardID);
  if (gameState.players[playerID] === gameState.currentPlayer) {
    cardElement.onclick = () => dogmas['письменность'](cardObj); //! change later
    renderCard.toActive(cardElement);
  }
}

function recycle(playerID, arrCardID) {
  const cardObjs = {};
  for (let id = 0; id < arrCardID.length; id += 1) {
    cardObjs[arrCardID[id]] = getCardObject.byID(arrCardID[id]).age;

    const indexCard = gameState.players[playerID].hand.indexOf(arrCardID[id]);
    const cardID = gameState.players[playerID].hand[indexCard];

    if (!cardID) return;

    gameState.players[playerID].hand.splice(indexCard, 1);
  }
  gameBoard.display();
}

function corporateBonus(arrOfId) {
  if (arrOfId.length > 1) {
    takeCard(1, gameState.currentPlayer.currentAge, gameState.currentPlayer.id);
  }
}

const dogmas = {
  письменность: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(1, 2, id);
    });
    corporateBonus(arrOfId);
  },
  колесо: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(2, 1, id);
    });
    corporateBonus(arrOfId);
  },
  парус: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(1, 1, id, false);
      playCard(gameState.players[id].hand[gameState.players[id].hand.length - 1], id);
    });
    corporateBonus(arrOfId);
  },
  скотоводство: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const cardsFromHand = gameState.players[id].hand.map((card) => getCardObject.byID(card));
      if (cardsFromHand.length >= 1) {
        const lowCard = cardsFromHand.sort((a, b) => b.age - a.age).pop().innovation;
        playCard(lowCard, id);
      }
      takeCard(1, 1, id);
    });
    corporateBonus(arrOfId);
  },
  гончарноедело: (cardObj) => {
    console.log(cardObj.innovation);
  },
  инструменты: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    let cardID = [];
    const actions = () => arrOfId.forEach((id) => {
      recycle(id, cardID);

      if (cardID.length >= 3) {
        const lastCardInHand = gameState.players[id].hand[gameState.players[id].hand.length - 1];
        takeCard(1, 3, id, false);
        playCard(lastCardInHand, id);
      }
    });
    for (let i = 0; i < 3; i += 1) {
      cardID.push(prompt('Назовите карту', ''));
    }

    cardID = cardID.filter((item) => item !== null && item.length > 1);
    actions();

    cardID = [];

    do {
      cardID[0] = prompt('Назовите карту 3 века', '');
    } while (!isAge(cardID[0], 3) && cardID[0] !== null);
    if (cardID.length >= 1 && cardID[0] !== undefined) actions();

    corporateBonus(arrOfId);
  },
};

export default dogmas;
