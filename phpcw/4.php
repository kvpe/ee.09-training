<?php
print("<table border=1 cellpadding=1 cellspacing=1>");
for ($wys = 1; $wys <= 10; $wys++)
{
	print("<tr>\n"); 
	for ($szer = 1; $szer <= 10; $szer++) 
	{   if(($szer * $wys)%2==0)
		{
		print("<td style=\"background-color:red;\">\n"); 
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