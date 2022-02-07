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
            breakpoint: 750,
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


      //applying blue colour to selected category
      $('.item-a').click(function(){
          $('.item-a .box').addClass("secon");
          $('.item-b .box').removeClass("secon");
          $('.item-c .box').removeClass("secon");
          $('.item-d .box').removeClass("secon");
          $('.item-e .box').removeClass("secon");
      });

      $('.item-b').click(function(){
        $('.item-b .box').addClass("secon");
        $('.item-a .box').removeClass("secon");
        $('.item-c .box').removeClass("secon");
        $('.item-d .box').removeClass("secon");
        $('.item-e .box').removeClass("secon");
    });
    
    $('.item-c').click(function(){
        $('.item-c .box').addClass("secon");
        $('.item-a .box').removeClass("secon");
        $('.item-b .box').removeClass("secon");
        $('.item-d .box').removeClass("secon");
        $('.item-e .box').removeClass("secon");
    });
      
    $('.item-d').click(function(){
        $('.item-d .box').addClass("secon");
        $('.item-a .box').removeClass("secon");
        $('.item-c .box').removeClass("secon");
        $('.item-b .box').removeClass("secon");
        $('.item-e .box').removeClass("secon");
    });

    $('.item-e').click(function(){
        $('.item-e .box').addClass("secon");
        $('.item-a .box').removeClass("secon");
        $('.item-c .box').removeClass("secon");
        $('.item-d .box').removeClass("secon");
        $('.item-b .box').removeClass("secon");
    });





    //form js
    $("form input").on("blur input focus", function() {
      var $field = $(this).closest(".field");
      if (this.value) {
        $field.addClass("filled");
      } else {
        $field.removeClass("filled");
      }
    });
    
    $(".form_input").on("blur input focus", function() {
      var $field = $(this).closest(".field");
      if (this.value) {
        $field.addClass("filled");
      } else {
        $field.removeClass("filled");
      }
    });

    $("form input").on("focus", function() {
      var $field = $(this).closest(".field");
      if (this) {
        $field.addClass("filled");
      } else {
        $field.removeClass("filled");
      }
    });
    
    $(".form_input").on("focus", function() {
      var $field = $(this).closest(".field");
      if (this) {
        $field.addClass("filled");
      } else {
        $field.removeClass("filled");
      }
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
