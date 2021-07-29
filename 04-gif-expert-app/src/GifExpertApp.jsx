import React, {useState} from 'react'
import  AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'



 const GifExpertApp = () => {

    const [categories, setCategories] = useState(['' ])
    
    // const handleAdd = () => {
    //     setCategories([...categories, "Olympus Pen F"]) 
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp