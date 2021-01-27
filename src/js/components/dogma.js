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
  земледелие: async (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    await canReworkAndInfluence(cardObj, 1);
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
  лукистрелы: async (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    const arrOfId = getAffectedPlayers(cardObj);
    for (let i = 0; i < arrOfId.length; i += 1) {
      const player = gameState.players.find((pl) => pl.id === arrOfId[i]);
      await displayNewTurnModal(player.name);
      passTurn(player);
      gameBoard.setHeaderCurrent();
      const cardsInHand = document.querySelector('.hand__cards').children;
      const deck = document.querySelector('.age-deck--active');

      const eventForCards = (event) => {
        const text = event.target.closest('.card').dataset.innovation;
        const containerMessage = document.querySelector('.container__message');
        if (containerMessage.childElementCount >= 1) return;
        event.target.closest('.card').classList.add('selected__card');
        addTextToModal(text);
      };

      deck.onclick = (e) => {
        let ageDeck = e.target.id;
        if (ageDeck === 'cloneCurrentDeck') {
          ageDeck = gameState.activePlayer.currentDeck;
        }

        const cardID = gameState.ageDecks[ageDeck].pop();
        gameState.activePlayer.hand.push(cardID);

        const card = getCardObject.byID(cardID);
        const movingCardElement = getCardElement(card);
        renderCard.toHand(movingCardElement);
        messageToLog(player.name, 'взял карту из колоды');
        header.changePlayerStats(player);

        const cardIDs = [...cardsInHand]
          .map((item) => getCardObject.byID(item.dataset.innovation).age);

        const higerAge = Math.max(...cardIDs);
        const backgroundStyle = `url("./assets/img/cards-bg/age-0${higerAge}.jpg")`;

        const higherCards = [...cardsInHand]
          .filter((item) => item.style.background === backgroundStyle);

        for (let higherCard = 0; higherCard < higherCards.length; higherCard += 1) {
          higherCards[higherCard].onclick = eventForCards;
        }
        deck.onclick = null;
      };

      const answer = await dogmaModalMessages(cardObj.dogma[0].effect, player.name, 'agr');

      const cardIdx = player.hand.indexOf(answer.join(''));
      gameState.currentPlayer.hand.push(player.hand[cardIdx]);
      player.hand.splice(cardIdx, 1);
      messageToLog(player.name, `отдал карту ${answer.join('')} игроку ${gameState.currentPlayer.name}`);
      updateGameState(gameState);
      gameState.players.forEach((pl) => header.changePlayerStats(pl));
    }

    await displayNewTurnModal(gameState.currentPlayer.name);
    passTurn(gameState.currentPlayer);
    gameState.players.forEach((pl) => header.changePlayerStats(pl));
    gameBoard.setHeaderCurrent();

    if (gameState.currentPlayer.actionPoints > 0) {
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
  перевод: (cardObj) => {
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      const resultArr = [];
      if (gameState.activePlayer.influence.cards.length !== 0) {
        resultArr.push(`influence${gameState.activePlayer.id}`);
      }
      return resultArr;
    }
    function listener() {
      gameState.activePlayer.influence.cards.forEach((cardID) => {
        playCard(cardID, gameState.activePlayer.id);
      });
      gameState.activePlayer.influence.cards = [];
      header.changePlayerStats(gameState.activePlayer);
      gameBoard.update();
    }
    getManualDogma(listener, getAffectedCards, 1, null, true, true);
  },
  алхимия: (cardObj) => {
    let arrOfId = getAffectedPlayers(cardObj);
    arrOfId = arrOfId.filter((id) => {
      return gameState[`player${id}`].tower >= 3;
    });
    if (arrOfId.length < 1) {
      showErrorModal('Первую часть никто не может выполнить');
    } else {
      arrOfId.forEach((id) => {
        const cardsNum = Math.floor(gameState[`player${id}`].tower / 3);
        takeCard(cardsNum, 4, id, true);
        let recycleAll = false;
        const hand = gameState[`player${id}`].hand;
        for (let i = cardsNum; i === 1; i -= 1) {
          if (getCardObject.byID(hand[hand.length - i]).color === 'red') recycleAll = true;
        }
        if (recycleAll) {
          recycle(id, gameState.activePlayer.hand);
          [...document.querySelector('.hand__cards').childNodes].forEach((card) => card.remove());
        }
      });
    }
    // manual part
    gameState.affectedPlayers = getAffectedPlayers(cardObj);
    function getAffectedCards() {
      const resultArr = [];
      gameState.activePlayer.hand.forEach((card) => resultArr.push(card));
      return resultArr;
    }
    function listener(e) {
      playCard(getCardID(e), gameState.activePlayer.id);
      document.querySelector(`[data-innovation="${getCardID(e)}"]`).classList.remove('active');
      header.changePlayerStats(gameState.activePlayer);
      gameBoard.update();
      return gameState.activePlayer.hand.length > 0 ? gameState.activePlayer.hand : undefined;
    }
    function listener2(e) {
      gameState.activePlayer.influence.cards.push(getCardID(e));
      removeCardElement(getCardID(e));
      [...document.querySelectorAll('.active')].forEach((element) => {
        element.classList.remove('active');
      });
      gameBoard.update();
    }
    getManualDogma(listener, getAffectedCards, 2, listener2, true, false);
  },
  деньги: async (cardObj) => {
    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u>`);
    await canReworkAndInfluence(cardObj, Infinity);
  },
};

export default dogmas;
