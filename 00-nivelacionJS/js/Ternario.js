//condicional normal

const cuenta= 10;
let mensaje;

if(cuenta < 0){
    mensaje = "No tiene saldo"
}else{
    mensaje = "Tiene saldo"
}

document.write(mensaje);


//condicional terario

let valor = 20;

const message = valor < 0 ? "Tiene saldo" : "No tiene saldo"