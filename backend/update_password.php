<?php 
session_start(); 
//resuming session
include('db_info.php');  

//setting headers     
if (isset($_SERVER['HTTP_ORIGIN'])) {
header("Access-Control-Allow-Origin: http://127.0.0.1:8100");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");}

//getting data
$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $new_pass = $request->new_pass; 
 $old_pass = $request->old_pass;
  }

    $query = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
    $query->bind_param('s', $_SESSION['username']);
    $query->execute();
    $results = $query->get_result();
     while ($data = $results->fetch_assoc()) {
        $hashed_pass = $data['password'];
        $new_hashed = password_hash($new_pass, PASSWORD_DEFAULT);
    }

    $verify_pass = password_verify($old_pass, $hashed_pass);

     if($verify_pass){
    if($old_pass != $new_pass){
       
        if(isset($old_pass) && isset($new_pass)){
    $query2 = $mysqli->prepare("UPDATE users SET password = ? WHERE username = ?");
    $query2->bind_param("ss",$new_hashed ,$_SESSION['username']);
    $query2->execute();
    $user_details['status'] = 'Password Changed';
    $user_details = json_encode($user_details);
    echo $user_details;
    }
 
    }else{
    $user_details['status'] = 'Your new password is the same as the old one';
    $user_details = json_encode($user_details);
    echo $user_details;
    }
    }else{
    $user_details['status'] = 'Incorrect Old Password';
    $user_details = json_encode($user_details);
    echo $user_details;
}

   //setting user's name in database
   
?>