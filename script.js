
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
var email = document.getElementById("email").value

// Check Email Valid Function

function validateEmail(email) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
   }


menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 20,
   effect: 'fade',
   loop: true,
   speed: 300,
   mousewheel: {
      invert: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
});
