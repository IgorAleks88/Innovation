import gameState from './gameState';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import renderCard from '../cards/renderCard';
import updateGameState from '../utility/updateGameState';
import displayNewTurnModal from '../display/displayNewTurnModal';
import header from '../display/playerTable/displayHeader';
import dogmas from './dogma';
import { messageToLog } from '../utility/dogmaTools';
import specCard from '../specCards/specCard';
import checkWinCondition from '../utility/checkWinCondition';
// import socket from '../app'; // for server

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
    if (gameState.activePlayer.currentAge !== 10) {
      cloneCurrentDeck.style.backgroundImage = `url(/assets/img/cards-bg/age-0${gameState.activePlayer.currentAge}-title.png)`;
    } else {
      cloneCurrentDeck.style.backgroundImage = 'url(/assets/img/cards-bg/age-10-title.png)';
    }
    // display cloned deck in currentDeck block
    document.querySelector('.current-deck__cards').append(cloneCurrentDeck);

    // set avaiable leadership card
    const leadershipCards = document.querySelectorAll('.leadership-cards__card');
    [...leadershipCards].forEach((card, num) => {
      const age = num + 1;
      card.classList.remove('leadership-cards__card--active');
      const isCardAvaiable = gameState.leadershipDeck.some((cardID) => {
        return getCardObject.byID(cardID).age === age;
      });
      if (!isCardAvaiable) card.classList.add('inactive');
      if (gameState.activePlayer.influence.points / age >= 5
        && !card.classList.contains('inactive')) {
        card.classList.add('leadership-cards__card--active');
      }
    });
    // add effect to aside if leadership card avaiable
    const leadershipCardBlock = document.querySelector('.extra-cards__leadership-block');
    if ([...document.querySelectorAll('.leadership-cards__card--active')].length > 0) {
      leadershipCardBlock.classList.add('extra-cards__leadership-block--active');
    } else {
      leadershipCardBlock.classList.remove('extra-cards__leadership-block--active');
    }
    this.setAsideLeadershipText();

    // set special cards deck
    const specialTitle = document.querySelector('.extra-cards__special-title');
    const specialCards = [...document.querySelectorAll('.special-cards__card')];
    let activeSpecCounter = 0;
    specialCards.forEach((card) => {
      if (!card.classList.contains('inactive')) activeSpecCounter += 1;
    });
    if (activeSpecCounter === 5) specialTitle.innerText = '5 карт';
    else if (activeSpecCounter === 1) specialTitle.innerText = '1 карта';
    else specialTitle.innerText = `${activeSpecCounter} карты`;

    // get hand cards of active player
    const hand = document.querySelector('.hand__cards');
    hand.innerHTML = '';
    gameState.activePlayer.hand.forEach((cardID) => {
      const cardObject = getCardObject.byID(cardID);
      const cardElement = getCardElement(cardObject);
      hand.append(cardElement);
    });

    // get active cards of active player
    const stacks = document.querySelectorAll('.active-zone__stack');
    stacks.forEach((stackElement) => {
      stackElement.innerHTML = '';
      stackElement.classList.add('active-zone__stack--empty');
      stackElement.style = null;
      Object.keys(gameState.activePlayer.activeDecks).forEach((activeDeckName) => {
        if (activeDeckName === stackElement.id) {
          gameState.activePlayer.activeDecks[activeDeckName].cards.forEach((card) => {
            const cardObj = getCardObject.byID(card);
            const cardElement = getCardElement(cardObj);
            renderCard.toActive(cardElement);
            cardElement.classList.remove('xyz-in');
          });
        }
      });
    });
  },

  displayActive() {
    const stacks = document.querySelectorAll('.active-zone__stack');
    stacks.forEach((stackElement) => {
      stackElement.innerHTML = '';
      stackElement.classList.add('active-zone__stack--empty');
      stackElement.style = null;
      Object.keys(gameState.activePlayer.activeDecks).forEach((activeDeckName) => {
        if (activeDeckName === stackElement.id) {
          gameState.activePlayer.activeDecks[activeDeckName].cards.forEach((card) => {
            const cardObj = getCardObject.byID(card);
            const cardElement = getCardElement(cardObj);
            renderCard.toActive(cardElement);
            cardElement.classList.remove('xyz-in');
          });
        }
      });
    });
  },

  displayAvaiableAge() {
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
    if (gameState.activePlayer.currentAge !== 10) {
      cloneCurrentDeck.style.backgroundImage = `url(/assets/img/cards-bg/age-0${gameState.activePlayer.currentAge}-title.png)`;
    } else {
      cloneCurrentDeck.style.backgroundImage = 'url(/assets/img/cards-bg/age-10-title.png)';
    }
    // display cloned deck in currentDeck block
    document.querySelector('.current-deck__cards').append(cloneCurrentDeck);

    // set age decks events
    const ageDeckElements = document.querySelectorAll('.age-deck--active');
    ageDeckElements.forEach((elem) => {
      elem.onclick = this.takeCard;
    });
  },

  setAsideLeadershipText() {
    const leadershipCardBlock = document.querySelector('.extra-cards__leadership-block');
    const leadershipCards = document.querySelectorAll('.leadership-cards__card');
    const firstAvaiableLeadership = document.querySelector('.leadership-cards__card--active');
    if (firstAvaiableLeadership !== null) {
      [...leadershipCardBlock.childNodes][0].innerText = [...firstAvaiableLeadership
        .childNodes][0].innerText;
    } else {
      leadershipCardBlock.classList.remove('extra-cards__leadership-block--active');
      const firstAvaiableCard = [...leadershipCards].find((card) => {
        return !card.classList.contains('inactive');
      });
      [...leadershipCardBlock.childNodes][0].innerText = [...firstAvaiableCard
        .childNodes][0].innerText;
    }
  },

  init() {
    // set hand events
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((elem) => {
      if (gameState.currentPlayer.hand.indexOf(elem.dataset.innovation) > -1) {
        elem.onclick = this.playCard;
      }
    });
    // set age decks events
    const ageDeckElements = document.querySelectorAll('.age-deck--active');
    ageDeckElements.forEach((elem) => {
      elem.onclick = this.takeCard;
    });
    // set active zone events
    const activeZoneStacks = document.querySelectorAll('.active-zone__stack');
    activeZoneStacks.forEach((stack) => {
      const stackLength = stack.childNodes.length;
      if (stackLength >= 1) {
        const stackTopCardElement = stack.childNodes[stackLength - 1];
        stackTopCardElement.onclick = async () => {
          const cardID = stackTopCardElement.dataset.innovation;
          const cardObj = getCardObject.byID(cardID);
          const joinWords = cardID.split(' ').join('');
          await dogmas[joinWords](cardObj);
          gameBoard.update();
        };
      }
    });
    // set leadership cards event
    const avaiableLeadershipCards = document.querySelectorAll('.leadership-cards__card--active');
    [...avaiableLeadershipCards].forEach((card) => {
      card.onclick = (e) => {
        const eTarget = e.target.closest('.leadership-cards__card');
        let targetAge = +[...eTarget.childNodes][0].innerText.split('').splice(-1, 1).join();
        if (targetAge === 0) targetAge = 10;
        messageToLog(gameState.activePlayer.name, `добился лидерства в ${targetAge} веке!`);
        gameState.leadershipDeck.forEach((cardID) => {
          if (getCardObject.byID(cardID).age === targetAge) {
            const targetIndex = gameState.leadershipDeck.indexOf(cardID);
            gameState.activePlayer.leadershipCards.push(gameState
              .leadershipDeck.splice(targetIndex, 1).join());
            eTarget.classList.add('inactive');
            eTarget.classList.remove('leadership-cards__card--active');
            eTarget.onclick = null;
            this.setAsideLeadershipText();
          }
        });
        gameBoard.update();
      };
    });
    this.setHeaderCurrent();
    updateGameState(gameState);
    gameState.players.forEach((player) => header.changePlayerStats(player));

    // set leadership block event
    this.setLeadershipBlock();
  },

  setLeadershipBlock() {
    const activeLeadershipCard = document.querySelector('.leadership-cards__card--active');
    const leadershipDeckBlock = document.querySelector('.extra-cards__leadership-block');
    if (activeLeadershipCard !== null) {
      leadershipDeckBlock.onclick = (e) => {
        if (e.target.classList.contains('hover-btn')) {
          return false;
        }
        activeLeadershipCard.click();
        this.setLeadershipBlock();
      };
    } else {
      leadershipDeckBlock.onclick = null;
      leadershipDeckBlock.classList.remove('extra-cards__leadership-block--active');
    }
  },

  update() {
    gameState.activePlayer.actionPoints -= 1;

    updateGameState(gameState);
    specCard.getAvailable();
    gameState.players.forEach((player) => header.changePlayerStats(player));
    this.displayAvaiableAge();

    if (gameState.currentPlayer.actionPoints < 1) {
      const activeElems = document.querySelectorAll('.active');
      if (activeElems.length !== 0) {
        activeElems.forEach((elem) => {
          elem.onclick = null;
          elem.classList.remove('active');
        });
      }
      this.displayNextTurnBtn();
    } else if (gameState.activePlayer.actionPoints === 0
      && gameState.currentPlayer !== gameState.activePlayer) {
      this.displayFinishActionBtn();
    }

    document.querySelector('.info-table__player-name').innerText = gameState.activePlayer.name;
    document.querySelector('.info-table__action-points').innerText = gameState.activePlayer.actionPoints;

    checkWinCondition();
  },

  takeCard(e) {
    // protection of multiple clicks
    e.target.onclick = null;

    // hide age decks modal block after card taken
    const ageDecksBlock = document.querySelector('.age-decks');
    ageDecksBlock.classList.add('age-decks--hidden');

    // get age deck form which card was taken to use in next block
    let ageDeck = e.target.id;
    if (ageDeck === 'cloneCurrentDeck') { ageDeck = gameState.activePlayer.currentDeck; }

    // change gameState
    const cardID = gameState.ageDecks[ageDeck].pop();
    gameState.activePlayer.hand.push(cardID);

    // get card DOM element and render it to hand
    const cardObj = getCardObject.byID(cardID);
    const movingCardElement = getCardElement(cardObj);
    movingCardElement.onclick = gameBoard.playCard;
    renderCard.toHand(movingCardElement);

    gameBoard.update();

    // protection of multiple clicks
    setTimeout(() => {
      if (gameState.activePlayer.actionPoints !== 0) {
        e.target.onclick = gameBoard.takeCard;
      }
    }, 250);

    // const state = JSON.stringify(gameState); // for server
    // socket.emit('state', state); // for server

    messageToLog(gameState.activePlayer.name, `взял карту ${cardObj.age} века из колоды`);
  },

  playCard(e) {
    // get current card
    const cardID = e.target.closest('.card').dataset.innovation;
    const cardElement = e.target.closest('.card');
    const cardObj = getCardObject.byID(cardID);

    // change gameState
    const cardIndex = gameState.activePlayer.hand.indexOf(cardID);
    gameState.activePlayer.hand.splice(cardIndex, 1);
    const targetStack = gameState.activePlayer.activeDecks[cardObj.color].cards;
    targetStack.push(cardID);

    // set dogma function
    cardElement.onclick = async () => {
      const joinWords = cardID.split(' ').join('');
      await dogmas[joinWords](cardObj);
      gameBoard.update();
    };
    cardElement.classList.remove('active');
    renderCard.toActive(cardElement);

    gameBoard.update();

    // const state = JSON.stringify(gameState); // for server
    // socket.emit('state', state); // for server

    const textToLog = document.querySelector(`[data-innovation="${cardObj.innovation}"]`).innerText;
    messageToLog(gameState.currentPlayer.name, `сыграл карту <u title="${textToLog}">${cardObj.innovation}</u> с руки`);
  },

  displayFinishActionBtn() {
    const nextTurnBtn = document.createElement('div');
    nextTurnBtn.classList.add('info-table__next-turn-btn');
    nextTurnBtn.innerText = 'Завершить действие';
    const infoTable = document.querySelector('.info-table');
    this.disableEvents();
    infoTable.append(nextTurnBtn);
  },

  displaySkipActionBtn() {
    const skipActionBtn = document.createElement('div');
    skipActionBtn.classList.add('info-table__skip-action-btn');
    skipActionBtn.classList.add('info-table__next-turn-btn');
    skipActionBtn.innerText = 'Пропустить';
    const infoTable = document.querySelector('.info-table');
    infoTable.append(skipActionBtn);
  },

  displayNextTurnBtn() {
    const nextTurnBtn = document.createElement('div');
    nextTurnBtn.classList.add('info-table__next-turn-btn');
    nextTurnBtn.innerText = 'Закончить ход';
    nextTurnBtn.addEventListener('click', () => {
      gameState.specArchieveCount = 0;
      gameState.specInfluenceCount = 0;
      // change current player
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
        messageToLog(gameState.activePlayer.name, 'Ваш ход!');
        gameBoard.display();
        gameBoard.init();
        const excistedNextTurnBtns = Array.from(document.querySelectorAll('.info-table__next-turn-btn'));
        if (excistedNextTurnBtns.length !== 0) {
          excistedNextTurnBtns.forEach((btn) => {
            btn.remove();
          });
        }
      }, 500);
    });
    const infoTable = document.querySelector('.info-table');
    this.disableEvents();
    infoTable.append(nextTurnBtn);
  },

  setHeaderCurrent() {
    Array.from(document.querySelectorAll('.head-row__name')).forEach((headerName) => {
      headerName.parentElement.parentElement.classList.remove('player-container--active');
      if (headerName.innerText === gameState.activePlayer.name) {
        setTimeout(() => {
          headerName.parentElement.parentElement.classList.add('player-container--active');
        }, 250);
      }
    });
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
    const leadershipCards = Array.from(document.querySelectorAll('.leadership-cards__card--active'));
    leadershipCards.forEach((card) => {
      card.classList.remove('leadership-cards__card--active');
      card.onclick = null;
    });
    const activeLeadershipBlock = document.querySelector('.extra-cards__leadership-block--active');
    if (activeLeadershipBlock !== null) {
      activeLeadershipBlock.classList.remove('extra-cards__leadership-block--active');
      activeLeadershipBlock.onclick = null;
    }
  },
};

export default gameBoard;
