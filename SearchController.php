<?php
require_once "./model/Model.php";
require_once "./utils/utilities.php";

$content = trim(file_get_contents("php://input"));

$model = new Model();
$search = $model->search($content);
echo json_encode($search);
