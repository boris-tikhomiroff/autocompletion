<?php

require_once './controllers/PhotographyController.php';
require_once './utils/utilities.php';

session_start();
if(isset($_POST['submit'])){
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
    <link rel="stylesheet" href="./src/styles/main.css">
    <script src="./src/js/index.js"></script>
</head>
<body>
    <!-- <header>
        <a href="./index.php">G</a>
    <form action="" method="POST" autocomplete="off">
        <label for="">Search</label>
        <input type="text" placeholder="Search" name="search">
        <input type="submit" value="Search" name="submit">
    </form>
    <section class="result">
        <ul>
            Précis
        </ul>
        <hr>
        <ul>
            Contient
        </ul>
    </section>
    </header> -->
    <header>
        <a href="./index.php" class="flyOver">G</a>

        <div class="search">
            <form action="" method="POST" autocomplete="off">
                <label for="">Search</label>
                <input type="text" placeholder="Search" name="search">
                <input type="submit" value="Search" name="submit">
            </form>
            <section class="search__result">
                <ul>
                    Précis
                </ul>
                <hr>
                <ul>
                    Contient
                </ul>
            </section>
        </div>

        <div class="toggle flyOver">
            <div class="toggle__mode">(MODE)</div>
            <div class="toggle__circle"></div>
        </div>
    
    </header>

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