<?php
include('db_info.php');
if (isset($_SERVER['HTTP_ORIGIN'])) {

    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $username = $request->username; 
 $email = $request->email; 
 $password = $request->password;
}

  
 $_POST['username'] = $username;
 $_POST['email'] = $email;
 $_POST['password'] = $password;

 
if(isset($username) && isset($email ) && isset($password)){
	$query = $mysqli->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
	$query->bind_param("sss", $username, $email, $password);
	$query->execute();
	$user_details['username'] = $username;
	$user_details['email'] = $email;
	$user_details['password'] = $password;
	$user_details = json_encode($user_details);
	echo $user_details;
}

?>

