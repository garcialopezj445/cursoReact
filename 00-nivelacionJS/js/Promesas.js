//una promesa es una forma de trabajar con cosas que pueden ocurrir como no, una promesa termina siendo un código que promete resolver un problema en específico
const sumar = () => {
    return new Promise((resolve, reject) =>{ //resolve será la respuesta en caso de ser exitosa, reject será lo contrario
        if(a < 0 || b < 0){
            reject("Esto no es válido");
        }else{
            resolve(a + b);
        }
    });
};

const result = sumar(3, 5)
.then((res) =>{ //esta acción se ejecuta solo si se cumple la promesa
    document.write(res);
    //console.log(res);
})
.catch((error) =>{ //esto ocurre soo en caso de error
    document.write(error);
    //console.log(error); 
});

console.log(result);