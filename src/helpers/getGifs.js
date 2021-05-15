

  
    export const getGifs = async (categoria) => {
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
       
        return gifs;
      
       
  
    }
  