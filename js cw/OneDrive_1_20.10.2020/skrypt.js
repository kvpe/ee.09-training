function f_kopiuj()
{
	var a=document.getElementById("nmbr").value;  //pobiera wartość z pola numerycznego
	alert(a);    //wyświetla wartość z pola numerycznego
	var dane2=document.getElementById("imie").value.substr(0,1)+document.getElementById("nazwisko").value.substr(0,1); //pobiera pierwsze litery z pola IMIE i NAZWISKO (tworzy inicjały)

	alert(dane2);  //wyświetla inicjały
 if(document.getElementById("r1").checked==true)  
	 alert(document.getElementById("r1").value);//wyświetla kuriera lub odbiór osobisty w zależności od zaznaczonego pola
 if(document.getElementById("r2").checked==true)
	 alert(document.getElementById("r2").value);
}



  function f_chkbox() {    //funkcja blokuje przycisk KOPIUJ i pole numeryczne lub je odblokowuje w zależności od zaznaczenia checkboxa
		if((document.getElementById("ch1").checked)==false)
		{
            document.getElementById("btnkopiuj").disabled = true;
            document.getElementById("nmbr").disabled = true;
			
		}
		else	
		{
			document.getElementById("btnkopiuj").disabled = false;
			document.getElementById("nmbr").disabled = false;
		}
        }