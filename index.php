<?php
require_once './controllers/PhotographyController.php';
$search = new PhotographyController();
$all = $search->getAllPhotographies();
var_dump($all);

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
<body>
    <header>
        <p>Header</p>
    </header>
    <main>
    <form action="" method="POST">
        <label for="">Search</label>
        <input type="text" placeholder="Search">
        <input type="submit" value="Search">
    </form>
    </main>
    <?php require_once './utils/footer.php'?>
</body>
</html>