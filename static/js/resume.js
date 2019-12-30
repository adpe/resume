(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /* From https://codepen.io/tamak/pen/hzEer */

  $("[id^=skills-list]").hover(function() {
      $(this).find('.skillbar').each(function () {
          $(this).find('.skillbar-bar').animate({
              width: $(this).attr('data-percent')
          }, 3000);
          $(this).find('.skillbar-percent').fadeIn(3000);
      });
  });

  /* From https://codepen.io/bewley/pen/revRQv */

  $(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 875);
  });

  // Back to top functionality.
  $('.container-fluid').append('<i class="fa fa-chevron-up" id="back-to-top"></i>');

  $(window).scroll(function() {
      if ($(document).scrollTop() > 220) {
          $('#back-to-top').fadeIn(300);
      } else {
          $('#back-to-top').fadeOut(100);
      }
  });

  $('#back-to-top').click(function(event) {
      $('html, body').animate({scrollTop: 0}, 500);
  });

})(jQuery); // End of use strict
