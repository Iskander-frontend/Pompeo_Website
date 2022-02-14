let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__list');
let body = document.querySelector('body');
let headerItem = document.querySelector('.header__item')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})
headerItem.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('active');
})