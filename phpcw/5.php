<?php
print("<table border=1 cellpadding=1 cellspacing=1>");
$r=255;
$g=1;
$b=1;
for ($wys = 1; $wys <= 10; $wys++)
{
	print("<tr>\n"); 
	for ($szer = 1; $szer <= 10; $szer++) 
	{
		$g=$g+$szer/3;
		$b=$b+$wys/3;
		print("<td style=\"background-color:rgb(".$r.", ".$g.", ".$b.");\">\n");		
		print($szer * $wys);
		print("</td>\n");
	}
	print("</tr>\n");
}
	print("</table>");
?>