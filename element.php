<?php
require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';
$search = new PhotographyController();
$element = $search->getPhotographiesById($_GET['id']);
$elementId = $element->id;
var_dump($element);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element</title>
</head>
<body>
    <main>
        <article>
            <img src="./src/images/<?= $element->image;?>" alt="" width="500px" height="500px">
            <section>
                <h2><?= $element->titre;?></h2>
                <h2><?= formatNb($elementId);?></h2>
                <h2><?= $element->artiste;?></h2>
                <h2><?= $element->date;?></h2>
            </section>
        </article>
    </main>
</body>
</html>