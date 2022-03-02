const peticion = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   const data = await response.json(); // con el await no permitimos que el código avance hasta que se resuelva la linea de código pedida
   return data;
}
