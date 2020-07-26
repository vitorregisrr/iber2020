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

    $('[data-toggle="expand-markup"]').click(function () {
        $('.markup').addClass('expanded');
        $(this).fadeOut();
    });

    $('#certificado-modal .btn-large-blue').click(function (e) {
        $('.btn-large-blue').removeClass('active');
        $(this).addClass('active')
        $('#input-recebimento').val($(this).attr('data-value'))
    });

    window.dispatchEvent(new Event('resize'));
})();