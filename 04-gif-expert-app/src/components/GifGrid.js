import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem  from './GifGridItem'
// import getGifs from '../helpers/getGifs'

const GifGrid = ({ category }) => {

    // Custom Hook creado por nosotros. Desestructurado.
    const { data:images, loading} =  useFetchGifs( category ); 

    
    /*
    const [ count, setCount ] = useState(0);
    const [title, setTitle] = useState([])    
    
    const [images, setImages] = useState([])
    
    // Si cambia category se volvería renderizar todo.
    */


return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            keyy={ img.id } 
                            img={ img }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;