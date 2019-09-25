<?php

$recepient = "otamans123@gmail.com";
$sitename = "DaunShop";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$mail = trim($_POST["mail"]);
$option1 = trim($_POST["option1"]);
$option2 = trim($_POST["option2"]);
$option3 = trim($_POST["option3"]);
$option4 = trim($_POST["option4"]);
$option5 = trim($_POST["option5"]);

$message = "Имя: $name \nТелефон: $phone \nТекст: $text \nПочта: $mail \nВариант: $option1$option2$option3$option4$option5";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");