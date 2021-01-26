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
}

export default displayHeaderHover;