<?php
 
$con=mysqli_connect("localhost","root","13141314","wxshop"); 
if (!$con)
  {
  die('Could not connect: ' . mysqli_connect_error());
  }
 
 
mysqli_query($con,"set names utf8");
 
 
  $sql1 = "SELECT * FROM carts";
  $retval  = mysqli_query($con,$sql1);
  

$row=array();//先建立一个数组待用，用来存储结果

while ($roww = mysqli_fetch_array($retval,MYSQLI_ASSOC)){

	$count=count($roww);

	for ($i=0;$i<$count;$i++){

		unset($roww[$i]);

	}//这个地方需要不停的删除已经push到数组的项目，说实话，并没有搞懂，但没有这个语句，执行有问题

	array_push($row,$roww);

}


$s=json_encode($row,JSON_UNESCAPED_SLASHES);
echo $s;//转换成json格式


 
//释放结果集
mysqli_free_result($retval);
 
mysqli_close($con);
?>