import displayModal from '../display/displayModal';
import gameState from './gameState';
import renderCard from '../cards/renderCard';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import updateGameState from '../utility/updateGameState';
import displayHeader from '../display/playerTable/displayHeader';
import gameBoard from './gameBoard';
import startNewGame from '../utility/startNewGame';
import audioPlayer from './audioPlayer';

const tutorial = {
  currentDOMElement: null,
  clickFunctions: {
    stage1: () => {
      displayModal.setMessageText('Игровое поле разделено на четыре зоны: боковая зона, рука, активная зона и зона информации о всех игроках');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage2;
      audioPlayer.playTutorial('stage_1');
    },
    stage2: () => {
      displayModal.setMessageText('В боковой зоне справа расположены карты, которые доступны для всех игроков: колоды эпох, лидерства и особые карты');
      document.querySelector('.aside__shader').classList.add('aside__shader--hidden');
      // remove onclick event from active decks
      document.querySelectorAll('.age-deck--active').forEach((e) => {
        e.onclick = '';
      });
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage3;
      audioPlayer.playTutorial('stage_2');
    },
    stage3: () => {
      document.querySelector('.aside__shader').classList.remove('aside__shader--hidden');
      document.querySelector('.hand__shader').classList.add('hand__shader--hidden');
      document.querySelector('.hand__title').classList.remove('hand__title--shade');
      displayModal.setMessageText('Внизу распологаются карты в руке игрока');
      renderCard.toHand(getCardElement(getCardObject.byID('колесо')));
      renderCard.toHand(getCardElement(getCardObject.byID('скотоводство')));
      renderCard.toHand(getCardElement(getCardObject.byID('мистицизм')));
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage4;
      audioPlayer.playTutorial('stage_3');
    },
    stage4: () => {
      document.querySelector('.hand__cards').innerHTML = '';
      document.querySelector('.hand__shader').classList.remove('hand__shader--hidden');
      document.querySelector('.hand__title').classList.add('hand__title--shade');
      displayModal.setMessageText('По центру распологаются карты в активной зоне игрока');
      gameState.player0.activeDecks.green.shift = 'top';
      gameState.player0.activeDecks.purple.shift = 'left';
      gameState.player0.activeDecks.green.cards.push('колесо');
      renderCard.toActive(getCardElement(getCardObject.byID('колесо')));
      gameState.player0.activeDecks.yellow.cards.push('скотоводство');
      renderCard.toActive(getCardElement(getCardObject.byID('скотоводство')));
      gameState.player0.activeDecks.purple.cards.push('мистицизм');
      renderCard.toActive(getCardElement(getCardObject.byID('мистицизм')));
      document.querySelector('.active-zone__shader').classList.add('active-zone__shader--hidden');
      document.querySelector('.active-zone__title').classList.remove('active-zone__title--shade');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage5;
      audioPlayer.playTutorial('stage_4');
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
      audioPlayer.playTutorial('stage_5');
    },
    stage6: () => {
      document.querySelector('.active-zone__shader').classList.remove('active-zone__shader--hidden');
      document.querySelector('.active-zone__title').classList.add('active-zone__title--shade');
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
      document.querySelector('.header__shader').classList.add('header__shader--hidden');
      document.querySelector('.header-hover__block').style.zIndex = 130;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage7;
      audioPlayer.playTutorial('stage_6');
    },
    stage7: () => {
      displayModal.setMessageText("Чтобы посмотреть карты каких веков находятся у соперника в руке, нажмите <i class='fas fa-hand-paper cards-container__icon card__icon-color--yellow'></i>");
      displayHeader.shader.classList.remove('header__shader--hidden');
      tutorial.currentDOMElement = document.querySelector('#player1-hand');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage8;
      audioPlayer.playTutorial('stage_7');
    },
    stage8: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      tutorial.currentDOMElement = document.querySelector('#player1-influence');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.setMessageText("Чтобы посмотреть карты каких веков находятся у соперника в зоне влияния, нажмите <i class='fas fa-shield-alt cards-container__icon card__icon-color--red'></i>");
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage9;
      audioPlayer.playTutorial('stage_8');
    },
    stage9: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      tutorial.currentDOMElement = document.querySelector('#player1-active');
      tutorial.currentDOMElement.style.zIndex = 2;
      displayModal.setMessageText('Чтобы посмотреть активную стопку соперника, нажмите на прямоугольник соответствующего цвета');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage10;
      audioPlayer.playTutorial('stage_9');
    },
    stage10: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      displayHeader.shader.classList.add('header__shader--hidden');
      displayModal.setMessageText('С игровым полем разобрались. Теперь поговорим об игровом процессе. В свой ход игрок может выполнить одно из четырёх действий: взять карту в руку, сыграть карту с руки в активную зону, сыграть догму со своей активной карты или добиться лидерства');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage11;
      audioPlayer.playTutorial('stage_10');
    },
    stage11: () => {
      document.querySelector('.hand__shader').classList.add('hand__shader--hidden');
      document.querySelector('.hand__title').classList.remove('hand__title--shade');
      document.querySelector('.active-zone__shader').classList.add('active-zone__shader--hidden');
      document.querySelector('.active-zone__title').classList.remove('active-zone__title--shade');
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
      tutorial.currentDOMElement = document.querySelector('.current-deck');
      tutorial.currentDOMElement.style.zIndex = 120;
      if (gameState.ageDecks.age1.indexOf('письменность') > -1) {
        gameState.ageDecks.age1.splice(gameState.ageDecks.age1.indexOf('письменность'), 1);
      }
      gameState.ageDecks.age1.push('письменность');
      displayModal.setMessageText('Возьмите карту из колоды веков в руку');
      displayModal.modalBtn.classList.add('modal-tutorial__btn--hidden');
      displayModal.modalBlock.classList.add('modal-tutorial__block--small');
      document.body.onclick = tutorial.clickFunctions.stage12;
      audioPlayer.playTutorial('stage_11');
    },
    stage12: (e) => {
      if (e.target.closest('.age-deck')) {
        gameState.player0.actionPoints = 2;
        tutorial.currentDOMElement.style.zIndex = 0;
        displayModal.setMessageText('Теперь сыграйте эту карту в активную зону');
        document.body.onclick = tutorial.clickFunctions.stage13;
        audioPlayer.playTutorial('stage_12');
      }
    },
    stage13: (e) => {
      if (e.target.closest('.card')) {
        displayModal.setMessageText('Догмы бывают двух типов: корпоративные и агрессивные. Список игроков, на которых подействует догма, определяется количеством ресурсов, который указан в догме. Сыграйте догму Письменность');
        document.body.onclick = tutorial.clickFunctions.stage14;
        audioPlayer.playTutorial('stage_13');
      }
    },
    stage14: (e) => {
      if (e.target.closest('.card')) {
        tutorial.currentDOMElement.style.zIndex = 0;
        tutorial.currentDOMElement = document.querySelector('.info-table');
        tutorial.currentDOMElement.style.zIndex = 120;
        gameState.player1.activeDecks.red.cards = [];
        gameState.player1.activeDecks.green.cards = [];
        gameState.player1.activeDecks.blue.cards = [];
        gameState.player1.activeDecks.yellow.cards = ['каменная кладка'];
        gameState.player1.hand = [];
        gameState.player1.hand.push('инструменты');
        gameState.player1.hand.push('города');
        gameState.player1.hand.push('колесо');
        gameState.player1.hand.push('кузнечное дело');
        displayModal.setMessageText('За ход игрок может совершить два действия. Когда очки действий заканчиваются, нажмите кнопку "Закончить ход" ');
        document.body.onclick = tutorial.clickFunctions.stage15;
        audioPlayer.playTutorial('stage_14');
      }
    },
    stage15: (e) => {
      if (e.target.closest('.info-table__next-turn-btn')) {
        document.querySelector('.hand__shader').classList.remove('hand__shader--hidden');
        document.querySelector('.hand__title').classList.add('hand__title--shade');
        tutorial.currentDOMElement.style.zIndex = 0;
        tutorial.currentDOMElement = document.querySelector('.extra-cards__leadership-block');
        tutorial.currentDOMElement.style.zIndex = 120;
        document.querySelector('.active-zone__shader').classList.remove('active-zone__shader--hidden');
        document.querySelector('.active-zone__title').classList.add('active-zone__title--shade');
        displayModal.setMessageText('Одно из условий победы - набрать достаточное количество очков лидерства. Чтобы достичь лидерства в эпохе, необходимо иметь 5*номер эпохи очков влияния и хотя бы одну активную карту с уровнем не меньше, чем номер этой эпохи. Добейтесь лидерства в 1 эпохе');
        document.body.onclick = tutorial.clickFunctions.stage16;
        audioPlayer.playTutorial('stage_15');
      }
    },
    stage16: (e) => {
      if (e.target.closest('.extra-cards__leadership-cards')) {
        tutorial.currentDOMElement.style.zIndex = 0;
        document.querySelector('.hand__shader').classList.remove('hand__shader--hidden');
        document.querySelector('.hand__title').classList.add('hand__title--shade');
        document.querySelector('.active-zone__shader').classList.add('active-zone__shader--hidden');
        document.querySelector('.active-zone__title').classList.remove('active-zone__title--shade');
        displayModal.setMessageText('Ещё один способ получить победные очки - добиться лидерства в одной из пяти сфер. Сыграйте догму Каменная кладка и сыграйте  четыре карты с руки, чтобы добиться лидерства в строительстве');
        document.body.onclick = tutorial.clickFunctions.stage17;
        audioPlayer.playTutorial('stage_16');
      }
    },
    stage17: (e) => {
      if (e.target.closest('.card')) {
        document.querySelector('.hand__shader').classList.add('hand__shader--hidden');
        document.querySelector('.hand__title').classList.remove('hand__title--shade');
        document.querySelector('.aside__shader').classList.add('aside__shader--hidden');
        document.querySelector('.hand').style.zIndex = 120;
        document.body.onclick = tutorial.clickFunctions.stage18;
      }
    },
    stage18: (e) => {
      if (e.target.classList.contains('modal__turn-step-btn') && !(e.target.classList.contains('red'))) {
        displayModal.setMessageText('Также в игре есть догмы, выполнив условия которых, игрок может победить сразу.');
        displayModal.modalBtn.classList.remove('modal-tutorial__btn--hidden');
        displayModal.modalBlock.classList.remove('modal-tutorial__block--small');
        document.body.onclick = '';
        displayModal.modalBtn.onclick = tutorial.clickFunctions.stage19;
        audioPlayer.playTutorial('stage_17');
      }
    },
    stage19: () => {
      displayModal.setMessageText('Если игрок не может взять карту - колода, из которой он должен взять карту, и все старшие колоды пусты, либо активирована догма предписывающая закончить игру, побеждает игрок, имеющий наибольшее влияние ');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage20;
      audioPlayer.playTutorial('stage_18');
    },
    stage20: () => {
      displayModal.setMessageText('На этом обучение завершено. Чтобы узнать больше ньюансов, ознакомтесь с правилами игры в меню');
      displayModal.setButtonText('Завершить');
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage21;
      audioPlayer.playTutorial('stage_19');
    },
    stage21: () => {
      audioPlayer.player.pause();
      startNewGame();
    },
  },

};

export default tutorial;
