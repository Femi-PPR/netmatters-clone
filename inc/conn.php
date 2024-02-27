<?php
require_once realpath("../vendor/autoload.php");
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("../");
$dotenv->load();

try {
    $db = new PDO("mysql:host=" . $_ENV["DB_HOST"] . ";dbname=" . $_ENV["DB_NAME"], $_ENV["DB_USER_NAME"], $_ENV["DB_PASSWORD"]);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e->getMessage();
    die();
}