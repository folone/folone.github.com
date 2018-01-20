if ($.cookie("theme_csspath")) {
    $('link#theme-stylesheet').attr("href", $.cookie("theme_csspath"));
}
if ($.cookie("theme_layout")) {
    $('body').addClass($.cookie("theme_layout"));
}

$(function () {

    sliders();
    menuSliding();
    utils();
    map();

});

/* sliders */

function sliders() {
    if ($('.owl-carousel').length) {


        $(".testimonials").owlCarousel({
            items: 4,
            itemsDesktopSmall: [1100, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]
        });
    }

}

function map() {

    if ($('#map').length > 0) {

        function getQuote() {
             var quoteArray = [
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A monad is just a monoid in the category of endofunctors, whats the big deal?</p>' +
                '<footer class="blockquote-footer"><a href="http://james-iry.blogspot.de/2009/05/brief-incomplete-and-mostly-wrong.html">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A lens is just a monoid natural transformation from the coalgebra functiors from haskell functors to haskell types, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://www.haskell.org/pipermail/haskell-cafe/2011-February/089156.html">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">Non-breaking error handling is just an applicative functor on a partially applied disjoint union type constructor with semigroup error elements so whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="https://github.com/tonymorris/applicative-errors-scala/blob/e88c836bb967e34eec4439e095865cdeabb3d432/src/docbook/Conclusion.xml#L9-L10">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A category is just a monoid in the monoidal category of endospans on the set of objects, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://nlab.mathforge.org/nlab/show/category#EquivalenceDefinitions">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">Lenses are just coalgebras for the costate comonad, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://patternsinfp.wordpress.com/2011/01/31/lenses-are-the-coalgebras-for-the-costate-comonad/">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A comonad is just a coalgebra in the category of endofunctors, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://stackoverflow.com/a/16022059/163423">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">Induction is just the unique homomorphism induced by an initial algebra over indexed propositions, what’s the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://blog.ezyang.com/2013/04/the-difference-between-recursion-induction/">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A Profunctor is just a bifunctor that is contravariant in the first argument and covariant in the second, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="https://www.fpcomplete.com/user/liyang/profunctors">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">An arrow is just a monoid in the category of profunctors, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="http://blog.sigfpe.com/2011/07/profunctors-in-haskell.html">Source</a></footer>' +
                    '</blockquote>',
                '<blockquote class="blockquote blockquote-reverse">' +
                    '<p class="mb-0">A monad is exactly the same thing as a monoidal monoid in the monoidal category C^C with composition as the monoidal product, whats the big deal?</p>' +
                    '<footer class="blockquote-footer"><a href="https://twitter.com/MattRussellUK/status/383142688242929664">Source</a></footer>' +
                    '</blockquote>',

            ];
            var randomNumber = Math.floor(Math.random()*quoteArray.length);

            return '<div class="info-window">' +
                    "<h3>You win a funny quote!</h3>" +
                    '<div class="info-content">' +
                    quoteArray[randomNumber] +
                    '</div>' +
                    '</div>';

        }

        function initMap() {

            var location = new google.maps.LatLng(51.5105576,-0.1387299);

            var mapCanvas = document.getElementById('map');
            var mapOptions = {
                center: location,
                zoom: 12,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);

            var markerImage = 'img/marker.png';

            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: markerImage
            });

            var contentString = getQuote();

            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });

            marker.addListener('click', function () {
                infowindow.setContent(getQuote());
                infowindow.open(map, marker);
            });

            var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

            map.set('styles', styles);


        }

        google.maps.event.addDomListener(window, 'load', initMap);


    }

}



/* menu sliding */

function menuSliding() {


    $('.dropdown').on('show.bs.dropdown', function (e) {

        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();

        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).show();
        }
    }

    );
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).hide();
        }
    });

}

/* animations */

function animations() {
    delayTime = 0;
    $('[data-animate]').css({opacity: '0'});
    $('[data-animate]').waypoint(function (direction) {
        delayTime += 150;
        $(this).delay(delayTime).queue(function (next) {
            $(this).toggleClass('animated');
            $(this).toggleClass($(this).data('animate'));
            delayTime = 0;
            next();
            //$(this).removeClass('animated');
            //$(this).toggleClass($(this).data('animate'));
        });
    },
            {
                offset: '90%',
                triggerOnce: true
            });

    $('[data-animate-hover]').hover(function () {
        $(this).css({opacity: 1});
        $(this).addClass('animated');
        $(this).removeClass($(this).data('animate'));
        $(this).addClass($(this).data('animate-hover'));
    }, function () {
        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-hover'));
    });

}

function animationsSlider() {

    var delayTimeSlider = 400;

    $('.owl-item:not(.active) [data-animate-always]').each(function () {

        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-always'));
        $(this).stop(true, true, true).css({opacity: 0});

    });

    $('.owl-item.active [data-animate-always]').each(function () {
        delayTimeSlider += 500;

        $(this).delay(delayTimeSlider).queue(function (next) {
            $(this).addClass('animated');
            $(this).addClass($(this).data('animate-always'));

            console.log($(this).data('animate-always'));

        });
    });



}

/* counters */

function counters() {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

}

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* click on the box activates the radio */

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    $('.scroll-to, .scroll-to-top').click(function (event) {

        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {

            scrollTo(full_url);
            event.preventDefault();
        }
    });
    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}

/* product detail gallery */

function productDetailGallery(confDetailSwitch) {
    $('.thumb:first').addClass('active');
    timer = setInterval(autoSwitch, confDetailSwitch);
    $(".thumb").click(function (e) {

        switchImage($(this));
        clearInterval(timer);
        timer = setInterval(autoSwitch, confDetailSwitch);
        e.preventDefault();
    }
    );
    $('#mainImage').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(autoSwitch, confDetailSwitch);
    });
    function autoSwitch() {
        var nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb');
        if (nextThumb.length == 0) {
            nextThumb = $('.thumb:first');
        }
        switchImage(nextThumb);
    }

    function switchImage(thumb) {

        $('.thumb').removeClass('active');
        var bigUrl = thumb.attr('href');
        thumb.addClass('active');
        $('#mainImage img').attr('src', bigUrl);
    }
}

/* product detail sizes */

function productDetailSizes() {
    $('.sizes a').click(function (e) {
        e.preventDefault();
        $('.sizes a').removeClass('active');
        $('.size-input').prop('checked', false);
        $(this).addClass('active');
        $(this).next('input').prop('checked', true);
    });
}


$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);

    });
}

$(window).load(function () {

    windowWidth = $(window).width();

    $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 205);
        windowWidth = newWindowWidth;
    }

});
