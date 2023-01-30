import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddProductToCategory = () => {
  const [variants, setVariants] = useState([]);
  const [pickedVariant, setPickedVariant] = useState(1);
  const [products, setProducts] = useState([]);
  const [pickedProduct, setPickedProduct] = useState(1);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8080/variants")
    .then(response => setVariants(response.data));
    axios.get("http://localhost:8080/products")
    .then(response => setProducts(response.data));
  }, [])

  
  const handleControlChange = (event) => {
    setPickedVariant(event.target.value);
  }

  const handleControlChangeProducts = (event) => {
    setPickedProduct(event.target.value);
  }

  const handleOnSubmit = () => {
    axios.post("http://localhost:8080/variant", null, {
      params: {
        variantId: pickedVariant,
        productId: pickedProduct
      }
    }).then(response => {

        setStatus(true);
        console.log("Added")

    }).catch(err => console.log("Something went wrong."))
  }

  useEffect(() => {
    console.log(`Wariant: ${pickedVariant} produkt: ${pickedProduct}`)
  }, [pickedProduct, pickedVariant])
  useEffect(() => {
  }, [status])
  useEffect(() => {
    setStatus(false);
  }, [])
  return (
    variants && 
    <div className='container mx-auto'>
        <div className='d-flex justify-content-center row'>
          {
            status && 
            <div class="alert alert-success  text-center" role="alert">
            Produkt został pomyślnie dodany do kategorii.
            </div>
          }
          <h3 className='mb-2'>Dodaj produkt do kategorii</h3>
          <select className="form-select mb-2" defaultValue={0} onChange={handleControlChange} size="3" aria-label="size 3 select example">
            {
              Array.from(variants).map(variant => {
                return <option key={variant.id} value={variant.id}>{variant.name}</option>
              })
            }
          </select>
          <h3 className='mb-2'>Produkty</h3>
          <select className="form-select mb-2" defaultValue={0} onChange={handleControlChangeProducts} size="3" aria-label="size 3 select example">
            {
              Array.from(products).map(product => {
                return <option key={product.id} value={product.id}>{product.id} : {product.name}</option>
              })
            }
          </select>
          <button className='btn btn-outline-success' type="submit" onClick={handleOnSubmit}>Dodaj</button>
          
      </div>

    </div>

  )
}

export default AddProductToCategory