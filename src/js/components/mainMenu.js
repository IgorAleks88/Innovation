import initHotSeatGame from '../utility/initHotSeatGame';
import displayNewTurnModal from '../display/displayNewTurnModal';
import header from '../display/playerTable/displayHeader';
import gameBoard from './gameBoard';
import gameState from './gameState';

const users = {};
const audio = new Audio('../../assets/sounds/Dear-Friends.mp3');
let sound = false;
function isValid(userObj) {
  if (userObj.names.length === userObj.players) {
    return userObj.names.every((name) => name.length > 2 && name.length < 8);
  }
  return false;
}

function transform(state) {
  const currPlayerID = state.currentPlayer.id;
  const activePlayerID = state.activePlayer.id;
  const player0 = state.player0.id;
  const player1 = state.player1.id;
  const player2 = state.player2.id;
  const player3 = state.player3.id;

  state.players.forEach((player) => {
    if (player.id === currPlayerID) {
      state.currentPlayer = player;
    }
    if (player.id === activePlayerID) {
      state.activePlayer = player;
    }
    if (player.id === player0) {
      state.player0 = player;
    }
    if (player.id === player1) {
      state.player1 = player;
    }
    if (player.id === player2) {
      state.player2 = player;
    }
    if (player.id === player3) {
      state.player3 = player;
    }
  });
}

function loadTheGame() {
  const loadedGameState = JSON.parse(localStorage.getItem('innovation'));
  Object.entries(loadedGameState).forEach(([key, value]) => { gameState[key] = value; });
  transform(gameState);
  displayNewTurnModal(gameState.currentPlayer.name);
  gameBoard.display();
  const names = loadedGameState.players.map((player) => player.name);
  header.initPlayerNames(names);
  gameBoard.init();
  gameState.activePlayer.actionPoints += 1;
  gameBoard.update();
}

class Menu {
  constructor(parent) {
    this.parent = parent;
  }

  validateInputs() {
    const inputs = this.menu.querySelectorAll('input');
    const values = [...inputs].map((input) => input.value);
    for (let i = 0; i < inputs.length; i += 1) {
      const { value } = inputs[i];
      if (value.length < 3 || value.length > 7 || values.filter((v) => v === value).length > 1) {
        inputs[i].setCustomValidity('Invalid');
      } else {
        inputs[i].setCustomValidity('');
      }
    }
  }

  createMenuItem(text, ...dopParam) {
    return /* html */ `<a href="#" class="menu__link ${dopParam[0] || ''}" ${dopParam[1] || ''}>
      ${text}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 152.9 43.4" style="enable-background:new 0 0 152.9 43.4;" xml:space="preserve">
        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
      </svg>
    </a><br>`;
  }

