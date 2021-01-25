import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';
import header from '../display/playerTable/displayHeader';
import updateGameState from '../utility/updateGameState';
import getManualDogma from '../utility/getManualDogma';

// const isAge = (cardID, age) => getCardObject.byID(cardID).age === age;

function moveCardToHand(card, id) {
  gameState.players[id].hand.push(card);
  if (id === gameState.currentPlayer.id) {
    const currentCard = getCardObject.byID(card);
    const cardElement = getCardElement(currentCard);
    renderCard.toHand(cardElement);
    cardElement.onclick = gameBoard.playCard;
  }
}

function removeCardElement(cardID) {
  const cardElement = document.querySelector(`[data-innovation="${cardID}"]`);
  if (cardElement !== null) cardElement.remove();
}

// take e as argument!!!
function getCardAge(e) {
  let cardElement = null;
  let cardObject = null;
  if (e.target) {
    cardElement = e.target.closest('.card');
    cardObject = getCardObject.byID(cardElement.dataset.innovation);
    return cardObject.age;
  }
  return false;
}
// take e as argument!!!
function getCardID(e) {
  let cardElement = null;
  if (e.target) {
    cardElement = e.target.closest('.card');
    return cardElement.dataset.innovation;
  }
  return false;
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

    const currentPlayerID = idPlayers.splice(gameState.currentPlayer.id, 1);
    idPlayers.push(currentPlayerID);
  } else {
    idPlayers = gameState.players
      .filter((player) => {
        const pl = player[res] < gameState.currentPlayer[res] && player !== gameState.currentPlayer;
        return pl;
      }).map((player) => player.id);
  }

  return idPlayers.flat();
}

function takeCard(cardsNum, ageNum, playerID, render = true) {
  while (cardsNum > 0) {
    const actualAge = getActualDeck(ageNum);
    const cardID = gameState.ageDecks[`age${actualAge}`].pop();
    gameState.players[playerID].hand.push(cardID);
    cardsNum -= 1;
    if (gameState.players[playerID] === gameState.activePlayer) {
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
  if (gameState.players[playerID] === gameState.activePlayer) {
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

    gameState.ageDecks[`age${cardObjs[arrCardID[id]]}`].unshift(cardID);
    gameState.players[playerID].hand.splice(indexCard, 1);
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
    // get affected players
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    // function which get affected cards of active player
    // return empty arr if any properties dont match!
    function getAffectedCards() {
      const cardsFromHand = [];
      gameState.activePlayer.hand.forEach((cardID) => {
        cardsFromHand.push(getCardObject.byID(cardID));
      });
      const lowerCards = cardsFromHand.sort((a, b) => b.age - a.age).filter((card, i, arr) => {
        return card.age === arr[arr.length - 1].age;
      });
      const lowerCardsID = lowerCards.map((cardObject) => cardObject.innovation);
      return lowerCardsID;
    }
    function listener(e) {
      takeCard(1, gameState.activePlayer.currentAge, gameState.activePlayer.id);
      gameBoard.playCard(e);
    }
    getManualDogma()(listener, getAffectedCards, 1);
  },
  инструменты: (cardObj) => {
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      const handOfCurrent = gameState.activePlayer.hand;
      const thirdAgeCards = [];
      handOfCurrent.forEach((cardID) => {
        if (getCardObject.byID(cardID).age === 3) thirdAgeCards.push(cardID);
      });
      let resArr = [];
      if (handOfCurrent.length - thirdAgeCards.length < 3 && thirdAgeCards.length !== 0) {
        resArr = resArr.concat(thirdAgeCards);
      } else if (handOfCurrent.length >= 3 && thirdAgeCards.length === 0) {
        resArr = resArr.concat(handOfCurrent);
      } else if (handOfCurrent.length > 3 && thirdAgeCards.length !== 0) {
        resArr = resArr.concat(handOfCurrent);
      }
      return resArr;
    }

    let counter = 0;
    function listener(e) {
      if (getCardAge(e) === 3 && gameState.activePlayer.actionPoints >= 3) {
        gameState.activePlayer.actionPoints -= 2;
        recycle(gameState.activePlayer.id, [getCardID(e)]);
        removeCardElement(getCardID(e));
        gameBoard.update();
        takeCard(3, 1, gameState.activePlayer.id);
        updateGameState(gameState);
        header.changePlayerStats(gameState.activePlayer);
        gameBoard.display();
      } else {
        recycle(gameState.activePlayer.id, [getCardID(e)]);
        removeCardElement(getCardID(e));
        gameBoard.update();
        counter += 1;
        if (counter === 3) {
          counter = 0;
          takeCard(1, 3, gameState.activePlayer.id, false);
          const lastCardInHand = gameState.activePlayer
            .hand[gameState.activePlayer.hand.length - 1];
          playCard(lastCardInHand, gameState.activePlayer.id);
          updateGameState(gameState);
          header.changePlayerStats(gameState.activePlayer);
          gameBoard.display();
        }
      }
    }
    getManualDogma(listener, getAffectedCards, 3, null, true, true);
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
  сводзаконов: (cardObj) => {
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      const notEmptyStacks = Object.keys(gameState.activePlayer.activeDecks).filter((deck) => {
        return gameState.activePlayer.activeDecks[deck].cards.length !== 0;
      });
      return gameState.activePlayer.hand.filter((cardID) => {
        return notEmptyStacks.includes(getCardObject.byID(cardID).color);
      });
    }
    function listener(e) {
      const cardID = getCardID(e);
      const cardObject = getCardObject.byID(cardID);
      const cardElement = document.querySelector(`[data-innovation="${cardID}"]`);

      gameState.activePlayer.hand.splice(gameState.activePlayer.hand.indexOf(cardID), 1);
      gameState.activePlayer.activeDecks[cardObject.color].cards.unshift(cardID);
      renderCard.archive(cardElement);
      cardElement.classList.remove('active');
      cardElement.onclick = null;
      gameBoard.update();
      Array.from(document.querySelector('.hand__cards').childNodes).forEach((cardElem) => {
        cardElem.classList.remove('active');
        cardElem.onclick = null;
      });
      const targetStack = document.getElementById(`${cardObject.color}`);
      targetStack.classList.add('active');
      if (gameState.activePlayer.activeDecks[targetStack.id].shift !== 'left') {
        return targetStack;
      }
      gameBoard.update();
    }
    function secondListener(e) {
      const targetStack = e.target.closest('.active-zone__stack');
      gameState.activePlayer.activeDecks[targetStack.id].shift = 'left';
      gameBoard.display();
      gameBoard.init();
      gameBoard.update();
      targetStack.onclick = null;
      targetStack.classList.remove('active');
    }
    getManualDogma(listener, getAffectedCards, 2, secondListener, true, true);
  },
};

export default dogmas;
export { takeCard };
