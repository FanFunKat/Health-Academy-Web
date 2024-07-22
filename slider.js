const slider = document.querySelector('.track');
const sliderWidth = slider.offsetWidth;

const opinions = document.querySelector('.slider__card');
const opinionsWidth = opinions.offsetWidth + 16;

const allOpinionsCards = document.querySelectorAll('.slider__card');
const totalOpinionsCards = allOpinionsCards.length;
// console.log(totalOpinionsCards);

const totalSliderWidth = totalOpinionsCards * opinionsWidth;

const prevBtn = document.getElementById('btn__prev');
prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= opinionsWidth;
});

const nextBtn = document.getElementById('btn__next');
nextBtn.addEventListener('click', () => {
    slider.scrollLeft += opinionsWidth;
});

const autoScroller = setInterval(() => {
    slider.scrollLeft += opinionsWidth;
}, 5000);