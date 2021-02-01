import displayModal from '../display/displayModal';
import gameState from './gameState';
import renderCard from '../cards/renderCard';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import updateGameState from '../utility/updateGameState';
import displayHeader from '../display/playerTable/displayHeader';
import gameBoard from './gameBoard';

const tutorial = {
  currentDOMElement: null,
  clickFunctions: {
    stage1: () => {
      displayModal.setMessageText('Игровое поле разделено на четыре зоны: стол, рука, активная зона и зона информации о всех игроках');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage2;
    },
    stage2: () => {
      displayModal.setMessageText('На столе справа расположены карты, которые доступны для всех игроков: колоды эпох, лидерства и особые карты');
      tutorial.currentDOMElement = document.querySelector('.aside');
      tutorial.currentDOMElement.style.zIndex = 120;
      // remove onclick event from active decks
      document.querySelectorAll('.age-deck--active').forEach((e) => {
        e.onclick = '';
      });
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage3;
    },
    stage3: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      displayModal.setMessageText('Внизу распологаются карты в руке игрока');
      tutorial.currentDOMElement = document.querySelector('.hand');
      renderCard.toHand(getCardElement(getCardObject.byID('колесо')));
      renderCard.toHand(getCardElement(getCardObject.byID('скотоводство')));
      renderCard.toHand(getCardElement(getCardObject.byID('мистицизм')));
      tutorial.currentDOMElement.style.zIndex = 120;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage4;
    },
    stage4: () => {
      document.querySelector('.hand__cards').innerHTML = '';
      tutorial.currentDOMElement.style.zIndex = 0;
      displayModal.setMessageText('По центру распологаются карты в активной зоне игрока');
      gameState.player0.activeDecks.green.shift = 'top';
      gameState.player0.activeDecks.purple.shift = 'left';
      gameState.player0.activeDecks.green.cards.push('колесо');
      renderCard.toActive(getCardElement(getCardObject.byID('колесо')));
      gameState.player0.activeDecks.yellow.cards.push('скотоводство');
      renderCard.toActive(getCardElement(getCardObject.byID('скотоводство')));
      gameState.player0.activeDecks.purple.cards.push('мистицизм');
      renderCard.toActive(getCardElement(getCardObject.byID('мистицизм')));
      tutorial.currentDOMElement = document.querySelector('.active-zone');
      tutorial.currentDOMElement.style.zIndex = 120;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage5;
    },
    stage5: () => {
      displayModal.setMessageText('Некоторые догмы позволяют сдвигать стопки в активной зоне, увеличивая таким образом количество получаемых ресурсов');
      gameState.player0.activeDecks.green.cards.push('парус');
      renderCard.toActive(getCardElement(getCardObject.byID('парус')));
      gameState.player0.activeDecks.green.cards.push('одежда');
      renderCard.toActive(getCardElement(getCardObject.byID('одежда')));
      gameState.player0.activeDecks.purple.cards.push('свод законов');
      renderCard.toActive(getCardElement(getCardObject.byID('свод законов')));
      updateGameState(gameState);
      displayHeader.changePlayerStats(gameState.player0);
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage6;
    },
    stage6: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      gameState.player1.activeDecks.green.cards.push('деньги');
      gameState.player1.activeDecks.green.cards.push('картография');
      gameState.player1.activeDecks.green.shift = 'right';
      gameState.player1.activeDecks.blue.cards.push('математика');
      gameState.player1.activeDecks.blue.cards.push('календарь');
      gameState.player1.activeDecks.blue.cards.push('алхимия');
      gameState.player1.activeDecks.blue.shift = 'top';
      gameState.player1.hand.push('вёсла');
      gameState.player1.hand.push('земледелие');
      gameState.player1.hand.push('философия');
      gameState.player1.hand.push('монотеизм');
      gameState.player1.hand.push('перевод');
      gameState.player1.influence.cards.push('монотеизм');
      gameState.player1.influence.cards.push('перевод');
      gameState.player1.activeDecks.red.cards.push('лук и стрелы');
      updateGameState(gameState);
      displayHeader.changePlayerStats(gameState.player1);
      displayModal.setMessageText('Количество ресурсов, количество карт в руке, активной зоне, зоне влияния и лидерства каждого игрока можно увидеть в информационной зоне');
      tutorial.currentDOMElement = document.querySelector('.header');
      tutorial.currentDOMElement.style.zIndex = 120;
      document.querySelector('.header-hover__block').style.zIndex = 130;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage7;
    },
    stage7: () => {
      displayModal.setMessageText("Чтобы посмотреть карты каких веков находятся у соперника в руке, нажмите <i class='fas fa-hand-paper cards-container__icon card__icon-color--yellow'></i>");
      displayHeader.shader.classList.remove('header__shader--hidden');
      tutorial.currentDOMElement = document.querySelector('#player1-hand');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage8;
    },
    stage8: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      tutorial.currentDOMElement = document.querySelector('#player1-influence');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.setMessageText("Чтобы посмотреть карты каких веков находятся у соперника в зоне влияния, нажмите <i class='fas fa-shield-alt cards-container__icon card__icon-color--red'></i>");
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage9;
    },
    stage9: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      tutorial.currentDOMElement = document.querySelector('#player1-active');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.setMessageText('Чтобы посмотреть активную стопку соперника, нажмите на прямоугольник соответствующего цвета');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage10;
    },
    stage10: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      displayHeader.shader.classList.add('header__shader--hidden');
      tutorial.currentDOMElement = document.querySelector('.header');
      tutorial.currentDOMElement.style.zIndex = 0;
      displayModal.setMessageText('С игровым полем разобрались. Теперь поговорим об игровом процессе. В свой ход игрок может выполнить одно из четрёх действий: взять карту в руку, сыграть карту с руки в активную зону, прочитать догму со своей активной карты или добиться лидерства');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage11;
    },
    stage11: () => {
      gameState.player0.activeDecks.green.cards = [];
      gameState.player0.activeDecks.purple.cards = [];
      gameState.player0.activeDecks.yellow.cards = [];
      updateGameState(gameState);
      displayHeader.changePlayerStats(gameState.player0);
      document.querySelectorAll('.active-zone__stack').forEach((e) => {
        e.innerHTML = '';
      });
      document.querySelectorAll('.age-deck--active').forEach((e) => {
        e.onclick = gameBoard.takeCard;
      });
      tutorial.currentDOMElement = document.querySelector('.aside');
      tutorial.currentDOMElement.style.zIndex = 120;
      tutorial.currentDOMElement = document.querySelector('.hand');
      tutorial.currentDOMElement.style.zIndex = 120;
      if (gameState.ageDecks.age1.indexOf('письменность') > -1) {
        gameState.ageDecks.age1.splice(gameState.ageDecks.age1.indexOf('письменность'), 1);
      }
      gameState.ageDecks.age1.push('письменность');
      displayModal.setMessageText('Возьмите карту из колоды веков в руку');
      displayModal.modalBtn.classList.add('modal-tutorial__btn--hidden');
      displayModal.modalBlock.classList.add('modal-tutorial__block--small');
      document.body.onclick = tutorial.clickFunctions.stage12;
    },
    stage12: (e) => {
      if (e.target.classList.contains('age-deck--active')) {
        gameState.player0.actionPoints = 2;
        tutorial.currentDOMElement = document.querySelector('.aside');
        tutorial.currentDOMElement.style.zIndex = 0;
        tutorial.currentDOMElement = document.querySelector('.active-zone');
        tutorial.currentDOMElement.style.zIndex = 120;
        displayModal.setMessageText('Теперь сыграйте эту карту в активную зону');
        document.body.onclick = tutorial.clickFunctions.stage13;
      }
    },
    stage13: (e) => {
      if (e.target.closest('.card')) {
        displayModal.setMessageText('Догмы бывают двух типов: корпоративные и агрессивные. Список игроков, на которых подействует догма, определяется количеством ресурсов, который указан в догме');
        document.body.onclick = tutorial.clickFunctions.stage12;
      }
    },
  },

};

export default tutorial;
