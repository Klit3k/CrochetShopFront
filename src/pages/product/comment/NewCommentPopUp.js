import Modal from 'react-bootstrap/Modal';
function NewCommentPopUp(props) {
    const showModal = () => {
        props.setIsOpen(true);
    };


    return (
    <>
      <button onClick={showModal} className='btn btn-outline-dark btn-sm' >
                                Dodaj nowy komentarz    
                                </button>
      <Modal show={props.isOpen} onHide={props.hideModal}>
        <Modal.Header>
          <Modal.Title>Dodawanie nowego komentarza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
          !props.validData &&  <div className="alert alert-danger" role="alert">
                                {props.errorInfo}
                                </div>
          }
            <form className="form">
                <div>
                    <label htmlFor="content" className="mb-2">Treść komentarza</label>
                    <textarea className="form-control" value={props.content} onChange={props.handleInputChange} name="content"/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={props.hideModal}>Anuluj</button>
          <button type="submit" onClick={props.handleSubmit} className="btn btn-outline-success">Dodaj</button>
        </Modal.Footer>
      </Modal>

      </>
    );
  }

  export default NewCommentPopUp;
  