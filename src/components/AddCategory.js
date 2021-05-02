import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {  /* desestructurando props */
   
  /* use state , cambia valor inicial / valor por defecto  con valor actual */
   const [InputValue, setInputValue] = useState('') /* se inicializa con string vacio o valor de any type , undefined no */

   const handleInputChange = (e) =>{
      setInputValue(e.target.value);
     
   } /* InputValue Prop : siempre tendra ultimo valor que escribio la persona  */

   const handleSubmit = (e) =>{
       e.preventDefault()
  
    
       if(InputValue.trim().length > 2 ){
        setCategories(cats =>[...cats, InputValue]);
        setInputValue('');
       }

 
      
   }

  
   
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
