<?php 
session_start(); 
$username = $_SESSION['username'];
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
    
    //deleting session user account
    $query = $mysqli->prepare("DELETE FROM users WHERE username = ?");
    $query->bind_param("s", $username);
    $query->execute();
        $status['deleted'] = $username;
        echo json_encode($status); 

?>