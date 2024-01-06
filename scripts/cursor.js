document.addEventListener('DOMContentLoaded', function () {
    // nav and loading into pages
    $(".body-content").hide().toggleClass("hidden").delay(300).fadeIn(300);
    $(".navbar-brand").click(function(e) {
        var nav = $(this);
        var goto = nav.attr("href");
        console.log(nav);
        console.log(goto);
        e.preventDefault();
        $(".body-content").fadeOut(300);
        setTimeout(function() {
            window.location.href = goto;
        }, 600);
    });
    
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = "scale(1.25)";

    document.addEventListener('mousemove', function (e) {
        cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
        cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
    });

    document.addEventListener('mouseleave', function () {
        cursor.style.opacity = "0";
    });

    document.addEventListener('mouseenter', function () {
        cursor.style.opacity = "1";
    });

    document.querySelectorAll('a, button, .portfolio-option').forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            cursor.style.transform = "scale(1.75)";
            cursor.style.mixBlendMode = "multiply";
        });
        link.addEventListener('mouseleave', function () {
            cursor.style.transform = "scale(1.25)";
            cursor.style.mixBlendMode = "difference";
        });
    });    

    document.addEventListener('mousedown', function () {
        cursor.style.transform = "scale(0.75)";
    });

    document.addEventListener('mouseup', function () {
        cursor.style.transform = "scale(1.25)";
    });

    // Change cursor color on hover or click events
    document.addEventListener('mouseover', function () {
        cursor.style.backgroundColor = '#9f63c1'; // Change to the second color on hover
    });

    document.addEventListener('mouseout', function () {
        cursor.style.backgroundColor = '#7b68b8'; // Reset to the initial color on mouseout
    });
});