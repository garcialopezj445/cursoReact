const saludo = () => {
    document.write("<li>hola mundo</li>");
}

document.write("<ul>");
    //esta función permite crear directamente un intervalo de tiempo
    setInterval(saludo, 2000); //se dice cada cuanto se va a ejecutar la función, esto de específica en milisegundos
document.write("</ul>");
