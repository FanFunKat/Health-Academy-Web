const track = document.querySelector('.track');
const slides = Array.from(track.children);
// console.log('array slides', slides);
// const oneSlide = document.querySelector('.slider__card')
const nextBtn = document.getElementById('btn__next');
const prevBtn = document.getElementById('btn__prev');
const dotsNav = document.querySelector('.slider__indicator');
const dots = Array.from(dotsNav.children);

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

// const slide = document.querySelector('.slider__card');
// const slideWidth = slide.offsetWidth;
// console.log('card width', slideWidth)

// const allSlideCards = document.querySelectorAll('.slider__card');
// const totalSlideCards = allSlideCards.length;
// console.log(totalOpinionsCards);

// const totalSliderWidth = totalSlideCards * slideWidth;

// const prevBtn = document.getElementById('btn__prev');
// prevBtn.addEventListener('click', () => {
//   sliderTrack.scrollLeft -= slideWidth;
// });

// const nextBtn = document.getElementById('btn__next');
// nextBtn.addEventListener('click', () => {
//   sliderTrack.scrollLeft += slideWidth;
// });

// const autoScroller = setInterval(() => {
//     slider.scrollLeft += opinionsWidth;
// }, 5000);





// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + slide.style.left + ')';
//   currentSlide.classList.remove('current__slide');
//   targetSlide.classList.add('current__slide');
// }


// nextBtn.addEventListener('click', e => {
//   const currentSlide = slide.querySelector('.current__slide');
//   const nextSlide = currentSlide.nextElementSibling;

//   moveToSlide(slide, currentSlide, nextSlide);
// })

// const dotsNav = document.querySelector('.slider__indicator')
// dotsNav.addEventListener('click', e => {
//   const targetDot = e.target.closest('button');

//   if(!targetDot) return;

//   const currentSlide = sliderTrack.querySelector('.current__slide')

// })
