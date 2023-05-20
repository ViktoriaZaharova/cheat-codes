// кнопка наверх
$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow")
});

// dropdown menu
$('.dropdown-toggle').click(function (e) {
	e.preventDefault();
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
	$('.form-search-result').fadeOut();
	$('.form-search__close').css('display', 'none');
});

// home slider
$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	appendDots: '.home-slider__nav',
	fade: true
})

