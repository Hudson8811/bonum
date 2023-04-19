

if (document.querySelector('.team-about-page__swiper')) {
	const swiperTeamAboutPage = new Swiper('.team-about-page__swiper', {
		slidesPerView: 'auto',
		navigation: {
			prevEl: '.team-about-page__swiper .swiper-btn--prev',
			nextEl: '.team-about-page__swiper .swiper-btn--next'
		},
	});
}


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



Fancybox.bind('.my-fancy-video', {
	type: "video"
});