import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import  Register  from './Register';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill out the form to Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Register />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  RegisterModal = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="outline-danger" onClick={() => setModalShow(true)}>
          Register
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default RegisterModal;