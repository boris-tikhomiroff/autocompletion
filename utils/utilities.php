<?php

function formatNb($number){
    if($number < 10){
        return '0' . $number;
    } else {
        return $number;
    }
}

function validData($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function send(){
    if(isset($_POST['submit'])){
        $_SESSION["search"] = @$_POST['search'];
        header('location: ./recherche.php');
    }
}