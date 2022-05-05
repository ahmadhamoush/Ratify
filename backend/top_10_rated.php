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

      $query = $mysqli->prepare("SELECT * FROM users ORDER BY total_rates DESC");
$query->execute(); 
$results = $query->get_result();
if($results->num_rows>0){
   while($user = $results->fetch_assoc()){
        $src = "uploads/".$user['image'];
        $image = file_get_contents($src);
        $type = pathinfo($src, PATHINFO_EXTENSION);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image); 
        $user['image'] = $base64;
        $user_obj['username'] = $user['username'];
        $user_obj['name'] = $user['name'];
        $user_obj['image'] = $user['image'];
        $user_obj['total_rates'] = $user['total_rates'];
            $user_requests[] = $user_obj;
}
for ($i=0; $i < 10 ; $i++) { 
    $top_10[] = $user_requests[$i];
}
echo json_encode($top_10); 
}
else{
    $user_details['status'] = 'no friends';
    echo json_encode($user_details);
  
}

?>