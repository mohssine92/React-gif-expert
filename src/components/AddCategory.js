import React, { useState } from 'react'

export const AddCategory = () => {
   
  /* use state , cambia valor inicial / valor por defecto  con valor actual */
   const [InputValue, setInputValue] = useState('Hola mundo')

   const handleInputChange = (e) =>{
      setInputValue(e.target.value);
      console.log(InputValue)
   } /* InputValue Prop : siempre tendra ultimo valor que escribio la persona  */

   const handleSubmit = (e) =>{
       e.preventDefault()

       console.log(InputValue);
      
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


export default AddCategory;
