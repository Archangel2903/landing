import 'jquery';
import 'jquery-migrate';
import 'bootstrap';
import '../scss/main.scss';

$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});

let a = "Hello world";
console.log(a);