  render() {
    this.menu = document.createElement('div');
    this.menu.classList.add('menu');
    this.menu.innerHTML = `
    ${this.createMenuItem('Новая игра', 'start')}
    ${this.createMenuItem('Продолжить', 'continue disabled')}
    ${this.createMenuItem('Загрузить игру', 'load')}
    ${this.createMenuItem('Сохранить игру', 'save disabled')}
    ${this.createMenuItem('Правила игры', 'rules')}
    ${this.createMenuItem('Обзор игры', 'review')}
    ${this.createMenuItem('Включить звук', 'sound')}
    `;

    this.parent.append(this.menu);
    this.renderPdfRules();

    this.menu.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A' && e.target.tagName !== 'SPAN' && e.target !== this.menu.querySelector('button')) {
        return;
      }
      const intro = this.menu.parentElement.parentElement.parentElement;
      if (e.target.className.includes('start')) {
        this.createChoosePlayersItems();
      } else if (e.target.className.includes('rules')) {
        this.rulesWrraper.hidden = false;
      } else if (e.target.className.includes('close')) {
        this.rulesWrraper.hidden = true;
      } else if (e.target.dataset.players) {
        this.createNameInputField(e.target.dataset.players);
      } else if (e.target.className.includes('get-names')) {
        e.preventDefault();
        this.addNamesToUsers();
        if (isValid(users)) {
          displayNewTurnModal(users.names[0]);
          initHotSeatGame(users);
          setTimeout(() => {
            intro.classList.toggle('intro--hide');
          }, 500);
        } else {
          this.validateInputs();
          this.showErrorMessage();
        }
      } else if (e.target.className.includes('back')) {
        this.menu.remove();
        this.render();
        this.menu.classList.add('menu__used');
      } else if (e.target.className.includes('continue')) {
        intro.classList.toggle('intro--hide');
      } else if (e.target.className.includes('load')) {
        loadTheGame();
        intro.classList.toggle('intro--hide');
      } else if (e.target.className.includes('save')) {
        localStorage.setItem('innovation', JSON.stringify(gameState));
        this.showSaveGameModal();
      } else if (e.target.className.includes('sound')) {
        audio.loop = true;
        sound = !sound;
        if (sound) {
          audio.play();
          e.target.textContent = 'Выключить звук';
        }
        if (!sound) {
          audio.pause();
          e.target.textContent = 'Включить звук';
        }
      }
    });
  }

  renderPdfRules() {
    this.rulesWrraper = document.createElement('div');
    this.rulesWrraper.classList.add('iframe__wrraper');
    this.rulesWrraper.hidden = true;
    this.rulesWrraper.innerHTML = /* html */ `
        <span class="close">&#10006</span>
        <iframe class="iframe" src="./assets/innovation_rules_rus_final.pdf" width="70%" height="70%"></iframe>
    `;

    this.menu.append(this.rulesWrraper);
  }

  createChoosePlayersItems() {
    for (let i = 0; i < this.menu.children.length; i += 1) {
      this.menu.children[i].hidden = true;
    }
    this.menu.innerHTML = /* html */ `
    ${this.createMenuItem('2 игрока', '', 'data-players=2')}
    ${this.createMenuItem('3 игрока', '', 'data-players=3')}
    ${this.createMenuItem('4 игрока', '', 'data-players=4')}
    ${this.createMenuItem('Главное меню', 'back')}
    `;
  }

  createNameInputField(numberOfFields) {
    users.players = +numberOfFields;
    this.menu.innerHTML = /* html */ `
      <form class="form">
        ${this.createInputs(numberOfFields)}
        <button class="menu__link get-names" type="submit">Принять</button>
      </form>
      ${this.createMenuItem('Главное меню', 'back')}
    `;
  }

  createInputs(num) {
    const inputHTML = [];

    for (let i = 1; i <= num; i += 1) {
      inputHTML.push(
        /* html */ `
        <label for="plaeyr${i}">Введите имя игрока № ${i}</label>
        <input type="text" id="player${i}" value="player${i}" name="name" data-name="" pattern="[a-zA-Zа-яА-Я0-9_]{3,7}" title="Введите от 3 до 7 символов" required>
      `,
      );
    }

    return inputHTML.join('');
  }

  addNamesToUsers() {
    const inputs = this.menu.querySelectorAll('[data-name]');
    const playerNames = [];
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value && !playerNames.includes(inputs[i].value)) {
        playerNames.push(inputs[i].value);
      }
    }
    users.names = playerNames;

    return playerNames;
  }

  showSaveGameModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal__save');
    modal.innerHTML = /* html */`
      <div class="save__message">Игра сохранена</div>
    `;
    this.menu.append(modal);
    setTimeout(() => modal.remove(), 1500);
  }

  showErrorMessage() {
    if (document.querySelector('.error')) return;
    const form = this.menu.querySelector('.form');
    const errorMessgae = document.createElement('div');
    errorMessgae.classList.add('menu__link', 'error');
    errorMessgae.innerHTML = 'Имена не должны повторяться<br> Длина от 3 до 7 символов';
    form.prepend(errorMessgae);
  }
}

export default Menu;
