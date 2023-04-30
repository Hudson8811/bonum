
$(document).ready(function () {
	const burger = $('.header__burger');
	const closeMenu = $('.mega-menu__close');
	const header = $('.header');
	const mobileMenu = $('.js-mobile-menu');
	const megaMenuMobile = $('.js-mobile-mega-menu');
	const back = $('.header-m__back');
	const closeMobileMenu = $('.header-m__close');
	const megaMenu = $('.js-mega-menu');
	const openMegaMenuBtn = $('.js-mega-menu-link');
	const catalogBtn = $('.header__catalog');
	const toggleBtn = $('.header-m__toggle');
	let headerHeight = header.outerHeight();
	let scroll = $(window).scrollTop();
	let lengthScrolled = 0;

	$('body').css('padding-top', headerHeight + 'px');
	megaMenu.css('height', `calc(100vh - ${headerHeight}px`);
	megaMenu.find('.mega-menu__wrapper').css('min-height', `calc(100vh - ${headerHeight}px`);

	toggleBtn.click(function () {
		if (window.matchMedia('(max-width: 699px)').matches) {
			$(this).toggleClass('expand');
			$(this).find('ul').slideToggle(300);
		}
	});

	burger.click(function () {
		if (!mobileMenu.hasClass('open')) {
			mobileMenu.addClass('open');
			$('body').addClass('no-scroll');
		}
	});

	openMegaMenuBtn.click(function () {
		if (!megaMenuMobile.hasClass('open')) {
			megaMenuMobile.addClass('open');
		}
	});

	closeMobileMenu.click(function () {
		if (mobileMenu.hasClass('open')) {
			mobileMenu.removeClass('open');
			megaMenuMobile.removeClass('open');
			$('body').removeClass('no-scroll');
		}
	});

	back.click(function () {
		if (megaMenuMobile.hasClass('open')) {
			megaMenuMobile.removeClass('open');
		}
	});

	catalogBtn.click(function () {
		if (!megaMenu.hasClass('open')) {
			megaMenu.addClass('open');
			$('body').addClass('no-scroll');
		}
	});

	closeMenu.click(function (e) {
		e.stopPropagation();

		if (megaMenu.hasClass('open')) {
			megaMenu.removeClass('open');
			$('body').removeClass('no-scroll');
		}
	});

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();

		/* Hide on reverse direction */
		if (scroll < headerHeight) {
			header.removeAttr('style');
		} else if (scroll < lengthScrolled) {
			header.removeAttr('style');
		} else {
			header.css({'transform': 'translateY(' + -headerHeight + 'px)'});
		}
		lengthScrolled = scroll;
	});
});