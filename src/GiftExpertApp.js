
import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import AddCategory from './components/AddCategory';
//import GisftGrid from './components/GisftGrid';
  import { AddCategory, GisftGrid} from './components' 
const GiftExpertApp = props => {
   
     const [categorias, setCategorias] = useState(['Simpsons']);

     return <>             
               <h2> GiftExpertApp</h2>                  
               <AddCategory setCategorias = { setCategorias }/>
               <br />
               
               <ol>
                  {
                     categorias.map( (categoria, index)  => { 
                     return <GisftGrid 
                              key = {categoria}
                              categoria = {categoria}                              
                              />
                     })
                  }
               </ol> 
               

            </>
}



GiftExpertApp.propTypes = {}

export default GiftExpertApp