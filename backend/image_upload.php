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
header("Access-Control-Allow-Credentials: true"); 
}

if(isset($_FILES['file'])){
    $target_path = "uploads/";

$target_path = $target_path . basename($_FILES['file']['name']);


if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {

    $query = $mysqli->prepare('ALTER TABLE users ADD image VARCHAR(255) NULL');
    $query->execute(); 

    $query2 = $mysqli->prepare("UPDATE users SET image = ? WHERE username = ?");
    $username = $_SESSION['username'];
    $query2->bind_param("ss", $_FILES['file']['name'], $username);
    $query2->execute();

    header('Content-type: application/json');
    $data = ['success' => true, 'message' => 'Upload and move success'];
    echo json_encode( $data );

} else{
    header('Content-type: application/json');
    $data = ['success' => false, 'message' => 'There was an error uploading the file, please try again!'];
    echo json_encode( $data );
}
}else{
    $no_profile = 'no-profile.jpg';
    $query2 = $mysqli->prepare("UPDATE users SET image = ? WHERE username = ?");
    $username = $_SESSION['username'];
    $query2->bind_param("ss", $no_profile, $username);
    $query2->execute();
    $response = ['image_upload' => false, 'message' => 'No Profile Uploaded'];
    echo json_encode( $response );

}



?>