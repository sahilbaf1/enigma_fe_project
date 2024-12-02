// make a counter to find out how many times the page is clicked

import React, { useState } from 'react'

export default function CountPage(){

    const [count, setCount] = useState(5)   

    const addCountByOne = () => (
        setCount(count + 1)
    )

    function colourSet (count) {
        if (count % 2 == 0){
            return "blue"
        }
        else {
            return "green"
        }
    }
        
    return (
        <>
        <button onClick = {addCountByOne}> Tambah </button>
        <p style = {{color : colourSet(count)}}> Counter = {count}</p>
        <p>This is from CountPage.jsx</p>
        </>
    )
}

