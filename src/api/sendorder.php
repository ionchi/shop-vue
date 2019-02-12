<?php
  $configs = include('../config.php');

  $data = json_decode(file_get_contents("php://input"));

  $firstname = $data->name;
  $lastname = $data->surname;
  $telno = $data->phone;
  $address = $data->address;
  $block = $data->block;
  $unit = $data->unit;
  $interphone = $data->interphone;
  $floor = $data->floor;
  $info = $data->info;
  $payment = $data->payment;
  $email = $data->email;
  $cartProducts = $data->cartProducts;
  $cart_shipping = $data->shipping;
  $cart_subtotal = $data->subtotal;
  $cart_total = $data->total;
  $email_to = $configs->email_to;

  $headers = 'From: Dryco-Shop SRL <'.$email_to. '>';

// DB

 $order_id = uniqid();

  $db_host = $configs->host;
  $db_user = $configs->username;
  $db_pass = $configs->pass;
  $db_name = $configs->database;

$con = mysql_connect($db_host,$db_user,$db_pass);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
}

mysql_set_charset('utf8', $con);
$db_database = mysql_select_db($db_name, $con);

  foreach ($cartProducts as $value) {
      $product = $value->title;
      $product_qty = $value->quantity;
      $product_price = $value->price;

      $sql="INSERT INTO orders (orderId, firstname, lastname, phoneNr, address, block, unit, interphone, floor, info, payment, email, product, productQty, productPrice, shipping, total)
      VALUES
      ('$order_id','$firstname','$lastname','$telno','$address','$block','$unit','$interphone','$floor','$info','$payment','$email','$product','$product_qty','$product_price','$cart_shipping','$cart_total')";

      if (!mysql_query($sql,$con))
        {
        die('Error: ' . mysql_error());
        }
  }

  $email_from = $email;

  $cartResult = array();

  foreach ($cartProducts as $value) {
      $cartResult[] = $value->title;
      $cartResult[] = $value->price;
      $cartResult[] = $value->quantity;
  }

  $message = 'Prenume: ' . $firstname . "\n\n" .'Nume: ' . $lastname . "\n\n" .'Telefon: ' . $telno . "\n\n" .'Adresa: ' . $address . "\n\n" .'Bloc: ' . $block . "\n\n" .'Scara: ' . $unit . "\n\n" .'Interfon: ' . $interphone . "\n\n" .'Etaj: ' . $floor . "\n\n" .'Info supl: ' . $info . "\n\n" .'Plata: ' . $payment . "\n\n" . 'E-mail: ' . $email . "\n\n" . 'Livraare: ' . $cart_shipping . "\n\n" . 'Cart: ' . print_r( $cartResult, true ) . "\n\n" . 'Total: ' . $cart_total;

  $success = @mail($email_to, "[comanda noua]".$email, $message, $headers);

  $noreply = @mail($email_from, "[dryco.md] | Mulțumim pentru comanda! | Спасибо за ваш заказ!", "Comanda dumneavoastra a fost plasata cu succes. In curînd, un reprezentant al companiei dryco.md va lua legătura cu dumneavoastra. \n\nЗаказ был успешно размещен, вскоре представитель компании dryco.md свяжется с вами.\n\n Suma spre plata (lei)/Сумма платежа(лей):".$cart_total, $headers);

?>
