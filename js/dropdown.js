$("#dropdown").click(() => {
    const $dropdownContent = $("#dropdown-content");

    if ($dropdownContent.hasClass("active")) {
        $dropdownContent.slideUp(500);
    } else {
        $dropdownContent.slideDown(500);
    }
    $dropdownContent.toggleClass("active");
});
