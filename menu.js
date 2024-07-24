const hamMenu = document.querySelector(".ham__menu");
const offScreenMenu = document.querySelector(".off__screen--menu");
const page = document.querySelector(".main");

hamMenu.addEventListener("click", ()=> {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
})

page.addEventListener("click", ()=> {
  hamMenu.classList.remove("active", )
  offScreenMenu.classList.remove("active", )
})