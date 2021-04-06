<?php
// Lets do some work. Dum di dum...
sleep(2);
header('Content-Type: application/json');
// Get JSON Request Data
//$input = json_decode(file_get_contents('php://input'), true);
echo json_encode($_POST);
