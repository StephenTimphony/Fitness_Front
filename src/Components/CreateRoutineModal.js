import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import CreateRoutine from './CreateRoutine';

function MyVerticallyCenteredModal({  show, onHide, finished, setFinished }) {
    return (
      <Modal
        show={ show }
        onHide={ onHide }
        finished={ finished } 
        setFinished={ setFinished }
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
        <CreateRoutine finished={ finished } setFinished={ setFinished }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  CreateRoutineModal = ({ finished, setFinished }) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Create Routine!
        </Button>
  
        <MyVerticallyCenteredModal
          show={ modalShow }
          onHide={() => setModalShow(false)}
          finished={ finished } 
          setFinished={ setFinished }
        />
      </>
    );
  }
  export default CreateRoutineModal;