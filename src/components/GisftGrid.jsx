import PropTypes from 'prop-types'
import {GiftGridItem} from './GiftGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GisftGrid = ( {categoria} ) => {



    const { imagen, isLoading} = useFetchGifts ( categoria);

  return (
    <>
      <h3> { categoria } </h3>
      {
          isLoading && (<h2> Cargando...</h2>)
          
      }
      <div className='card-grid'>
      
          { imagen.map( ( img ) =>{ 
              return  <GiftGridItem 
                          key = {img.id}
                          { ...img }/> 
              })}   

      </div>
    </>
  )
}

GisftGrid.propTypes = {}

//export default GisftGrid