window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    //Para crear las franjas...
    //Crear las 05 Franjas que componen la bandera de Puerto Rico...
    //Las franjas imparares son rojas, las pares son blancas...
    //Rojo: "#ed0000"
    //Blanco: "white"
    //Para crear un rectángulo puede hacer uso de la función
    //context.rect(x, y, ancho, alto);
    //La posición inicial del primer rectángulo es: x = 50, y = 50
    //El ancho recomendado de los rectángulos es de 500
    //El alto recomenado de los rectángulos es de 50

    //Crear Cuadrado
    for (var i = 1; i < 6; i++) {
        if (i % 2 == 0) 
        {
            context.beginPath();
            context.rect(50, i*50, 500, 50);    
            context.fillStyle = "white";
            context.fill();
            context.stroke();
        }else{

            context.beginPath();
            context.rect(50, i*50, 500, 50);    
            context.fillStyle = "#ed0000";
            context.fill();
            context.stroke();
        }
    };
   
    //Crear el "triángulo" azul
    context.beginPath();
    context.fillStyle = "#0050f0";
    context.moveTo(50, 50);
    context.lineTo(350, 175);
    context.lineTo(50, 300);
    context.strokeStyle = "black";
    //context.stroke();
    context.fill();
   
    //Para crear la "estrella"...
    context.fillStyle = "white";
    context.lineWidth = 6;
        var X =150;
        var Y =180;
        var R = 50;                                 
        var L = 5;
        var paso = 2                                                                  
        var estrella= L / paso
        var rad = (2*Math.PI) / estrella;           
    context.beginPath();
        for( var i = 0; i < L; i++ )
            {
                x = X + R * Math.cos( rad*i );
                y = Y + R * Math.sin( rad*i );
                    context.lineTo(x, y);
            }
    context.closePath();
    context.stroke();
    context.fill();            
};
