<?php  
session_start();
//starting session after signing up
include('db_info.php');

//setting headers
if (isset($_SERVER['HTTP_ORIGIN'])) {
header("Access-Control-Allow-Origin: http://127.0.0.1:8100");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");     
}


$toBeAddedUser = strtolower($_GET['username']); 

$query = $mysqli->prepare('SELECT * FROM friends WHERE friend_one =? AND friend_two =? OR friend_one =? AND friend_two = ?');
$query->bind_param('ssss', $_SESSION['username'], $toBeAddedUser, $toBeAddedUser, $_SESSION['username']);
$query->execute();
$results = $query->get_result();
if($results->num_rows>0){
while($response = $results->fetch_assoc()){
	$request['status'] = $response['status'];
	echo json_encode($request);
}
}
else{
	$request['status'] = "Not Friends";
	echo json_encode($request);
}

	
?>

