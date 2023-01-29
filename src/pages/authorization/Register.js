import { useNavigate, Navigate, NavLink } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import GuestNavbar from "../navigation/GuestNavbar";

function Register() {
    const navigate = useNavigate();

    const [state, setState] = useState({
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
      validData: ""
    });
    const [token, setToken] = useState({isTokenVerified: false, loaded: false});

    useEffect(() => {
      var cookie = new Cookies().get("session")
      if(cookie !== undefined){
      axios.post("http://localhost:8080/auth/check", null, {
          headers: {
            'Authorization': `Bearer ${cookie.accessToken}`
          }
        })
        .then(response => {
          setToken({isTokenVerified: response.data.isTokenVerified, loaded: true})})
        .catch(error => console.log('Something went wrong'));
        
      } 
      else 
      // eslint-disable-next-line 
      setToken({isTokenVerified: token.isTokenVerified, loaded: true})
    }, []);

    var registerServer = async () => {

      var response = await axios.post("http://localhost:8080/auth/register", null, 
      {
        params: {
          email: state.email,
          password: state.password,
          name: state.name,
          surname: state.surname,
          phone: state.phone
        }
      })
      .then(response => {
        const cookies = new Cookies();
        cookies.set('session', response.data, {path: '/'}); //secure: true, httpOnly: true 
        navigate("/home");
      })
      .catch( err => {
        switch (err.response.status) {
          case 403:
            setState({
              email: state.email,
              password: state.password,
              name: state.name,
              surname: state.surname,
              phone: state.phone,
              validData: "Invalid credentials"
            });
            break;
          default:
            break;
       }
      })
      return response;
    };
    
    const handleInputChange = (event) => {
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value
    })};
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: validation
        registerServer();        
        

    };

    return (
      !token.loaded ? null : (
        token.isTokenVerified ? <Navigate to='/home'/> : (
      <>
      <div className="container mt-3">
      <div className="mx-auto d-flex justify-content-center">
              <h3>Zakładanie konta</h3>
            </div>
            <div className="mx-auto">
              <form onSubmit={handleSubmit} >
                {state.validData}<br/>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="name">Imię</label>      
                   <input type="text" name="name" onChange={handleInputChange} value={state.name} className="form-control"/>
                </div>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="surname">Nazwisko</label>      
                   <input type="text" name="surname" onChange={handleInputChange} value={state.surname} className="form-control"/>
                </div>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="phone">Numer telefonu</label>      
                   <input type="text" name="phone" onChange={handleInputChange} value={state.phone} className="form-control"/>
                </div>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="email">Email</label>      
                   <input type="email" name="email" onChange={handleInputChange} value={state.email} className="form-control"/>
                </div>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="password">Hasło</label>      
                   <input type="password" name="password" onChange={handleInputChange} value={state.password} className="form-control"/>
                   <NavLink to='/login' className="d-flex justify-content-end"><small className="btn btn-sm ">Mam już konto</small></NavLink>

                </div>
                <div className="d-flex justify-content-center ">

                <button type="submit" className="btn btn-primary">Zaloguj</button>
                </div>
              </form> 
            </div>
          </div>
      </>
        )
      )
    );
}

  export default Register;
