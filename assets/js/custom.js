/**
 2. TOP SLIDER
 3. ABOUT US (SLICK SLIDER)
 4. LATEST COURSE SLIDER (SLICK SLIDER)
 5. TESTIMONIAL SLIDER (SLICK SLIDER)
 6. COUNTER
 7. RELATED ITEM SLIDER (SLICK SLIDER)
 8. MIXIT FILTER (FOR GALLERY)
 9. FANCYBOX (FOR PORTFOLIO POPUP VIEW)
 11. HOVER DROPDOWN MENU
 12. SCROLL TOP BUTTON
 13. STOP INSPECT

 **/

jQuery(function ($) {
    jQuery('#mu-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        autoplay: true,
        cssEase: 'linear'
    });

    /* ----------------------------------------------------------- */
    /*  5. LATEST COURSE SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('#mu-latest-course-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /* ----------------------------------------------------------- */
    /*  6. TESTIMONIAL SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('.mu-testimonial-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: 'linear'
    });

    /* ----------------------------------------------------------- */
    /*  7. COUNTER
    /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /* ----------------------------------------------------------- */
    /*  8. RELATED ITEM SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('#mu-related-item-slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /* ----------------------------------------------------------- */
    /*  9. MIXIT FILTER (FOR GALLERY)
    /* ----------------------------------------------------------- */

    jQuery(function () {
        jQuery('#mixit-container').mixItUp();
    });

    /* ----------------------------------------------------------- */
    /*  11. HOVER DROPDOWN MENU
    /* ----------------------------------------------------------- */

    // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });


    /* ----------------------------------------------------------- */
    /*  12. SCROLL TOP BUTTON
    /* ----------------------------------------------------------- */

    //Check to see if the window is top if not then display button

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 300) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top

    jQuery('.scrollToTop').click(function () {
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


});
/* ----------------------------------------------------------- */
/*  13. STOP INSPECT
/* ----------------------------------------------------------- */

$(document).keydown(function (e) {
    if (e.which === 123) {
        return false;
    }
});
$(document).bind("contextmenu", function (e) {
    e.preventDefault();
});
