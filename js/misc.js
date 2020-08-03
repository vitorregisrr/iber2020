(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    // Sticky header
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 150) {
            $("#main-header").addClass("sticky");
        } else if (!($(".navbar-collapse").hasClass('show'))) {
            $("#main-header").removeClass("sticky");

        }
    });

    $('[data-toggle="legislacao-item"]').click( function(){
        var item = $(this).closest('.legislacao__item');

        const isActive = $(this).hasClass('active') ? true : false;

        item.find('.header').toggleClass('active');
        item.find('.content').toggleClass('active');
    })
    
    window.dispatchEvent(new Event('resize'));

})();