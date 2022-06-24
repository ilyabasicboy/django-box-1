import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

$(function () {

//    //Media Breakpoint MD
//    const breakpointMD = window.matchMedia('(min-width: 1025px)');
//
//    //Media Breakpoint XS
//    const breakpointXs = window.matchMedia('(min-width: 768px)');
//
//    //Init Slider
//    function swiperInit() {
//        let swiper = new Swiper(".produce--slider", {
//            slidesPerView: 'auto',
//            speed: 600,
//        });
//    };
//    swiperInit();
//
//    //Init Mobile Slider
//    function swiperMobileInit() {
//        $(".mobile--slider").each(function (index, element) {
//            let swiperMobile;
//            let swiperMobileSlider = $(element);
//            const breakpointChecker = function() {
//                if (breakpointXs.matches === true) {
//                    if (swiperMobile !== undefined) swiperMobile.destroy(true, true);
//                        return;
//                    } else if (breakpointXs.matches === false) {
//                        return swiperMobileSettings();
//                    }
//            };
//            const swiperMobileSettings = function() {
//                swiperMobile = new Swiper (element, {
//                    slidesPerView: 'auto',
//                    speed: 800,
//                });
//            };
//            if (swiperMobile.length > 0) {
//                breakpointXs.addListener(breakpointChecker);
//                breakpointChecker();
//            }
//        });
//    }
//    swiperMobileInit();

});
