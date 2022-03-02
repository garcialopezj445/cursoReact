//creación del array
const numeros = [1, 2, 3, 4];

//forma básica de recorrer el array, acá estamos recorriendo simplemente las pocisiones del array
document.write("<ul>");
    for(numero in numeros){
        document.write("<li>")
            document.write(numero)
        document.write("</li>")
    }
document.write("</ul>");

//segunda forma de recorrer el array, en este ejecutamos la función map, i es el indice, este se puede usar para ubicarnos donde queramos en el array
document.write("<ul>");
    numeros.map((number, i) => {
        document.write("<li>" + number + "</li>")
    })
document.write("</ul>");