////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var resizeId;
$(document).ready(function($) {
    "use strict";

    $(".hero-section").height( $(window).height() - $("#page-header").height() );

//  iCheck -------------------------------------------------------------------------------------------------------------

    if ($("input[type=checkbox]").length > 0) {
        $("input").iCheck();
    }

    if ($("input[type=radio]").length > 0) {
        $("input").iCheck();
    }

    $(".navigation .nav-btn").on("click", function (){
        $(".outer-wrapper").toggleClass("show-nav");
    });

    // Work preview modal - Our Works gallery
    function openWorkModal(imgSrc) {
        $("#work-modal-img").attr("src", imgSrc).attr("alt", "Project preview");
        $("#work-modal").addClass("is-open").attr("aria-hidden", "false");
        $("body").css("overflow", "hidden");
    }
    function closeWorkModal() {
        $("#work-modal").removeClass("is-open").attr("aria-hidden", "true");
        $("body").css("overflow", "");
    }
    $(document).on("click", ".work-modal-trigger", function(e) {
        e.preventDefault();
        var src = $(this).data("image") || $(this).find("img").attr("src");
        if (src) openWorkModal(src);
    });
    $(document).on("click", ".work-modal-backdrop, .work-modal-close", function(e) {
        e.preventDefault();
        closeWorkModal();
    });
    $(document).on("keydown", function(e) {
        if (e.key === "Escape" && $("#work-modal").hasClass("is-open")) closeWorkModal();
    });

    // Logo links: smooth slow scroll to top
    $(document).on("click", ".logos a[href='#']", function(e) {
        e.preventDefault();
        var start = window.pageYOffset || document.documentElement.scrollTop;
        var startTime = performance.now();
        var duration = 2800;
        function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
        function scrollStep(now) {
            var elapsed = now - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = easeInOutCubic(progress);
            var y = start * (1 - eased);
            window.scrollTo(0, y);
            if (progress < 1) requestAnimationFrame(scrollStep);
        }
        requestAnimationFrame(scrollStep);
    });

    // Scroll to top when clicking Our Works block (except on links/buttons/gallery items)
    $(document).on("click", ".scroll-to-top-trigger", function(e) {
        if ($(e.target).closest("a, button, .gallery-item").length) return;
        e.preventDefault();
        var start = window.pageYOffset || document.documentElement.scrollTop;
        var startTime = performance.now();
        var duration = 2800;
        function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
        function scrollStep(now) {
            var elapsed = now - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = easeInOutCubic(progress);
            var y = start * (1 - eased);
            window.scrollTo(0, y);
            if (progress < 1) requestAnimationFrame(scrollStep);
        }
        requestAnimationFrame(scrollStep);
    });

    // Dark mode toggle - use delegation in case button loads late
    $(document).on("click", "#dark-mode-toggle", function(e) {
        e.preventDefault();
        var html = document.documentElement;
        var isDark = html.getAttribute("data-theme") === "dark";
        if (isDark) {
            html.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });

    $(".navigation-off-canvas h2").css("height", $("#page-header").height() );
    $(".navigation-off-canvas h2").css("line-height", $("#page-header").height() + "px" );

//  Smooth Scroll

    $('.main-nav a[href^="#"], a[href^="#"].scroll').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = target;
        });
    });

//  Responsive Video Scaling

    if ($(".video").length > 0) {
        $(this).fitVids();
    }

//  Image popup

    if ($(".image-popup").length > 0) {
        $(".image-popup").magnificPopup({
            type:'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            overflowY: 'scroll'
        });
    }

//  Owl Carousel

    if( $(".one-item-carousel").length ){
        $(".one-item-carousel").owlCarousel({
            items: 1,
            nav: true,
            autoHeight: true,
            navText: []
        });
    }

    if( $(".featured-works-carousel").length ){
        $(".featured-works-carousel").owlCarousel({
            margin: 10,
            fluidSpeed: true,
            navSpeed: 1000,
            items: 1,
            navText: [],
            nav: true,
            center: true,
            loop: true,
            dots: false
        });

    }

    if( $(".hero-section .carousel").length ){
        var $heroCarousel = $(".hero-section .carousel");

        $heroCarousel.on("initialized.owl.carousel", function(event) {
            $(this).find(".owl-item").removeClass("show-description");
            $(this).find(".active.center").addClass("show-description");
        });

        $heroCarousel.owlCarousel({
            margin: 3,
            fluidSpeed: true,
            navSpeed: 1000,
            items: 2,
            navText: ["", ""],
            nav: true,
            center: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navContainer: $(".hero-section .heading .owl-navigation"),
            dots: false,
                responsive : {
                    0 : {
                        items: 1
                    },
                    480 : {
                        items: 1
                    },
                    768 : {
                        items: 2
                    },
                    1200 : {
                        items: 3
                    }
                }
        });

        $heroCarousel.on("translated.owl.carousel", function(event) {
            $(this).find(".owl-item").removeClass("show-description");
            $(this).find(".active.center").addClass("show-description");
        });

    }

    if( $(".hero-section .slider").length ){
        $(".hero-wrapper").width( $(".hero-section").css("width") );
        $(".hero-section .slider").owlCarousel({
            margin: 0,
            fluidSpeed: true,
            navSpeed: 1000,
            items: 1,
            navText: [],
            nav: true,
            center: true,
            loop: true,
            navContainer: $(".hero-section .heading").find(".owl-navigation"),
            dots: false
        });

    }

    $(".parallax-wrapper").each(function() {
        var _this = $(this);
        var parallaxElement = $(this).find(".parallax-element");
        parallaxElement.css('transform', 'translateY(' + ( (_this.offset().top - $(window).scrollTop() ) / $(window).height() *100 ) + '%)');
        $(window).on("scroll", function(){
            if( $(window).scrollTop() > ( _this.offset().top - $(window).height() ) ){
                parallaxElement.css('transform', 'translateY(' + ( (_this.offset().top/1.2 - $(window).scrollTop() ) / $(window).height() *100 ) + '%)');
            }
        });
    });

    //  Scroll Reveal

    if (document.documentElement.clientWidth > 768) {

        window.scrollReveal = new scrollReveal();

    }

