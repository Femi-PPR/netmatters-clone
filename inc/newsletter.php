<section class="newsletter">
    <div class="container">
        <form class="form-newsletter" id="form-newsletter" method="post" action="#form-newsletter">
            <?php
            $checkboxID = "privacy-newsletter";
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


            $successMsg = 'You have successfully joined our mailing list';
            $alertMsgs = getAlertMsgs($errMsgs, $successMsg);
            $failed = count($alertMsgs) > 0 && $alertMsgs[0]['type'] === 'error';

            if (!isset($_POST[$checkboxID])) {
                $alertMsg = [
                    'type' => 'error',
                    'msg' => 'The marketing preference field is required.'
                ];

                if ($failed) {
                    $alertMsgs[] = $alertMsg;
                } else {
                    $alertMsgs = [$alertMsg];
                    $failed = true;
                }
            } elseif ($failed) {
                $checked = true;
            }

            require "inc/msg-area.php";
            ?>
            <h2>Email Newsletter Sign-Up</h2>
            <div class="inputs-newsletter">
                <div>
                    <label class="required" for="name">Your Name</label><input id="name"
                        value="<?php echo (isset($_POST["newletter-name"]) && $failed) ? htmlspecialchars($_POST["newletter-name"]) : ""; ?>"
                        name="newletter-name" type="text">
                </div>
                <div>
                    <label class="required" for="email">Your Email</label><input id="email"
                        value="<?php echo (isset($_POST["newletter-email"]) && $failed) ? htmlspecialchars($_POST["newletter-email"]) : ""; ?>"
                        name="newletter-email" type="text">
                </div>
            </div>
            <?php

            require 'privacy.php';
            ?>
            <button class="btn">Subscribe</button>
        </form>
    </div>
</section>