import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';


export const GifGrid = ({categoria}) => {
    // Recuerda , si se cambia estado del compònente se renderiza de nuevo , si no queremos condicionar algun renderizacion usamos hook useEffect()
   
  
    // Custom Hook
    const { data:images , loading } = useFetchGifs(categoria);  // peticion Http
   
    return (

        <>
        <h3 className="animate__animated animate__hinge">{categoria}</h3>
        <div className="card-grid">
            { loading && <p className="animate__animated animate__fadeOut">Loading...</p>}
            {
                images.map( img =>(
                   <GifGridItem
                     key={img.id}
                     {...img} 
                   /> 
                ))
            }

        </div>

   
       </>   
    )
}


export default GifGrid;
