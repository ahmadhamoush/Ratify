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

    //getting rates for user
    $username = $_GET['username'];

    $query = $mysqli->prepare("SELECT * FROM rates WHERE user_id = ?");
    $query->bind_param('s', $username);
    $query->execute();
    $array = $query->get_result();
    if($array->num_rows>0){
     while($rate = $array->fetch_assoc()){
        $cute[] = $rate['cute'];
        $personality[] = $rate['personality'];
        $hot[] = $rate['hot'];
        $social[] = $rate['social'];
        $friendly[] =$rate['friendly'];
        $fun[] = $rate['fun'];
    }

    //return rounded calculated rates (%)
    $rates['cute'] = round(array_sum($cute)/sizeof($cute));
    $rates['personality'] = round(array_sum($personality)/sizeof($personality));
    $rates['hot'] = round(array_sum($hot)/sizeof($hot));
    $rates['social'] = round(array_sum($social)/sizeof($social));
    $rates['friendly'] = round(array_sum($friendly)/sizeof($friendly));
    $rates['fun'] = round(array_sum($fun)/sizeof($fun));
    $rates['total_rates'] = $array->num_rows;
     //updating total_rates in database
      $query = $mysqli->prepare('UPDATE users SET total_rates = ? WHERE username =?');
    $query->bind_param('ss',$rates['total_rates'], $username);
    $query->execute();
    echo json_encode($rates); 
}
else{
    $user_details['status'] = 'no rates';
    echo json_encode($user_details);
  
}
?>