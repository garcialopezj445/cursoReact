//forma uno
function sumar(a, b){
    document.write(a + b);
}

sumar(5, 3); // result = 8


//forma dos
function sumar2(a, b){
    return(a + b);
}

const result2 = sumar2(4, 5);
document.write(result2); // result = 9


//forma tres (más seguro contra hackeos, debido a la constante)
const sumar3 = (a, b) => {
    return a + b;
}

const result3 = sumar3(2, 5);
document.write(result3); // result = 7


//forma tres (segunda alternativa)
const sumar3alt = (a, b) =>  a + b; //esto puede llegar a optimizar más el código

const result3alt = sumar3alt(1, 5);
document.write(result3alt); // result = 6