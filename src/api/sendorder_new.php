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
  $info = $data->info;
  $payment = $data->payment;
  $email = $data->email;
  $cartProducts = $data->cartProducts;
  $cart_shipping = $data->shipping;
  $cart_subtotal = $data->subtotal;
  $cart_total = $data->total;
  $email_to = $configs->email_to;
  $floor = $data->floor;

  $headers = 'From: Dryco-Shop SRL <'.$email_to.'>';

// DB

  $db_host = $configs->host;
  $db_user = $configs->username;
  $db_pass = $configs->pass;
  $db_name = $configs->database;

  $conn = new mysqli($db_host,$db_user,$db_pass, $db_name);

  if ($conn->connect_error)
  {
    die('Could not connect: ' . $conn->connect_error);
  }

  $sqlInsert = 
  "INSERT IGNORE INTO clients(nume, prenume, telefon, email)
   VALUES ('$firstname', '$lastname', '$telno', '$email');
   INSERT INTO adresses(street, building_code, floor_nr, unit, interphone_code)
   VALUES ('$address', '$block', '$floor', '$unit', '$interphone');
   INSERT INTO clients_addresses(client_id, address_id)
   VALUES ((SELECT id FROM clients WHERE telefon = '$telno') ,LAST_INSERT_ID());
   INSERT INTO orders_new(client_id, total_cost, shipping_cost, payment_method, info)
   VALUES ((SELECT id FROM clients WHERE telefon = '$telno') , $cart_total, $cart_shipping , '$payment', '$info');
   SET @orderId = LAST_INSERT_ID();
   INSERT INTO order_products(order_id, product_id, quantity, price) VALUES ";

  foreach ($cartProducts as $value) 
  {
    $product = $value->title;
    $product_qty = $value->quantity;
    $product_price = $value->price;
      
    $lastChar = ',';

    if($value == end($cartProducts))
    {
      $lastChar = ';';
    }

    $sqlInsert .= "(@orderId, (SELECT id FROM products WHERE name = '$product') ,$product_qty, $product_price)" . $lastChar;
  }
  
  error_log("SQL Query : " . $sqlInsert);

  if ($conn->multi_query($sqlInsert) === TRUE)
  {
    error_log( "New record created successfully");
  }
  else {
    error_log("Error: " . $sqlInsert . $conn->error);
}


  $conn->close();
  
  $email_from = $email;

  $cartResult = array();

    foreach ($cartProducts as $value) {
        $cartResult[] = $value->title;
        $cartResult[] = $value->price;
        $cartResult[] = $value->quantity;
    }

    $message = 'Nume : ' . $firstname . " " . $lastname . "\n\n" .'Telefon: ' . $telno . "\n\n" .'Adresa: ' . $address . "\n\n" .'Bloc: ' . $block . "\n\n" .'Scara: ' . $unit . "\n\n" .'Interfon: ' . $interphone . "\n\n" .'Info supl: ' . $info . "\n\n" .'Plata: ' . $payment . "\n\n" . 'E-mail: ' . $email . "\n\n" . 'Cart: ' . print_r( $cartResult, true ) . "\n\n" . 'Total: ' . $cart_total;

    $success = @mail($email_to, "[comanda noua]\n" . $email, $message, $headers);

    $noreply = @mail($email_from, "[dryco.md] | Mulțumim pentru comandă!", "Comanda a fost plasată cu succes. În curând, un reprezentant al companiei dryco.md va lua legătura cu dumneavoastră.\n\nSuma spre plată :".$cart_total." (lei)", $headers);

?>
