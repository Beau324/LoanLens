$(function () {
    'use strict'; // Start of use strict 


    /*--------------------------
        scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fas fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------
        Reviews
    ---------------------------- */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        smartSpeed: 900,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*------------------------------------------------------------------
       mobile navbar click 
    ------------------------------------------------------------------*/
    var w = $(window).width();
    if (w <= 991) {
        $("#navbar .nav-item").on('click', function () {
            $(".navbar-toggler").trigger('click');
        });
    }
    //
    /*------------------------------------------------------------------
       Calculator 
    ------------------------------------------------------------------*/
    var slider = $("#slider").slider({
        range: "min",
        value: 200000,
        min: 1000,
        max: 700000,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").on("change", function () {
        slider.slider("value", this.value + 1);
    });
});

$(function () {
    var slider = $("#slider-tenure").slider({
        range: "min",
        value: 12,
        min: 12,
        max: 360,
        slide: function (event, ui) {
            $("#tenure").val(ui.value);
        }
    });
    $("#tenure").on("change", function () {
        slider.slider("value", this.value + 3);
    });
});

$(function () {
    var slider = $("#slider-interest").slider({
        range: "min",
        value: 10.5,
        min: 3.5,
        max: 20,
        slide: function (event, ui) {
            $("#interest").val(ui.value);
        }
    });
    $("#interest").on("change", function () {
        slider.slider("value", this.value + 0.5);
    });
});

/*------------------------------------------------------------------
 Fixed Navigation 
------------------------------------------------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('#navbar').addClass('header-scrolled');
    } else {
        $('#navbar').removeClass('header-scrolled');
    }
});

/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function () {
    'use strict'; // Start of use strict
    // Loader 
    $('#dvLoading').fadeOut('slow', function () {
        $(this).remove();
    });

});
