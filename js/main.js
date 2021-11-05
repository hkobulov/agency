var elHeader = document.querySelector('.header');
var elHamburgerBtn = document.querySelector('.header-btn');
var elCancelBtn = document.querySelector('.menu-exit');

elHamburgerBtn.addEventListener("click", function(){
    elHeader.classList.add("header--open");
})


elCancelBtn.addEventListener("click", function(){
    elHeader.classList.remove("header--open");
})