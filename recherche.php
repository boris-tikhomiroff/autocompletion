<?php

require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';

session_start();
if (isset($_POST['submit'])) {
    // header('location: ./recherche.php');
    $_SESSION["search"] = @$_POST['search'];
}
// var_dump($_SESSION);


$search = new PhotographyController();
$elements = $search->searchbar($_SESSION['search']);
// if (isset($_SESSION['search'])){
//     unset($_SESSION['search']);
// }

// var_dump($elements);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
    <link rel="stylesheet" href="./src/styles/main.css">
    <script src="./src/js/index.js"></script> -->
    <?php require_once './utils/meta.php' ?>

</head>

<body class="page" data-theme="">
    <div class="page-wrapper">

        <?php require_once './utils/header.php' ?>
        <?php require_once './utils/darkMode.php' ?>

        <main data-barba="wrapper" data-barba-namespace="recherche">
            <article data-barba="container">
                <h1>Hello Recherche</h1>
                <?php foreach ($elements as $picture) : ?>
                    <a href="element.php?id=<?= $picture['id'] ?>">
                        <article>
                            <img src="./src/images/<?= $picture['image'] ?>" alt="" width="200px" height="100px">
                            <h2><?= $picture['titre'] ?></h2>
                        </article>
                    </a>
                <?php endforeach; ?>

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