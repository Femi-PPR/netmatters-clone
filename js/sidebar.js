//---------------------------- Sidebar ----------------------------------
const $contentDiv = $(".content");

$contentDiv.on("click", (event) => {
    const $target = $(event.target);
    const isSidebarActive = $contentDiv.hasClass("sidebar-active");
    const burgerBtnClicked =
        $target.hasClass("btn-hamburger") ||
        $target.parents(".btn-hamburger").length === 1;

    if (isSidebarActive || burgerBtnClicked) {
        $contentDiv.toggleClass("sidebar-active");
        $stickyHeader.toggleClass("sidebar-active");
        $(".hamburger-inner").toggleClass("sidebar-active");
    }
});
