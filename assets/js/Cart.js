(function ($) {
    /* Preloder */
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    })

    /* Subscibe */
    $(document).ready(function () {
        $("#subscribe").click(function () {
            alert("Thank you for subscribe us :)");
            $("#test").val('');
        })
    })
})(jQuery);