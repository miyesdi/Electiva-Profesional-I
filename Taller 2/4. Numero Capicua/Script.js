window.onload = function()
{
	var	p = new String (prompt('Ingrese numero para calcular si es un numero capicua','').toLowerCase());
	String.prototype.reverse=function(){return this.split("").reverse().join("");}
    var i = p.reverse();
    if (p == i) 
    { 
    	alert("La palabra '"+ p +"' SI es capicua.");
    	return(true);
    }
    else {
    	alert("La palabra '"+ p +"' NO es capicua: '"+ i +"'");
     	return(false); 
    } 
}
