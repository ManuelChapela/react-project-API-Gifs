import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

 
   
    const handleInputChange = (e) => {setInputValue(e.target.value);}
   
    const handleSubmit = (e) => {
        // e.preventDefault() --> Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        e.preventDefault();

        // .trim(borrar los espacios que tenga delante y detrás)
        if(inputValue.trim().length > 2){ 
       setCategories(cats => [ ...cats, inputValue  ]);
       
       // (sobre lo anterior) PARA QUE NO SE GUARDE EL ATRIBUTO ANTEIOR
       // setCategories(cats => [ inputValue  ]);

       // Para que se quede vacío
       setInputValue('');
        }
    }


return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                placeholder={inputValue}
                // value={inputValue}
                onChange={ handleInputChange }
            />   
        </form> 

    )
}

export default AddCategory; 