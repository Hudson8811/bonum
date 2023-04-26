import $, { event, type } from "jquery";

$(document).ready(function () {
	var video = $('.company__video');

	if (video && video.length > 0) {
		Fancybox.bind('.company__video', {
			type: "video"
		});
	}

	/* Show all brands */
	var brandsBtn = $('.brands__button');

	if (brandsBtn && brandsBtn.length > 0) {
		brandsBtn.on('click', function () {
			$(this).hide();
			$(this).prev().find('.brands__item').show();
		});
	}

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
// if (document.querySelector('.slider-top')) {

// 	const swiperTop = new Swiper('.slider-top__top', {
// 		direction: 'horizontal',
// 		loop: true,
// 		centeredSlides: true,
// 		slidesPerView: 1,
// 		speed: 700,
// 		spaceBetween: -300,
// 		navigation: {
// 			prevEl: '.slider-top__prev',
// 			nextEl: '.slider-top__next',
// 		},
// 	});
// 	const swiperBottom = new Swiper('.slider-info__slider', {
// 		direction: 'horizontal',
// 		loop: true,
// 		slidesPerView: 1,
// 		speed: 700,
// 		effect: "fade",
// 	});

// 	swiperTop.controller.control = swiperBottom;
// 	swiperBottom.controller.control = swiperTop;
// }

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
		spaceBetween: 5,
		direction: 'vertical',
		pagination: {
			el: '.advantages__pagination',
			type: 'bullets'
		},
		navigation: {
			prevEl: '.advantages__nav .swiper-btn--prev',
			nextEl: '.advantages__nav .swiper-btn--next',
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		}
	});

	const skipBtn = $('.advantages__skip');

	if (skipBtn) {
		skipBtn.on('click', function () {
			swiperAdvantages.slideNext();
		});
	}
}

if (document.querySelector('.js-leasing-slider')) {
	const swiperLeasing = new Swiper('.js-leasing-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		slidesPerGroup: 1,
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
			prevEl: '.leasing__top .swiper-btn--prev',
			nextEl: '.leasing__top .swiper-btn--next'
		},
		breakpoints: {
			700: {
				slidesPerView: 2,
				spaceBetween: 24,
				slidesPerGroup: 2,
				navigation: {
					prevEl: '.leasing__slider .swiper-btn--prev',
					nextEl: '.leasing__slider .swiper-btn--next'
				}
			}
		}
	});
}

if (document.querySelector('.js-news-slider')) {
	const swiperNews = new Swiper('.js-news-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
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
			prevEl: '.news__top-mobile .swiper-btn--prev',
			nextEl: '.news__top-mobile .swiper-btn--next'
		},
		breakpoints: {
			700: {
				slidesPerView: 2,
				spaceBetween: 24,
				navigation: {
					prevEl: '.news__slider .swiper-btn--prev',
					nextEl: '.news__slider .swiper-btn--next'
				}
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});
}






var tabNavsMat = document.querySelectorAll(".options--tabControl");
var tabPanesMat = document.querySelectorAll(".options--tabs-content");
if (tabNavsMat !== null & tabPanesMat !== null) {
	tabClick()
}
function tabClick() {
	for (var i = 0; i < tabNavsMat.length; i++) {
		tabNavsMat[i].addEventListener("click", function (e) {
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute("data-tab");

			for (var j = 0; j < tabNavsMat.length; j++) {
				var contentAttr = tabPanesMat[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabNavsMat[j].classList.add("active");
					tabPanesMat[j].classList.add("active");
				} else {
					tabNavsMat[j].classList.remove("active");
					tabPanesMat[j].classList.remove("active");
				}
			};
		});
	}
}


const accordions = document.querySelectorAll(".accordion");
if (accordions !== null) {
	const openAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
		content.style.maxHeight = content.scrollHeight + "px";
	};



	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");
		content.style.maxHeight = null;
	};

	accordions.forEach((accordion) => {
		const intro = accordion.querySelector(".accordion__intro");
		const content = accordion.querySelector(".accordion__content");

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion);
			} else {
				accordions.forEach((accordion) => closeAccordion(accordion));
				openAccordion(accordion);
			}
		};
	});
}

const catalogTabs = $('.catalog-block__tabs-item');
const contentItems = $('.catalog-block__content-item');

if (catalogTabs && catalogTabs.length > 0) {
	catalogTabs.on('mouseenter', function () {
		if (!$(this).hasClass('active')) {
			catalogTabs.removeClass('active');
			$(this).addClass('active');
			contentItems.removeClass('show').eq($(this).index()).addClass('show');
		}
	});
}
