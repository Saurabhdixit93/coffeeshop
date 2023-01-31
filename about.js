// JavaScript
// For Preloader
//   document.addEventListener("DOMContentLoaded", function() {
//     var preloader = document.getElementById("preloader");
//     preloader.style.display = "flex";
//     setTimeout(function() {
//       preloader.style.display = "none";
//     }, 1000);
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//     var preloader = document.getElementById("preloader");
//     preloader.classList.add("show");
//     setTimeout(function() {
//       preloader.classList.remove("show");
//       preloader.classList.add("hide");
//     }, 1000);
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//     var preloaderText = document.querySelector("#preloader .icon-text");
//     setInterval(function() {
//       preloaderText.classList.toggle("blink");
//     }, 1000);
//   });

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
