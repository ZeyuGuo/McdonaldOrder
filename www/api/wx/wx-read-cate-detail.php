<?php

$con=mysqli_connect("localhost","root","13141314","wxshop"); 
if (!$con)
  {
  die('Could not connect: ' . mysqli_connect_error());
  }

mysqli_query($con,"set names utf8");
 

$sql = "SELECT * FROM catedetail";
$sql2 = "SELECT * FROM detailmore";


$result = mysqli_query($con,$sql);
$result2 = mysqli_query($con,$sql2);

$row=array();//先建立一个数组待用，用来存储结果
$row2=array();

while ($roww2 = mysqli_fetch_array($result2,MYSQLI_ASSOC)){

    $count=count($roww2);

    for ($i=1;$i<$count-1;$i++){

        unset($roww2[$i]);

    }//这个地方需要不停的删除已经push到数组的项目，说实话，并没有搞懂，但没有这个语句，执行有问题

    array_push($row2,$roww2);

}

while ($roww = mysqli_fetch_array($result,MYSQLI_ASSOC)){

	$count=count($roww);

	for ($i=0;$i<$count;$i++){

		unset($roww[$i]);


	}//这个地方需要不停的删除已经push到数组的项目，说实话，并没有搞懂，但没有这个语句，执行有问题

    $temp=array();

	while($row2){
        if($roww["detail"]==$row2["pdetail"]){
            array_push($temp,$row2);
        }
    }


	array_push($row,$temp);

}


$s=json_encode($row,JSON_UNESCAPED_SLASHES);
echo $s;//转换成json格式




 
  
?>