<?php

require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';

session_start();
var_dump($_SESSION);


$search = new PhotographyController();
$elements = $search->searchbar($_SESSION['search']);
// // $elementId = $element->id;
if (isset($_SESSION['search'])){
    unset($_SESSION['search']);
}

var_dump($elements);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
</head>
<body>
    <h1>Hello Recherche</h1>
</body>
</html>