import '../scss/main.scss';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import 'slick-carousel';

$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});

$(function () {
    $('.main-section .slick-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.reviews-message').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.reviews-nav'
    });

    $('.reviews-nav').slick({
        prevArrow: '<button class="slick-prev"><svg><use xlink:href="img/spritemap.svg#sprite-chevron-left"></use></svg></button>',
        nextArrow: '<button class="slick-next"><svg><use xlink:href="img/spritemap.svg#sprite-chevron-right"></use></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.reviews-message',
        dots: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true
    });

    $('.multimedia__button').on('click', function () {
        $(this).fadeOut(350);
        $('.multimedia__video').addClass('visible');
    });

    $('.multimedia__video-close').on('click', function () {
        $('.multimedia__button').fadeIn(350);
        $(this).parent().removeClass('visible');
    });

    $('.main-menu__burger').on('click', function () {
        $(this).toggleClass('active').next().slideToggle(350).toggleClass('opened');

        if ($(this).next().hasClass('opened')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });
});

let e = document.querySelectorAll('img');
for (let i = 0; i < e.length; i++) {
    let data_src = e[i].getAttribute('data-src');
    if (e[i].getAttribute('data-src') !== "") {e[i].setAttribute('src', data_src);}
}
