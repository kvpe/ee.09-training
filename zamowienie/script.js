
function fckbox1()
{
	if((document.getElementById("ch1").checked)==false)
		{
            document.getElementById("num1").disabled = true;
			document.getElementById("row2b").style.backgroundImage="url('pom2.jpg')";
			
		}
		else	
		{
			document.getElementById("num1").disabled = false;
			document.getElementById("row2b").style.backgroundImage="url('pom1.jpg')";
		}
}
function fckbox2()
{
	if((document.getElementById("ch2").checked)==false)
		{
            document.getElementById("num2").disabled = true;
			document.getElementById("row3b").style.backgroundImage="url('kap2.jpg')";
			
		}
		else	
		{
			document.getElementById("num2").disabled = false;
			document.getElementById("row3b").style.backgroundImage="url('kap1.jpg')";
		}
}
function fckbox3()
{
	if((document.getElementById("ch3").checked)==false)
		{
            document.getElementById("num3").disabled = true;
			document.getElementById("row4b").style.backgroundImage="url('mar2.jpg')";
			
		}
		else	
		{
			document.getElementById("num3").disabled = false;
			document.getElementById("row4b").style.backgroundImage="url('mar1.jpg')";
		}
}
function fckbox4()
{
	if((document.getElementById("ch4").checked)==false)
		{
            document.getElementById("num4").disabled = true;
			document.getElementById("row5b").style.backgroundImage="url('jab2.jpg')";
			
		}
		else	
		{
			document.getElementById("num4").disabled = false;
			document.getElementById("row5b").style.backgroundImage="url('jab1.jpg')";
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
