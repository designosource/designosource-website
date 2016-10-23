$(document).ready(function($){

    // open/close primary navigation
    $('.hamburger-menu').on('click', function(){

        $('.hamburger-menu-icon').toggleClass('is-clicked');
        $('.header').toggleClass('menu-is-open');

        if( $('.navigation').hasClass('is-visible') ) {
            $('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').removeClass('overflow-hidden');
            });

        } else {
            $('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').addClass('overflow-hidden');
            });
        }
    });
});