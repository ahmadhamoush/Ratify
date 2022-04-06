<?php 
session_start(); 
include('db_info.php');       
if (isset($_SERVER['HTTP_ORIGIN'])) {

header("Access-Control-Allow-Origin: http://127.0.0.1:8101");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");}

$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $name = $request->name; 
 $username = $request->username; 
  }

  $query = $mysqli->prepare('ALTER TABLE users ADD name VARCHAR(255) NULL');
  $query->execute();   

   if(isset($_POST['name'])){
    $_POST['name'] = $name; 
   }

   if(isset($name)){
    $query = $mysqli->prepare("UPDATE users SET name = ? WHERE username = ?");
    $query->bind_param("ss", $name, $_SESSION['username']);
    $query->execute();
    $user_details['name'] =$name ;
    $user_details['sessionid'] = session_id();
    $user_details = json_encode($user_details);
    echo $user_details;
}
?>