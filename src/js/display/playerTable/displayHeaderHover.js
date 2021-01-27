import getCardObject from '../../cards/getCardObject';
import getCardBackElement from '../../cards/getCardBackElement'

const displayHeaderHover = {
    block: null,
    overlay: null,
    wrapper: null,

    init() {
        this.block = document.createElement('div');
        this.block.classList.add('header-hover__block');
        this.block.classList.add('header-hover__block__hidden');
        this.overlay = document.createElement('div');
        this.overlay.classList.add('header-hover__overlay');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('header-hover__wrapper');
        this.overlay.append(this.wrapper);
        this.block.append(this.overlay);
        document.body.prepend(this.block);
    },

    clearWrapper() {
        Object.values(this.wrapper.children).forEach((e) => {
            e.remove();
        });
    },

    renderDeck(deck) {
        this.clearWrapper();
        const renderDeckLength = Math.min(deck.length, 11);
        for (let i = 0; i < renderDeckLength; i += 1) {
            const currentCardObj = getCardObject.byID(deck[i]);
            const currentCardElement = getCardBackElement(currentCardObj);
            currentCardElement.style.top = `${-i * 130 + 20}px`;
            currentCardElement.style.left = `20px`;
            this.wrapper.appendChild(currentCardElement);
        }
        this.wrapper.style.height = `${renderDeckLength * 30 + 180}px`;
        this.wrapper.style.width = `300px`;
    
    },
    renderActiveDeck(obj) {
        this.clearWrapper();
    },
}

export default displayHeaderHover;