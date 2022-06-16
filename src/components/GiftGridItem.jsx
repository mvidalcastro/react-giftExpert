import React from 'react'
import PropTypes from 'prop-types'

export const GiftGridItem = (imagen) => {
  
    const {id, title, url} = imagen;
  
  //console.log(id, title, url);
  return (
    <div className='card'>
        <p> { title } </p>
        <img src= {url} alt = {title} />    
    </div>
  )
}

GiftGridItem.propTypesexprt  = {}

//export default GiftGridItem