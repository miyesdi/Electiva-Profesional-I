var objetivo = 1; //numero objetivo
var cantHelp = 3; //cantidad de ayudas
var mins = 0; //minutos
var segs = 0; //segundos

window.onload = function() // se ejecuta cuando el html ha cargado
{
	tiempo(); //llama la función tiempo
	var control = 0; //variable para acceder al indice de los numeros desordenados
	
	//crea numeros ordenados del 1 al 121
	var desordenados = [];
	var aleatorios = 0;
	for (var i = 1; i <= 121; i++)
	{
		desordenados[i-1] = i;
	}

	//desordena los numeros creados basado en  el ordenamiento burbuja
	for (var i = 0; i < desordenados.length; i++)
	{
		aleatorios = Math.floor(i*Math.random());
		temporal = desordenados[i];
		desordenados[i] = desordenados[aleatorios];
		desordenados[aleatorios] = temporal;
	}

	//crea una tabla de 11 filas por 11 columnas creando un boton en cada celda
	var colorCelda = "background-color: " + randomColor();
	var juego = "<table id='tabla'>";
	for(var i = 0; i < 11; i++)
	{
		juego += "<tr style='"+(colorCelda)+"' >";
		for(var j = 0; j < 11; j++)
		{
			//cada boton tiene un valor, un id, el evento click que llama a la funcion validarNum enviando el valor del boton y la clase boton			
			juego += "<td><input type='button'value='"+desordenados[control]+"' onclick = 'validarNum(this.value)' id = '"+desordenados[control]+"' class='boton'></td>";	
			control = control+1;		
		}
		juego += "</tr>";
	}
	juego += "</table>";

	nom_div("cuadronumeros").innerHTML = juego;	//imprime el juego en el cuadro del html
}

function validarNum(id)
{
	//verifica si el numero seleccionado es igual al objetivo que se busca
	if (id == objetivo)
	{	
		nom_div(id).className = "boton click"; //pone la clase boton y la clase clic al elemento seleccionado
		objetivo++; //aumenta en 1 el valor del objetivo para pasar el siguiente numero
		nom_div("objetivo").innerHTML = objetivo; //escribe el valor sumado en el label con id objetivo
	}
	if (objetivo == 122) //se gana el juego
	{
		clearTimeout(hora); //pausa el timeout llamado hora que se ha creado en la función tiempo
		alert("Juego terminado");
	}
}

function tiempo()
{
	var totalSeg = segs;
	var totalmins = mins;
	if (segs < 10)
	{
		// si los segundos son menores a 10 se concatena el literal 0  con el valor que tiene segs
		totalSeg = "0" + segs;
	}
	if (mins < 10)
	{
		// si los minutos son menores a 10 se concatena el literal 0  con el valor que tiene mins
		totalmins = "0" + mins;
	}
	nom_div("tiempo").innerHTML =  totalmins + ":"+  totalSeg;

	segs = segs + 1;
	if(segs == 60)
	{
		//si segs llega a 60 aumenta el valor de minutos en 1 y designa segs en 0 nuevamente
		mins = mins +1;
		segs = 0;
	}

	//generando una función recursiva llama nuevamente a la función tiempo despues de un segundo
	hora = setTimeout("tiempo()",1000);
}

function help()
{
	if (cantHelp > 0 )
	{
		nom_div(objetivo).className = "boton click";
		setTimeout("quitarhelp()",300);
		cantHelp--;
		nom_div("help").title = "ayudas: "+cantHelp;
	}	
}

function quitarhelp()
{
	nom_div(objetivo).className = "boton";
}

function nom_div(div){	return document.getElementById(div); }

var randomColor = function()
{
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
        };