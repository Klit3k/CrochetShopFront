import Cookies from 'universal-cookie';
import {  Navigate } from "react-router-dom";
import { useEffect} from 'react';

function Logout() {

    useEffect(() => {
        new Cookies().set("session", null, {maxAge: -1})
      }, []);

    return (
        <Navigate to='/'/>
    );
  }
  export default Logout;
  