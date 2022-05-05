<?php 
session_start(); 
$_SESSION['logged_in'] = false;
//resuming session
 
//setting headers     
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Content-Type: image/jpg");
header("Access-Control-Allow-Origin: http://127.0.0.1:8100");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");}

//destroying and unsetting setting on logout
session_unset();
session_destroy();
$status['status'] = 'Logout Success'; //logout status
echo json_encode($status);
?>