import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';
import header from '../display/playerTable/displayHeader';

function moveCardToHand(card, id) {
  gameState.players[id].hand.push(card);
  if (id === gameState.currentPlayer.id) {
    const currentCard = getCardObject.byID(card);
    const cardElement = getCardElement(currentCard);
    renderCard.toHand(cardElement);
    cardElement.onclick = gameBoard.playCard;
  }
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

  // set current player to [0] index of affected players
  let currentPlayer = null;
  idPlayers.forEach((playerID, i) => {
    if (playerID === gameState.currentPlayer) {
      currentPlayer = idPlayers.splice(i, 1);
    }
  });
  if (currentPlayer !== null) idPlayers.unshift(currentPlayer);

  return idPlayers;
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
    do {
      gameState.activePlayer = gameState.players[gameState.affectedPlayers.pop()];
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
          if (gameState.activePlayer.actionPoints - 1 <= 0) {
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
      const lowerCardsID = lowerCards.map((cardObj) => cardObj.innovation);
      return lowerCardsID;
    }
    function listener(e) {
      takeCard(1, gameState.activePlayer.currentAge, gameState.activePlayer.id);
      gameBoard.playCard(e);
    }
    getManualDogma()(listener, getAffectedCards, 1);
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
};

export default dogmas;
