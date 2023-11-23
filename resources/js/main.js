$(document).ready(function(){
    $('.header__search-icon').click(function(){
        $('.header__search-container').toggleClass('header__search-container--active');
        $('.mobile-menu-background').toggleClass('mobile-menu-background--active');
    });
    $('.header__mobile-menu-icon').click(function(){
        $('.mobile-menu').addClass('mobile-menu--active');
        $('.mobile-menu-background').addClass('mobile-menu-background--active');
    });
    $('.mobile-menu-background').click(function(){
        $('.mobile-menu').removeClass('mobile-menu--active');
        $(this).removeClass('mobile-menu-background--active');
        $('.header__search-container').removeClass('header__search-container--active');
        $('.user-mobile').removeClass('user-mobile--active');
    });
    $('.header__user-mobile-icon').click(function(){
        $('.user-mobile').addClass('user-mobile--active');
        $('.mobile-menu-background').addClass('mobile-menu-background--active');
    });
    $('.customer__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
});