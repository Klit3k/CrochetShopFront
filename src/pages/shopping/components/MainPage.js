import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Products from '../fetchers/products'
import { useOutletContext } from "react-router-dom";
import { EmojiSmile } from 'react-bootstrap-icons'; 
const MainPage = () => {
    const { products, handleClick, cart} = useOutletContext();

    
    return (
        <div className="Home mb-5">
            {Array.from(products).length === 0 ? (
                <div className='container mt-4'>

                <div className='d-flex justify-content-center text-center '>
                    <b>Wszystkie produkty zostały wyprzedane. <br/> Zapraszamy później <EmojiSmile/> </b>
                </div>
        
             </div>
            ) : (
                <div className="container mt-4">
                    <div className="row g-6 d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <h4>Dostępne produkty ({products.length})</h4>
                        </div>
                            {Array.from(products).map((product) => (
                                <Cards key={product.id} product={product} handleClick={handleClick} cart={cart}/>
                            ))}
                        </div>
                    </div>
            )}
        </div>
    )
}

export default MainPage
