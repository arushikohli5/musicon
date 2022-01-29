/*jslint browser: true*/
/*global $, document, window,Typed*/
$(document).ready(function(){

});
    "use strict"

$(window).scroll(function(){
    "use strict"
    var top=$(window).scrollTop();
    if(top>=1000){
        $("nav").addClass("secondary");
    }
    else
        if($("nav").hasClass("secondary")){
            $("nav").removeClass("secondary");
        }
});
