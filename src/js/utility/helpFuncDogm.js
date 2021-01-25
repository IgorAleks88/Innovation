/* eslint-disable no-await-in-loop */
import gameState from '../components/gameState';
import gameBoard from '../components/gameBoard';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import renderCard from '../cards/renderCard';
import displayNewTurnModal from '../display/displayNewTurnModal';
import updateGameState from './updateGameState';
import header from '../display/playerTable/displayHeader';
import dogmaModal from '../components/dogmaModal';

function getAffectedPlayers(cardObj) {
  const res = cardObj.dogma[0].resource;
  let playerIDs = [];
  if (cardObj.dogma[0].type === 'corporate') {
    playerIDs = gameState.players.filter((player) => player[res] >= gameState.currentPlayer[res])
      .map((player) => player.id);

    const currentPlayerID = playerIDs.splice(gameState.currentPlayer.id, 1);
    playerIDs.push(currentPlayerID);
  } else {
    playerIDs = gameState.players.filter((player) => {
      const pl = player[res] < gameState.currentPlayer[res] && player
          !== gameState.currentPlayer;
      return pl;
    }).map((player) => player.id);
  }
  return playerIDs.flat();
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

async function canReworkAndInfluence(cardObj, quantity) {
  const arrOfId = getAffectedPlayers(cardObj);
  const currentPlayer = gameState.currentPlayer;
  const dogmaName = cardObj.innovation;
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
          if (containerMessage.childElementCount >= quantity) return;
          e.target.closest('.card').classList.add('selected__card');
          addTextToModal(text);
        };
      }

      const answer = await dogmaModal(cardObj.dogma[0].effect, player.name);

      if (answer.length !== 0) {
        recycle(player.id, answer);
        if (dogmaName === 'земледелие') {
          const ageCardNum = getCardObject.byID(answer[0]).age + 1;
          takeCard(1, ageCardNum, player.id, false);
        } else {
          takeCard(1, answer.length, player.id, false);
        }
        player.influence.cards.push(player.hand.pop());
        if (dogmaName === 'гончарное дело') {
          takeCard(1, 1, player.id, true);
        }
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
}

export default canReworkAndInfluence;
