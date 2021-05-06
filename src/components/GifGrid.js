import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

export const GifGrid = ({categoria}) => {


    //Hook 
    const [images, setimages] = useState([])
    
    // Hook
    useEffect(() => {  
      getGifs();   
    }, []) //obj: no ejecutar cuando se reinizialize componete respecto a useState 

     console.log('this Categories',categoria)
    const getGifs = async () => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=Qy9DqLL5slh4KvhGYxzLOaFFZFOpXDFz`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      
      /* data trae mucha infs que ami no me interesa , por ello hacer uso de map para crear objeto solo con infs que me interesa */
      const gifs = data.map( img =>{
         return {
            id: img.id,  //Extraer
            title: img.title,
            url: img.images?.downsized_medium.url
            
         }

      })
      setimages(gifs);
      console.log(gifs);

    }

  
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
