<?php
include "alerts.php";
if (!isset($alertMsgs))
    $alertMsgs = [["type" => "success", "msg" => "Success"]];
?>

<div id="message-area">
    <?php
    foreach ($alertMsgs as $alertMsg) {
        echo dispAlert($alertMsg["type"], $alertMsg["msg"]);
    }

    ?>
</div>