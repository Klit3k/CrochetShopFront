import React, { useEffect, useState } from 'react'
import { NavLink, useOutletContext } from "react-router-dom";
import { CheckSquareFill } from 'react-bootstrap-icons';
const Cards = ({product, handleClick}) => {
  const { cart } = useOutletContext();

  const [state, setState] = useState({
    disabled: false
  });
  const [buttonText, setButtonText] = useState("Dodaj do koszyka");

  useEffect(() => {

    if(cart.includes(product)){
      setState({disabled: true});
      console.log("git")
      setButtonText(<><CheckSquareFill size={20}/></>)
    }

  }, [cart])
  
  
  return (
    <>
    {      
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card mt-4">
            <NavLink to={'product/'+product.id}>
              <img src={"data:image/png;base64,"+product.image.file} alt={product.image.name} className="card-img-top"></img>
            </NavLink>
            <div className="card-body">
              <h5 className="card-title text-center">{product.name}</h5>
              <p className="card-text text-center">{product.price} zł</p>
            <div className="mx-auto d-flex justify-content-center">
              <NavLink to={'product/'+product.id} className="btn btn-outline-dark btn-sm mx-1">Zobacz opis</NavLink>
              <button onClick={() => { handleClick(product);}} disabled={state.disabled} className="btn btn-outline-success btn-sm mx-1">{buttonText}</button>
            </div>
            </div>
          </div>
        </div>
    }
  </>
  )
}

export default Cards