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

//getting rate data
$postdata = file_get_contents("php://input"); if (isset($postdata)) { $request = json_decode($postdata);
 $cute = $request->cute;
 $personality =$request->personality;
 $hot = $request->hot;
 $social = $request->social;
 $friendly = $request->friendly;
 $fun = $request->fun;
 $rated_user = $request->rated;
  }


$query = $mysqli->prepare('SELECT user_id, rated_by FROM rates WHERE user_id =? AND rated_by = ?');
  $query->bind_param('ss', $rated_user, $_SESSION['username']);
  $query->execute();
  $results = $query->get_result();

  //checking if user already rated the other user
  if($results->num_rows == 0){
    
    //adding rates, who rated and who got rated into database
  $query = $mysqli->prepare('INSERT INTO rates (user_id, cute, personality, hot, social, friendly, fun, rated_by) VALUES (?, ?, ?, ?, ?, ?,?,?)');
  $query->bind_param('ssssssss', $rated_user,$cute, $personality, $hot, $social, $friendly, $fun, $_SESSION['username']);
  $query->execute(); 
    //storing rate details to be sent
    $rates['cute'] =$cute;
    $rates['personality'] =$personality;
    $rates['hot'] =$hot;
    $rates['social'] =$social;
    $rates['friendly'] =$friendly;
    $rates['fun'] =$fun;
    $rates['rated'] = $rated_user;
    $rates['rated_by'] = $_SESSION['username'];
    $rates['status'] = 'success';
    $rates = json_encode($rates);
    echo $rates;
}
else{
  //if user has already been rated by current user
  $rates['status'] = 'You have already rated @';
  $rates = json_encode($rates);
    echo $rates;
}


?>