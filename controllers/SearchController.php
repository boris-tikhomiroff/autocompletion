<?php
require_once "./model/Model.php";

$content = trim(file_get_contents("php://input"));

echo json_encode($content);