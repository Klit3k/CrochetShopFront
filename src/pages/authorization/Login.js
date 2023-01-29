import { useNavigate, Navigate, NavLink } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import GuestNavbar from "../navigation/GuestNavbar";

function Login() {
    const navigate = useNavigate();

    const [state, setState] = useState({
      email: "",
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

    var loginServer = async () => {

      var response = await axios.post("http://localhost:8080/auth/login", {
        email: state.email,
        password: state.password
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
              validData: "Nieprawidłowe dane"
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
      setState({
        ...state,
        [event.target.name]: value
    })};
    
    const handleSubmit = (event) => {
        event.preventDefault();
        loginServer();        
    };

    return (
      !token.loaded ? null : (
        token.isTokenVerified ? <Navigate to='/home'/> :
    
          <div className="container mt-3">
            <div className="mx-auto d-flex justify-content-center">
              <h3>Logowanie</h3>
            </div>
            <div className="mx-auto">
              <form onSubmit={handleSubmit} >
              {
                state.validData !== "" ? (<div class="alert alert-danger col-4 mx-auto d-flex justify-content-center" role="alert">
                                        {state.validData}
                                        </div>)
                                        : null
              }
              
                <div className="mb-3 form-check col-3 mx-auto">
                  
                   <label className="form-check-label" htmlFor="email">Email</label>      
                   <input type="email" name="email" onChange={handleInputChange} value={state.email} className="form-control" required/>
                </div>
                <div className="mb-3 form-check col-3 mx-auto">
                   <label className="form-check-label" htmlFor="password">Hasło</label>      
                   <input type="password" name="password" onChange={handleInputChange} value={state.password} className="form-control" required/>
                   <NavLink to='/register' className="d-flex justify-content-end"><small className="btn btn-sm ">Załóż konto</small></NavLink>
                </div>
                
                <div className="d-flex justify-content-center ">
                <button type="submit" className="btn btn-primary">Zaloguj</button>
                </div>
              </form> 
            </div>
          </div>
      )
    );
  }



  export default Login;
