/*global $, alert, consol*/
$(function(){
    'use strict'
    //adjust header height
    var myHeader=$('.header'),
        mySlider=$('.bxslider');

    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height());
        
        mySlider.each(function(){
            $(this).css('paddingTop' ,($(window).height()- $('.bxslider li').height())/2);
        }); 
    });
    //links add active class
    $('.links li ').click(function(){
        $(this).addClass('active').siblings().removeclass ('active');
    });
    //sdjust bxslider item center 
    mySlider.each(function(){
        $(this).css('paddingTop' ,($(window).height()- $('.bxslider li').height())/2);
    });
    //trigger th bx slider
    mySlider.bxSlider({
        pager:false
    });
    //somooth scroll to div
    $('.links li a').click(function(){
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top
        },1000);

    });
    //our auto slider
    (function autoSlider(){
        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });

            } else{
                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(); 
                    autoSlider();             
                });
            }
        });
    }());
    //trigger mixitup
    
      // $('#container').mixItUp();
    //adjust shuffle links
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })
    //trigger nice scroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth:'7px',
        cursorborder: 'ipx sloid #1abc9c',
        cursorborderradius:0

    });
});