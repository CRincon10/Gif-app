import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useGifFetch } from '../hooks/useGifFetch'

const GifGrid = ({category}) => {
  
    const {data:images,loading } = useGifFetch(category)
    
    return (
    <>
        <h3>{category}</h3>
        {loading && <p className='animate__animated animate__flash'>Loading...</p> }

        <div >

            <div className='card-grid'>{
                    images.map( gif=>(
                        <GifGridItem 
                            key={gif.id}
                            {...gif}  //mando como argimento cada una de las propiedades de forma independiente con el operador spread 
                        />
                    ))
            }

            </div>
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.any
}

export default GifGrid





