/* eslint-disable no-await-in-loop */
import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';
import header from '../display/playerTable/displayHeader';
import dogmaModalMessages from './dogmaModal';
import displayNewTurnModal from '../display/displayNewTurnModal';
import updateGameState from '../utility/updateGameState';
import getManualDogma from '../utility/getManualDogma';

function moveCardToHand(card, id) {
  gameState.players[id].hand.push(card);
  if (id === gameState.currentPlayer.id) {
    const currentCard = getCardObject.byID(card);
    const cardElement = getCardElement(currentCard);
    renderCard.toHand(cardElement);
    cardElement.onclick = gameBoard.playCard;
  }
}

function showErrorModal(text) {
  const audio = new Audio('../../assets/sounds/error_sound_sms.mp3');
  const wrraper = document.querySelector('.active-zone__cards-wrapper');
  const modal = document.createElement('div');
  modal.classList.add('modal__error');
  modal.innerHTML = /* html */`
  <div class="error__message">${text}</div>
  `;
  wrraper.append(modal);
  audio.play();
  setTimeout(() => modal.remove(), 2000);
}

function addTextToModal(text) {
  const messageContainer = document.querySelector('.container__message');
  const verification = [...messageContainer.children].map((i) => i.textContent.trim());
  const cardsInHand = document.querySelector('.hand__cards');

  if (verification.includes(text)) return;

  const textMessage = document.createElement('div');
  textMessage.classList.add('text__message');
  textMessage.innerHTML = /* html */`${text} <div class="text__icon"><i class="fas fa-trash" aria-hidden="true"></i></div>`;
  messageContainer.append(textMessage);

  messageContainer.onclick = (e) => {
    const cardID = e.target.closest('.text__message').textContent.trim();
    cardsInHand.querySelector(`[data-innovation="${cardID}"]`).classList.remove('selected__card');
    e.target.closest('.text__message').remove();
  };
}

