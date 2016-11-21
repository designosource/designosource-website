$(document).ready(function($){

    // open/close primary navigation
    $('.hamburger-menu').on('click', function(){

        $('.hamburger-menu-icon').toggleClass('is-clicked');
        $('.header').toggleClass('menu-is-open');

        if( $('.navigation').hasClass('is-visible') ) {
            $('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').unbind('touchmove');
            });

        } else {
            $('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').bind('touchmove', function(e){e.preventDefault()});
                $.fn.fullpage.setAllowScrolling(false);
                $.fn.fullpage.setKeyboardScrolling(false);
            });
        }
    });

    // TYPEWRITER
    $(function(){
        $("#typed").typed({
            strings: ["We deliver eggceptional work.", "Get to know us!", "Good design is good business."],
            typeSpeed: 20,
            backDelay: 1000,
            loop: true,
            contentType: 'html',
            loopCount: false,
        });
    });
});
