window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    //Circulo...
    context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 200, 0, Math.PI * 2);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "black";

    //Líneas guía, no se deben mostrar una vez este el logo terminado...
    context.beginPath();
    context.fillStyle = "black";
    context.moveTo(300, 50);
    context.lineTo(250, 220);
    context.lineTo(130, 345);
    context.lineTo(300, 290);
    context.lineTo(465, 350);
    context.lineTo(350, 220);
    context.lineTo(300, 50);
    context.fill();
    //context.lineTo(x, y);
    context.stroke();
   
    //Fin de las líneas Guía...

    //Crear el símbolo de Mercedes-Benz,
    //haciendo uso de lineTo();
    //Para establecer el relleno de la figura se hace uso de context.fill(),
    //Para cambiar el color de relleno se ha ce uso de context.fillStyle = "black";
    //Para dar color a una línea se hace uso de context.strokeStyle = color;
    //Para mostrar la línea se hace uso de context.stroke(), si no se establece, no se moestrará línea...

    context.font = "65px times new roman";
    context.fillText("Mercedes-Benz", 100, 530);
};
