export const operaciones = (numeros, setNumeros) => {
    const {numero1, numero2} = numeros;

    const handleChange = (e) => {
        setNumeros({
          ...numeros, //guarda la información ya tenida y modifica unicamente lo que se cambia
          [e.target.name] : parseFloat(e.target.value)
        });
    }
    
    const sumar = () => numero1 + numero2;
    const resta = () => numero1 - numero2;
    const mult = () => numero1 * numero2;
    const div = () => numero1 / numero2;
    
    return {handleChange, sumar, resta, mult, div, numero1, numero2};
}
