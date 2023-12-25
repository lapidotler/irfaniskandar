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

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });
});