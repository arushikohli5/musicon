/*jslint browser: true*/
/*global $, document, window,Typed*/
$(document).ready(function(){

    const slider = $('.slick-slider');
      slider.on('wheel', (function(e) {
        e.preventDefault();
      
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      }));
    $('.slick-slider').slick({
        dots: true,
        infinite: false,
        speed: 150,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      
      
      
});
    "use strict"

$(window).scroll(function(){
    "use strict"
    var top=$(window).scrollTop();
    if(top>=80){
        $(".nava").addClass("secondary");
    }
    else
        if($(".nava").hasClass("secondary")){
            $(".nava").removeClass("secondary");
        }
});
