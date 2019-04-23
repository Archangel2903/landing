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
});