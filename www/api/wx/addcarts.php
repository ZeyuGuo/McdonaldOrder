<?php
 
$con=mysqli_connect("localhost","root","13141314","wxshop"); 
if (!$con)
  {
  die('Could not connect: ' . mysqli_connect_error());
  }
 
 
mysqli_query($con,"set names utf8");
 
 
if (!empty($_POST['title'])&&!empty($_POST['image'])&&!empty($_POST['price'])){
	$sql="INSERT INTO carts (title, image, price) VALUES ('$_POST[title]','$_POST[image]','$_POST[price]')";
	
	
	$result = mysqli_query($con,$sql);
	if (!$result)
	  {  
		die('Error: ' . mysqli_connect_error());
	 }
 
}
 
mysqli_close($con);
?>