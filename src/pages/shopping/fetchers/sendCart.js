import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SendCart = (product, user) => {
    const [res, setRes] = useState(null);

    var sendCart = async () => {
        await axios
          .post("http://localhost:8080/cart", null, {
            params: {
                clientId: user.id,
                productId: product.id
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
      
    useEffect(() => {
    sendCart();
    }, [])

  return res
}

export default SendCart