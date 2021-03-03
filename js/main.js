

(function ($) {
    "use strict";
/*---------------------
     TOP Menu Stick
     --------------------- */
    var s = $("#site-navigation");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });



    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      speed: 1000,
      slidesPerView: 1,
      slideSpeed: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

 $(document).ready(function(){
               $("a[rel^='prettyPhoto']").prettyPhoto();
             });
    /*---------------------
     scrollup
     --------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*---------------------
     TOP Menu Stick
     --------------------- */
    var s = $("#site-navigation");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
    /*---------------------
     on page nav
     --------------------- */
    $('.nav, .slide').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1500,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function (jQuerycurrentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    /*---------------------
     typed js
     --------------------- */
    $(function () {
        $(".element").typed({
            strings: ["Designer and", "Developer"],
            typeSpeed: 10,
            loop: true,
            backDelay: 3000
        });
    });
    /*---------------------
     wow js
     --------------------- */
    new WOW().init();
    /*---------------------
     Isotop js
     --------------------- */
    $(window).load(function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
    /*---------------------
     owl carousel
     --------------------- */
    $(".owl-testimonial").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
    /*---------------------
     magnificPopup active
     --------------------- */
    // $("a[rel^='prettyPhoto']").prettyPhoto();
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
})(jQuery); 