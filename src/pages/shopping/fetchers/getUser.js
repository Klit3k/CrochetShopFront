import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';

const GetUser = () => {
    const [res, setResp] = useState(null);

    var getById = async () => {
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
                    order.status = "Oczekiwanie na płatność";
                    break;
                  case 'COMPLETED':
                    order.status = "Zrealizowane";
                    break;
                  case 'CANCELED':
                    order.status = "Anulowane";
                    break;
                }
              })
            setResp(response.data)
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
    
    };
      
    useEffect(() => {
        getById();
    }, [])

    return res;
}

export default GetUser