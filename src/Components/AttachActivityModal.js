import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import AttachActivity from './AttachActivity';

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
            Fill out the form to create an Activity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AttachActivity routineid={ props.routineid } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  AttachActivityModal = ({ routineId }) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Add Activity!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          routineid={ routineId }
        />
      </>
    );
  }
  export default AttachActivityModal;