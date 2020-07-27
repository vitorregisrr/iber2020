(function () {
    'use strict';

    // Home Carousel //
    const conhecaCarousel = $(".conheca__carousel");
    conhecaCarousel.owlCarousel({
        margin: 0,
        autoHeight: true,
        center: false,
        margin: 30,
        nav: true,
        dots: false,
        startPosition: 0,
        infinite: true,
        loop: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        responsive: {
            300: {
                items: 1,
                margin: 15
            },
            600: {
                items: 2,
                margin: 10,
            },
            
            768: {
                items: 3,
                margin: 30
            },
            1098: {
                items: 6,
            }
        }
    });

    window.dispatchEvent(new Event('resize'));
})();