function passTurn(player) {
  gameState.currentPlayer = player;
  gameState.activePlayer = player;
  gameBoard.display();
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
  let playerIDs = [];
  if (cardObj.dogma[0].type === 'corporate') {
    playerIDs = gameState.players.filter((player) => player[res] >= gameState.currentPlayer[res])
      .map((player) => player.id);

    const currentPlayerID = playerIDs.splice(gameState.currentPlayer.id, 1);
    playerIDs.push(currentPlayerID);
  } else {
    playerIDs = gameState.players
      .filter((player) => {
        const pl = player[res] < gameState.currentPlayer[res] && player !== gameState.currentPlayer;
        return pl;
      }).map((player) => player.id);
  }
  return playerIDs.flat();
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
  if (cardIndex > -1) {
    gameState.players[playerID].hand.splice(cardIndex, 1);
  }
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
  },
  земледелие: async (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    const currentPlayer = gameState.currentPlayer;
    let bonus = false;
    if (currentPlayer.hand.length < 1) {
      showErrorModal('Не достаточно карт');
      gameState.currentPlayer.actionPoints += 1;
      return;
    }

    for (let i = 0; i < arrOfId.length; i += 1) {
      const player = gameState.players.find((pl) => pl.id === arrOfId[i]);

      if (player.hand.length >= 1) {
        await displayNewTurnModal(player.name);
        passTurn(player);
        gameBoard.setHeaderCurrent();
        const cardsInHand = document.querySelector('.hand__cards').children;

        for (let card = 0; card < cardsInHand.length; card += 1) {
          cardsInHand[card].onclick = (e) => {
            const text = e.target.closest('.card').dataset.innovation;
            const containerMessage = document.querySelector('.container__message');
            if (containerMessage.childElementCount >= 1) return;
            e.target.closest('.card').classList.add('selected__card');
            addTextToModal(text);
          };
        }

        const answer = await dogmaModalMessages(cardObj.dogma[0].effect);

        if (answer.length !== 0) {
          recycle(player.id, answer);
          const ageCardNum = getCardObject.byID(answer[0]).age + 1;
          takeCard(1, ageCardNum, player.id, false);
          player.influence.cards.push(player.hand.pop());
          updateGameState(gameState);
          gameState.players.forEach((pl) => header.changePlayerStats(pl));

          if (i !== arrOfId.length - 1) {
            bonus = true;
          }
        }
      }
    }

    if (bonus) {
      corporateBonus(arrOfId);
    }

    gameBoard.display();
    gameState.players.forEach((pl) => header.changePlayerStats(pl));

    if (currentPlayer.actionPoints > 0) {
      gameBoard.init();
    } else {
      gameBoard.disableEvents();
    }
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
        return [targetStack.id];
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
  гончарноедело: async (cardObj) => {
    const arrOfId = getAffectedPlayers(cardObj);
    const currentPlayer = gameState.currentPlayer;
    let bonus = false;
    if (currentPlayer.hand.length < 1) {
      showErrorModal('Не достаточно карт');
      gameState.currentPlayer.actionPoints += 1;
      return;
    }

    for (let i = 0; i < arrOfId.length; i += 1) {
      const player = gameState.players.find((pl) => pl.id === arrOfId[i]);

      if (player.hand.length >= 1) {
        await displayNewTurnModal(player.name);
        passTurn(player);
        gameBoard.setHeaderCurrent();
        const cardsInHand = document.querySelector('.hand__cards').children;

        for (let card = 0; card < cardsInHand.length; card += 1) {
          cardsInHand[card].onclick = (e) => {
            const text = e.target.closest('.card').dataset.innovation;
            const containerMessage = document.querySelector('.container__message');
            if (containerMessage.childElementCount >= 3) return;
            e.target.closest('.card').classList.add('selected__card');
            addTextToModal(text);
          };
        }

        const answer = await dogmaModalMessages(cardObj.dogma[0].effect);

        if (answer.length !== 0) {
          recycle(player.id, answer);
          takeCard(1, answer.length, player.id, false);
          gameState.currentPlayer.influence.cards.push(player.hand.pop());
          takeCard(1, 1, player.id, true);
          updateGameState(gameState);
          gameState.players.forEach((pl) => header.changePlayerStats(pl));

          if (i !== arrOfId.length - 1) {
            bonus = true;
          }
        }
      }
    }

    if (bonus) {
      corporateBonus(arrOfId);
    }

    gameBoard.display();
    gameState.players.forEach((pl) => header.changePlayerStats(pl));

    if (currentPlayer.actionPoints > 0) {
      gameBoard.init();
    } else {
      gameBoard.disableEvents();
    }
  },
  математика: (cardObj) => {
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      return gameState.activePlayer.hand.length > 0 ? gameState.activePlayer.hand : [];
    }
    function listener(e) {
      const targetID = getCardID(e);
      recycle(gameState.activePlayer.id, [targetID]);
      removeCardElement(targetID);
      takeCard(1, getCardAge(e) + 1, gameState.activePlayer.id, false);
      playCard(gameState.activePlayer.hand[gameState.activePlayer.hand.length - 1],
        gameState.activePlayer.id);
      [...document.querySelectorAll('.active')].forEach((element) => {
        element.classList.remove('active');
      });
      gameBoard.update();
    }
    getManualDogma(listener, getAffectedCards, 1, null, true, true);
  },
  философия: (cardObj) => {
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      const resultArr = [];
      Object.keys(gameState.activePlayer.activeDecks).forEach((stackID) => {
        if (gameState.activePlayer.activeDecks[stackID].cards.length > 1
          && gameState.activePlayer.activeDecks[stackID].shift !== 'left') resultArr.push(stackID);
      });
      return resultArr;
    }
    function listener(e) {
      const targetElement = e.target.closest('.active-zone__stack');
      gameState.activePlayer.activeDecks[targetElement.id].shift = 'left';
      [...document.querySelectorAll('.active')].forEach((element) => {
        element.classList.remove('active');
      });
      gameBoard.update();
      gameBoard.displayActive();
      gameState.activePlayer.hand.forEach((cardID) => {
        document.querySelector(`[data-innovation='${cardID}']`).classList.add('active');
      });
      return gameState.activePlayer.hand;
    }
    function listener2(e) {
      gameState.activePlayer.influence.cards.push(getCardID(e));
      removeCardElement(getCardID(e));
      [...document.querySelectorAll('.active')].forEach((element) => {
        element.classList.remove('active');
      });
      gameBoard.update();
    }
    getManualDogma(listener, getAffectedCards, 2, listener2, true, true);
  },
};

export default dogmas;
export { takeCard };
export { showErrorModal };
