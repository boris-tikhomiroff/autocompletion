<?php
// require_once './controllers/PhotographyController.php';
// require_once './controllers/SearchController.php';
// $search = new PhotographyController();
// $all = $search->getAllPhotographies();
// var_dump($all);

session_start();
$_SESSION["search"] = @$_POST['search'];
// var_dump($_SESSION["search"]);

if (isset($_POST['submit'])) {
    header('location: ./recherche.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="./src/js/index.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"></script>
    <script src="./src/js/barba.js"></script>
    <link rel="stylesheet" href="./src/styles/main.css"> -->
    <?php require_once './utils/meta.php' ?>
</head>

<body class="page" data-theme="">
    <div class="page-wrapper">

        <?php require_once './utils/header.php' ?>
        <?php require_once './utils/darkMode.php' ?>

        <main data-barba="wrapper" data-barba-namespace="home">
            <article class="home" data-barba="container">
                <h1 class="flyOver">Home</h1>

                <div class="grid">
                    <div class="grid__img"></div>
                </div>
            </article>
        </main>
        <?php require_once './utils/footer.php' ?>

        <!--------------------- CURSOR --------------------->
        <span class="cursor"></span>
    </div>
    <!--------------------- LOADER --------------------->
    <!-- <div class="loader">
        <h1><span>G</span>ilbert Garcin Tribute</h1>
    </div> -->

    <script src="./src/js/barba.js"></script>
    <script src="./src/js/barba-prefetch.js"></script>
    <script src="./src/js/gsap.js"></script>
    <script src="./src/js/barba-scripts.js"></script>

</body>

</html>