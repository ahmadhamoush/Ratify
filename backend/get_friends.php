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
    $status = 'Friends';
    $friends_exist = false;
    //getting friends
    $query = $mysqli->prepare("SELECT friend_one FROM friends WHERE friend_two = ? AND status =?");
    $query->bind_param('ss', $username, $status);
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
        $friends_exist =true;
    }
     while($response = $array->fetch_assoc()){
        $friends_list[] = $response['friend_one'];
    }
      $query = $mysqli->prepare("SELECT friend_two FROM friends WHERE friend_one = ? AND status =?");
    $query->bind_param('ss', $username, $status);
    $query->execute();
    $array = $query->get_result();
     if($array->num_rows>0){
        $friends_exist =true;
    }
     while($response = $array->fetch_assoc()){
        $friends_list[] = $response['friend_two'];
    }
 
if($friends_exist){
    //getting friend user's details if friend exists
 for ($i=0; $i < count($friends_list) ; $i++) { 
      $query = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param('s', $friends_list[$i]);
$query->execute(); 
$results = $query->get_result();
   while($user = $results->fetch_assoc()){
        //img src
        $src = "uploads/".$user['image'];
        //getting img
        $image = file_get_contents($src);
        //img type
        $type = pathinfo($src, PATHINFO_EXTENSION);
        //converting img to base64
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image); 
        //storing user details
        $user['image'] = $base64;
        $user_obj['username'] = $user['username'];
        $user_obj['name'] = $user['name'];
        $user_obj['image'] = $user['image'];

            //storing friends
            $friends[] = $user_obj;
}

}  echo json_encode($friends); 
}
else{
    $user_details['status'] = 'no friends';
    echo json_encode($user_details);
  
}
?>