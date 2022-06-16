import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('Ingrese la búsqueda acá ...')
    
    /// manejadores de Eventos
    const handleInputChange = (evento) => {
       // console.log(evento.target.value);
         setInputValue(evento.target.value);   
    }
    const handleSubmit =(evento) => {

        evento.preventDefault();
        if(inputValue.trim().length > 2) //Si el texto digitado es mayor a 2 caracteres No lo agrega a la lista
        {
            setCategorias( cat => {
                return [inputValue, ...cat]
            })
            setInputValue('');

        }

    }

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
        <input
            type="text"
            value={ inputValue } 
            onChange= { (event) => {handleInputChange(event)}}/>
    </form>
  )
}

AddCategory.propTypes = {

    setCategorias: PropTypes.func.isRequired
}

//export default AddCategory