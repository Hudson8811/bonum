jQuery(function() {
	/*if (document.querySelector('.photogalary__swiper')) {
		const swiperTeamAboutPage = new Swiper('.photogalary__swiper', {
			slidesPerView: 'auto',
			navigation: {
				prevEl: '.photogalary__swiper .swiper-btn--prev',
				nextEl: '.photogalary__swiper .swiper-btn--next'
			},
		});
	}*/



	$('.photogalary__swiper').each(function(){
		var sliderGal=$(this);
		var wrap=sliderGal.closest('.photogalary__swiper-container');


		const swiperTeamAboutPage = new Swiper(sliderGal[0], {
			slidesPerView: 'auto',
			navigation: {
				prevEl: wrap.find('.swiper-btn--prev')[0],
				nextEl: wrap.find('.swiper-btn--next')[0]
			},
		});
	});



	if (document.querySelector('.journal-about-page__swiper-pagination')) {
		var swiperJournalAbout2 = new Swiper(".journal-about-page__swiper-pagination", {
			spaceBetween: 10,
			slidesPerView: 4,
			watchSlidesProgress: true,
		});
	}
	if (document.querySelector('.journal-about-page__swiper')) {
		var swiperJournalAbout1 = new Swiper(".journal-about-page__swiper", {
			direction: "horizontal",
			slidesPerView: "1",
			navigation: {
				prevEl: '.journal-about-page .swiper-btn--prev',
				nextEl: '.journal-about-page .swiper-btn--next'
			},
			breakpoints: {
				769: {
					direction: "vertical",
					slidesPerView: "auto",
				},
			},
			thumbs: {
				swiper: swiperJournalAbout2,
		},
		});
	}


	var swiper1 = new Swiper(".history-about-page__swiper-pagination", {
		slidesPerView: 5,
		watchSlidesProgress: true,
		breakpoints: {
			600: {
				slidesPerView: 9,
			},
		},
	});
	var swiper2 = new Swiper(".history-about-page__swiper", {
		initialSlide : 1,
		navigation: {
			nextEl: ".history-about-page__swiper .swiper-btn--next",
			prevEl: ".history-about-page__swiper .swiper-btn--prev",
		},
		thumbs: {
			swiper: swiper1,
		},
		pagination: {
			el: ".history-about-page__swiper-pagination-progress",
			type: "progressbar",
		},
		spaceBetween: 0,
		breakpoints: {
			768: {
				spaceBetween: 30,
			},
		},
	});

	var swiper1 = new Swiper(".blogs-header__swiper", {
		slidesPerView: 'auto',
	});

	$(document).ready(function() {
		$('.contact-us-sidebar__link').click(function(event) {
			$(this).toggleClass('js-active').next().slideToggle(300);
		});
	});

	Fancybox.bind('.my-fancy-video', {
		type: "video"
	});
	var blockVacancyCards = new Swiper(".block-vacancy-cards", {
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiperVacancy = new Swiper(".block-vacancy__swiper", {
		initialSlide : 0,
		navigation: {
			nextEl: ".block-vacancy__swiper .swiper-btn--next",
			prevEl: ".block-vacancy__swiper .swiper-btn--prev",
		},
		thumbs: {
			swiper: blockVacancyCards,
		},
	});
	$("#localities-centers__select").select2({
		placeholder: "Выберите населенный пункт",
		allowClear: true
	});
	$(function() {
		$('.switcher-buttons span').click(function() {
			$('.switcher-buttons span').removeClass('js-active');
			$(this).addClass('js-active');
		});
		$('.switcher-buttons #switcher-buttons-map').click(function() {
			$('#switcher-content-map').slideDown();
			$('#switcher-content-list').slideUp();
		});
		$('.switcher-buttons #switcher-buttons-list').click(function() {
			$('#switcher-content-list').slideDown();
			$('#switcher-content-map').slideUp();
		});
	});


	$('.js-mob-show-all-prop-lists').on('click',function(e){
		e.preventDefault();
		$('.property-list-new__hidemob').slideDown(500);
		$(this).fadeOut(300);
	});
});