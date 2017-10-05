(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /*masonary active*/
        // $(".image-list").masonry();


        /* $(window).bind("scroll", function () {
            $(window).height();
            $(window).scrollTop() > 100 && $(".header-area").addClass("fixed"), $(window).scrollTop() < 111 && $(".header-area").removeClass("fixed")
        }); */

    });


    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });


    $(".responsive-menu-trigger").on("click", function () {
        $(".off-canvas-menu,.responsive-menu-trigger").addClass("active ");
        return false;
    });

    $(".menu-close").on("click", function () {
        $(".off-canvas-menu,.responsive-menu-trigger").removeClass("active");
    });

    window.sr = ScrollReveal({ reset: false });
    
    // Customizing a reveal set
    // sr.reveal('.promise-section', { duration: 200 });

    window.sr = ScrollReveal();
    sr.reveal('.promise-section');
    sr.reveal('.scroll_reveal');
    
    // as a DOM node...
    // var scrollContainer = document.getElementById('features-section');
    // sr.reveal('.scroll_reveal', { container: scrollContainer });

    // as a selector...
    // sr.reveal('.scroll_reveal', { container: '#features-section' });
    


    jQuery(window).load(function () {


    });


}(jQuery));