<?php
// Получите данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Обработка данных и PGP-шифрование
$dataToEncrypt = "Имя: $name\nE-mail: $email\nТелефон: $phone\nСообщение: $message";
$encryptedData = encryptData($dataToEncrypt);

// Отправка зашифрованных данных на вашу почту или сервер
mail('mr.spacks@seznam.cz', 'Зашифрованные данные', $encryptedData);

// Функция для PGP-шифрования (подключите библиотеку для PGP)
function encryptData($data) {
    // Ваш код для PGP-шифрования здесь
    // Верните зашифрованные данные
}
?>
