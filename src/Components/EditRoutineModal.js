import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import EditRoutine from './EditRoutine';

function MyVerticallyCenteredModal({show, onHide, routineId, finished, setFinished }) {
    return (
      <Modal
        show={ show }
        onHide={ onHide }
        routineId={ routineId }
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
        <EditRoutine routineId={ routineId } finished={ finished } setFinished={ setFinished }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { onHide(); setFinished(finished + 1)}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  EditRoutineModal = ({ routineId, finished, setFinished }) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Edit Routine!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          routineId={ routineId }
          finished={ finished } 
          setFinished={ setFinished }
        />
      </>
    );
  }
  export default EditRoutineModal;