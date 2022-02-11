import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { getGifs } from "../helpers/getGif"

export const useGifFetch = (category)=>{
    
    const [state, setState] = useState({

        data:[],
        loading: true

    })

    
    useEffect( ()=>{

        setTimeout( ()=>{
            
            getGifs(category)               //esto regresa una promesa del helpers
               .then( img => {
                   setState({
                       data:img,
                       loading: false
                   })
               })

        },1500 )
        
    
    },[category] )   //si la categoria cambia [vuelva a ejecutar la categoria]

    return state 

}



