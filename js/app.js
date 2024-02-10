//---------------------------- Variables ----------------------------------
const $contentDiv = $(".content");

const noScroll = () => {
    $("body").css({ height: "100%", overflow: "hidden" });
};

const reScroll = () => {
    $("body").removeAttr("style");
};

//---------------------------- Cookie Popup ----------------------------------
$(document).ready(() => {
    if (!$("html").hasClass("no-show")) {
        noScroll();
    }
});

$(".btn-accept").on("click", () => {
    document.cookie = "dontShowPopup=true;max-age=604800;";
    $(".cookie-wrapper").hide();
    reScroll();
});

$(".btn-cookie").on("click", () => {
    $(".cookie-wrapper").css({ display: "flex" });
    noScroll();
});

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

//---------------------------- Sticky Header ----------------------------------
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

$(document).on("scroll", () => {
    clearTimeout(window.scrollEndTimer);
    window.scrollEndTimer = setTimeout(() => {
        showHideHeader(scrollStart > $(this).scrollTop(), $(this).scrollTop());
        scrollStart = NaN;
    }, 100);
    if (Number.isNaN(scrollStart)) {
        scrollStart = $(this).scrollTop();
    }
});

//---------------------------- Sidebar ----------------------------------
function showSidebar() {
    $contentDiv
        .addClass("sidebar-active")
        .css({ height: "100%", overflow: "hidden" });
    $stickyHeader.addClass("sidebar-active");
    $(".hamburger-inner").addClass("sidebar-active");
    noScroll();
}

function hideSidebar() {
    $contentDiv.removeClass("sidebar-active").removeAttr("style");
    $stickyHeader.removeClass("sidebar-active");
    $(".hamburger-inner").removeClass("sidebar-active");
    reScroll();
}

$contentDiv.on("click", (event) => {
    const $target = $(event.target);
    const isSidebarActive = $contentDiv.hasClass("sidebar-active");
    const burgerBtnClicked =
        $target.hasClass("btn-hamburger") ||
        $target.parents(".btn-hamburger").length === 1;

    if (!isSidebarActive && burgerBtnClicked) {
        showSidebar();
    } else if (isSidebarActive) {
        hideSidebar();
    }
});
