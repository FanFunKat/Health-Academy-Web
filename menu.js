const header = document.querySelector('header');
const hamMenu = header.querySelector('.ham__menu');
const offScreenMenu = header.querySelector('.off__screen--menu');
const linkToSection = header.querySelectorAll('.nav__li--ham');
const page = document.querySelector('.main');

// console.log(typeof(linkToSectionHam))
// console.log(typeof(hamMenu))

hamMenu.addEventListener('click', ()=> {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

for (let i = 0; i < linkToSection.length; i++) {
  linkToSection[i].addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  });
}

page.addEventListener('click', ()=> {
  hamMenu.classList.remove('active', );
  offScreenMenu.classList.remove('active');
})

