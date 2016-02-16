window.onload = function()
{
	var con = 0;
	var	p = new String (prompt('Ingrese palabra para calcular el numero de consonantes','').toLowerCase());
	for(var x=0 ; x < p.length;x++) 
	{ 	
 		if ((p.charAt(x)=='b') || 
 			(p.charAt(x)=='c') ||
 			(p.charAt(x)=='d') || 
 			(p.charAt(x)=='f') || 
 			(p.charAt(x)=='g') || 
 			(p.charAt(x)=='h') || 
 			(p.charAt(x)=='j') ||
 			(p.charAt(x)=='k') || 
 			(p.charAt(x)=='l') || 
 			(p.charAt(x)=='m') || 
 			(p.charAt(x)=='n') ||
 			(p.charAt(x)=='ñ') || 
 			(p.charAt(x)=='p') || 
 			(p.charAt(x)=='q') || 
 			(p.charAt(x)=='r') || 
 			(p.charAt(x)=='s') ||
 			(p.charAt(x)=='t') || 
 			(p.charAt(x)=='v') || 
 			(p.charAt(x)=='w') ||
 			(p.charAt(x)=='x') || 
 			(p.charAt(x)=='y') || 
 			(p.charAt(x)=='z'))
 		{
	    con++;
  		}
	}
	alert("La palabra " + p + " contiene " + con + " consonantes");
}
