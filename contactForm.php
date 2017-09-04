<?php

$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];
$from = 'From: CV1 site';
$to = 'drprijkers@gmail.com';
$subject = 'Mail about CV';
$human = $_POST['Human'];

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['submit'] && $human == '4') {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}

else if ($_POST['submit'] && $human != '4') {
    echo '<p>You answered the anti-spam question incorrectly!</p>';

}


if (isset($_POST['Name'])) {
    $name = $_POST['Name'];
}

if (isset($_POST['Email'])) {
    $email = $_POST['Email'];
}

if (isset($_POST['Message'])) {
    $message = $_POST['Message'];
}

if (isset($_POST['Human'])) {
    $human = $_POST['Human'];
    }

if (isset($_POST['submit'])) {
    $submit = $_POST['submit'];
    }

if (isset($_POST['description'])) {
    $description = $_POST['description'];
    }

?>