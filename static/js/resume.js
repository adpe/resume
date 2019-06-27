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

  $('.nav-link').click(function() {
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });

  $(window).on('load', function() {
    var hT1 = $('#about').offset().top,
        hH1 = $('#about').outerHeight(),
        hT2 = $('#skills').offset().top,
        hH2 = $('#skills').outerHeight(),
        hT3 = $('#open').offset().top,
        hH3 = $('#open').outerHeight(),
        hT4 = $('#experience').offset().top,
        hH4 = $('#experience').outerHeight(),
        hT5 = $('#education').offset().top,
        hH5 = $('#education').outerHeight();

    window.sections = [hT1, hH1, hT2, hH2, hT3, hH3, hT4, hH4, hT5, hH5];
    // Default active link.
    $("a[href$='about']").addClass("active");
  });

  $(window).on('load scroll', function() {
    if (window.sections === undefined || window.sections.length == 0) {
        window.sections = [];
    }
    var windowHeight = $(window).height(),
        windowScrollPos = $(this).scrollTop();
        windowScrollPos = windowScrollPos+500;
    if (windowScrollPos > (sections[0]+sections[1]-windowHeight) || windowScrollPos == 0) {
        $('.nav-link').removeClass("active");
        $("a[href$='about']").addClass("active");
    }
    if (windowScrollPos > (sections[2]+sections[3]-windowHeight)) {
        $('.nav-link').removeClass("active");
        $("a[href$='skills']").addClass("active");
    }
    if (windowScrollPos > (sections[4]+sections[5]-windowHeight)) {
        $('.nav-link').removeClass("active");
        $("a[href$='open']").addClass("active");
    }
    if (windowScrollPos > (sections[6]+sections[7]-windowHeight)) {
        $('.nav-link').removeClass("active");
        $("a[href$='experience']").addClass("active");
    }
    if (windowScrollPos > (sections[8]+sections[9]-windowHeight)) {
        $('.nav-link').removeClass("active");
        $("a[href$='education']").addClass("active");
    }
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
