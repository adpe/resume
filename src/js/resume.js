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

  /* From https://codepen.io/bewley/pen/revRQv */

  $(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 875);
  });

  // Back to top functionality.
  document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.getElementById("back-to-top");

    window.onscroll = function () {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollTopButton.style.visibility = "visible";
        scrollTopButton.style.opacity = "1";
      } else {
        scrollTopButton.style.visibility = "hidden";
        scrollTopButton.style.opacity = "0";
      }
    };
  });

  $(function() {
    var $dropdown = $('#skills-category-dropdown');
    var $dropdownItems = $('.dropdown-item[data-category]');
    var $lists = $('.skills-category-list');
    var $label = $('#skills-category-dropdown-label');

    if ($dropdown.length && $dropdownItems.length && $lists.length && $label.length) {
      $dropdownItems.on('click', function(e) {
        e.preventDefault();
        $dropdownItems.removeClass('active');
        $(this).addClass('active');
        $lists.hide();
        var selectedId = $(this).data('category');
        $('#' + selectedId).show();
        $label.text($(this).text());
      });
    }
  });
})(jQuery); // End of use strict
