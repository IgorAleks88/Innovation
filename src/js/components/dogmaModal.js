function dogmaModalMessages(text, playerName, isAggressive, qa) {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.classList.add('modal__turn-step');
    modal.innerHTML = /* html */`
    <div class="message"><b>${playerName}</b>: ${text}</div>
      <div class="container__message"></div>
      <div class="wrapper__btn">
        <button class="modal__turn-step-btn">ok</button>
        ${isAggressive ? '' : '<button class="modal__turn-step-btn red">cancel</button>'}
      </div>
    `;
    const messages = modal.querySelector('.container__message');
    const btnWrapper = modal.querySelector('.wrapper__btn');

    btnWrapper.addEventListener('click', (e) => {
      const target = e.target.textContent;
      if (e.target === btnWrapper) return;
      if (target === 'ok' && qa === 'ok') resolve('ok');
      if (target === 'ok' && messages.childElementCount < 1 && !qa) return;
      if (isAggressive === 'defenceDogma' && messages.childElementCount !== 2 && target === 'ok') {
        return;
      }
      if (document.querySelector('.text__message') && target === 'ok') {
        const cardID = [...document.querySelectorAll('.text__message')].map((element) => element.textContent.trim());
        resolve(cardID);
      } else {
        resolve([]);
      }
      modal.remove();
    });

    document.body.append(modal);
  });
}

export default dogmaModalMessages;
