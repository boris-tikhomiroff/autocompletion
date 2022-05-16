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