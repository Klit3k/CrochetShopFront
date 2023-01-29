import React from 'react'
import { Heart } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className='container mt-5'>
        <div className='mx-auto d-flex justify-content-center text-center'>
           <p>
           <h2>Dziękujemy za zakupy !</h2>  <br/>
           <h4>Mamy nadzieje że Ci się podobało i wkrótce do nas wrócisz <Heart/></h4>
           <NavLink to="/home">
            <button className="btn btn-outline-success mt-5" >Powrót do strony głównej</button></NavLink>
            </p> 
        </div>
    </div>
  )
}

export default ThankYou