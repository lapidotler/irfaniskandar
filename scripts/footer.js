$(document).ready(function() {
    checkFooterWidth();

    $(window).resize(function() {
        checkFooterWidth();
    });

    function checkFooterWidth() {
        var windowWidth = $(window).width();

        if (windowWidth <= 770) {
            $('.custom-footer .container').addClass('responsive');
        } else {
            $('.custom-footer .container').removeClass('responsive');
        }
    }
});