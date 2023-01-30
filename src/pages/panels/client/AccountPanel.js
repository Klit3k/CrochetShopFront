import React from 'react'
import AccountNavbar from '../../navigation/AccountNavbar'
import UserNavbar from '../../navigation/UserNavbar'
import Footer from '../../footer/Footer'
import {useEffect, useState} from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios'
import { Outlet } from 'react-router-dom'
const AccountPanel = () => {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState([])
  const fetchClientId = async () => {
    setLoaded(false);
    var cookie = new Cookies().get("session")
    if(cookie == undefined) return;
    await axios.get("http://localhost:8080/client-by-email", {
            params: {
                email: cookie.email
            }
        })
        .then((response) => 
           {
            response.data.orders.map(order => {
              switch(order.status) {
                case 'PENDING':
                  order.status = "W trakcie realizacji";
                  break;
                case 'WAITING_FOR_CONFIRMATION':
                  order.status = "Oczekiwanie na potwierdzenie";
                  break;
                case 'COMPLETED':
                  order.status = "Zrealizowane";
                  break;
                case 'CANCELED':
                  order.status = "Anulowane";
                  break;
              }
            })
            setClient(response.data);
       }).catch(err => { 
            switch(err.response.status) {
                case 404:
                    console.log("User not found."+err)
                    break;
                default:
                    console.log("Something went wrong."+err)
                    break;
            }
       })
        setLoaded(true);
    };
    useEffect(() => {
      fetchClientId();
    }, [])
  return !loaded ? null :  (
  <div className='d-flex flex-column min-vh-100'>
    <UserNavbar/>
    <Outlet context={{client: client, loaded: loaded}}/>
    <Footer/>
    </div>)
}

export default AccountPanel