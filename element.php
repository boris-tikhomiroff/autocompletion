<?php

if ($_GET['id'] == null) {
    header('location: index.php');
}
if (isset($_POST['submit'])) {
    $_SESSION["search"] = @$_POST['search'];
    header('location: ./recherche.php');
}
require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';
$search = new PhotographyController();
$element = $search->getPhotographiesById($_GET['id']);
$elementId = $element->id;
// var_dump($element);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element</title>
    <link rel="stylesheet" href="./src/styles/main.css">
    <script src="./src/js/index.js"></script> -->

    <?php require_once './utils/meta.php' ?>

</head>

<body class="page" data-theme="">
    <div class="page-wrapper">


        <?php require_once './utils/header.php' ?>
        <?php require_once './utils/darkMode.php' ?>

        <main data-barba="wrapper" data-barba-namespace="element">
            <article data-barba="container">
                <img src="./src/images/<?= $element->image; ?>" alt="" width="500px" height="500px">
                <section>
                    <h2><?= $element->titre; ?></h2>
                    <h2><?= formatNb($elementId); ?></h2>
                    <h2><?= $element->artiste; ?></h2>
                    <h2><?= $element->date; ?></h2>
                </section>
            </article>
        </main>
        <?php require_once './utils/footer.php' ?>

        <!--------------------- CURSOR --------------------->
        <span class="cursor"></span>
    </div>

    <script src="./src/js/barba.js"></script>
    <script src="./src/js/barba-prefetch.js"></script>
    <script src="./src/js/gsap.js"></script>
    <script src="./src/js/barba-scripts.js"></script>
</body>

</html>