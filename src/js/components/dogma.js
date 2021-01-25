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
import {
  canReworkAndInfluence,
  moveCardToHand,
  showErrorModal,
  addTextToModal,
  passTurn,
  getMaxCard,
  removeCardElement,
  getCardAge,
  getCardID,
  getActualDeck,
  isHaveResource,
  getAffectedPlayers,
  takeCard,
  playCard,
  recycle,
  corporateBonus,
  getManualDogma,
  messageToLog,
} from '../utility/dogmaTools';

const dogmas = {
  письменность: (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(1, 2, id);
    });
    corporateBonus(arrOfId);
  },
  колесо: (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(2, 1, id);
    });
    corporateBonus(arrOfId);
  },
  парус: (cardObj) => {
    const text = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${text}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      takeCard(1, 1, id, false);
      playCard(gameState.players[id].hand[gameState.players[id].hand.length - 1], id);
    });
    corporateBonus(arrOfId);
  },
  скотоводство: (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    await canReworkAndInfluence(cardObj, 1);
  },
  инструменты: (cardObj) => { // TODO
    const text = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${text}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    arrOfId.forEach((id) => {
      const actualAge = getActualDeck(5);
      const cardID = gameState.ageDecks[`age${actualAge}`].pop();
      playCard(cardID, id);
    });
    corporateBonus(arrOfId);
  },
  пароваямашина: (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
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
  гончарноедело: async (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    await canReworkAndInfluence(cardObj, 3);
  },
  города: async (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    const currentPlayer = gameState.currentPlayer;
    for (let i = 0; i < arrOfId.length; i += 1) {
      const player = gameState.players.find((pl) => pl.id === arrOfId[i]);
      if (player.tower >= 4) {
        await displayNewTurnModal(player.name);
        passTurn(player);
        gameBoard.setHeaderCurrent();
        const cardsInActive = document.querySelectorAll('.active-zone__stack');
        for (let card = 0; card < cardsInActive.length; card += 1) {
          if (cardsInActive[card].lastElementChild) {
            cardsInActive[card].lastElementChild.onclick = (e) => {
              const text = e.target.closest('.card').dataset.innovation;
              const hasResource = getCardObject.byID(text).resourses.some((resource) => resource.name.includes('tower'));
              if (!hasResource) return;
              const containerMessage = document.querySelector('.container__message');
              if (containerMessage.childElementCount >= 1) return;
              e.target.closest('.card').classList.add('selected__card');
              addTextToModal(text);
            };
          }
        }

        const answer = await dogmaModalMessages(cardObj.dogma[0].effect, player.name, 'agr');

        const color = getCardObject.byID(answer.join('')).color;
        const card = player.activeDecks[color].cards.pop();
        gameState.currentPlayer.activeDecks[color].cards.push(card);
        takeCard(1, 1, player.id);
        messageToLog(player.name, 'взял карту из колоды');
        updateGameState(gameState);
        gameState.players.forEach((pl) => header.changePlayerStats(pl));
      }
    }

    await displayNewTurnModal(currentPlayer.name);
    passTurn(currentPlayer);
    gameState.players.forEach((pl) => header.changePlayerStats(pl));
    gameBoard.setHeaderCurrent();

    if (currentPlayer.actionPoints > 0) {
      gameBoard.init();
    } else {
      gameBoard.disableEvents();
    }
  },
};

export default dogmas;
export { takeCard };
export { showErrorModal };
