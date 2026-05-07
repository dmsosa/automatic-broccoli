/**
 * 
 * @param {HTMLElement} el //Element to be used to create our Carousel
 */
function CarouselDs(el, settings = {}) {
    this._version = '1.0.0';
    this.items = [];
    this.itemWidth = undefined;
    this.activeItem = undefined;
    this.useActiveClass = false;
    this.gap = 2;
    this.showSize = 6;
    this.el = el;

    this.init(settings);
}

/**
 * 
 * @param {{
 * useActiveClass?: boolean,
 * showSize?: number,
 * gap?: number,
 * }} settings Settings object with optional fields
 */
CarouselDs.prototype.init = async function init(settings) {

    this.showSize = settings.showSize ? parseInt(settings.showSize) : 3;
    this.gap = settings.gap ? parseInt(settings.gap) : 5;
    this.useActiveClass = settings.useActiveClass ?? true;

    await this.writeDOM();
    await this.addNavButtons();
    await this.setMinItems();

    const [maxW, maxH] = await this.getDimension();
    this.el.style.height = maxH + 'px';
    const totalWidth = (maxW * this.showSize) + (this.gap * (this.showSize - 1));
    this.el.style.width = totalWidth + 'px';
    this.itemWidth = (totalWidth / this.showSize) - this.gap;

    // await this.clone('last');
    await this.build();
    await this.setActiveClass();
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

CarouselDs.prototype.addNavButtons = async function addNavButtons() {
    const navButtons = this.el.parentElement.querySelectorAll('.carousel-ds-nav-btn');
    navButtons[0].dataset.dir = 'prev';
    navButtons[navButtons.length - 1].dataset.dir = 'next';
    navButtons.forEach((btn) => btn.addEventListener("click", (event) => {
        this.move.call(this, event);
    }));
}

CarouselDs.prototype.build = async function build() {
    let pos = -1;
    for (let i = 0; i < this.items.length ; i++ )
    {
        this.items[i].style.width = this.itemWidth + 'px';
        this.items[i].style.left = (this.itemWidth + this.gap) * pos + 'px';
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

/**
 * Clone first item and append it to the current items list, OR
 * clone last item and preprend it.
 * Must change both the DOM and our internal this.items array. 
 * In order for other functions to work properly
 * Remove the item that was cloned.
 * @param {string} target //target item to be cloned
 */
CarouselDs.prototype.clone = async function clone(target) {
    let pos = undefined;
    if (target === 'first')
        pos = 0;
    else if (target === 'last')
        pos = this.items.length - 1;
    else 
        throw new Error('target clone not supported');
    const item = this.items[pos];
    const clone = item.cloneNode(true);
    if (target === 'first')
    {
        this.el.append(clone);
    }
    else
    {
        this.el.prepend(clone);
    }
    item.remove();
    this.items = this.el.querySelectorAll('.carousel-ds-item');
}

/**
 * the direction is going to be determined by the button clicked
 * if next, clone the first element and append to the items, remove item cloned
 * run build and setActiveClass
 * if prev, the proccess is the same but cloning last item and prepend
 * @param {MouseEvent} event Event fired by the button that was clicked
 */
CarouselDs.prototype.move = async function move(event) {
    const btn = event.currentTarget;
    if (btn.dataset.dir === 'next') await this.clone('first');
    else await this.clone('last');
    await this.build();
    await this.setActiveClass();
}


/**
 * sets the minimum items that are required for our carousel to look good
 * the minimum size is always showSize + 2, for the first and last 'div' elements
 * those are hidden by overflow-x: clip, but are necessary for the animation to look good visually
 */
CarouselDs.prototype.setMinItems = async function setMinItems() {
    const minLen = this.showSize + 2;
    const itemsLen = this.items.length;
    if (itemsLen >= minLen) return;
    for (let i = 0 ; i < itemsLen ; i++) {
        let clone = this.items[i].cloneNode(true);
        this.el.append(clone);
    }
    this.items = this.el.querySelectorAll('.carousel-ds-item');
    if ( this.items.length < minLen) await this.setMinItems();
}

/**
 * adds 'active' class for the middle element of the carousel
 * and removes 'active' class from the previous active element
 */
CarouselDs.prototype.setActiveClass = async function setActiveClass() {
    if (!this.useActiveClass) return;
    if (this.activeItem !== undefined )
        this.activeItem.classList.remove('active');
    const middle = Math.floor(this.items.length / 2);
    this.activeItem = this.items[middle];
    this.activeItem.classList.add('active');
}


const carousels = document.querySelectorAll('.carousel-ds');
carousels.forEach((el) => new CarouselDs(el, { useActiveClass: true })); //How this is going to create a new Carousel within HTML?
//1, create parent wrapper, insert el within parent wrapper, insert wrapper where previous object was

