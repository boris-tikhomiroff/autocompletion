<?php
require_once "./Database.php";
require_once "./SynthesizerModel.php";

class SynthesizerController {

    public static function getAllSynthesizer()
    {
        $model = new SynthesizerModel();
        $getAll = $model->findAll();
    }

    public static function getSynthesizer($id)
    {
        $model = new SynthesizerModel();
        $getOne = $model->find($id);
    }
}