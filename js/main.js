const headerBtn = document.querySelector('.header__button');
const nav = document.querySelector('.header__navigation');
const close = document.querySelector('.header__navigation-btn');

headerBtn.addEventListener('click', () => {
  nav.classList.toggle('header__navigation--active');

});

close.addEventListener('click', () => {
nav.classList.remove('header__navigation--active');
});






// let headerBtn = document.getElementById('header__button');
// let nav = document.getElementById('header__navigation');

// headerBtn.addEventListener('click', function(){
//   nav.classList.toggle('display-block');
// });