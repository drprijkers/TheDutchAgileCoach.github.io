<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];
$from = 'From: CV1 site';
$to = 'drprijkers@me.com';
$subject = 'Mail about CV';
$human = $_POST['Human'];

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['Submit'] && $human == '4') {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
} else if ($_POST['submit'] && $human != '4') {
    echo '<p>You answered the anti-spam question incorrectly!</p>';
}
?>