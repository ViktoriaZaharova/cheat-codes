// кнопка наверх
$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow")
});

$(document).scroll(function () {
	var y = $(this).scrollTop();
	var homeHeight = $('.home').height();
	if (y > homeHeight) {
		$('.btn-scroll-top').css('display', 'flex');
	}
	else {
		$('.btn-scroll-top').css('display', 'none');
	}
});

// dropdown menu
$('.dropdown-toggle').click(function (e) {
	e.preventDefault();
	$('.dropdown-menu').fadeOut();
	$(this).siblings('.dropdown-menu').fadeToggle();
});

$(document).mouseup(function (e) {
	var div = $(".dropdown-menu");
	var btn = $('.dropdown-toggle');
	if (!div.is(e.target)
		&& !btn.is(e.target) && btn.has(e.target).length === 0
		&& div.has(e.target).length === 0) {
		div.fadeOut();
	}
});

// input search 
$('.form-search input').on('keyup change', function () {
	if (this.value.length > 0) {
		$('.form-search-result').fadeIn();
		$('.form-search__close').css('display', 'flex');
	} else {
		$('.form-search-result').fadeOut();
		$('.form-search__close').css('display', 'none');
	}
});

$('.form-search__close').click(function (e) {
	e.preventDefault();
	$('.form-search input').val('');
	$('.form-search-result').fadeOut();
	// $('.search-dropdown').fadeOut();
	$('.form-search__close').css('display', 'none');
});

// home slider
$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	appendDots: '.home-slider__nav',
	fade: true,
	autoplay: true,
	autoplaySpeed: 10000,
})

// mobile menu
$('.btn-burger').click(function () {
	$(this).toggleClass('click');
	$('.nav-menu').fadeToggle();
});

$('.footer-box__title').click(function () {
	$(this).toggleClass('open').siblings('.footer-menu').slideToggle();
});