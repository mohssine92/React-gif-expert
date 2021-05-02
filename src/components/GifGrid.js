import React from 'react'

export const GifGrid = ({category}) => {

  
   
    const getGifs = async () => {
      const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=12&api_key=Qy9DqLL5slh4KvhGYxzLOaFFZFOpXDFz';
      const resp = await fetch(url);
      const { data } = await resp.json();
      
      /* data trae mucha infs que ami no me interesa , por ello hacer uso de map para crear objeto solo con infs que me interesa */
      const gifs = data.map( img =>{
         return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            
         }

      })
      console.log(gifs)

    }

    getGifs();


    return (
        <>
            <h3>{category}</h3> 
        </>
    )
}


export default GifGrid;
