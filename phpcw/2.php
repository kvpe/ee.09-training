<?php
print("<table border=1 cellpadding=1 cellspacing=1>");
for ($wys = 1; $wys <= 100; $wys++)
{
	print("<tr>\n"); 
	for ($szer = 1; $szer <= 100; $szer++) 
	{   if($szer%2==0)
		{
		print("<td style=\"background-color:green;\">\n"); 
		print($szer * $wys);
		print("</td>\n");
		}
		else
		{
		print("<td>\n"); 
		print($szer * $wys);
		print("</td>\n");
		}
	}
	print("</tr>\n");
}
	print("</table>");
?>