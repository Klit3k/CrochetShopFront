import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ShowCategory = () => {
  const [variants, setVariants] = useState([]);
  const [pickedVariant, setPickedVariant] = useState(1);
  const [variantProducts, setVariantProducts ] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/variants")
    .then(response => setVariants(response.data));
  }, [])

  useEffect(() => {

    axios.get("http://localhost:8080/variant-products", {params: {variantId: pickedVariant}})
    .then(response => setVariantProducts(response.data));

  }, [pickedVariant])
  
  const handleControlChange = (event) => {
    setPickedVariant(event.target.value);
  }
  return (
    variants && 
    <div className='container mx-auto'>
        <div className='d-flex justify-content-center row'>
          <div>
            <h3>Kategorie</h3>
          </div>
          <select className="form-select" defaultValue={0} onChange={handleControlChange} size="3" aria-label="size 3 select example">
            {
              Array.from(variants).map(variant => {
                return <option key={variant.id} value={variant.id}>{variant.name}</option>
              })
            }
        </select>
        <div className='mt-3 text-center'>
          <h3>Produkty</h3>
          <hr/>
          <div className='mt-3 row'>
                <table className="table table-striped">
                  <th scope="col">
                    ID
                  </th >
                  <th scope="col">
                    Nazwa
                  </th>
                  <th scope="col">
                    Cena
                  </th>
        {
          variantProducts && Array.from(variantProducts).map(product =>{
            return (
              <>
             
                  <tr>
                    <td>
                    {product.id}
                    </td>
                    <td>
                    {product.name}
                    </td>
                    <td>
                      {product.price} zł
                    </td>
                  </tr>
                
              </>
            )
          })
        }
        </table>               
           </div>
        </div>
      </div>
    </div>

  )
}

export default ShowCategory