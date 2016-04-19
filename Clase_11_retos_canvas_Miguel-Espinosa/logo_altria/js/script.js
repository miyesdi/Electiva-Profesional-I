window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.translate(135, 10);//Posición central del canvas...
    //Crear el código necesario para mostrar el logo de Altria
    //El cual consiste en una grilla de 5x5 con diferentes colores.
    //Hacer uso de la función randomColor()
    //Para crear un cuadrado puede hacer uso de la función
    //context.rect(x, y, ancho, alto);

    context.fillStyle = "#323465";
    context.font = "120px Arial";
    context.fillText("Altria", 40, 420);

    var a=1;
    for (var i = 1; i < 7; i++) 
    {
        if(i === 6 && a < 5)
        {
            a++; 
            i=1;
        }
        if(i != 6)
        {
            context.beginPath();
            context.rect(i*50, a*50, 50, 50);    
            context.fillStyle = randomColor();
            context.fill();
        }
    };
    
    function randomColor()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };
};
