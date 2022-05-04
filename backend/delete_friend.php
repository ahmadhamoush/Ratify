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

$status = 'Friends'; // default

//getting post data from app
$postdata = file_get_contents("php://input");
 if (isset($postdata)) { $request = json_decode($postdata);

 $toBeRemovedUser = strtolower($request); 
}

 $query = $mysqli->prepare("DELETE FROM friends WHERE status = ? AND friend_one = ? AND friend_two = ? OR status = ? AND friend_one = ? AND friend_two = ?");
    $query->bind_param("ssssss", $status, $toBeRemovedUser,$_SESSION['username'],$status, $_SESSION['username'],$toBeRemovedUser);
    $query->execute();
    $removed['status'] ='Removed successfully';
    $removed['removed'] = $toBeRemovedUser;
    $removed['session_user'] = $_SESSION['username'];
    $removed = json_encode($removed);
    echo $removed;

	
?>

