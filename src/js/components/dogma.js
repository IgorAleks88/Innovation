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
  const textMessage = document.createElement('div');
  textMessage.classList.add('text__message');
  textMessage.innerHTML = /* html */`${text} <div class="text__icon"><i class="fas fa-trash" aria-hidden="true"></i></div>`;
  messageContainer.append(textMessage);

  const icon = document.querySelector('.text__icon');
  icon.addEventListener('click', (e) => {
    e.target.closest('.text__message').remove();
  });
}

function passTurn(player) {
  gameState.currentPlayer = player;
  gameState.activePlayer = player;
  gameBoard.display();
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
    removeCardElement(cardID);
    gameBoard.update();
  }
}

function corporateBonus(arrOfId) {
  if (arrOfId.length > 1) {
    takeCard(1, gameState.currentPlayer.currentAge, gameState.currentPlayer.id);
  }
}

const getManualDogma = function closureWrapper() {
  // store current action points
  gameState.storedActionPoints = gameState.activePlayer.actionPoints;
  let soloCorporate = false;
  if (gameState.affectedPlayers.length === 1
    && gameState.affectedPlayers[0] === gameState.currentPlayer.id) {
    soloCorporate = true;
  }
  let corporateCard = false;

  function setManualDogma(listener, getCardsID, count) {
    // change active players while find one with not null affected cards array
    let arrOfCardsID = null;
    let counter = 0;
    do {
      counter += 1;
      if (gameState.affectedPlayers.length - counter < 0) {
        counter = 0;
        soloCorporate = true;
      }
      gameState.activePlayer = gameState.players[gameState.affectedPlayers.shift()];
      arrOfCardsID = getCardsID();
    } while (arrOfCardsID.length === 0 && gameState.affectedPlayers.length >= 1);
    if (arrOfCardsID.length > 0) {
      if (gameState.activePlayer !== gameState.currentPlayer) {
        gameState.activePlayer.actionPoints = count + 1;
        corporateCard = true;
      } else if (soloCorporate) {
        gameState.activePlayer.actionPoints = gameState.storedActionPoints + count;
      } else {
        gameState.activePlayer.actionPoints = gameState.storedActionPoints + count - 1;
      }

      alert(`Дейтсвие игрока ${gameState.activePlayer.name}`);
      gameBoard.display();
      gameBoard.setHeaderCurrent();
      arrOfCardsID.forEach((cardID) => {
        document.querySelector(`[data-innovation='${cardID}']`).onclick = (e) => {
          listener(e);
          if (gameState.activePlayer.actionPoints - 1 <= 0 && gameState.storedActionPoints !== 1
          && gameState.activePlayer === gameState.currentPlayer) {
            Array.from(document.querySelectorAll('.active')).forEach((elem) => {
              elem.classList.remove('active');
            });
            if (gameState.activePlayer === gameState.currentPlayer
              && gameState.activePlayer.actionPoints !== 0) {
              gameBoard.init();
              if (corporateCard) {
                takeCard(1, gameState.activePlayer.currentAge, gameState.activePlayer.id);
                header.changePlayerStats(gameState.currentPlayer);
              }
            }
          } else if (gameState.activePlayer.actionPoints === 0) {
            Array.from(document.querySelectorAll('.active')).forEach((elem) => {
              elem.classList.remove('active');
            });
            if (gameState.activePlayer === gameState.currentPlayer
              && gameState.activePlayer.actionPoints !== 0) {
              gameBoard.init();
              if (corporateCard) {
                takeCard(1, gameState.activePlayer.currentAge, gameState.activePlayer.id);
                header.changePlayerStats(gameState.currentPlayer);
              }
            }
          }
        };
        document.querySelector(`[data-innovation='${cardID}']`).classList.add('active');
      });
      document.querySelector('.info-table').onclick = () => {
        if (gameState.activePlayer.actionPoints === 0) {
          const nextActionBtn = document.querySelector('.info-table__next-turn-btn');
          if (nextActionBtn !== null) nextActionBtn.remove();
          if (gameState.activePlayer.actionPoints === 0 && gameState.affectedPlayers.length !== 0) {
            setManualDogma(listener, getCardsID, count);
          } else if (gameState.affectedPlayers.length === 0) {
            gameState.activePlayer = gameState.currentPlayer;
            gameBoard.display();
            gameBoard.init();
          }
        }
      };
    } else {
      alert('Догму нельзя использовать!');
      gameState.activePlayer.actionPoints += 1;
    }
  }

  return setManualDogma;
};

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
            [...cardsInHand].forEach((elem) => elem.classList.remove('player-container--active'));
            e.target.closest('.card').classList.add('player-container--active');
            addTextToModal(text);
          };
        }

        const answer = await dogmaModalMessages(cardObj.dogma[0].effect);

        if (answer.length !== 0) {
          recycle(player.id, answer);
          const ageCardNum = getCardObject.byID(answer[0]).age + 1;
          takeCard(1, ageCardNum, gameState.currentPlayer.id);
          gameState.currentPlayer.influence.cards.push(gameState.currentPlayer.hand.pop());
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
  инструменты: (cardObj) => { // TODO
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
        takeCard(3, 1, gameState.activePlayer.id);
        updateGameState(gameState);
        header.changePlayerStats(gameState.activePlayer);
        gameBoard.display();
      } else {
        recycle(gameState.activePlayer.id, [getCardID(e)]);
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
    getManualDogma()(listener, getAffectedCards, 3);
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
