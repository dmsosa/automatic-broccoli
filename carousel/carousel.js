function CarouselDs(el) {
    this.items = [];
    this.gap = 2;
    this.item = {
        width: undefined
    };
    this._version = '1.0.0';
    this.showSize = 3;
    this.el = el;

    this.init();
}

CarouselDs.prototype.init = async function init() {
    await this.writeDOM();
    const navButtons = this.el.parentElement.querySelectorAll('.carousel-ds-nav-btn');
    navButtons[0].dataset.dir = 'prev';
    navButtons[navButtons.length - 1].dataset.dir = 'next';
    navButtons.forEach((btn) => btn.addEventListener("click", this.move));

    const [maxW, maxH] = await this.getDimension();
    this.el.style.height = maxH + 'px';
    const totalWidth = (maxW * this.showSize) + (this.gap * this.showSize);
    this.el.style.width = totalWidth + 'px';
    this.item.width = (totalWidth / this.showSize) - this.gap;

    await this.clone('prev');
    await this.build();
}

CarouselDs.prototype.writeDOM = async function writeDOM() {
    const navbar = `<div class="carousel-ds-nav">
            <button class="carousel-ds-nav-btn">&#xab;</button>
            <button class="carousel-ds-nav-btn">&#xbb;</button>
        </div>`;
    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-ds-wrapper');
    const clone = this.el.cloneNode(true);
    clone.classList.add('carousel-ds');

    wrapper.insertAdjacentElement("afterbegin", clone);
    wrapper.insertAdjacentHTML("beforeend", navbar);
    //add navbar
    this.el.insertAdjacentElement("beforebegin", wrapper);
    this.el.remove();
    this.el = clone;
    this.items = this.el.querySelectorAll('.carousel-ds-item');
}

CarouselDs.prototype.build = async function build() {
    let pos = -1;
    for (let i = 0; i < this.items.length ; i++ )
    {
        this.items[i].style.width = this.item.width + 'px';
        this.items[i].style.left = (this.item.width + this.gap) * pos + 'px';
        pos++;
    }
}

CarouselDs.prototype.getDimension = async function getDimension() {
    let maxW = undefined;
    let maxH = undefined;
    for (i = 0; i < this.items.length ; i++)
    {
        if (maxW === undefined || maxW < this.items[i].offsetWidth) maxW = this.items[i].offsetWidth;
        if (maxH === undefined || maxH < this.items[i].offsetHeight) maxH = this.items[i].offsetHeight;
    }
    return [maxW, maxH];
}


CarouselDs.prototype.clone = async function clone(dir) {
    let pos;
    if (dir === 'next') pos = 0;
    else pos = this.items.length - 1;
    const item = this.items[pos];
    const c = item.cloneNode(true);
    if (dir === 'next') this.el.append(c);
    else this.el.prepend(c);
    item.remove();
}

CarouselDs.prototype.move = async function move(event) {
    const btn = event.currentTarget;
    if (btn.dataset.dir === 'next') await this.clone('next');
    else await this.clone('prev');
    await this.build();
}

CarouselDs.prototype.setMinItems() = function setMinItems() {
    const minItems = this.showSize + 2;
    const itemsLength = this.items.length;
    while ( itemsLength < this.el.showSize + 2)
    {
        let i = 0;
        for (let i = 0 ; i < this.items.length ; i++) {
            this.el.prepend(c);
        }
        
    }
}
const carousels = document.querySelectorAll('.carousel-ds');
carousels.forEach((el) => new CarouselDs(el)); //How this is going to create a new Carousel within HTML?
//1, create parent wrapper, insert el within parent wrapper, insert wrapper where previous object was

