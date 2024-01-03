// Filter Categories
$(document).ready(function () {
    var filtered = false;
    $(".portfolio-option").click(function() {
        if ($(this).hasClass("selected")) {
            $(".portfolio-option").removeClass("selected");
            filtered = false;
        } else {
            $(".portfolio-option").removeClass("selected");
            $(this).addClass("selected");
            filtered = true;
        }

        if (filtered) {
            var filter = $(this).find('a').html();
            if (filter === "Design") {
                $(".design-works").show(500);
                $(".development-works").hide(500);
                $(".other-works").hide(500);

                $("#design-gap").show(500);
                $("#development-gap").hide(500);
                $("#other-gap").hide(500);
            } else if (filter === "Development") {
                $(".development-works").show(500);
                $(".design-works").hide(500);
                $(".other-works").hide(500);

                $("#development-gap").show(500);
                $("#design-gap").hide(500);
                $("#other-gap").hide(500);
            } else if (filter === "Others") {
                $(".other-works").show(500);
                $(".design-works").hide(500);
                $(".development-works").hide(500);

                $("#other-gap").show(500);
                $("#design-gap").hide(500);
                $("#development-gap").hide(500);
            } else {
                $(".filter-content").html("Error!"); 
            }
        } else {
            $(".portfolio-category").show(500);

            $("#design-gap").show(500);
            $("#development-gap").show(500);
            $("#other-gap").show(500);
        }
    });
});