//---------------------------- Sticky Header ----------------------------------
const $contentInnerDiv = $(".content-inner");
const $stickyHeader = $('<div class="header-sticky"></div>').append(
    $(".header-main").clone(true)
);

let scrollStart = NaN;

function showHideHeader(isSrcollDirectionDown, scrollTop) {
    if (scrollTop > 110) {
        if (isSrcollDirectionDown) {
            $contentInnerDiv.prepend($stickyHeader.animate({ top: 0 }, 250));
        } else {
            $stickyHeader.animate({ top: "-100%" }, 250, () => {
                $stickyHeader.remove();
            });
        }
    } else if (scrollTop === 0) {
        $stickyHeader.remove();
    }
}

$contentInnerDiv.on("scroll", () => {
    clearTimeout(window.scrollEndTimer);
    window.scrollEndTimer = setTimeout(() => {
        showHideHeader(
            scrollStart > $contentInnerDiv.scrollTop(),
            $contentInnerDiv.scrollTop()
        );
        scrollStart = NaN;
    }, 100);
    if (Number.isNaN(scrollStart)) {
        scrollStart = $contentInnerDiv.scrollTop();
    }
});
