$( document ).ready( function () {
	
	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active-btn');
		$('.menu').toggleClass('active');
	});

	$('.bg-menu').on('click', function() {
		$('.menu-btn').toggleClass('active-btn');
		$('.menu').toggleClass('active');
	});
	
	$('.arrow-left').on('click', function (e) {
		e.preventDefault();
		$('.owl-carousel').trigger('prev.owl.carousel');
	});

	$('.arrow-right').on('click', function (e) {
		e.preventDefault();
		$('.owl-carousel').trigger('next.owl.carousel');
	});

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		autoplaySpeed: 1000,
		smartSpeed: 1000
	});

});