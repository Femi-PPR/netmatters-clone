<?php
if (!isset($checkboxID)) {
    $checkboxID = "privacy";
}

if (!isset($checked))
    $checked = false;

?>

<label class="checkbox-label" for="<?= $checkboxID ?>">
    <span class="checkbox-border">
        <input type="checkbox" name="<?= $checkboxID ?>" class="checkbox-privacy" id="<?= $checkboxID ?>" <?= $checked ? "checked" : "" ?>>
        <i class="mdi-checked"></i>
    </span>
    <strong class="checkbox-text">
        Please tick this box if you wish to receive marketing information from us. Please
        see our <a href="#" class="privacy-policy">Privacy Policy</a> for more information
        on how we keep your data safe.
    </strong>
</label>