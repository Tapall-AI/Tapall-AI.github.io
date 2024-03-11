/*-----------------------------------------------------------------------------------

    Theme Name: Liz
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/


$(function () {
    "use strict";
    var wind = $(window);

    $('.fullBackground').fullClip({
        images: ['img/hero-01.jpg', 'img/hero-02.jpg', 'img/hero-03.jpg', 'img/hero-04.jpg'],
        transitionTime: 2000,
        wait: 5000
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
})