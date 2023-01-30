import React, {useEffect, useState} from 'react'
import Footer from '../footer/Footer'
import UserNavbar from '../navigation/UserNavbar'
import Products from './fetchers/products';
import { Outlet } from 'react-router-dom';
import GetUser from './fetchers/getUser';
import axios from 'axios'
import Cookies from 'universal-cookie';

const Shopping = () => {
  const products = Products();
  const [cart, setCart] = useState([]);
  const user = GetUser();
  const handleClickCart = (item) => {
    const cookies = new Cookies()

    setCart([...cart, item]);

    if(cart.length === 0){
      localStorage.setItem('cart', JSON.stringify(item))
    }else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  };  

  useEffect(() => {

  }, [cart])
  

  return (
    <div className='d-flex flex-column min-vh-100'>
    <UserNavbar cartContent={cart}/>
        <Outlet context={{ products:products, handleClick: handleClickCart, cart: cart, user: user}}/>
    <Footer/>
    </div>
  )
}

export default Shopping