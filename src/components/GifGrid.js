import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({categoria}) => {


    //Hook 
    const [images, setimages] = useState([])
    
    // Hook
    useEffect(() => {  
      getGifs(categoria)
        .then( setimages ); // optimizacion unico argumento recibido y disparado 
       
        // pero si cambia estado de categoria si permita ejecutar codigo del scope , tambien despus de actualizacion del dom 
    }, [categoria]) // no ejecutar cuando se reinizialize componete respecto a useState de este componente .

   
  
    console.log('GridRenderizado')

    return (

        <>
        <h3>{categoria}</h3>

        <div className='card-grid'>
            
              {
               images.map( ( img ) => (
                   <GifGridItem
                      key={ img.id }
                      {...img } //objeto abierto se accede a las variables del objeto de forma independiente
                   />
               ))
              } 
              
        </div>
       </>   
    )
}


export default GifGrid;
