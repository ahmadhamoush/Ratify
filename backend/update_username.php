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
 $username = $request; 
  }

   if(isset($_POST['username'])){
    $_POST['username'] = $username; 
   }

   $query2 = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
 $query2->bind_param('s', $username);
 $query2->execute();
 $query2->store_result();
 
 //checking if user is taken
 if($query2->num_rows>0){
    $user_details['status'] = 'taken';
  $user_details = json_encode($user_details);
    echo $user_details;
   }

   //setting user's name in database
  else if(isset($username)){
    $query = $mysqli->prepare("UPDATE users SET username = ? WHERE username = ?");
    $query->bind_param("ss", $username, $_SESSION['username']);
    $query->execute();
    $user_details['new'] =$username;
    $user_details['old'] =$_SESSION['username'];
    $user_details['status'] = 'success';
    $user_details = json_encode($user_details);
    $_SESSION['username'] = $username;
    echo $user_details;
}
?>