import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';

function moveCardToHand(card, id) {
  gameState.players[id].hand.push(card);
  if (id === gameState.currentPlayer.id) {
    const currentCard = getCardObject.byID(card);
    const cardElement = getCardElement(currentCard);
    renderCard.toHand(cardElement);
    cardElement.onclick = gameBoard.playCard;
  }
}

function getMaxCard(stack) {
  let result = null;
  if (stack.length > 0) {
    result = getCardObject.byID(stack[0]);
    for (let i = 0; i < stack.length; i += 1) {
      const currentCard = getCardObject.byID(stack[i]);
      if (result.age < currentCard.age) {
        result = currentCard;
      }
    }
  }
  return result;
}

function getActualDeck(startAge) {
  let actualAge = -1;
  for (let i = startAge; i < 11; i += 1) {
    if (gameState.ageDecks[`age${i}`].length > 0) {
      actualAge = i;
      break;
    }
  }
  return actualAge;
}

function isHaveResource(cardObj, res) {
  let result = false;
  cardObj.resourses.forEach((item) => {
    if (item.name === res) {
      result = true;
    }
  });
  return result;
}

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
    const actualAge = getActualDeck(ageNum);
    const cardID = gameState.ageDecks[`age${actualAge}`].pop();
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
  if (cardIndex > -1) {
    gameState.players[playerID].hand.splice(cardIndex, 1);
  }
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

  кузнечноедело: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      let repeat = true;
      do {
        const actualAge = getActualDeck(1);
        const cardID = gameState.ageDecks[`age${actualAge}`].pop();
        const currentPlayerName = gameState[`player${id}`].name;
        console.log(`${currentPlayerName} взял ${cardID}`);
        const currentCard = getCardObject.byID(cardID);
        repeat = isHaveResource(currentCard, 'tower');
        if (repeat) {
          gameState.players[id].influence.cards.push(cardID);
        } else {
          moveCardToHand(cardID, id);
        }
      } while (repeat);
    });
    corporateBonus(arrOfId);
  },
  мистицизм: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const actualAge = getActualDeck(1);
      const cardID = gameState.ageDecks[`age${actualAge}`].pop();
      const currentPlayerName = gameState[`player${id}`].name;
      const currentCard = getCardObject.byID(cardID);
      console.log(`${currentPlayerName} взял ${cardID} ${currentCard.color}`);
      if (gameState.players[id].activeDecks[currentCard.color].cards.length > 0) {
        gameState.players[id].activeDecks[currentCard.color].cards.push(cardID);
        if (id === gameState.currentPlayer.id) {
          const cardElement = getCardElement(currentCard);
          renderCard.toActive(cardElement);
          if (dogmas[currentCard.innovation]) {
            cardElement.onclick = () => dogmas[currentCard.innovation](cardObj);
          }
        }
      } else {
        moveCardToHand(cardID, id);
      }
    });
    corporateBonus(arrOfId);
  },
  виноделие: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const numberOfCards = Math.trunc(gameState[`player${id}`].tree / 2);
      takeCard(numberOfCards, 2, id);
    });
    corporateBonus(arrOfId);
  },
  календарь: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      if (gameState[`player${id}`].influence.cards.length > gameState[`player${id}`].hand.length) {
        takeCard(2, 3, id);
      }
    });
    corporateBonus(arrOfId);
  },
  эксперименты: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const actualAge = getActualDeck(5);
      const cardID = gameState.ageDecks[`age${actualAge}`].pop();
      playCard(cardID, id);
    });
    corporateBonus(arrOfId);
  },
  пароваямашина: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      for (let i = 0; i < 2; i += 1) {
        const actualAge = getActualDeck(4);
        const cardID = gameState.ageDecks[`age${actualAge}`].pop();
        const cardObject = getCardObject.byID(cardID);
        const cardElement = getCardElement(cardObject);
        const cardColor = cardObject.color;
        gameState[`player${id}`].activeDecks[cardColor].cards.unshift(cardID);
        if (gameState.currentPlayer.id === id) {
          renderCard.archive(cardElement);
        }
      }
      const lastYellowCardID = gameState[`player${id}`].activeDecks.yellow.cards.shift();
      gameState[`player${id}`].influence.cards.push(lastYellowCardID);
      const lastYellowCardElement = getCardElement(getCardObject.byID(lastYellowCardID));
      renderCard.removeCardFromActive(lastYellowCardElement);
    });
    corporateBonus(arrOfId);
  },
  станки: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      let currentAge = 1;
      const currentPlayer = gameState[`player${id}`];
      const maxCard = getMaxCard(currentPlayer.influence.cards);
      if (maxCard) {
        currentAge = maxCard.age;
      }
      currentAge = getActualDeck(currentAge);
      const currentCard = gameState.ageDecks[`age${currentAge}`].pop();
      currentPlayer.influence.cards.push(currentCard);
    });
    corporateBonus(arrOfId);
  },
  генетика: (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const currentPlayer = gameState[`player${id}`];
      const currentAge = getActualDeck(10);
      const currentCard = gameState.ageDecks[`age${currentAge}`].pop();
      const stackColor = getCardObject.byID(currentCard).color;
      playCard(currentCard, id);
      const currentDeck = currentPlayer.activeDecks[stackColor].cards;
      if (currentDeck.length > 1) {
        for (let i = 0; i < currentDeck.length - 1; i += 1) {
          const cardID = currentDeck[i];
          currentPlayer.influence.cards.push(cardID);
          renderCard.removeCardFromActive(getCardElement(getCardObject.byID(cardID)));
        }
        currentDeck.splice(0, currentDeck.length - 1);
      }
    });
    corporateBonus(arrOfId);
  },
};

export default dogmas;
