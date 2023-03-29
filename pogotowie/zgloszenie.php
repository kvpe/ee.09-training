<?php
	$connect=mysqli_connect('localhost','root','')
	or die ('Brak polaczenia z serwerem MySQL'.mysqli_error());
	
	mysqli_select_db($connect, 'ratownictwo')
	or die ('Brak polaczenia z baza danych'.mysqli_error());
	
	$nr1=$_POST['nr1'];
	$nr2=$_POST['nr2'];
	$adres=$_POST['adres'];
	$zglos=$_POST['zglos'];
	
	if($adres)
	mysqli_query($connect, "INSERT INTO zgloszenia (id, ratownicy_id, dyspozytorzy_id, adres, pilne, czas_zgloszenia) VALUES (NULL, '$nr1', '$nr2', '$adres', '0', CURRENT_TIME())");
	mysqli_close($connect);
?>