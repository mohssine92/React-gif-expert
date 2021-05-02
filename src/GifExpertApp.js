import React, { useState } from 'react';
import AddCategory from './components/AddCategory';



/* Function component */
const GifExpertApp = () => {

  

  /* Hooke useState :Forma  para decirle a React tuvo cambio , vuelva a renderizar componente ,  */
   const [categories, setCategories] = useState(['One Puch','Samurai X', 'Dragon Ball']);

   // const handleAd = () => {
      /*  setCategories([...categories, 'Goku']);*/
   //  setCategories( cats =>[...cats, 'Goku']);
   // }
 


   return(
     <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={setCategories}  />
        

        <hr />
          
        <ol>
          {
            categories.map( category  => {
               return <li key={ category }>{ category }</li>
            })
         }
        </ol>   
       
     </>

   );

}




export default GifExpertApp;