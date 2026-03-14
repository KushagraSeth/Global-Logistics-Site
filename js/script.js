// const toggle = document.querySelector(".mobile-toggle");
// const navLinks = document.querySelector(".nav-links");

// if (toggle) {
//   toggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//     toggle.classList.toggle("open");
//   });
// }

// document.querySelectorAll("a[href^='#']").forEach(anchor => {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute("href"));

//     if (target) {

//       const headerOffset = 80;
//       const elementPosition = target.offsetTop;
//       const offsetPosition = elementPosition - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });

//       if (navLinks) {
//         navLinks.classList.remove("active");
//       }

//     }
//   });
// });
// const toggle2 = document.querySelector(".mobile-toggle");
// const navMenu = document.querySelector(".nav-menu");

// toggle2.addEventListener("click", () => {

//   navMenu.classList.toggle2("active");

//   if(navMenu.classList.contains("active")){
//     toggle2.textContent = "✖";
//   } else {
//     toggle2.textContent = "☰";
//   }

// });
// document.querySelectorAll(".nav-menu a").forEach(link=>{
//   link.addEventListener("click",()=>{
//     navMenu.classList.remove("active");
//     toggle.textContent = "☰";
//   });
// });

$(document).ready(function(){

  const headerOffset = 80;

  /* Mobile Menu Toggle */

  $(".mobile-toggle").click(function(){

    $(".nav-menu").toggleClass("active");
    $(this).toggleClass("open");

    if ($(".nav-menu").hasClass("active")) {
      $(this).text("✖");
    } else {
      $(this).text("☰");
    }

  });

  $("a[href^='#']").click(function(e){

    e.preventDefault();

    let target = $($(this).attr("href"));

    if(target.length){

      let offsetPosition = target.offset().top - headerOffset;

      $("html, body").animate({
        scrollTop: offsetPosition
      }, 600);

      $(".nav-links, .nav-menu").removeClass("active");
      $(".mobile-toggle").text("☰");

    }

  });

});