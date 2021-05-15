import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



/* Function component */
const GifExpertApp = () => {

  
   // Hook useState , dar variable de estado al componente de fincion, asi cualquier cambio se renderiza componente ,
   const [categories, setCategories] = useState(['Dragon Ball']);

   
   return(
     <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={setCategories}  />
        

        <hr />
          
        <ol>
          {
            categories.map( category  => (
               <GifGrid
                       key={category} 
                       categoria={category} 
                        
               /> 
            ))
         }
        </ol>   
       
     </>

   );

}




export default GifExpertApp;





















