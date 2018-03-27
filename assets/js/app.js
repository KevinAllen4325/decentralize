//Loads background "Particles" in header
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//Shows minimum goal when hovering over marker
$('.min-goal, .infobox').on('mouseover', function() {
    $('.infobox').fadeIn();
}).on('mouseleave', function() {
    $('.infobox').fadeOut();
});

// fixes nav and progress bar to top of the page when current scroll is >= the navs position on the page
var fixNav = $('nav').offset().top;//gets the navs position on page
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();//Gets current scroll position
    if(currentScroll >= fixNav){
      $('nav').addClass('fixed-nav');
      $('.about').addClass('padding');
    } else{
        $('nav').removeClass('fixed-nav');
        $('.about').removeClass('padding');
    }
});

//Smooth scroll to anchor
$('.link').on('click',function (e) {
    $('html, body').stop().animate({
        'scrollTop': $($(this).attr('rel')).offset().top
    }, 900, 'swing');
});

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

$('.to-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 900, "swing");
return false;
})
