function waliduj()
{
    znaki = /^[a-zA-ZćęłńóźżąĆĘŁŃÓŹŻĄ]{3,20}$/;
    imie = document.formularz.imie.value.match(znaki);
    if (imie == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawne imię.";
        return false;
    }
	
    znaki = /^[a-zA-ZćęłńóźżąĆĘŁŃÓŹŻĄ]{3,30}$/;
    nazwisko = document.formularz.nazwisko.value.match(znaki);
    if (nazwisko == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawne nazwisko";
        return false;
    }

    znaki = /^[a-zA-ZćęłńóźżąĆĘŁŃÓŹŻĄ]{3,30}$/;
    miejscowosc = document.formularz.miejscowosc.value.match(znaki);
    if (miejscowosc == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawną miejscowość";
        return false;
    }
	
    znaki = /^[0-9]{2}\-[0-9]{3}$/;
    kod = document.formularz.kod.value.match(znaki);
    if (kod == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawny kod pocztowy";
        return false;
    }
	
    znaki = /^[a-zA-ZćęłńóźżąĆĘŁŃÓŹŻĄ0-9]{3,30}$/;
    ulica = document.formularz.ulica.value.match(znaki);
    if (ulica == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawną ulicę";
        return false;
    }
	
    znaki = /^[0-9999A-Za-z]{1,7}$/;
    nrdomu = document.formularz.nrdomu.value.match(znaki);
    if (nrdomu == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawny numer domu";
        return false;
    }
	
    znaki = /^[0-9]{9}$/;
    nrtelefonu = document.formularz.nrtelefonu.value.match(znaki);
    if (nrtelefonu == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawny numer telefonu";
        return false;
    }
	
    znaki = /^[0-9a-zA-Z._-]{3,25}\@[0-9a-zA-Z._-]{5,20}$/;
    email = document.formularz.email.value.match(znaki);
    if (email == null) 
	{
		document.getElementById("wynik").innerHTML = "Proszę podać poprawny adres email";
        return false;
    }
	
    var x=document.getElementById("wojewodztwo").value;
    if (x == "0") 
	{
		document.getElementById("wynik").innerHTML = "Proszę wybrać województwo";
        return false;
    }
	
	document.write("Dane zostały wysłane!<br>"+imie+"<br>"+nazwisko+"<br>"+x+"<br>"+miejscowosc+"<br>"+ulica+"<br>"+nrdomu+"<br>"+kod+"<br>"+nrtelefonu+"<br>"+email+"<br>");
}