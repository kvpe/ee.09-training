function fckbox(a,b,c,d,e)
{
	if((document.getElementById(a).checked)==false)
		{
            document.getElementById(b).disabled = true;
			document.getElementById(c).style.backgroundImage=d;
			
		}
		else	
		{
			document.getElementById(b).disabled = false;
			document.getElementById(c).style.backgroundImage=e;
		}
}

function fwyslij()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var num4=document.getElementById("num4").value;
if ((num1<=50) && (num2<=15) && (num3<=20) && (num4<=30))
{
	var imie=document.getElementById("imie").value;
	var nazwisko=document.getElementById("nazwisko").value
	var email=document.getElementById("email").value
	var ini=document.getElementById("imie").value.substr(0,1)+document.getElementById("nazwisko").value.substr(0,1);
	var wszystko="Zamówienie"+"<br/>"+ini+"<br/>"+imie+" "+nazwisko+"<br/>"+email+"<br/>"+"pomidor:"+num1+"kg"+"<br/>"+"kapusta:"+num2+"kg"+"<br/>"+"marchewka:"+num3+"kg"+"<br/>"+"jabłko:"+num4+"kg";
	document.getElementById("box").innerHTML=wszystko;
}
else
{
	alert("brak na stanie");
}
}
