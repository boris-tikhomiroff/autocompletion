<?php
require"./Database.php";

class PhotographyModel {
    public function __construct()
    {
        $this->db = Database::getPDO();
    }

    public function find($id){
        $query = $this->db->prepare('SELECT * FROM photography where id= :id');
        $query->execute(['id' => $id]);
        $result = $query->fetch(MYSQLI_ASSOC);
        return $result;
    }

    public function findAll(){
        $query = $this->db->prepare('SELECT * FROM photography');
        $query->execute();
        $result = $query->fetchAll();
        return $result;
    }
}