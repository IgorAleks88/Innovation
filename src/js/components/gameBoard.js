import gameState from './gameState';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import renderCard from '../cards/renderCard';
import updateGameState from '../utility/updateGameState';
import displayNewTurnModal from '../display/displayNewTurnModal';
import header from '../display/playerTable/displayHeader';

const gameBoard = {
  display() {
    // display info block aside
    const nameBlock = document.querySelector('.info-table__player-name');
    nameBlock.innerText = gameState.activePlayer.name;
    const actionPointsBlock = document.querySelector('.info-table__action-points');
    actionPointsBlock.innerText = gameState.activePlayer.actionPoints;

    // remove previous active age deck
    let cloneCurrentDeck = document.querySelector('#cloneCurrentDeck');
    if (cloneCurrentDeck !== null) cloneCurrentDeck.onclick = '';
    const activeDeck = document.querySelector('.age-deck--active');
    if (activeDeck !== null) {
      activeDeck.classList.remove('age-deck--active');
      activeDeck.onclick = '';
    }

    // set avaiable age deck in modal block
    while (gameState.ageDecks[`age${gameState.activePlayer.currentAge}`].length === 0) {
      gameState.activePlayer.currentAge += 1;
    }
    const avaiableAgeDeck = document.querySelector(`#age${gameState.activePlayer.currentAge}`);
    avaiableAgeDeck.classList.add('age-deck--active');

    // set avaiable age deck in aside
    const prevDeckClone = document.querySelector('#cloneCurrentDeck');
    if (prevDeckClone !== null) prevDeckClone.remove();
    // clone current active deck
    cloneCurrentDeck = avaiableAgeDeck.cloneNode();
    cloneCurrentDeck.id = 'cloneCurrentDeck';
    cloneCurrentDeck.classList.add('age-deck--active');
    cloneCurrentDeck.classList.remove('xyz-in');
    cloneCurrentDeck.style.backgroundImage = 'url(/assets/img/cards-bg/age-01-title.png)'; //! change later to `${}`
    // display cloned deck in currentDeck block
    document.querySelector('.current-deck__cards').append(cloneCurrentDeck);

    // get hand cards of active player
    const hand = document.querySelector('.hand__cards');
    hand.innerHTML = '';
    gameState.activePlayer.hand.forEach((cardID) => {
      const cardObject = getCardObject.byID(cardID);
      const cardElement = getCardElement(cardObject);
      cardElement.onclick = this.playCard;
      hand.append(cardElement);
    });

    // get active cards of active player
    const stacks = document.querySelectorAll('.active-zone__stack');
    stacks.forEach((stackElement) => {
      stackElement.innerHTML = '';
      stackElement.classList.add('active-zone__stack--empty');
      Object.keys(gameState.activePlayer.activeDecks).forEach((activeDeckName) => {
        if (activeDeckName === stackElement.id) {
          gameState.activePlayer.activeDecks[activeDeckName].cards.forEach((card) => {
            const cardObj = getCardObject.byID(card);
            const cardElement = getCardElement(cardObj);
            cardElement.onclick = () => { //! TODO
              console.log('DOGMA! :)');
            };
            renderCard.toActive(cardElement, gameState);
            cardElement.classList.remove('xyz-in');
          });
        }
      });
    });
  },

  update() {
    if (gameState.currentPlayer.actionPoints === 0) {
      this.displayNextTurnBtn();
    }

    updateGameState(gameState);
    header.changePlayerStats(gameState.currentPlayer);

    document.querySelector('.info-table__player-name').innerText = gameState.currentPlayer.name;
    document.querySelector('.info-table__action-points').innerText = gameState.currentPlayer.actionPoints;
  },

  init() {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((elem) => {
      if (gameState.currentPlayer.hand.indexOf(elem.dataset.innovation) > -1) {
        elem.onclick = this.playCard;
      }
    });
    const activeDeckElements = document.querySelectorAll('.age-deck--active');
    activeDeckElements.forEach((elem) => {
      elem.onclick = this.takeCard;
    });
  },

  takeCard(e) {
    let sourceDeck = e.target.id;
    if (sourceDeck === 'cloneCurrentDeck') { sourceDeck = gameState.currentPlayer.currentDeck; }

    const movingCardInnovation = gameState.ageDecks[sourceDeck].pop();
    gameState.currentPlayer.hand.push(movingCardInnovation);
    const movingCardObj = getCardObject.byID(movingCardInnovation);
    const movingCardElement = getCardElement(movingCardObj);
    movingCardElement.onclick = gameBoard.playCard;
    renderCard.toHand(movingCardElement, gameState);

    gameState.currentPlayer.actionPoints -= 1;

    gameBoard.update();
  },

  playCard(e) {
    const playingCardInnovation = e.target.closest('.card').dataset.innovation;
    const playingCardElement = e.target.closest('.card');
    playingCardElement.onclick = null;

    const playIndex = gameState.currentPlayer.hand.indexOf(playingCardInnovation);
    gameState.currentPlayer.hand.splice(playIndex, 1);

    const playingCardObj = getCardObject.byID(playingCardInnovation);

    const targetDeckArray = gameState.currentPlayer.activeDecks[playingCardObj.color].cards;

    targetDeckArray.push(playingCardInnovation);
    playingCardElement.onclick = () => { //! TODO
      console.log('DOGMA! :)');
    };
    renderCard.toActive(playingCardElement, gameState);

    gameState.currentPlayer.actionPoints -= 1;

    gameBoard.update();
  },

  displayNextTurnBtn() {
    const nextTurnBtn = document.createElement('div');
    nextTurnBtn.classList.add('info-table__next-turn-btn');
    nextTurnBtn.innerText = 'Закончить ход';
    nextTurnBtn.addEventListener('click', () => {
      for (let i = 0; i < gameState.players.length; i += 1) {
        if (gameState.currentPlayer === gameState.players[i]) {
          i += 1;
          if (i === gameState.players.length) i = 0;
          gameState.currentPlayer = gameState.players[i];
          gameState.activePlayer = gameState.currentPlayer;
          gameState.currentPlayer.actionPoints = 2;
          break;
        }
      }
      displayNewTurnModal(gameState.currentPlayer.name);
      setTimeout(() => {
        gameBoard.display();
        gameBoard.init();
        const excistedNextTurnBtn = document.querySelector('.info-table__next-turn-btn');
        excistedNextTurnBtn.remove();
      }, 500);
    });
    const infoTable = document.querySelector('.info-table');
    this.disableEvents();
    infoTable.append(nextTurnBtn);
  },

  disableEvents() {
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach((card) => {
      card.onclick = '';
      card.style.cursor = 'default';
      card.style.transform = 'none';
    });
    const cardDogms = Array.from(document.querySelectorAll('.card__dogma'));
    cardDogms.forEach((cardDogma) => {
      cardDogma.onclick = '';
      cardDogma.style.cursor = 'default';
      cardDogma.style.transform = 'none';
    });
    const decks = Array.from(document.querySelectorAll('.age-deck'));
    decks.forEach((deck) => {
      deck.onclick = '';
      deck.classList.remove('age-deck--active');
    });
  },
};

export default gameBoard;
