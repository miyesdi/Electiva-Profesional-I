var debug = "";
window.onload = function()
{

function calcularAreaCirculo()
{
	var r=document.getElementById("radio").value;
	r=r.toString().replace(',','.');
	if(radio==""){
			document.getElementById("Circulo").innerHTML="Por favor introduzca el radio del Circulo.";
	}
	else if(radio<0){
			document.getElementById("Circulo").innerHTML="No puede ser negativo.";
	}
	else{
			document.getElementById("Circulo").innerHTML="";
			var area=0;
			area=r*r*3.14159265358979323;
			document.getElementById("area").value=Math.round(area*100)/100;
	}
}

	








	
}
