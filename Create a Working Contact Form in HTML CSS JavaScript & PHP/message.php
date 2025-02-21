<?php
// let's get all form values
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];   
$phone = $_POST['phone'];
$website = $_POST['website']; // website field is not used now

if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "Hj7lH@example.com"; // enter your email here
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage:\n$message";
        if(mail($receiver, $subject, $body)){
            echo "your message has been sent successfully!";
        }else{
                echo "sorry, failed to send your message!";
            }
        }

}else{
        echo "EMail and Password fields are required";
} 

?>