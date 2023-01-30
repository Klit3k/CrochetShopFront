import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';

const EditContact = (props) => {
    const showModal = () => {
        props.setIsOpen(true);
    };
   
    
    return (
    <>
      <button onClick={showModal} className='btn btn-outline-dark col-2 mx-2' >
                                {props.text}   
                                </button>
      <Modal show={props.isOpen} onHide={props.hideModal}>
        <Modal.Header className='container'>
            <div className='d-flex justify-content-center text-center mx-auto'>
            <Modal.Title >Zaktualizuj informacje o sobie.</Modal.Title>
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
                    <label htmlFor="city" className="mb-2">Imię</label>
                    <input className="form-control" value={props.name} onChange={props.handleInputChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="postalCode" className="mb-2">Nazwisko</label>
                    <input className="form-control" value={props.surname} onChange={props.handleInputChange} name="surname"/>
                </div>
                <div>
                    <label htmlFor="street" className="mb-2">Numer telefonu</label>
                    <input className="form-control" value={props.phone} onChange={props.handleInputChange} name="phone"/>
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

export default EditContact