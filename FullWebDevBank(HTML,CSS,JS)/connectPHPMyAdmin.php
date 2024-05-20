<?php
$connection = mysql_connect("localhost:3306","root","","studentdb");

if(!$connection){
    die("Error".mysqli_connect_error());
}
else
echo 'connection established';
$query = "select * from users";

?>