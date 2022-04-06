<?php
session_start();

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

$postdata = file_get_contents("php://input");
if(isset($postdata)){
$request = json_decode($postdata);
$username = $request->username;
$password = $request->password;

}

//posting data
 $_POST['username'] = $username;
 $_POST['password'] = $password;

$query = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
$query->bind_param('s', $username);
$query->execute();
$results = $query->get_result();

if($results->num_rows>0){
	 while ($data = $results->fetch_assoc()) {
        $hashed_pass = $data['password'];
    }
    $verify_pass = password_verify($password, $hashed_pass);
	if($verify_pass){
		$user['status'] = "success";
	}else{
		$user['status'] = "incorrect pass";
	}
}
else{
	$user['status'] = 'user not found';
}


$user['username'] = $username;
$user['password'] = $password;
$user_data = json_encode($user);
echo $user_data;
?>

