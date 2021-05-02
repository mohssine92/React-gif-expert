import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



/* Function component */
const GifExpertApp = () => {

  
  /* Hooke useState :Forma  para decirle a React tuvo cambio , vuelva a renderizar componente ,  */
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
                       category={category} 
                        
               /> 
            ))
         }
        </ol>   
       
     </>

   );

}




export default GifExpertApp;





















