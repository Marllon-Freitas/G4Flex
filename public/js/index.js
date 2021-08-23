//mobile menu change
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active-menu');
  const active = nav.classList.contains('active-menu');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//close the mobile menu when the user click in one of the links
function closeMenu() {
  nav.classList.remove('active-menu');
}

let menuItems = document.getElementsByClassName('menu-item');

//change the 'active' proprietary to the link the user click on last time
Array.from(menuItems).forEach(
function selectMenuItem(item) {
    item.onclick = () => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// back tot top
let backToTopBtn = document.querySelector('.back-to-top')
let toggleTheme = document.querySelector('.toggle')

//verify the size of the screen and hide the 'back to the top' button when is too close to the top of the page
window.onscroll = () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backToTopBtn.style.display = 'flex';
        toggleTheme.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
        toggleTheme.style.display = 'none';
    }
}


//pass the home section slide
const containerImgs = document.querySelector(".welcome-images");
const slide = containerImgs.getElementsByTagName("img");

var i = 0;

function passSlideImg() {
  slide[i].classList.remove('active-image-slide');
  i = (i + 1) % slide.length;
  slide[i].classList.add('active-image-slide');
}

function returnSlideImg() {
  slide[i].classList.remove('active-image-slide');
  i = (i - 1 + slide.length) % slide.length;
  slide[i].classList.add('active-image-slide');
}

const containerTexts = document.querySelector(".welcome-texts");
const slideTexts = containerTexts.getElementsByTagName("div");

var j = 0;

function passSlideText() {
  slideTexts[j].classList.remove('active-text-slide');
  j = (j + 1) % slideTexts.length;
  slideTexts[j].classList.add('active-text-slide');
}

function returnSlideText() {
  slideTexts[j].classList.remove('active-text-slide');
  j = (j - 1 + slideTexts.length) % slideTexts.length;
  slideTexts[j].classList.add('active-text-slide');
}


/**dark mode */
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector("input[name=theme]")

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
