//---------------------------- Cookie Popup ----------------------------------

$(".btn-accept").on("click", () => {
    document.cookie = "dontShowPopup=true;max-age=604800;SameSite=None;Secure";
    $(".cookie-wrapper").hide();
    $(".btn-chat").css({ display: "flex" });
});

$(".btn-cookie").on("click", () => {
    $(".cookie-wrapper").css({ display: "flex" });
});
