<?php  
session_start();
setcookie("sessionid", session_id(), time()+3600, "/");

 //starting session after signing up
include('db_info.php');

//setting headers
if (isset($_SERVER['HTTP_ORIGIN'])) {

header("Access-Control-Allow-Origin: http://127.0.0.1:8101");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");
     
}

//getting post data from app
$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $username = $request->username; 
 $email = $request->email; 
 $password = $request->password;
}
  //posting data
 $_POST['username'] = $username;
 $_POST['email'] = $email;
 $_POST['password'] = $password;

//setting session variable username
 $_SESSION['username'] = $username;
 // $_SESSION['username'] = $_POST['username'] = $username;

 //checking if user or email has been already registered
 $query2 = $mysqli->prepare("SELECT * FROM users WHERE username = ? or email = ?");
 	$query2->bind_param('ss', $username, $email);
  	$query2->execute();
  	$query2->store_result();
 
 if($query2->num_rows>0){
 	$user_taken['status'] = 'taken';
 	$user_taken=json_encode($user_taken);
 	echo $user_taken;

  //inserting user data to database
 }else if(isset($username) && isset($email ) && isset($password)){
	$query = $mysqli->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
	$query->bind_param("sss", $username, $email, $password);
	$query->execute();
	$user_details['username'] = $username;
	$user_details['email'] = $email;
	$user_details['password'] = $password;
  $user_details['sessionid'] = session_id();
	$user_details = json_encode($user_details);
	echo $user_details;
 
}
	
?>

