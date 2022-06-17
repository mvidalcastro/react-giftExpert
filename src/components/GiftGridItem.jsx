import React from 'react'
import PropTypes from 'prop-types'

//export const GiftGridItem = (imagen) => {
  export const GiftGridItem = ({id, title, url}) => {
   // const {id, title, url} = imagen;
  
  //console.log(id, title, url);
  return (
    <div className='card'>
        <p> { title } </p> 
        <img src= {url} alt = {title} />    
    </div>
  )
}

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired    
}

GiftGridItem.propTypesexprt  = {}

//export default GiftGridItem