//---------------------------- Sliders ----------------------------------
const carouselSlickOption = {
    arrows: false,
    adaptiveHeight: true,
    dots: true,
    dotsClass: "dots",
    customPaging: () => {
        return '<span class="dot"></span>';
    },
    autoplay: true,
};

$(".carousel").slick(carouselSlickOption);

const owlSlickOption = {
    arrows: false,
    autoplay: true,
    accessbilty: false,
    draggable: false,
    pauseOnFocus: true,
    swipe: false,
    touchMove: false,
    variableWidth: true,
};

$(".owl-stage").slick(owlSlickOption);
