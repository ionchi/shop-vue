<?php
  $configs = include('../config.php');

  $data = json_decode(file_get_contents("php://input"));

  $name = $data->name;
  $telno = $data->phone;
  $email = $data->email;
  $subject = $data->topic;
  $message = $data->message;

  $email_from = $email;
  $email_to = $configs->email_to;

  $message = 'Nume: ' . $name . "\n\n" .'Telefon: ' . $telno . "\n\n" . 'E-mail: ' . $email . "\n\n" . 'Subiect: ' . $subject . "\n\n" . 'Mesaj: ' . $message;

  $success = @mail($email_to, "[dryco.md] ".$subject, $message);

  $noreply = @mail($email_from, "[dryco.md] | Mulțumim pentru mesaj! | Спасибо за сообщение!", "În curînd, un reprezentant al companiei dryco.md va lua legătura cu d-stră. \n\nВскоре представитель dryco.md свяжется с вами.");

  echo json_encode($success);
  exit;
?>
