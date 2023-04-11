import $, {event, type} from "jquery";

$(document).ready(function () {
	Fancybox.bind('.company__video', {
		type: "video"
	});

	/* Accordion */
	var accordion = $('.js-accordion');

	if (accordion && accordion.length > 0) {
		accordion.each(function () {
			var toggle = accordion.find('.js-toggle');
			var content = accordion.find('.js-content');

			toggle.on('click', function () {
				if (!$(this).hasClass('open')) {
					toggle.removeClass('open');
					content.slideUp(300);
					$(this).addClass('open');
					$(this).next().slideDown(300);
				}
			});
		});
	}
});
if (document.querySelector('.slider-top')) {

	const swiperTop = new Swiper('.slider-top__top', {
		direction: 'horizontal',
		loop: true,
		centeredSlides: true,
		slidesPerView: 1,
		speed: 700,
		spaceBetween: -300,
		navigation: {
			prevEl: '.slider-top__prev',
			nextEl: '.slider-top__next',
		},
	});
	const swiperBottom = new Swiper('.slider-info__slider', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		speed: 700,
		effect: "fade",
	});

	swiperTop.controller.control = swiperBottom;
	swiperBottom.controller.control = swiperTop;
}

if (document.querySelector('.gallery')) {
	const swiperGallery = new Swiper('.gallery__slider', {
		direction: 'horizontal',
		loop: false,
		centeredSlides: true,
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 30,
		navigation: {
			prevEl: '.gallery-arrow__prev',
			nextEl: '.gallery-arrow__next',
		},
	});
}

if (document.querySelector('.js-hero-slider')) {
	const swiperHero = new Swiper('.js-hero-slider', {
		loop: true,
		slidesPerView: 1,
		speed: 700,
		navigation: {
			prevEl: '.hero__nav .swiper-btn--prev',
			nextEl: '.hero__nav .swiper-btn--next',
		},
	});
}

if (document.querySelector('.js-advantages-slider')) {
	const swiperAdvantages = new Swiper('.js-advantages-slider', {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.advantages__pagination',
			type: 'bullets'
		},
		navigation: {
			prevEl: '.advantages__nav .swiper-btn--prev',
			nextEl: '.advantages__nav .swiper-btn--next',
		},
	});
}

if (document.querySelector('.js-leasing-slider')) {
	const swiperLeasing = new Swiper('.js-leasing-slider', {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
		pagination: {
			el: '.leasing__nav-extended .nav-extended__pagi',
			clickable: true,
			bulletActiveClass: 'nav-extended__fraction-active',
			bulletClass: 'nav-extended__fraction',
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1).toString().padStart(2, '0') + "</span>";
			}
		},
		navigation: {
			prevEl: '.leasing__nav-extended .swiper-btn--prev',
			nextEl: '.leasing__nav-extended .swiper-btn--next'
		},
	});
}

if (document.querySelector('.js-news-slider')) {
	const swiperNews = new Swiper('.js-news-slider', {
		slidesPerView: 1,
		pagination: {
			el: '.news__nav-extended .nav-extended__pagi',
			clickable: true,
			bulletActiveClass: 'nav-extended__fraction-active',
			bulletClass: 'nav-extended__fraction',
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1).toString().padStart(2, '0') + "</span>";
			}
		},
		navigation: {
			prevEl: '.news__nav-extended .swiper-btn--prev',
			nextEl: '.news__nav-extended .swiper-btn--next'
		},
		breakpoints: {
			700: {
				slidesPerView: 2,
				spaceBetween: 24
			},
			1280: {
          slidesPerView: 3,
          spaceBetween: 30
			}
		}
	});
}