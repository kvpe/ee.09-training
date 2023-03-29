<html>
<head>
	<meta charset="UTF-8"/>
	<title>Sklep papierniczy</title>
	<link rel="stylesheet" href="styl.css">
</head>
<body>
	<div id="box">
		<div id="baner">
		<h1>W naszym sklepie internetowym kupisz najtaniej</h1>
		</div>
		<div id="lewy">
		<h3>Promocja 15% obejmuje artykuły:<h3>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
		</div>
		<div id="srodek">
		<h3>Cena wybranego artykułu w promocji<h3>
		<form>
			<select>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
			<input type="submit" method="post" value="WYBIERZ"/>
		</form>
		</div>
		<div id="prawy">
		<h3>Kontakt</h3>
		<p>telefon: 123123123 <br/> e-mail: <a href="mailto:bok@sklep.pl"> bok@sklep.pl</a></p>
		<img src="promocja2.png" alt="promocja"/>
		</div>
		<div id="stopka">
		<h4>Autor strony</h4>
		</div>
	</div>
</body>
</html>
<?php
$connect=mysqli_connect('localhost','root','','sklep');
mysqli_close($connect);
?>