export default function displayModal(title, currentPlayer) {
  switch (title) {
    case 'hot-seat-next-player':
      const modalBlock = getModalBlock(currentPlayer.name);
      document.body.prepend(modalBlock);
      setTimeout(() => {
        modalBlock.classList.toggle('modal--hidden');
      }, 0);
      break;
    default:
      throw new Error('Wrong modal name!');
  }
}

function getModalBlock(currentPlayerName) {
  const modalBg = document.createElement('div');
  modalBg.classList.add('modal');
  modalBg.classList.add('modal--hidden');

  const modalBlock = document.createElement('div');
  modalBlock.classList.add('modal__block');

  const modalText = document.createElement('div');
  modalText.classList.add('modal__text');
  modalText.innerText = `Сейчас ход игрока ${currentPlayerName}`;

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('modal__btn');
  modalBtn.innerText = 'Начать ход!';
  modalBtn.addEventListener('click', () => {
    modalBg.classList.toggle('modal--hidden');
    setTimeout(() => {
      modalBg.remove();
    }, 500);
  });

  modalBlock.append(modalText, modalBtn);
  modalBg.append(modalBlock);

  return modalBg;
}
