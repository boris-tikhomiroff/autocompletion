<?php
// require_once './controllers/PhotographyController.php';
// require_once './controllers/SearchController.php';
// $search = new PhotographyController();
// $all = $search->getAllPhotographies();
// var_dump($all);

session_start();
$_SESSION["search"] = @$_POST['search'];

// if (isset($_POST['submit'])) {
//     header('location: ./recherche.php');
// }

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


		<main data-barba="wrapper" data-barba-namespace="home">

			<article class="home" data-barba="container">

				<div class="grid">
					<div class="grid__img"></div>
				</div>

				<div id="logo-top" class="logo">GILBERT GARCIN</div>
				<div id="logo-bottom" class="logo">GILBERT GARCIN</div>

			</article>
		</main>
		<?php require_once './utils/footer.php' ?>

		<!--------------------- CURSOR --------------------->
		<!-- <span class="cursor"></span> -->

		<!--------------------- CURSOR --------------------->
		<div class="cursor"></div>


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