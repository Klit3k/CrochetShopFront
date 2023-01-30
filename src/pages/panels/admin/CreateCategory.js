import {useState, useEffect} from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [alertInfo, setAlertInfo] = useState(false);
  const [alertGood, setAlertGood] = useState(false);
  const [reload, setReload] = useState(false);

  const [category, setCategory] = useState({name: ""});
 
  const handleSubmit = () => {
      if(category.name === "") {
          setAlertInfo(true);
          setAlertGood(false);
      } else {
        axios.post("http://localhost:8080/variant-create", null, {
          params: {
            variantName: category.name
          }
        }).then( response =>{
          if(response.status === 200){
            setAlertInfo(false);
            setAlertGood(true);
            setReload(!reload);
          }
        }
        ).catch(err => console.log("Something went wrong: "));
        
        
      }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCategory({
      ...category,
      [event.target.name]: value
  })};

  useEffect(() => {
    setCategory({name: ""});

  }, [reload])
  
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div class="form-row ">
          <h3>Utwórz kategorię</h3>
        { alertInfo &&
                <div class="alert alert-danger  text-center" role="alert">
                Wprowadź poprawną nazwę.
                </div>
                }  
        { alertGood &&
                <div class="alert alert-success  text-center" role="alert">
                Dodano nową kategorię.
                </div>
        } 
          <div class="col">
            <label htmlFor="categoryName">Nazwa kategorii</label>
            <input type="text" name="name" onChange={handleInputChange} class="form-control"/>
          </div>
          <div class="col">
            <button type="text" type="submit" onClick={handleSubmit} class="form-control btn btn-outline-success mt-3">Send</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateCategory