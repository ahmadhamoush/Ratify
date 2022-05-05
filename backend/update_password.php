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

//getting data from frontend
$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $new_pass = $request->new_pass; 
 $old_pass = $request->old_pass;
  }   
  //getting current password for logged user
    $query = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
    $query->bind_param('s', $_SESSION['username']);
    $query->execute();
    $results = $query->get_result();
     while ($data = $results->fetch_assoc()) {
         //storing current user's hashed pass
        $hashed_pass = $data['password'];
        //hashing the new password
        $new_hashed = password_hash($new_pass, PASSWORD_DEFAULT);
    }
    //verifying that stored old password == inputted old password
    $verify_pass = password_verify($old_pass, $hashed_pass);


    //updating user's password if passwords and verified
     if($verify_pass){
    if($old_pass != $new_pass){ // checking if old pass == new pass     
        if(isset($old_pass) && isset($new_pass)){
    $query2 = $mysqli->prepare("UPDATE users SET password = ? WHERE username = ?");
    $query2->bind_param("ss",$new_hashed ,$_SESSION['username']);
    $query2->execute();
    $user_details['status'] = 'Password Changed';
    $user_details = json_encode($user_details);
    echo $user_details;
    }
 
    }else{
      //if new pass == old pass
    $user_details['status'] = 'Your new password is the same as the old one';
    $user_details = json_encode($user_details);
    echo $user_details;
    }
    }else{
      //if old pass is incorrect
    $user_details['status'] = 'Incorrect Old Password';
    $user_details = json_encode($user_details);
    echo $user_details;
}

?>