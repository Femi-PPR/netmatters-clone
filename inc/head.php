<?php
if (!isset($title)) {
    $title = "Full Service Digital Agency | Cambridgeshire &amp; Norfolk | Netmatters";
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        document.querySelector("html").className = "js";
        if (document.cookie.split("; ").find((row) => row.startsWith("dontShowPopup"))) {
            document.querySelector("html").className += " no-show";
        }
    </script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="https://www.netmatters.co.uk/assets/images/favicon.ico">
    <title>
        <?= $title ?>
    </title>
</head>