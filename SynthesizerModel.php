<?php
require"./Database.php";

class SynthesizerModel {
    public function __construct()
    {
        $this->db = Database::getPDO();
    }

    public function find($id){
        $query = $this->db->prepare('SELECT * FROM synthesizer where id= :id');
        $query->execute(['id' => $id]);
        $result = $query->fetch(MYSQLI_ASSOC);
        return $result;
    }

    public function findAll(){
        $query = $this->db->prepare('SELECT * FROM synthesizer');
        $query->execute();
        $result = $query->fetchAll();
        return $result;
    }
}