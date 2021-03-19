import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import CreateRoutine from './CreateRoutine';

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
            Fill out the form to create an Routine!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CreateRoutine />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  CreateRoutineModal = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Create Routine!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default CreateRoutineModal;