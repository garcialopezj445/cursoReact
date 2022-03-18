import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({operacion, calculo}) => {
  return (
    <>
        <span>{operacion}: {calculo}</span>
        <br />
    </>
  )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado