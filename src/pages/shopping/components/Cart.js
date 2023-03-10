import {Trash3Fill, ArrowRight, Send} from 'react-bootstrap-icons'
import { NavLink, useOutletContext } from 'react-router-dom';
import SendCart from '../fetchers/sendCart';
import GetUser from '../fetchers/getUser';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { redirect } from "react-router-dom";

export const Cart = () => {
  const { cart } = useOutletContext();
  const user = GetUser()
  const [res, setRes] = useState(null);
  const [redirectUri, setRedirectUri] = useState("");
  const [state, setState] = useState(false);
  const [reload, setReload] = useState(false);

  const handleRemoveFromCart = (product) => {
    var index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
    }  
    setReload(!reload);
  }
  const sendCart = async (userId, productId) => {
    await axios
      .post("http://localhost:8080/cart", null, {
        params: {
            clientId: userId,
            productId: productId
        }
      })
      .then((response) => {
        setRes(response.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 403:
            break;
          default:
            break;
        }
      });
  };

  const submitOrder = async () => {
    for (var prod of cart) {
      await sendCart(user.id, prod.id)
    }

    await axios
    .post("http://localhost:8080/order", null, {
      params: {
          clientId: user.id,
      }
    })
    .then(response => {       
      setRes(response.data);
      console.log("CONFIRMATION");
      window.location.replace(response.data.redirectUri)

    })
    .catch((err) => {
      switch (err.response.status) {
        case 403:
          break;
        default:
          break;
      }
    });
  };

  const handleSubmit =  () => {
    
    setState(false);
    submitOrder();
    console.log(redirectUri)
  
  }

  useEffect(() => {

  }, [state, reload])
  
  return (
   
    <>
    <div className="container mt-5 mb-5">
        <div className="mx-auto">
            <div>
                <h3> Koszyk </h3>
            </div>
            {   cart.length === 0 ? 
            <div className='container '>

                <div className='d-flex justify-content-center text-center '>
                    <b>Koszyk jest pusty. <br/> Zapraszamy do zakup??w</b>
                </div>
                    

            <div className='d-flex justify-content-center text-center mx-auto mt-3'>
                    <NavLink to=".." > <button className="btn btn-outline-success ">Powr??t</button> </NavLink>
                </div>
             </div>

            : <>
            <table className="table table-hover">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Produkt</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Usu??</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(product => {
                            return (
                            <tr className='text-center align-middle'>
                            <td className='col-md-3'>
                                {/* <img className='img-fluid img-thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSIIxN976Bcr6f8QU7mUM_f5DDbR-goMyMQ&usqp=CAU'/> */}
                                <img src={"data:image/png;base64,"+product.image.file} alt={product.image.name} className="img-fluid img-thumbnail"></img>
                            </td>
                            <td className='col-md-3 ' >{product.name}</td>
                            <td className='col-sm-2 '>{product.price} z??</td>
                            <td className='col-sm-1'><button  value={product.id} key={product.id} onClick={() => handleRemoveFromCart(product)} className='btn btn-outline-dark mb-3'><Trash3Fill/></button></td>
                            </tr>
                            )
                        })
                    
                    }
                </tbody>
            </table>
            
            <div className='d-flex justify-content-end'>
                <p>????czna kwota do zap??aty: <b> {cart.reduce((sum, product) => {return sum + product.price}, 0)} z??</b></p>
            </div>
            <div className='d-flex justify-content-end'>
            <button className='btn btn-success' onClick={handleSubmit}> Zam??w z obowi??zkiem zap??aty <ArrowRight className='mb-1' size={23}/> </button>
            </div>
            </>
            }
            
        </div>
    </div>
</>
  )
}
export default Cart
