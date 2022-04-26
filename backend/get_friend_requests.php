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

    $username = $_SESSION['username'];
    $status = 'Pending';
    $query = $mysqli->prepare("SELECT friend_one FROM friends WHERE friend_two = ? AND status =?");
    $query->bind_param('ss', $username, $status);
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
     while($response = $array->fetch_assoc()){
        $friends_list[] = $response;
    }

    echo json_encode($friends_list); 
}
else{
    $user_details['status'] = 'no friend requests';
    echo json_encode($user_details);
  
}
?>