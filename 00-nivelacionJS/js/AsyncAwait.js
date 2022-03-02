//todos los async se convierten en promesas, la función async lo que hace es dejar la respuesta en espera hasta que se ejecute la función

const peticion = async () => {
    setTimeout(() => {
        const datos = {
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        }

        console.log(datos);
    }, 1000);
}

peticion().then(console.log);