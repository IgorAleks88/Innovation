import displayModal from '../display/displayModal';

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
      displayModal.modalBtn.onclick = tutorial.clickFunctions.stage3;
    },
    stage3: () => {
      tutorial.currentDOMElement.style.zIndex = 0;
      displayModal.setMessageText('Внизу распологаются карты в руке игрока');
      tutorial.currentDOMElement = document.querySelector('.hand');
      tutorial.currentDOMElement.style.zIndex = 120;
      // displayModal.modalBtn.onclick = tutorial.clickFunctions.stage3;
    },
  },

};

export default tutorial;
