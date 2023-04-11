import $, {event, type} from "jquery";

$(document).ready(function () {
	const burger = $('.header__burger');
	const closeMenu = $('.mega-menu__close');
	const header = $('.header');
	const megaMenu = $('.mega-menu');
	const catalogBtn = $('.header__catalog');
	let headerHeight = header.outerHeight();
	let scroll = $(window).scrollTop();
	let lengthScrolled = 0;

	$('body').css('padding-top', headerHeight + 'px');
	megaMenu.css('height', `calc(100vh - ${headerHeight}px`);
	megaMenu.find('.mega-menu__wrapper').css('min-height', `calc(100vh - ${headerHeight}px`);

	/*burger.click(function () {
		if (!header.hasClass('open')) {
			header.addClass('open');
			$('body').addClass('no-scroll');
		}
	});*/

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