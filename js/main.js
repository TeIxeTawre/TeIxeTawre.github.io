let curItem = 0;

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
		$('#header-carousel').trigger('prev.owl.carousel');
	});

	$('.arrow-right').on('click', function (e) {
		e.preventDefault();
		$('#header-carousel').trigger('next.owl.carousel');
	});

	$('#header-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		autoplaySpeed: 1000,
		smartSpeed: 1000
	});

	$('#simple-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		mouseDrag: false,
	});

	$('#simple-carousel').on('changed.owl.carousel', function (event) {
		curItem = event.item.index;
		console.log(curItem);
		ifer();
	});


	$('.sm-one').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger("to.owl.carousel", [0, 500]);
		ifer();
	});

	$('.sm-two').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger('to.owl.carousel', [1, 500]);		
		ifer();
	});

	$('.sm-three').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger('to.owl.carousel', [2, 500]);
		ifer();
		
	});

	/*$('.act-find__first').hover(function() {
    	$('.properties-effect').css('background-color', '#e2f8ff');
    	$('.buyers-effect').css('background-color', '#f5f9eb');
	});

	$('.act-find__second').hover(function() {
    	$('.buyers-effect').css('background-color', '#e2f8ff');
    	$('.properties-effect').css('background-color', '#f5f9eb');
	});*/
});

function ifer() {
	if ( curItem == 2) {
		$('.sm-one').addClass('active-trg');
		$('.sm-two').removeClass('active-trg');
		$('.sm-three').removeClass('active-trg');
	}
	if ( curItem == 3) {
		$('.sm-two').addClass('active-trg');
		$('.sm-one').removeClass('active-trg');
		$('.sm-three').removeClass('active-trg');
	}
	if ( curItem == 4) {
		$('.sm-three').addClass('active-trg');
		$('.sm-two').removeClass('active-trg');
		$('.sm-one').removeClass('active-trg');
	}
	if ( curItem == 5) {
		$('.sm-one').addClass('active-trg');
		$('.sm-two').removeClass('active-trg');
		$('.sm-three').removeClass('active-trg');
	}
}

