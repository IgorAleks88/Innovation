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

    renderDeck(deck) {
        Object.values(this.wrapper.children).forEach((e) => {
            // console.log(e);
            e.remove();
        });
        for (let i = 0; i < deck.length; i += 1) {
            const currentCardObj = getCardObject.byID(deck[i]);
            const currentCardElement = getCardBackElement(currentCardObj);
            currentCardElement.style.bottom = `${i * 35}px`;
            this.wrapper.appendChild(currentCardElement);
        }
    
    },
    renderActiveDeck(obj) {
        console.log(obj.cards);
        console.log(obj.shift);
    },
}

export default displayHeaderHover;