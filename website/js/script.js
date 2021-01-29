/*
Theme Name:     MTHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "mtheme".
	For demo 1 to demo 6, it uses "mtheme".
	For demo 4, it uses "mthemeD4". 
	For demo 5, it uses "mthemeD5".
	For index page, it uses "mthemeIndex".
	For documentation page, it uses "mthemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 for demo 1 to demo 6
			1.1.1 .mtheme-owl-1
			1.1.2 .mtheme-owl-2
			1.1.3 .mtheme-owl-3
	2. wow
	3. navigation
		3.1 for demo 1 to demo 6
			3.1.1 #mtheme-navbar
	4. typed
		4.1 for demo 4
			4.1.1 #mthemeD4-typed
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".mtheme-owl-1").owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 3000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 3,
				nav: false
			},
			1200: {
				items: 3,
				nav: false
			}
		}
	});
	$(".mtheme-owl-2").owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 2,
				nav: false
			},
			1200: {
				items: 2,
				nav: false
			}
		}
	});
	$(".mtheme-owl-3").owlCarousel({
		items: 6,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1500,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 3,
				nav: false
			},
			1200: {
				items: 3,
				nav: false
			}
		}
	});
});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#mtheme-navbar').addClass('solid');
	    } else {
	        $('#mtheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#mtheme-navbar').hide();
	    }
	    else{
	    	$('#mtheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* DEMO 4 TYPED TEXT */
$(document).ready(function(){
	var typed = new Typed('#mthemeD4-typed', {
		strings: ['Nature', 'and', 'Peace'],
		typeSpeed: 300,
		backSpeed: 300,
		fadeOut: true,
		smartBackspace: true,
		loop: true
	});
});
/* END OF DEMO 4 TYPED TEXT */
/* END OF CUSTOM JS */