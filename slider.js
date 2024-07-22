const slider = document.querySelector('.track');
const sliderWidth = slider.offsetWidth;

const opinions = document.querySelector('.slider__card');
const opinionsWidth = opinions.offsetWidth;

const allOpinionsCards = document.querySelectorAll('.slider__card');
const totalOpinionsCards = allOpinionsCards.length;
// console.log(totalOpinionsCards);

const totalSliderWidth = totalOpinionsCards * opinionsWidth;




