<?php
 
$con=mysqli_connect("localhost","root","13141314","wxnews"); 
if (!$con)
  {
  die('Could not connect: ' . mysqli_connect_error());
  }
 
 
mysqli_query($con,"set names utf8");
 
 
if (!empty($_POST['username'])&&!empty($_POST['password'])){
	$sql="INSERT INTO user (username, password) VALUES ('$_POST[username]','$_POST[password]')";
	
	
	$result = mysqli_query($con,$sql);
	if (!$result)
	  {  
		die('Error: ' . mysqli_connect_error());
	 }
 
}
 
 
 
 
  $sql1 = "SELECT * FROM user";
  $result1 = mysqli_query($con,$sql1);
  



$sql = "SELECT * FROM user";

$retval = mysqli_query($con,$sql);

$row=array();//先建立一个数组待用，用来存储结果

while ($roww = mysqli_fetch_array($retval,MYSQLI_ASSOC)){

	$count=count($roww);

	for ($i=0;$i<$count;$i++){

		unset($roww[$i]);

	}//这个地方需要不停的删除已经push到数组的项目，说实话，并没有搞懂，但没有这个语句，执行有问题

	array_push($row,$roww);

}


$s=json_encode($row);
echo $s;//转换成json格式




 
  
?>
 
<!doctype html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
 
 
<title>表单</title>
</head>
 
<body style="margin:50px;">
 
<script language="JavaScript"> 
function myrefresh() 
{ 
window.location.reload(); 
} 
setTimeout('myrefresh()',10000); //指定1秒刷新一次 
</script> 
 
 
<table style='text-align:left;' border='1'>
         <tr><th>id</th><th>username</th><th>password</th></tr>
<?php
     while ($bookInfo = mysqli_fetch_array($result1,MYSQLI_ASSOC)){ //返回查询结果到数组
			$username = $bookInfo["username"]; //将数据从数组取出
			$password = $bookInfo["password"];
			$id = $bookInfo["id"];
              echo "<tr><td>{$id}</td><td>{$username}</td><td>{$password}</td></tr>";
     }
	 
//释放结果集
mysqli_free_result($result1);
 
mysqli_close($con);
?>
</table>
 
 
</body>
</html>