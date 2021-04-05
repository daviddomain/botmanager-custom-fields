<?php
// Lets do some work. Dum di dum...
sleep(2);
header('Content-Type: application/json');
echo json_encode($_POST);