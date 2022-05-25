<?php

require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';

session_start();
if (isset($_POST['submit'])) {
    // header('location: ./recherche.php');
    $_SESSION["search"] = @$_POST['search'];
}


$search = new PhotographyController();
$elements = $search->searchbar($_SESSION['search']);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once './utils/meta.php' ?>

</head>

<body class="page" data-theme="">

    <div class="page-wrapper">

        <?php require_once './utils/header.php' ?>
        <?php require_once './utils/darkMode.php' ?>

        <main data-barba="wrapper" data-barba-namespace="recherche">
            <article data-barba="container">
                <div class="container">
                    <?php foreach ($elements as $picture) : ?>
                        <a href="element.php?id=<?= $picture['id'] ?>">
                            <section class="flyOver">
                                <img src="./src/images/<?= $picture['image'] ?>" alt="">
                                <h2><?= $picture['titre'] ?></h2>
                            </section>
                        </a>
                    <?php endforeach; ?>
                </div>
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