//un template-string no es más que una forma más sencilla de trabjar con impresiones
const nombre = "andrés"
const edad = new Date().getFullYear() - 2003;

console.log("Bienvenido" + nombre + " su edad es " + edad)

//utilizando estas comillas podremos uncluit variables, operaciones y funciones dentro de la misma cadena de texto
console.log(`Bienvenido ${nombre} su edad es ${edad}, hoy es ${new Date()}`.toUpperCase())