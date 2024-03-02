const $contactForm = $("#form-contact");
const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/;
const TELE_REGEX = /^(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
const ERROR_COLOUR = "#d64541";
const $requiredFormElems = {
    name: $("#contact-name"),
    email: $("#contact-email"),
    telephone: $("#contact-telephone"),
    msg: $("#contact-msg"),
};

function isNotEmpty(formValue) {
    return formValue !== "";
}

function validPhoneNo(formValue) {
    return TELE_REGEX.test(formValue);
}

function validEmail(formValue) {
    return EMAIL_REGEX.test(formValue);
}

function isValid(name, $formElem) {
    let value = $formElem.val();
    switch (name) {
        case "name":
            return isNotEmpty(value);
        case "email":
            return validEmail(value);
        case "telephone":
            return validPhoneNo(value);
        case "msg":
            return isNotEmpty(value);
        default:
            return true;
    }
}

$contactForm.on("input", "input, textarea", (event) => {
    let target = event.currentTarget;
    if (isValid(target.name, $(target))) $(target).removeAttr("style");
});

$("#contact-submit").on("click", (event) => {
    let allValid = true;
    Object.entries($requiredFormElems).forEach((entries) => {
        let [name, $formElem] = entries;
        if (!isValid(name, $formElem)) {
            $formElem.css({ borderColor: ERROR_COLOUR });
            allValid = false;
        }
    });
    if (!allValid) event.preventDefault();
});
