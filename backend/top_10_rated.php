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

//getting all users ordered by total rates (DESC so it could be ordered from highest to lowest)
$query = $mysqli->prepare("SELECT * FROM users ORDER BY total_rates DESC");
$query->execute(); 
$results = $query->get_result();
if($results->num_rows>0){
   while($user = $results->fetch_assoc()){
        //src of img
        $src = "uploads/".$user['image'];
        //getting user's img
        $image = file_get_contents($src);
        //getting img type
        $type = pathinfo($src, PATHINFO_EXTENSION);
        //converting image to base64
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($image); 
        //storing user details
        $user['image'] = $base64;
        $user_obj['username'] = $user['username'];
        $user_obj['name'] = $user['name'];
        $user_obj['image'] = $user['image'];
        $user_obj['total_rates'] = $user['total_rates'];
            $user_requests[] = $user_obj;
}
//getting the first top 10 rated users (looped 10 times)
for ($i=0; $i < 10 ; $i++) { 
    //storing users in top_10 array
    $top_10[] = $user_requests[$i];
}
echo json_encode($top_10); 
}
else{
    $user_details['status'] = 'no friends';
    echo json_encode($user_details);
  
}

?>