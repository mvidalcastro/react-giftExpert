import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    /// manejadores de Eventos
    const handleInputChange = ( evento) => {
       // console.log(evento.target.value);
         setInputValue(evento.target.value);   
    }

    const OnSubmit =(evento) => {
     
        evento.preventDefault();

        if(inputValue.trim().length <= 1) return; //Si el texto digitado es mayor a 2 caracteres No lo agrega a la lista
            setInputValue('');
            console.log('Texto:', inputValue.trim())
            onNewCategory(inputValue.trim())
    }


    // const handleSubmit =(evento) => {
     
    //     evento.preventDefault();
    //     if(inputValue.trim().length > 2) //Si el texto digitado es mayor a 2 caracteres No lo agrega a la lista
    //     {
    //         setCategorias( cat => {
    //             return [inputValue, ...cat]
    //         })
    //         setInputValue('');

    //     }

    // }

  return (
    <form onSubmit={ (event) => OnSubmit(event) } aria-label ="form">
        <input
            type="text"
            value={ inputValue } 
            onChange= { (event) => {handleInputChange(event)}}/>
    </form>
  )
}

AddCategory.propTypes = {

  //  setCategorias: PropTypes.func.isRequired
}

//export default AddCategory