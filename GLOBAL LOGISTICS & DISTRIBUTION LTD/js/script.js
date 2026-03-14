$(document).ready(function(){

  const headerOffset = 40;

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
