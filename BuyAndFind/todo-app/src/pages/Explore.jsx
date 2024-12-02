import React, { useEffect, useState } from 'react'
import axios from "axios";



export default function Explore() {
    const[products, setProducts] = useState([])

    useEffect(() =>{
        axios.get('https://ucl-api.vercel.app/api/api/clubs')
        .then((response) => {
            setProducts(response.data.data)
        })
        .catch((error) => {
            console.error(error)
        })
    },[products]);

  return (
    <>
    {products ?
    <div classame="row">
        {products.map((product)=>{
            return(
            <div className='col'>
                <p>{product.club_name}</p>
                {/* <img src={product.club_logo} alt="" /> */}
            </div>
            )
        })}
    </div>
        : "kasskaksjak"}
        </>
  )
}
