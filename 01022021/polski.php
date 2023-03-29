<html>
<head>
	<meta charset="UTF-8">
	<title>Szkoła Ponadgimnazjalna</title>
	<link rel="stylesheet" href="styl.css"/>
<?php
$idpolaczenia = mysqli_connect('localhost','root','','szkola');
$zapytanie1=mysqli_query($idpolaczenia,"SELECT imie, nazwisko FROM uczen");
$wiersz=mysqli_fetch_row($zapytanie1);
$zapytanie2=mysqli_query($idpolaczenia,"SELECT imie, nazwisko FROM uczen WHERE id=2");
$wiersz2=mysqli_fetch_row($zapytanie2);
$zapytanie3=mysqli_query($idpolaczenia,"SELECT AVG(ocena) FROM ocena WHERE uczen_id=2 AND przedmiot_id=1");
$wiersz3=mysqli_fetch_row($zapytanie3);
mysqli_close($idpolaczenia);
?>
</head>
<body>
<div id="baner">
<h1>Oceny uczniów: język polski</h1>
</div>
<div id="lewy">
<h2>Lista uczniów:</h2>
<?php
echo "<ol>";
do
	{
	echo "<li>".$wiersz[0]." ".$wiersz[1]."</li>";
}while($wiersz=mysqli_fetch_row($zapytanie1));
echo "<ol>";
?>
</div>
<div id="prawy">
<h2>Uczeń: 
<?php
echo $wiersz2[0]." ".$wiersz2[1];
?>
</h2>
<br/><p>Średnia ocen z języka polskiego: 
<?php
echo $wiersz3[0];
?></p>
</div>
<div id="stopka">
<h3>Zespół Szkół Ponadgimnazjalnych<br/></h3><p>Stronę opracował:</p>
</div>
</body>
</html>
