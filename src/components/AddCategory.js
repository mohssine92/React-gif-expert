import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {  /* desestructurando props */
   
  /* use state , cambia valor inicial / valor por defecto  con valor actual */
   const [InputValue, setInputValue] = useState('') /* se inicializa con string vacio o valor de any type , undefined no */

   const handleInputChange = (e) =>{
      setInputValue(e.target.value);  
      // console.log(InputValue)
     
   } /* InputValue ouede descir que es la variable de hook useState   */

   const handleSubmit = (e) =>{
       e.preventDefault()
  
    
       if(InputValue.trim().length > 2 ){
        setCategories(cats =>[InputValue, ...cats]); // ordena empujo primero la ultimo termino escrito 
        setInputValue('');
        console.log('añadido a la coleccion');
       }

 
      
   }
   console.log('Add renderizado ')
  
   
    return (
        
        
          <form onSubmit={handleSubmit}>

            <input
               type="text"
               value={InputValue}
               onChange={handleInputChange}
              
            />
            
         </form>
                 
    )
}


AddCategory.propTypes = {
 setCategories: PropTypes.func.isRequired

    
}
  

export default AddCategory;
