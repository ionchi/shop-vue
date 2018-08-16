<?php
  $configs = include('../config.php');

  $data = json_decode(file_get_contents("php://input"));

  $name = $data->name;
  $telno = $data->phone;
  $address = $data->address;
  $unit = $data->unit;
  $block = $data->block;
  $interphone = $data->interphone;
  $info = $data->info;
  $payment = $data->payment;
  $email = $data->email;
  $cartProducts = $data->cartProducts;
  $cart_shipping = $data->shipping;
  $cart_subtotal = $data->subtotal;
  $cart_total = $data->total;
  $email_to = $configs->email_to;
/*

  $db_host = $configs->host;
  $db_user = $configs->username;
  $db_pass = $configs->pass;
  $db_database = $configs->database;

//DB

$con = mysql_connect($db_host,$db_user,$db_pass);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
}
mysql_select_db($db_database, $con);

$sql="INSERT INTO orders (Nume, Address, Telefon, Email, ProductOneName, ProductOnePrice, ProductOneQty, ProductTwoName, ProductTwoPrice, ProductTwoQty, ProductThreeName, ProductThreePrice, ProductThreeQty, CartSubtotal, CartShipping, CartTotal)
VALUES
('$_POST[Nume]','$_POST[Address]','$_POST[Telefon]','$_POST[Email]','$_POST[ProductOneName]','$_POST[ProductOnePrice]','$_POST[ProductOneQty]','$_POST[ProductTwoName]','$_POST[ProductTwoPrice]','$_POST[ProductTwoQty]','$_POST[ProductThreeName]','$_POST[ProductThreePrice]','$_POST[ProductThreeQty]','$_POST[CartSubtotal]','$_POST[CartShipping]','$_POST[CartTotal]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }

// Email Submit

  $name = @trim(stripslashes($_POST['Nume']));
  $address = @trim(stripslashes($_POST['Address']));
  $telno = @trim(stripslashes($_POST['Telefon']));
  $email = @trim(stripslashes($_POST['Email']));
  $product_one_name = @trim(stripslashes($_POST['ProductOneName']));
  $product_one_price = @trim(stripslashes($_POST['ProductOnePrice']));
  $product_one_qty = @trim(stripslashes($_POST['ProductOneQty']));
  $product_two_name = @trim(stripslashes($_POST['ProductTwoName']));
  $product_two_price = @trim(stripslashes($_POST['ProductTwoPrice']));
  $product_two_qty = @trim(stripslashes($_POST['ProductTwoQty']));
  $product_three_name = @trim(stripslashes($_POST['ProductThreeName']));
  $product_three_price = @trim(stripslashes($_POST['ProductThreePrice']));
  $product_three_qty = @trim(stripslashes($_POST['ProductThreeQty']));
  $cart_subtotal = @trim(stripslashes($_POST['CartSubtotal']));
  $cart_shipping = @trim(stripslashes($_POST['CartShipping']));
  $cart_total = @trim(stripslashes($_POST['CartTotal']));
*/

  $email_from = $email;

  $cartResult = array();

  foreach ($cartProducts as $value) {
      $cartResult[] = $value->title;
      $cartResult[] = $value->price;
      $cartResult[] = $value->quantity;
  }

  $message = 'Nume: ' . $name . "\n\n" .'Telefon: ' . $telno . "\n\n" .'Adresa: ' . $address . "\n\n" .'Bloc: ' . $block . "\n\n" .'Scara: ' . $unit . "\n\n" .'Interfon: ' . $interphone . "\n\n" .'Info supl: ' . $info . "\n\n" .'Plata: ' . $payment . "\n\n" . 'E-mail: ' . $email . "\n\n" . 'Cart: ' . print_r( $cartResult, true ) . "\n\n" . 'Total: ' . $cart_total;

  $success = @mail($email_to, "[comanda noua]".$email, $message);

  $noreply = @mail($email_from, "[dryco.md] | Mulțumim pentru comanda!", "Comanda d-stra a fost plasata cu succes, in curînd, un reprezentant al companiei dryco.md va lua legătura cu d-stră. Suma spre plata:".$cart_total);

?>
