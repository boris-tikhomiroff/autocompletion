<?php 

require './model/DBConnection.php';

class Model extends DBConnection{
    
    public function __construct()
    {
        $this->db = DBConnection::getPDO();
    }

    public function findById($id){
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

    public function search($word){
        $query = $this->db->prepare("SELECT * FROM photography WHERE titre LIKE :term ORDER BY titre ASC");
        $query-> execute(['term' => '%'.$word.'%']);
        $result = $query->fetchAll();
        return $result;
    }
}