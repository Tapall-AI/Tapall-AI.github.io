/*-----------------------------------------------------------------------------------

    Theme Name: Multimax
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/

/*=================================================
 == Table Of Content

    1. PRELOADER
    2. SCROLLIT
    3. NAVBAR
    4. SCROLL TO TOP    
    5. SKILL PROGRESS
    6. COUNT TO TRIGGER
    7. PORTFOLIO
    8. MAGNIFIC POPUP TRIGGER
    9. OWLCAROUSEL
    10. PARTICLES
    11. VALIDATOR

*/

$(function () {
    "use strict";
    var wind = $(window);

    /*============= PRELOADER ============= */
    $(document).ready(function () {

        // Fakes the loading setting a timeout
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 1500);

    });

    /*============= SCROLLIT ============= */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });

    /*============= NAVBAR ============= */
    // Add navbar background color when scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

});

/*============= SCROLL TO TOP ============= */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*======== SKILL PROGRESS ========*/
$(function () {
    "use strict";
    var windows = $(window);
    windows.on('scroll', function () {
        $(".progress-item span").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_windows = $(windows).scrollTop() + $(windows).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_windows > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});

/*=========== COUNT TO TRIGGER =============*/
var eventFired = false,
    objectPositionTop = $('.counts').offset().top;
$(window).on('scroll', function () {
    var currentPosition = $(document).scrollTop() + 400;
    if (currentPosition >= objectPositionTop && eventFired === false) {
        eventFired = true;
        $(".count").countTo({
            speed: 5000,
            refreshInterval: 80
        });
    }
});

/*===========  PORTFOLIO ===============*/
$(".simplefilter li").on("click", function () {
    $(".simplefilter li").removeClass("active");
    $(this).addClass("active");
});
var options = {
    animationDuration: 0.6,
    filter: "all",
    callbacks: {
        onFilteringStart: function () { },
        onFilteringEnd: function () { }
    },
    delay: 0,
    delayMode: "alternate",
    easing: "ease-out",
    layout: "sameSize",
    selector: ".filtr-container",
    setupControls: true
}
var filterizd = $(".filtr-container").filterizr(options);
filterizd.filterizr("setOptions", options);

/*========== MAGNIFIC POPUP TRIGGER ======*/
$('.modal-image').magnificPopup({
    type: 'image'
});

/*========= OWLCAROUSEL =========*/

// Testimonials owlCarousel
//=========================
$('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 15,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500
});

// Clients owlCarousel
//====================
$('.clients .owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    mouseDrag: true,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            margin: 10,
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});

/*============= PARTICLES TRIGGER ==========*/
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#b6b2b2"
            }
        },
        "opacity": {
            "value": 0.5211089197812949,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8.017060304327615,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 12.181158184520175,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8c8c8",
            "opacity": 0,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/*========= VALIDATOR =========*/

// contact form validator
$('#contact-form').validator();

$('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
});