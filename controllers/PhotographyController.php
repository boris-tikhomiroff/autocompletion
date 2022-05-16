<?php
require_once "./model/Model.php";

class PhotographyController {
    
    public function __construct()
    {
        $this->model = new Model();
    }

    public function getAllPhotographies()
    {
        $getAll = $this->model->findAll();
        return $getAll;
    }

    public function getPhotographiesById($id){
        if(isset($_GET['id'])){
            $getById = $this->model->findById($id);
            return $getById;
        }
    }

    public function searchbar($keywords)
    {
        $word = trim($keywords);

        $searched = $this->model->search($word);

        return $searched;
        
    }
}