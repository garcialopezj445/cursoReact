import React from 'react';

const Contador = (/*props*/ {inicial, factor}) => { // otra forma de usar las props
    const [contador, setContador] = React.useState(/*props.*/inicial);

    const aumentar = () => {
        //comparamos el estado actual y le sumamos uno, esto en algunos caso es necesario ejecutarlo así, es una alternativa diferente de hacaer lo mismo
        setContador((actual) => actual + /*props.*/factor);
    }

    const disminuir = () => {
        setContador(contador - /*props.*/factor);
    }

    return (
        <div>
            <h1>
                Contador: {contador}
            </h1>

            <hr />

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
}

export default Contador;

