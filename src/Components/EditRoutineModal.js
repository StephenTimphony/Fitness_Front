import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import EditRoutine from './EditRoutine';

function MyVerticallyCenteredModal({show, onHide, routineId}) {
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
        <EditRoutine routineId={ routineId } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  EditRoutineModal = ({routineId}) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Edit Routine!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          routineId={ routineId }
        />
      </>
    );
  }
  export default EditRoutineModal;