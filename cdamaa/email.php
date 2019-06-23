<?php

function getName(){ 
    if ( !empty($_POST['name']) && isset($_POST['name']) ){
       $name = trim($_POST['name']);
       if (is_string($name)){
           return $name;
       }else { return false;}
    }
}

function getEmail(){
    if ( !empty($_POST['email']) && isset($_POST['email'])){
        $email = trim($_POST['email']);
        // Remove all illegal characters from email
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        // Validate e-mail
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $email;
        }else{ return false;} 
    }
}

function getMessage(){ 
        $message = (string) trim($_POST['message']);
        if( strlen($message) > 5 ){
            return $message;
        }else {return false;}
}
  
function getPhone(){
    if ( !empty($_POST['phone']) && isset($_POST['phone']) ){
        $phone = trim($_POST['phone']);
        // Allow +, - and . in phone number
        $filtered_phone_number = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
        $phone_to_check = str_replace("-", "", $filtered_phone_number);
        return $phone_to_check;
    }else {return false;}
}

function getData(){
    $phone = getPhone();
    $name = getName();
    $message = getMessage();
    $email = getEmail();
    if ($phone != false && $name != false){
        if ($message !=false && $email != false){
            $clientData['name'] = $name;
            $clientData['email'] = $email;
            $clientData['phone'] = $phone;
            $clientData['message'] = $message;
            return $clientData;        
        }
    }else{
        echo '<script language="javascript">';
        echo 'alert("Invalid data! \nEnter all infomation correctly")';
        echo '</script>';
        return false;}   
}

function sendEmail(){
    $data = getData();
    $name = $data['name'];
    $phone =$data['phone'];
    $email = $data['email'];
    $message = $data['message'];
    
    $to = "asarephilip8@gmail.com";
    $subject = "Enquiry on Pineapple Value Chain";
    $header = "From Pineapple ValueChain Client \n"."Name : ".$name."\nEmail : ".$email."\nPhone : ".$phone;
    $body = $data['message'];

    if( getData() != false){
        mail($to, $subject, $body, $header); 
        echo "E-mail has been succesfully sent to ".$to;
        return true;
    }else{
        echo '<script language="javascript">';
        echo 'alert("")';
        echo '</script>';
        return false;
        }
}

sendEmail();
?>
