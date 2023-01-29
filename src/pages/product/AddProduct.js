import AdminNavbar from "../navigation/AdminNavbar";
import {useState} from 'react';
import axios from 'axios';


function AddProduct() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: ""
      });

    var addProductServer = async () => {
        var response = await axios.post("http://localhost:8080/product", null, {
            params: {
                name: product.name,
                description: product.description,
                price: product.price
            }
        })
        .then(response => {
          console.log(response);
        })
        .catch( err => {
          switch (err.response.status) {
            case 403:
                setProduct({
                    name: "",
                    description: "",
                    price: ""
                  });
              break;
            default:
              break;
         }
        });
        return response;
      };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setProduct({
          ...product,
          [event.target.name]: value
    })};
      
    const handleSubmit = (event) => {
        event.preventDefault();
        addProductServer();  
        setProduct({
          name: "",
          description: "",
          price: ""
        })      
    };

  return (
        <div className="container">
          <div className="mx-auto d-flex justify-content-center">
              <h3>Dodawanie nowego produktu</h3>
            </div>
          <div className="mx-auto ">
        <form onSubmit={handleSubmit}>
            <div className="mb-3 form-check col-3 mx-auto">
                <label htmlFor="name" className="form-check-label">Nazwa</label>
                <input type="text" name="name" onChange={handleInputChange} value={product.name} className="form-control"/> 
            </div>

            <div className="mb-3 form-check col-3 mx-auto">
                <label htmlFor="description" className="form-check-label">Opis </label>
                <textarea type="text" name="description" onChange={handleInputChange} value={product.description} className="form-control"/>
            </div>

            <div className="mb-3 form-check col-3 mx-auto">
                <label htmlFor="price" className="form-check-label">Cena</label>
                <input type="number" step={0.01} name="price" onChange={handleInputChange} value={product.price} className="form-control"/>
            </div>

             <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary ">Dodaj produkt</button>
            </div>
        </form>
        </div>
        </div>
  );
}
export default AddProduct;
