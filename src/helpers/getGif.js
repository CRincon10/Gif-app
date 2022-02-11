//PETICION FETCH

export const getGifs = async(category)=>{

    const url    = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=ROH58tILVnZon9MynnJoLLlrRUwwHEqC&limit=12`
    const resp   = await fetch(url)
    const {data} = await resp.json()

    const gifData = data.map ( ({id,title,images}) =>{
        //este map me va a retornar solo las propiedades de la {data} que yo necesito en este caso
        return{

            id:id,
            title:title,
            url: images?.downsized_medium.url

        }
    })

    
    return gifData
}

