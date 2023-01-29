import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';
import {useEffect, useState} from 'react';

const PrivateRoutes = () => {
  
  const [token, setToken] = useState({isTokenVerified: false,
  loaded: false});

  useEffect(() => {
    var cookie = new Cookies().get("session")
    if(cookie !== undefined){
    axios.post("http://localhost:8080/auth/check", null, {
        headers: {
          'Authorization': `Bearer ${cookie.accessToken}`
        }
      }).then(response => {
        setToken({isTokenVerified: response.data.isTokenVerified, loaded: true}); 
        console.log(response.data.isTokenVerified)})
      .catch(error => console.log('Something went wrong'));
    } else setToken({isTokenVerified: token.isTokenVerified, loaded: true})

  }, []);
  


  return (
      !token.loaded ? null :
      token.isTokenVerified ? <Outlet/> : <Navigate to='/login'/>
      
  );
}

export default PrivateRoutes;
