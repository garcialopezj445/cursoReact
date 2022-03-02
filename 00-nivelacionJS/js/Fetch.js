fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => { //se debe utilizar el .then para obtener el objeto y es necesario una promesa para la función
       return response.json(); //traemos la promesa que la convierte en json
    })
    .then((data) => { //con esta data imprimimos la información que traemos
        console.log(data);
    })