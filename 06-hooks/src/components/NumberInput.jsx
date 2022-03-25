import React, { useState } from 'react';
import Resultado from './Resultado';
import PropTypes from 'prop-types';
import { operaciones } from '../helpers/Operaciones';

const NumberInput = () => {

  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0
  });

  const {handleChange, sumar, resta, mult, div, numero1, numero2} = operaciones(numeros, setNumeros)

  return (
      <>
        <label className="mx-2">
            Número1:{""} <input name='numero1' value={numero1} onChange={handleChange} type="number"></input>
        </label>

        <br />

        <label className="mx-2">
            Número2:{""} <input name='numero2' value={numero2} onChange={handleChange} type="number"></input>
        </label>

        <br />
        <br />

        <Resultado operacion='suma' calculo={sumar()}/>
        <Resultado operacion='resta' calculo={resta()}/>
        <Resultado operacion='multiplicacion' calculo={mult()}/>
        <Resultado operacion='division' calculo={div()}/>
      </>
  );
}

NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput