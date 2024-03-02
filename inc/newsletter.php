<section class="newsletter">
    <div class="container">
        <form class="form-newsletter" id="form-newsletter" method="post" action="#form-newsletter">
            <?php
            $checkboxID = "privacy-newsletter";
            var_dump(function_exists("validFormat"));
            require_once "inc/validate.php";
            $errMsgs = [
                "newletter-name" => [
                    "required" => "The name field is required."
                ],
                "newletter-email" => [
                    "required" => "The email field is required.",
                    "format" => "The email format is invalid."
                ],
            ];


            var_dump($_POST);
            $successMsg = 'Your message has been sent!';
            $alertMsgs = getAlertMsgs($errMsgs, $successMsg);

            if (!isset($_POST[$checkboxID])) {
                $alertMsg = [
                    'type' => 'error',
                    'msg' => 'The marketing preference field is required.'
                ];

                if (count($alertMsgs) > 0 && $alertMsgs[0]['type'] === 'error') {
                    $alertMsgs[] = $alertMsg;
                } else {
                    $alertMsgs = [$alertMsg];
                }
            }

            require "inc/msg-area.php";
            ?>
            <h2>Email Newsletter Sign-Up</h2>
            <div class="inputs-newsletter">
                <div>
                    <label class="required" for="name">Your Name</label><input id="name" name="newletter-name"
                        type="text">
                </div>
                <div>
                    <label class="required" for="email">Your Email</label><input id="email" name="newletter-email"
                        type="text">
                </div>
            </div>
            <?php

            require 'privacy.php';
            ?>
            <button class="btn">Subscribe</button>
        </form>
    </div>
</section>