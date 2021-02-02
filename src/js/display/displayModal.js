const displayModal = {
  modalBg: null,
  modalBlock: null,
  modalOverlay: null,
  modalWrapper: null,
  modalText: null,
  modalBtn: null,

  init() {
    if (!this.modalBg) {
      this.modalBg = document.createElement('div');
      this.modalBg.classList.add('modal-tutorial');
      this.modalBg.classList.add('modal-tutorial--hidden');

      this.modalBlock = document.createElement('div');
      this.modalBlock.classList.add('modal-tutorial__block');
      this.modalBlock.classList.add('modal-tutorial__block--hidden');

      this.modalOverlay = document.createElement('div');
      this.modalOverlay.classList.add('modal-tutorial__overlay');

      this.modalWrapper = document.createElement('div');
      this.modalWrapper.classList.add('modal-tutorial__wrapper');

      this.modalText = document.createElement('div');
      this.modalText.classList.add('modal-tutorial__text');

      this.modalBtn = document.createElement('button');
      this.modalBtn.classList.add('modal-tutorial__btn');

      this.modalWrapper.append(this.modalText, this.modalBtn);
      this.modalBlock.append(this.modalOverlay, this.modalWrapper);

      document.body.prepend(this.modalBg, this.modalBlock);
    }
  },

  setMessageText(text) {
    this.modalText.innerHTML = text;
  },

  setButtonText(text) {
    this.modalBtn.innerText = text;
  },

};

export default displayModal;
