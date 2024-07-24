const track = document.querySelector('.track');
const slides = Array.from(track.children);
// console.log('array slides', slides);
// const oneSlide = document.querySelector('.slider__card')
const nextBtn = document.getElementById('btn__next');
const prevBtn = document.getElementById('btn__prev');
const dotsNav = document.querySelector('.slider__nav');
const dots = Array.from(dotsNav.children);
// console.log(dots)

const slideWidth = slides[0].getBoundingClientRect().width;
console.log('width', slideWidth, typeof(slideWidth))

const setSlidePosition = (slide, index) => {
  slide.style.left = (slideWidth + 16) * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.scrollLeft = parseFloat(targetSlide.style.left);
  currentSlide.classList.remove('current__slide');
  targetSlide.classList.add('current__slide');
}

prevBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current__slide');
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
})

nextBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current__slide');
  // console.log('current slide',currentSlide);
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
})

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current__slide')
  const currentDot = dotsNav.querySelector('.current__slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  // console.log(targetIndex)
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove('current__slide');
  targetDot.classList.add('current__slide');
})