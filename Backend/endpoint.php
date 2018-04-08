<?php
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);
$conn = new mysqli('localhost', 'root', '1234', 'testApp');
$sql = "SELECT * FROM USUARIOS WHERE username = '".$json_obj->{'username'}."'";
$result = $conn->query($sql);
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp) ;
$conn->close();
?>
