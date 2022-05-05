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

$status = 'Pending'; // default

//getting post data from app
$postdata = file_get_contents("php://input");
 if (isset($postdata)) { $request = json_decode($postdata);
 	//getting to be added user's username
 $toBeAddedUser = strtolower($request); 
}

//getting request with status pending
$query = $mysqli->prepare('SELECT * FROM friends WHERE friend_one =? AND friend_two =? AND status =?');
$query->bind_param('sss', $_SESSION['username'], $toBeAddedUser, $status);
$query->execute();
$results = $query->get_result();
//checking if request (exists) is already pending
if($results->num_rows>0){
  $status ='Already Pending';
  $addFriend['status'] = $status;
  $addFriend = json_encode($addFriend);
  echo $addFriend;
}else{ //creating a new request
	$query = $mysqli->prepare("INSERT INTO friends (friend_one, friend_two, status) VALUES (?, ?, ?)");
	$query->bind_param("sss", $_SESSION['username'], $toBeAddedUser, $status);
	$query->execute();
	//storing request details
	$addFriend['requester'] = $_SESSION['username'];
  $addFriend['requestee'] = $toBeAddedUser;
  $addFriend['status'] = $status;
	$addFriend = json_encode($addFriend);
	echo $addFriend;
}

	
?>