//  Form Validation - Netlify Forms

    $("#form-contact").validate({
        submitHandler: function(form) {
            var $form = $(form);
            var $btn = $form.find('button[type="submit"]');
            var $status = $('#form-status');
            $btn.prop('disabled', true);
            fetch(form.action || window.location.pathname || '/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(form)).toString()
            }).then(function() {
                $status.html('<span class="text-success">Message sent! We\'ll get back to you soon.</span>');
                form.reset();
            }).catch(function() {
                $status.html('<span class="text-danger">Something went wrong. Please try again.</span>');
                $btn.prop('disabled', false);
            });
            return false;
        }
    });

//  Transfer "img" into CSS background-image

    $(".bg-transfer").each(function() {
        $(this).css("background-image", "url("+ $(this).find("img").attr("src") +")" );
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On Load
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).load(function(){

});

$(window).resize(function(){
    //clearTimeout(resizeId);
    //resizeId = setTimeout(doneResizing, 250);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do after resize

function doneResizing(){
    /*
    var $equalHeight = $('.container');
    for( var i=0; i<$equalHeight.length; i++ ){
        equalHeight( $equalHeight );
    }
    */
}


function simpleMap(){
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/07923e35-fcfe-4767-9219-c4b593903c0a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'custom.js:211',message:'simpleMap function entry',data:{googleMapsExists:typeof google!=='undefined'&&typeof google.maps!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,D'})}).catch(()=>{});
    // #endregion
    var _latitude = 34.038405;
    var _longitude = -117.946944;
    var element = "map";
    //var mapStyles = [{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#C6E2FF"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#C5E3BF"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#D1D1B8"}]}];
    var mapStyles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];
    var mapElement = document.getElementById(element);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/07923e35-fcfe-4767-9219-c4b593903c0a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'custom.js:225',message:'Map element retrieved',data:{mapElementExists:mapElement!==null,elementId:element},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    if (!mapElement) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/07923e35-fcfe-4767-9219-c4b593903c0a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'custom.js:228',message:'Map element not found, returning early',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        return;
    }
    var mapCenter = new google.maps.LatLng(_latitude,_longitude);
    var mapOptions = {
        zoom: 13,
        center: mapCenter,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyles
    };
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/07923e35-fcfe-4767-9219-c4b593903c0a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'custom.js:238',message:'Creating Google Maps instance',data:{hasGoogleMaps:typeof google.maps.Map!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,D'})}).catch(()=>{});
    // #endregion
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(_latitude,_longitude),
        map: map,
        icon: "assets/img/marker.png"
    });
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/07923e35-fcfe-4767-9219-c4b593903c0a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'custom.js:245',message:'simpleMap function exit - map created successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
}

////////////////////////////

$.getScript("assets/js/jquery.session.js", function() {

    $("a[data-theme-id='page-background-white']").on("click", function(){
        $.session.set('theme', 'page-background-white');
    });
    $("a[data-theme-id='page-background-black']").on("click", function(){
        $.session.set('theme', 'page-background-black');
    });
    $("a[data-theme-id='page-framed-black']").on("click", function(){
        $.session.set('theme', 'page-framed-black');
    });
    $("a[data-theme-id='page-framed-white']").on("click", function(){
        $.session.set('theme', 'page-framed-white page-background-black');
    });

    if( $.session.get("theme") ){
        $(".outer-wrapper").addClass( $.session.get("theme") );

        if( $.session.get("theme") == "page-background-black" || $.session.get("theme") == "page-framed-black" ){
            $(".navigation .left a img").attr("src", "assets/img/logo-white.png");
        }
        if( $.session.get("theme") == "page-background-black" || $.session.get("theme") == "page-framed-white page-background-black" ){
            $(".bg").each(function() {
                $(this).removeClass("black");
                $(this).addClass("white");
            });
            $(".logo:nth-child(1) a img").attr("src","assets/img/logo-1-w.png");
            $(".logo:nth-child(2) a img").attr("src","assets/img/logo-2-w.png");
            $(".logo:nth-child(3) a img").attr("src","assets/img/logo-3-w.png");
            $(".logo:nth-child(4) a img").attr("src","assets/img/logo-4-w.png");
            $(".logo:nth-child(5) a img").attr("src","assets/img/logo-5-w.png");
        }
    }

});

