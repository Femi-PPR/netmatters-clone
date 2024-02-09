$(".btn-accept").on("click", (event) => {
    $(".cookie-wrapper").hide();
});

$(".btn-cookie").on("click", (event) => {
    console.log("IS this on?");
    $(".cookie-wrapper").show();
});

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

const $stickyHeader = $('<div class="header-sticky"></div>').append(
    $(".header-main").clone(true)
);
let scrollStart = NaN;

function showHideHeader(isSrcollDirectionDown, scrollTop) {
    if (scrollTop > 110) {
        if (isSrcollDirectionDown) {
            $(".content").prepend($stickyHeader.animate({ top: 0 }, 250));
        } else {
            $stickyHeader.animate({ top: "-100%" }, 250, () => {
                $stickyHeader.remove();
            });
        }
    } else if (scrollTop === 0) {
        $stickyHeader.remove();
    }
}

$(document).on("scroll", (event) => {
    clearTimeout(window.scrollEndTimer);
    window.scrollEndTimer = setTimeout(() => {
        console.log(`end: ${$(this).scrollTop()}`);
        showHideHeader(scrollStart > $(this).scrollTop(), $(this).scrollTop());
        // console.log(
        //     `scrolled ${scrollStart < $(this).scrollTop() ? "up" : "down"}`
        // );
        scrollStart = NaN;
    }, 100);
    if (Number.isNaN(scrollStart)) {
        scrollStart = $(this).scrollTop();
        console.log($(this).scrollTop());
    }
    console.log("tehe");
});

// document.addEventListener("scrollend", () => {
//     console.log(`end: ${$(this).scrollTop()}`);
//     console.log(
//         `scrolled ${scrollStart < $(this).scrollTop() ? "up" : "down"}`
//     );
//     scrollStart = NaN;
//     window.scrollEndTimer =
// });
