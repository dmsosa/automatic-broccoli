const map = Array.prototype.map;
const carouselLinks = document.querySelectorAll('.carousel-link');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');

const itemLen = carouselItems[0].scrollWidth;
const totalLen = carouselInner.scrollWidth;
console.log(itemLen, totalLen)
map.call(carouselLinks, (link, index) => {
    const targetWidth = 320;
    const carouselNav = link.parentElement;
    const carouselInner = carouselNav.previousElementSibling;

    link.addEventListener('click', (e) => {
        e.preventDefault();
        carouselLinks.forEach(removeActiveLinks);
        link.classList.add('active');
        console.log(carouselItems[index]);
        carouselInner.scroll({
            top: 100,
            left: index * itemLen,
            behavior: "smooth",
            });
    })
})



const removeActiveLinks = (link) => {
    if (link.classList.contains('active')) {
        link.classList.remove('active');
    }
}