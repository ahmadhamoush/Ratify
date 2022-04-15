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


    $query = $mysqli->prepare("SELECT * FROM users");
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
     while($user = $array->fetch_assoc()){
        $src = "uploads/".$user['image'];
        $image = file_get_contents($src);
        $type = pathinfo($src, PATHINFO_EXTENSION);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image);
            $user_obj[] = $user;
       
}
   echo json_encode($user_obj); 
}
else{
    $user_details['status'] = 'no users';
    echo json_encode($user_details);
  
}
?>