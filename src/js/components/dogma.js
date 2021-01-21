import renderCard from '../cards/renderCard';
import getCardElement from '../cards/getCardElement';
import getCardObject from '../cards/getCardObject';
import gameState from './gameState';
import gameBoard from './gameBoard';
import header from '../display/playerTable/displayHeader';

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
    if (gameState.ageDecks[`age${ageNum}`].length === 0) ageNum += 1;
    const cardID = gameState.ageDecks[`age${ageNum}`].pop();
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
};

export default dogmas;
