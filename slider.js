const sliderTrack = document.querySelector('.track');
const sliderTrackWidth = sliderTrack.offsetWidth;
const opinions = Array.from(sliderTrack.children);

const opinion = document.querySelector('.slider__card');
const opinionWidth = opinion.offsetWidth;

const allOpinionCards = document.querySelectorAll('.slider__card');
const totalOpinionCards = allOpinionCards.length;
// console.log(totalOpinionsCards);

const totalSliderWidth = totalOpinionCards * opinionWidth;

const prevBtn = document.getElementById('btn__prev');
prevBtn.addEventListener('click', () => {
  sliderTrack.scrollLeft -= opinionWidth;
});

const nextBtn = document.getElementById('btn__next');
nextBtn.addEventListener('click', () => {
  sliderTrack.scrollLeft += opinionWidth;
});

// const autoScroller = setInterval(() => {
//     slider.scrollLeft += opinionsWidth;
// }, 5000);

