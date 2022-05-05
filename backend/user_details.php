<?php 
session_start(); 
//resuming session
include('db_info.php');  

//setting headers     
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Content-Type: image/jpg");
header("Access-Control-Allow-Origin: http://127.0.0.1:8100");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 86400');  
header("Cache-Control: max-age=86400");
header("Access-Control-Allow-Credentials: true");}


    $username = $_SESSION['username']; //setting username to session user
    //getting session user's details
    $query = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
    $query->bind_param("s", $username);
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
     while($user = $array->fetch_assoc()){
        //where user image is stored
        $src = "uploads/".$user['image'];
        //getting user image
        $image = file_get_contents($src);
        //getting image type
        $type = pathinfo($src, PATHINFO_EXTENSION);
        //converting image to base64
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image);
        //storing user details to be echoed
        $user_details['username'] = $user['username'];
        $user_details['name'] = $user['name'];
        $user_details['image'] = $base64;
        $user_details['logged_in'] = $_SESSION['logged_in'];
       
        echo json_encode($user_details);
}
}
else{
    //if no user with current username was found
    $user_details['user'] = 'not found';
    echo json_encode($user_details);
  
}
?>