import React from 'react'

const GifGridItem = ( {img, keyy} ) => {

    console.log( keyy, img );
    
    return (
        // CLASSNAME QUE PERMITE HACER EFECTOS ANIMADOS
        <div className="card animate__animated animate__bounce">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}



export default GifGridItem;
