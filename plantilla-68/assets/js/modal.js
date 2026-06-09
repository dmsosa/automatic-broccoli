function DsModal(el) {
	console.log(el);
	this.el = el;
	this.items = [];
	this.item_width;
	this.gap = 3;
	this.init();
}

DsCarousel.prototype.init = async function init() {
	const closeBtns = this.el.querySelectorAll('.btn.btn-close');
	closeBtns.addEventListener('click');
}

DsCarousel.prototype.getItemWidth = function getItemWidth() {
	const w = this.el.clientWidth;
	return (w / this.size);
}

DsCarousel.prototype.build = async function build() {
	for (let i = 0; i < this.items.length; i++)
	{
		
	}
}
DsCarousel.prototype.buildDom = async function buildDom() {
		const nav = `<div class="ds-carousel_nav">
		<div class="d-flex-default">
		<button class="ds-carousel-nav-btn" aria-role="button" data-dir="prev">&#xab;</button>
		<button class="ds-carousel-nav-btn" aria-role="button" data-dir="next">&#xbb;</button>
		</div>
		</div>`;

		// create new element
		let wrapper = document.createElement("div");
		wrapper.classList.add("ds-carousel_wrapper");

		// clone carousel and insert into the wrapper
		let carousel = this.el.cloneNode(true);
		wrapper.insertAdjacentElement("afterbegin", carousel);
		wrapper.insertAdjacentHTML("beforeend", nav);

		// add the new wrapper before the old carousel
		this.el.insertAdjacentElement("beforebegin", wrapper);

		// remove the old carousel and reset the variables
		this.el.remove();
		this.el = wrapper.firstChild;
		this.el.classList.add("ds-carousel");
		this.el.items = wrapper.querySelectorAll('.ds-carousel-item');

}


const modal = document.querySelectorAll('.modal-app');
modal.forEach((c) => {
	new DsModal(c);
});
