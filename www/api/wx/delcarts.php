<?php
 
$con=mysqli_connect("localhost","root","13141314","wxshop"); 
if (!$con)
  {
  die('Could not connect: ' . mysqli_connect_error());
  }
 
 
mysqli_query($con,"set names utf8");
 
 
if (!empty($_POST['title'])){
	$sql="DELETE FROM carts WHERE title = '$_POST[title]' ";
	
	
	$result = mysqli_query($con,$sql);
	if (!$result)
	  {  
		die('Error: ' . mysqli_connect_error());
	 }
 
}
 echo $_POST[title];
mysqli_close($con);
?>