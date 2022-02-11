import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertapp = () => {

    const [categories, setCategories] = useState([]);
  
    
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategorie={setCategories} /> 
            <br /><br /><br />
            
            
            
            <div>
                {
                    categories.map( serie =>( 
                        <GifGrid 
                            key={serie}
                            category={serie} 
                        />
                        
                        // <li key={serie} > {serie} </li>   opcion para mostrar una lista
                ))
                }

            </div>
    
        </>)
};











// const GifExpertApp2 = ()=>{
//     //PRIMER EJEMPLO DE COMO HACER LA APLICACION
//     const [categories, setCategories] = useState(['One Punch','Samuray X','Dragon Ball']);
  
//     const handleAdd =   ()=>{
//         setCategories( (series)=> [...series, 'Nueva Categoria'] )
//         /* Otra forma de hacerlo */
//         // setCategories( [...categories,'Nueva Categoria'] )
//     }
//     return <>
//             <h2>Gif Expert App</h2>
//             < hr/ >
//             <button onClick={handleAdd}>Agregar Categoria</button>
//             <h3>Categories</h3>
//             <ol>{
//                     categories.map( elemento => {    //recibe como argumento (elemento, indice)
//                         return <li key={elemento} > {elemento} </li>                      
//                     })
//                 }
//             </ol>
//             </>

// }







