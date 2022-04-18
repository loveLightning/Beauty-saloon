<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];

	$to = "yevgeniy.zaytsev.9797@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n";	
	mail($to, $subject, $msg, "From: $to ");

?>


