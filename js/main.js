/*jslint browser: true*/
/*global $, document, window,Typed*/
$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,  
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
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
