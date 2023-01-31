// JavaScript

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

  
//   Show More Feature

const showMoreBtn = document.querySelector('.show-more-btn');
const moreText = document.querySelector('.more-text');

showMoreBtn.addEventListener('click', function() {
  if(moreText.style.display === 'none'){
    moreText.style.display = 'block';
    this.innerHTML = 'Show Less';
  }else{
    moreText.style.display = 'none';
    this.innerHTML = 'Show More';
  }
});


// Adding More Features In Web

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
