import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";





// customs hooks funcionan como se fueran funciones componente tambien tiene estado , puden tener efectos , reducer , contextos etc ...  
export const useFetchGifs = (category) => {
   
   //  Definir estado del Hook cutom
   const [state, setstate] = useState({
     data: [],
     loading: true   
   });



  // Hook de efecto , controlar ejecucuion del scope 
   useEffect(() => {
     getGifs(category)
        .then( imgs => {
        
            setstate({
              data: imgs,
              loading:false
            }); 
  
         
        })
      
    
   }, [category]) // condicion de ejecucion , primer renederizacion del hook y cualquier cambio en category 
   
   
  

   return state; // state sera mandada 2 veces en este caso 


}
