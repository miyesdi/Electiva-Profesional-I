window.onload = function()
{
	var con = 0;
	var	p = new String (prompt('Ingrese palabra para calcular el numero de vocales','').toLowerCase());
	for(var x=0 ; x < p.length;x++) 
	{ 	
 		if ((p.charAt(x)=='a') || (p.charAt(x)=='e') || (p.charAt(x)=='i') || (p.charAt(x)=='o') || (p.charAt(x)=='u'))
 		{
	    con++;
  		}
	}
	alert("La palabra " + p + " contiene " + con + " vocales");
}
