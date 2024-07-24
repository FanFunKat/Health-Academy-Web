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
// console.log('width', slideWidth, typeof(slideWidth))

const setSlidePosition = (slide, index) => {
  slide.style.left = (slideWidth + 16) * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.scrollLeft = parseFloat(targetSlide.style.left);
  currentSlide.classList.remove('current__slide');
  targetSlide.classList.add('current__slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current__slide');
  targetDot.classList.add('current__slide');
}

const hideShowArrow = (slides, prevBtn, nextBtn, targetIndex) => {
  if(targetIndex === 0){
    prevBtn.classList.add('is__hidden');
    nextBtn.classList.remove('is__hidden');
  } else if(targetIndex === slides.length -1) {
    nextBtn.classList.add('is__hidden');
    prevBtn.classList.remove('is__hidden')
  }else{
    prevBtn.classList.remove('is__hidden');
    nextBtn.classList.remove('is__hidden');
  };
}

prevBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current__slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current__slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot)
  hideShowArrow(slides, prevBtn, nextBtn, prevIndex);
})

nextBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current__slide');
  // console.log('current slide',currentSlide);
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current__slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrow(slides, prevBtn, nextBtn, nextIndex);
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
  updateDots(currentDot, targetDot);
  hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
})