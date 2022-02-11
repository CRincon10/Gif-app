import React, { useState } from 'react';
import propTypes from 'prop-types';

const AddCategory = ({setCategorie}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue( e.target.value )
    }

    const handleSubmit = (e)=>{    // evento enter
        e.preventDefault()
        
        if( inputValue.trim().length > 2){
            setCategorie( (categoria)=> [inputValue,...categoria])    //categoria la recibe el setcategorie en la desestructuracion en el GifExpertApp
            setInputValue('')
        }
    }
    
    return (
            <form onSubmit={handleSubmit}>
                

                <div id="container-1">
                    
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={handleInputChange}  
                        id="search" 
                        placeholder="Search..." 
                    />
                </div>
                
            </form>
        )
}




AddCategory.propTypes = {

    setCategorie: propTypes.func.isRequired
        
};

export default AddCategory;
