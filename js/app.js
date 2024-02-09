$contentDiv = $(".content");

$(document).ready(() => {
    if (!$("html").hasClass("no-show")) {
        $("body").css({ height: "100%", overflow: "hidden" });
    }
});

$(".btn-accept").on("click", (event) => {
    document.cookie = "dontShowPopup=true;max-age=604800;";
    $(".cookie-wrapper").hide();
    $("body").removeAttr("style");
});

$(".btn-cookie").on("click", (event) => {
    $(".cookie-wrapper").css({ display: "flex" });
    $("body").css({ height: "100%", overflow: "hidden" });
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
            $contentDiv.prepend($stickyHeader.animate({ top: 0 }, 250));
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
        showHideHeader(scrollStart > $(this).scrollTop(), $(this).scrollTop());
        // console.log(
        //     `scrolled ${scrollStart < $(this).scrollTop() ? "up" : "down"}`
        // );
        scrollStart = NaN;
    }, 100);
    if (Number.isNaN(scrollStart)) {
        scrollStart = $(this).scrollTop();
    }
});

// document.addEventListener("scrollend", () => {
//     console.log(`end: ${$(this).scrollTop()}`);
//     console.log(
//         `scrolled ${scrollStart < $(this).scrollTop() ? "up" : "down"}`
//     );
//     scrollStart = NaN;
//     window.scrollEndTimer =
// });

$contentDiv.on("click", (event) => {
    const $target = $(event.target);
    const isSidebarActive = $contentDiv.hasClass("sidebar-active");
    const burgerBtnClicked =
        $target.hasClass("btn-hamburger") ||
        $target.parents(".btn-hamburger").length === 1;

    if (!isSidebarActive && burgerBtnClicked) {
        $contentDiv.addClass("sidebar-active");
        $stickyHeader.addClass("sidebar-active");
        $(".hamburger-inner").addClass("sidebar-active");
    } else if (isSidebarActive) {
        $contentDiv.removeClass("sidebar-active");
        $stickyHeader.removeClass("sidebar-active");
        $(".hamburger-inner").removeClass("sidebar-active");
    }
});

// $(".btn-hamburger").on("click", () => {
//     showSidebar();
// });

function showSidebar() {
    $contentDiv.addClass("sidebar-active");
}
