function dogmaModalMessages(text) {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.classList.add('modal__turn-step');
    modal.innerHTML = /* html */`
      <div class="message">${text}</div>
      <div class="container__message"></div>
      <div class="wrapper__btn">
        <button class="modal__turn-step-btn">ok</button>
        <button class="modal__turn-step-btn red">cancel</button>
      </div>
    `;
    const messages = modal.querySelector('.container__message');
    const btnWrapper = modal.querySelector('.wrapper__btn');

    btnWrapper.addEventListener('click', (e) => {
      if (e.target === btnWrapper) return;
      if (e.target.textContent === 'ok' && messages.childElementCount < 1) return;
      if (document.querySelector('.text__message') && e.target.textContent === 'ok') {
        const cardID = document.querySelector('.text__message').textContent.trim();
        const arr = [cardID];
        resolve(arr);
      } else {
        resolve([]);
      }
      modal.remove();
    });

    document.body.append(modal);
  });
}

export default dogmaModalMessages;
