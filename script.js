// // Get the form element
// var form = document.getElementById("myForm");

// // Add an event listener to the form to listen for the submit event
// form.addEventListener("submit", function(event) {
//   // Get the name, email, and message elements
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;

//   // Check if the name field is empty
//   if (name === "") {
//     alert("Please enter your name");
//     console.log("11");
//     event.preventDefault();
//   }

//   // Check if the email field is empty or is not a valid email address
//   if (email === "" || !validateEmail(email)) {
//     alert("Please enter a valid email address");
//     event.preventDefault();
//   }

//   // Check if the message field is empty
//   if (message === "") {
//     alert("Please enter a message");
//     event.preventDefault();
//   }
// });

// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// // Get all navigation links
// var navLinks = document.querySelectorAll("nav a");

// // Add a click event listener to each link
// navLinks.forEach(function(link) {
//   link.addEventListener("click", function(event) {
//     event.preventDefault();

//     // Get the target element to scroll to
//     var target = document.querySelector(link.getAttribute("href"));

//     // Calculate the distance from the top of the target element to the top of the document
//     var targetPos = target.getBoundingClientRect().top;

//     // Scroll to the target element
//     window.scrollBy({
//       top: targetPos,
//       behavior: "smooth"
//     });
//   });
// });





let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

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