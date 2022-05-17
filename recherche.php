<?php

require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';

session_start();
// var_dump($_SESSION);


$search = new PhotographyController();
$elements = $search->searchbar($_SESSION['search']);
// if (isset($_SESSION['search'])){
//     unset($_SESSION['search']);
// }

var_dump($elements);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
    <link rel="stylesheet" href="./src/styles/main.css">
</head>
<body>
    <h1>Hello Recherche</h1>

    <!-- <?php for($i = 0; isset($elements[$i]); $i++): ?>
        <?php var_dump($elements[$i]); ?>

    <?php endfor ;?> -->

    <?php foreach($elements as $picture): ?>
        <a href="element.php?id=<?= $picture['id']?>">
            <article>
                <img src="./src/images/<?= $picture['image']?>" alt="" width="200px" height="100px">
                <h2><?= $picture['titre']?></h2>
            </article>
        </a>
    <?php endforeach ;?>


   

</body>
</html>