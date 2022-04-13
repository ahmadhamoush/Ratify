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
 $name = $request; 
  }

  //adding name column in database
  $query = $mysqli->prepare('ALTER TABLE users ADD name VARCHAR(255) NULL');
  $query->execute();   


   if(isset($_POST['name'])){
    $_POST['name'] = $name; 
   }

   //setting user's name in database
   if(isset($name)){
    $query = $mysqli->prepare("UPDATE users SET name = ? WHERE username = ?");
    $query->bind_param("ss", $name, $_SESSION['username']);
    $query->execute();
    $user_details['name'] =$name;
    $user_details['status'] = 'success';
    $user_details = json_encode($user_details);
    echo $user_details;
}
?>