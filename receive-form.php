<?php
// Lets do some work. Dum di dum...
sleep(4);
header('Content-Type: application/json');
echo json_encode($_POST);