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
 $request_status = $request->status;
 $requested_friend = $request->requested;
 $friends = 'Friends';
 $pending = 'Pending';
  }
 
   //updating user's friend request in database
  //updating friend's status from pending to friends
    if($request_status==='accept'){
    $query = $mysqli->prepare("UPDATE friends SET status = ? WHERE friend_one = ? AND friend_two = ?");
    $query->bind_param("sss", $friends, $requested_friend,$_SESSION['username']);
    $query->execute();
    $confirm_friend['status'] =$request_status;
    $confirm_friend['requested'] = $requested_friend;
    $confirm_friend['session_user'] = $_SESSION['username'];
    $confirm_friend = json_encode($confirm_friend);
    echo $confirm_friend;
}   
//deleting current request
else if($request_status==='decline'){
     $query = $mysqli->prepare("DELETE FROM friends WHERE status = ? AND friend_one = ? AND friend_two = ? OR status = ? AND friend_one = ? AND friend_two = ?");
    $query->bind_param("ssssss", $pending, $requested_friend,$_SESSION['username'],$pending, $_SESSION['username'],$requested_friend);
    $query->execute();
    $confirm_friend['status'] =$request_status;
    $confirm_friend['requested'] = $requested_friend;
    $confirm_friend['session_user'] = $_SESSION['username'];
    $confirm_friend = json_encode($confirm_friend);
    echo $confirm_friend;
}
?>