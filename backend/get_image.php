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


    $username = $_SESSION['username'];
    $query = $mysqli->prepare("SELECT image FROM users WHERE username = ?");
    $query->bind_param("s", $username);
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
     while($img_name = $array->fetch_assoc()){
        $src = "uploads/".$img_name['image'];
        $image = file_get_contents($src);
        $type = pathinfo($src, PATHINFO_EXTENSION);
        // $mimetype = mime_content_type($src);
        // // header('Content-Type: '.$mimetype);
        // header("Content-Length: " . strlen($image));
        // readfile($src);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image);
        
        echo json_encode($base64);
}
}
else{
    echo "No user found";
  
}
?>