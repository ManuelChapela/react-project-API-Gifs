import React, {useState, useEffect} from 'react'
import getGifs from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

const [state, setState] = useState({
    data: [],
    loading: true
});    

// Se dispara el hook useState cada vez que cambie la categoria

useEffect(() => {
    getGifs(category)
        .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
        })
}, [ category ])

// setTimeout( () => {
//     setState({
//     data: [1,2,3,4,5],
//     loading: false
//     }) 
// }, 3000)


    return state; 

}
