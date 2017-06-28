/*! * JustTooltip - A Lightweight Responsive jQuery Tooltip Plugin v1.0.0 */

$.fn.tooltip = function() {
    "use strict";

    var winHeight = $(window).height();

    var winWidth = $(window).width();

    $(this).mouseenter(function() {

        var titleTip = $(this).attr("data-title");

        var tipPlace = $(this).attr("data-placement");

        var x = $(this).position();

        var h = $(this).outerHeight();

        var w = $(this).outerWidth();            

        $("body").append("<div class='tooltip'></div>");

        $(".tooltip").text(titleTip);        

        var ht = $(".tooltip").outerHeight();
        
        var wt = $(".tooltip").outerWidth();

        //Replace data-placement attribute if there is no space
        if(tipPlace == "left" && x.left < wt){
            $(this).attr("data-placement", "right");
        }

        if(tipPlace == "right" && x.left > winWidth - w - wt){
            $(this).attr("data-placement", "left");
        }

        if(tipPlace == "top" && x.top < ht){
            $(this).attr("data-placement", "bottom");
        }

        if(tipPlace == "bottom" && x.top > winHeight - ht){
            $(this).attr("data-placement", "top");          
        }

        //Mobile Tooltip
        if(winWidth < w + wt){
            $(this).attr("data-placement", "top");          
        }
          

        //Tooltip Top Direction
        if($(this).attr("data-placement") == "top"){
            $(".tooltip").addClass("top").css({
                "top" : x.top - ht -8,
                "left" : x.left + (w - wt)/2
            });                
        }

        //Tooltip Right Direction
        else if($(this).attr("data-placement") == "right"){
            $(".tooltip").addClass("right").css({
                "top" : x.top + (h - ht)/2,
                "left" : x.left + w + 8
            });               
        }

        //Tooltip Bottom Direction
        else if($(this).attr("data-placement") == "bottom"){
            $(".tooltip").addClass("bottom").css({
                "top" : x.top + h + 8,
                "left" : x.left + (w - wt)/2
            });               
        }

        //Tooltip Left Direction
        else if($(this).attr("data-placement") == "left"){
            $(".tooltip").addClass("left").css({
                "top" : x.top + (h - ht)/2,
                "left" : x.left - wt - 8
            });                
        }

        //Default Tooltip direction will be top
        else{
            $(".tooltip").addClass("top").css({
                "top" : x.top - ht,
                "left" : x.left + (w - wt)/2
            });
        } 

    });

    //Remove tooltip when mouse out
    $(this).mouseleave(function() {       
        $(".tooltip").remove();
    });           
};