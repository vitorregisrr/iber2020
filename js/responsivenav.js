(function () {
    'use strict';

    $('[data-toggle="nav"]').click(function () {
        const isExpanded = $(this).attr('aria-expanded') === 'false' ? false : true;

        $('#nav-content').toggleClass('active');

        $(this).attr('aria-expanded', !isExpanded);
    });
    
    window.dispatchEvent(new Event('resize'));
})();