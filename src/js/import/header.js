
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
	const catalogBtn = $('.header__catalog .catalog__btn-text, .header__catalog .catalog__btn-svg');
	const toggleBtn = $('.header-m__toggle');
	let headerHeight = header.outerHeight();
	let scroll = $(window).scrollTop();
	let lengthScrolled = 0;

	$('body').css('padding-top', headerHeight + 'px');

	$(window).on('resize',function(){
		headerHeight = header.outerHeight();
		$('body').css('padding-top', headerHeight + 'px');
        if ($('.side-bar').length > 0){
            $('.side-bar').css('top', (headerHeight + 20) + 'px');
        }
	});

    if ($('.side-bar').length > 0){
        $('.side-bar').css('top', (headerHeight + 20) + 'px');
    }

	megaMenu.css('height', `calc(100vh - ${headerHeight}px`);
	megaMenu.find('.mega-menu__wrapper').css('min-height', `calc(100vh - ${headerHeight}px`);



	$('.js-header-m__link-btn').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (window.matchMedia('(max-width: 699px)').matches) {
			$(this).parent().parent().toggleClass('expand');
			$(this).parent().parent().find('ul').slideToggle(300);
		}
	});

/*
	toggleBtn.click(function (e) {

		if (window.matchMedia('(max-width: 699px)').matches) {
			$(this).toggleClass('expand');
			$(this).find('ul').slideToggle(300);
		}
	});
*/

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

	catalogBtn.on('click', function (event) {
		event.preventDefault();
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

	/*
	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();

		if (scroll < headerHeight) {
			header.removeAttr('style');
		} else if (scroll < lengthScrolled) {
			header.removeAttr('style');
		} else {
			header.css({'transform': 'translateY(' + -headerHeight + 'px)'});
		}
		lengthScrolled = scroll;
	});
	*/
});