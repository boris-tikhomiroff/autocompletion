<?php
require_once "./Database.php";
require_once "./PhotographyModel.php";

class PhotographyController {

    public static function getAllPhotographies()
    {
        $model = new PhotographyModel();
        $getAll = $model->findAll();
    }

    public static function getPhotography($id)
    {
        $model = new PhotographyModel();
        $getOne = $model->find($id);
    }
}