const evaluar = () => {
    const edad = prompt("Cuál es tu edad?");

    if(edad < 18){
        alert("Menor de edad");
        return
    }else{
        alert("Mayor de edad")
    }
};

//permite mandarle igual que al intervalo un callback y cuánto tiempo va a tardar para ejecutarla, sin embargo este timeout lo va a ejecutar una vez
setTimeout(evaluar, 2000);