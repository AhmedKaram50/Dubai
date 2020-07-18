/*global $, window, console*/
$(function () {
    'use strict';
    // Organizing Header height
    $("header").height($(window).height());
    // Class ACTIVE For Header Links
    $("header nav .collapse .navbar-nav li").on('click', function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    // Triger Carousel
    $('.carousel').carousel({
        interval: 3000,
        pause : false
    });
    // FadeIn The Second Section & Third &fourth
    $(window).on('scroll', function () {
        
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > 1300) {
            $(".second-section .second-box").css({
                transform : 'scale(1)'
            });
        }
        // Third Section
        if (scrollTop > 1800) {
            $(".third-section .third-content").css({
                transform : 'translateZ(0)',
                opacity : 1
            });
        }
        //Fourth Section
        if (scrollTop > 2100) {
            $(".fourth-section .fourth-box").css({
                animationPlayState: "running"
            });
        }
        
    });

    
});