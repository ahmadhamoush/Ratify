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
 $cute = $request->cute;
 $personality =$request->personality;
 $hot = $request->hot;
 $social = $request->social;
 $friendly = $request->friendly;
 $fun = $request->fun;
 $rated_user = $request->rated;
  }

  //adding name column in database
  $query = $mysqli->prepare('INSERT INTO rates (user_id, cute, personality, hot, social, friendly, fun, rated_by) VALUES (?, ?, ?, ?, ?, ?,?,?)');
  $query->bind_param('ssssssss', $rated_user,$cute, $personality, $hot, $social, $friendly, $fun, $_SESSION['username']);
  $query->execute(); 

    $rates['cute'] =$cute;
    $rates['personality'] =$personality;
    $rates['hot'] =$hot;
    $rates['social'] =$social;
    $rates['friendly'] =$friendly;
    $rates['fun'] =$fun;
    $rates['rated'] = $rated_user;
    $rates['rated_by'] = $_SESSION['username'];
    $rates = json_encode($rates);
    echo $rates;

?>