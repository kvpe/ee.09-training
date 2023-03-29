function funkcja() { //sprawdzanie wygranej

	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true;
		alert('Gracz X wygrał'); 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 

		alert('Gracz X wygrał'); 
	} 
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		alert('Gracz X wygrał'); 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		alert('Gracz X wygrał'); 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') .innerHTML = "Gracz X wygrał"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		alert('Gracz X wygrał'); 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz X wygrał'); 
	} 
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz X wygrał'); 
	} 
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print').innerHTML = "Gracz X wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz X wygrał'); 
	} 

	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b6").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print').innerHTML = "Gracz 0 wygrał"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b9").disabled = true; 
		alert('Gracz 0 wygrał'); 
	} 
 
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
		b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
		b8 == '0') && (b9 == 'X' || b9 == '0')) { 
			document.getElementById('print').innerHTML = "Remis"; 
			alert('Remis'); 
	} 
	else { //print czyja kolejka

		if (tura == 1) { 
			document.getElementById('print').innerHTML = "Kolej gracza X"; 
		} 
		else { 
			document.getElementById('print').innerHTML = "Kolej gracza 0"; 
		} 
	} 
} 

function funkcja_2() { //reset
	location.reload(); 
	document.getElementById("b1").value = ''; 
	document.getElementById("b2").value = ''; 
	document.getElementById("b3").value = ''; 
	document.getElementById("b4").value = ''; 
	document.getElementById("b5").value = ''; 
	document.getElementById("b6").value = ''; 
	document.getElementById("b7").value = ''; 
	document.getElementById("b8").value = ''; 
	document.getElementById("b9").value = ''; 

} 

tura = 1; 
function funkcja_3() { //zmiana kolejki
	if (tura == 1) { 
		document.getElementById("b1").value = "X"; 
		document.getElementById("b1").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b1").value = "0"; 
		document.getElementById("b1").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_4() { 
	if (tura == 1) { 
		document.getElementById("b2").value = "X"; 
		document.getElementById("b2").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b2").value = "0"; 
		document.getElementById("b2").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_5() { 
	if (tura == 1) { 
		document.getElementById("b3").value = "X"; 
		document.getElementById("b3").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b3").value = "0"; 
		document.getElementById("b3").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_6() { 
	if (tura == 1) { 
		document.getElementById("b4").value = "X"; 
		document.getElementById("b4").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b4").value = "0"; 
		document.getElementById("b4").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_7() { 
	if (tura == 1) { 
		document.getElementById("b5").value = "X"; 
		document.getElementById("b5").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b5").value = "0"; 
		document.getElementById("b5").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_8() { 
	if (tura == 1) { 
		document.getElementById("b6").value = "X"; 
		document.getElementById("b6").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b6").value = "0"; 
		document.getElementById("b6").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_9() { 
	if (tura == 1) { 
		document.getElementById("b7").value = "X"; 
		document.getElementById("b7").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b7").value = "0"; 
		document.getElementById("b7").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_10() { 
	if (tura == 1) { 
		document.getElementById("b8").value = "X"; 
		document.getElementById("b8").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b8").value = "0"; 
		document.getElementById("b8").disabled = true; 
		tura = 1; 
	} 
} 

function funkcja_11() { 
	if (tura == 1) { 
		document.getElementById("b9").value = "X"; 
		document.getElementById("b9").disabled = true; 
		tura = 0; 
	} 
	else { 
		document.getElementById("b9").value = "0"; 
		document.getElementById("b9").disabled = true; 
		tura = 1; 
	} 
} 