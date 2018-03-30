//Loads background "Particles" in header
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//Shows minimum goal when hovering over marker
$('.min-goal, .infobox').on('mouseover', function() {
    $('.infobox').fadeIn();
}).on('mouseleave', function() {
    $('.infobox').fadeOut();
});

// fixes nav and progress bar to top of the page when current scroll is >= the navs position on the page
var fixNav = parseInt($('nav').offset().top);
var fixAbout = parseInt($('#about').offset().top);
var fixTeam = parseInt($('#team').offset().top - 95);
var fixRoadmap = parseInt($('#roadmap').offset().top - 95);

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop(); //Gets current scroll position
    var scrollPos = currentScroll;

    if (scrollPos >= fixTeam && scrollPos <= fixRoadmap) {
        $('.teamLink').addClass('active');
        $('.productLink').removeClass('active');
        $('.roadmapLink').removeClass('active')
    } else if (scrollPos >= fixRoadmap) {
        $('.roadmapLink').addClass('active');
        $('.teamLink').removeClass('active');
        $('.productLink').removeClass('active')
    } else {
        $('.productLink').addClass('active');
        $('.roadmapLink').removeClass('active')
        $('.teamLink').removeClass('active');
    }

    if (currentScroll >= fixNav) {
        $('nav').addClass('fixed-nav');
        $('.about').addClass('padding');
    } else {
        $('nav').removeClass('fixed-nav');
        $('.about').removeClass('padding');
    }
});

//Smooth scroll to anchor
$('.link').on('click', function(e) {
    if ($(this).attr('rel') != '#scroll' && $(this).attr('rel') != '#about') {
        $('html, body').stop().animate({
            'scrollTop': $($(this).attr('rel')).offset().top - 85
        }, 900, 'swing');
    } else {
        $('html, body').stop().animate({
            'scrollTop': $($(this).attr('rel')).offset().top
        }, 900, 'swing');
    }
});

//Sets the height of the header so its always 100%
$('header').css({height: window.innerHeight});

//smooth mouse wheel scrolling using easeScroll jquery plugin
$("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
});

$('.to-top').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 900, "swing");
    return false;
});

window.sr = ScrollReveal();

if(window.innerWidth > 800){
    sr.reveal('.about .container', {
        scale: 1,
        origin: 'top',
        duration: 500,
        delay: 250
    });
    sr.reveal('.benefits .container', {
        scale: 1,
        duration: 500,
        delay: 250
    });
    sr.reveal('.fade-top', {
        origin: 'top',
        scale: 1,
        distance: 0,
        duration: 500,
        delay: 250
    });
    sr.reveal('.fade-top-name', {
        origin: 'bottom',
        scale: 1,
        distance: 0,
        duration: 500,
        delay: 250
    });
}

if(window.innerWidth > 625){
    sr.reveal('.checkL', {
        origin: 'left',
        duration: 500,
        delay: 250
    });
    sr.reveal('.checkR', {
        origin: 'right',
        duration: 500,
        delay: 250
    });
    sr.reveal('.checkC', {
        origin: 'bottom',
        duration: 500,
        delay: 250,
        scale: 1
    });
} else{
    sr.reveal('.checkL', {
        origin: 'right',
        duration: 500,
        delay: 250
    });
    sr.reveal('.checkR', {
        origin: 'right',
        duration: 500,
        delay: 250
    });
    sr.reveal('.checkC', {
        origin: 'right',
        duration: 500,
        delay: 250,
        scale: 1
    });
}

function selected(ele) {
    $('#fourth').prop('checked', false);
    var element = "#" + ele.id;
    $(element).parent().css('color', 'black').siblings().css('color', '#878787');
    if ($('#custom').is(':focus'))
        $('#fourth').prop('checked', true);
    else
        $('#custom').val('');
}

$('.contribute-button').on('click', function() {
    $('.contribute-overlay').css('display', 'flex');
    $('.contribute-overlay').addClass('opacity', 200)
});

$('.close-button').on('click', function() {
    $('.contribute-overlay').fadeOut('fast');
    setTimeout(function() {
        $('.contribute-overlay').removeClass('opacity');
        document.getElementById('contributionForm').reset()
        $('label').css('color', '#878787');
    }, 200)
});