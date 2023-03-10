
// Get the preloader element
// For Main page
 // PreLoader For web
  window.addEventListener("load", function() {
      setTimeout(function (){
        const preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
      },2000);// 2000ms = 2 seconds
  });
  
  window.addEventListener("load", function() {
      setTimeout(function (){
        document.getElementById("spinner").style.display = "none";
      },2000);// 2000ms = 2 seconds
  });

  window.addEventListener("beforeunload", function() {
      setTimeout(function (){
          document.getElementById("spinner").style.display = "block";
      },2000); // 2000ms = 2 seconds
  });



 
// Add an event listener to the form to listen for the submit event

var form = document.getElementById("myform");
form.addEventListener("submit", function(event) {
  var message = document.getElementById("message").value;


  // Check if the message field is empty
  if (message === "") {
      alert("Please enter a message");
      event.preventDefault();
   }
});

// Adding More Features In Web

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
// For Scrolling View Page


const progressBar = document.getElementById("scroll-bar");
const pointer = document.querySelector(".pointer");

window.addEventListener("scroll", function(){
  var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
  pointer.style.left = scrollPercent + "%";
});




