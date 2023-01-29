import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';

const AddAddress = (props) => {
    const showModal = () => {
        props.setIsOpen(true);
    };
   
    
    return (
    <>
      <button onClick={showModal} className='btn btn-outline-dark btn-sm' >
                                {props.text}   
                                </button>
      <Modal show={props.isOpen} onHide={props.hideModal}>
        <Modal.Header className='container'>
            <div className='d-flex justify-content-center text-center mx-auto'>
            <Modal.Title >Wprowadź informacje o miejscu <br/> twojego zamieszkania</Modal.Title>
            </div>
        </Modal.Header>
        <Modal.Body>
          {
          !props.validData &&  <div className="alert alert-danger" role="alert">
                                {props.errorInfo}
                                </div>
          }
            <form className="form">
                <div>
                    <label htmlFor="city" className="mb-2">Miasto</label>
                    <input className="form-control" value={props.city} onChange={props.handleInputChange} name="city"/>
                </div>
                <div>
                    <label htmlFor="postalCode" className="mb-2">Kod pocztowy</label>
                    <input className="form-control" value={props.postalCode} onChange={props.handleInputChange} name="postalCode"/>
                </div>
                <div>
                    <label htmlFor="street" className="mb-2">Ulica</label>
                    <input className="form-control" value={props.street} onChange={props.handleInputChange} name="street"/>
                </div>
                <div>
                    <label htmlFor="houseNumber" className="mb-2">Numer budynku</label>
                    <input className="form-control" value={props.houseNumber} onChange={props.handleInputChange} name="houseNumber"/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={props.hideModal}>Anuluj</button>
          <button type="submit" onClick={props.handleSubmit} className="btn btn-outline-success">Dodaj</button>
        </Modal.Footer>
      </Modal>

      </>
  )
}

export default AddAddress