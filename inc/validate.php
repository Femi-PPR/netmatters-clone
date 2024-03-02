<?php
const EMAIL_REGEX = "/^(([^<>()\[\]\.,;:\s@\"]+(.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/";
const TELE_REGEX = "/^(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/";

function validFormat(string $name, string $value): bool
{
    switch ($name) {
        case 'email':
            return preg_match(EMAIL_REGEX, $value);
        case 'telephone':
            return preg_match(TELE_REGEX, $value);
        default:
            return true;
    }
}



function getAlertMsgs(array $errMsgs, string $successMsg): array
{
    $alertMsgs = [];
    if (count($_POST) === 0)
        return $alertMsgs;
    $allValid = true;
    foreach ($errMsgs as $name => $errorMsg) {
        if (isset($_POST[$name])) {
            if (isset($errorMsg["required"]) && $_POST[$name] === "") {
                $alertMsgs[] = ["type" => "error", "msg" => $errorMsg["required"]];
                $allValid = false;
            } elseif (isset($errorMsg["format"]) && !validFormat($name, $_POST[$name])) {
                $alertMsgs[] = ["type" => "error", "msg" => $errorMsg["format"]];
                $allValid = false;
            }
        }
    }
    if ($allValid) {
        $alertMsgs[] = ["type" => "success", "msg" => $successMsg];
    }

    return $alertMsgs;
}