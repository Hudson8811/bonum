import $, { event, type } from "jquery";

$(document).ready(function (){
    
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
};

if(document.querySelector('.gallery')) {
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
};