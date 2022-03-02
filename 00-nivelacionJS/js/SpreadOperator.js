const frutas = ["manzana", "uva", "melone"];
const citricos = ["naranja", "limón", "toronja"];

//con srpead creamos una constante que nos permite crear una copia de los dos array y unirlos
const nuevo = [...frutas, ...citricos];
document.write(nuevo);