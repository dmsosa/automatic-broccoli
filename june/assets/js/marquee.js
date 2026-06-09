function MarqueeDs(element)
{
    this.element = element;
}

MarqueeDs.prototype.buildHTML = function buildHTML() {
    const wrapper = document.createElement('div');
    wrapper.classList.add(['marquee-ds-wrapper']);
    clone = this.element.cloneNode(true);
    wrapper.appendChild(clone);
}

export default MarqueeDs;
