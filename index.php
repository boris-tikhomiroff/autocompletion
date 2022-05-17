<?php
// require_once './controllers/PhotographyController.php';
// require_once './controllers/SearchController.php';
// $search = new PhotographyController();
// $all = $search->getAllPhotographies();
// var_dump($all);

session_start();
$_SESSION["search"] = @$_POST['search'];
// var_dump($_SESSION["search"]);

if(isset($_POST['submit'])){
    header('location: ./recherche.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="./src/js/index.js"></script>
    <link rel="stylesheet" href="./src/styles/main.css">
</head>
<body class="page" data-theme="">
    
    <header>
        <a href="index.php">G</a>
        <div class="toggle">
            <div class="toggle__mode">(MODE)</div>
            <div class="toggle__circle"></div>
        </div>
    </header>
    <main>
        <h1>Home</h1>
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
    </main>
    <?php require_once './utils/footer.php'?>
</body>
</html>