function modalNextPlayer() {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.classList.add('modal__turn-step');
    modal.innerHTML = /* html */`
      <div class="message">Выберете карты которые хотите переработать</div>
      <div class="container__message"></div>
      <div class="wrapper__btn">
        <button class="modal__turn-step-btn">ok</button>
        <button class="modal__turn-step-btn red">cancel</button>
      </div>
    `;
    const btn = modal.querySelector('.modal__turn-step-btn');

    btn.addEventListener('click', () => {
      modal.remove();
      resolve();
    });

    document.body.append(modal);
  });
}

export default modalNextPlayer;
