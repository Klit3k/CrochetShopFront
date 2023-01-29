import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SubmitOrder = (user) => {
    const [res, setRes] = useState(null);

    var submitOrder = async () => {
        await axios
          .post("http://localhost:8080/order", null, {
            params: {
                clientId: user.id,
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
        submitOrder();
    }, [])

  return res
}

export default SubmitOrder