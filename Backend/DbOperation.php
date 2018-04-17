<?php

class DbOperation{
    private $conn;
    function __construct(){
        require_once "DbConnect.php";
        $db = new DbConnect();
        $this->conn = $db->connect();
    }

    function getUsers($username, $password){
      $sql = "SELECT * FROM USUARIOS WHERE username = ? AND password = ?";
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param("ss", $username, $password);
      $stmt->execute();
      $result = $stmt->get_result();
      return  $result;
    }

    function createUsers($username, $password){
      $sql = "INSERT INTO USUARIOS (username, password) VALUES ( ? , ?)"
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param("ss", $username, $password);
      $stmt->execute();
    }
}

?>
