<?php

class DbConnect{
    private $conn;
    function __construct(){
    }

    function connect(){
        require "Config.php";
        $this->conn = new mysqli($db_host, $db_username, $db_password, $db_name);
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        return $this->conn;
    }
}
?>
