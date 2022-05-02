<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$mensaje = $phone['textarea'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su email es:" . $email . " \r\n";
$mensaje .= "Mensaje" . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el" . date( 'd/m/Y', time());

$para = 'fedesuarez16@gmail.com';
$asunto = 'este mail fue enviado desde flipweb';

mail($para, $asunto, utf8_decode($mensaje),$http_response_header);

header('Location:index.html');
?>
