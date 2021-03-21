import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import EditActivity from './EditActivity';

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
        <EditActivity routine_activity_id={ props.routine_activity_id }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ props.onHide }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  EditActivityModal = ({ routine_activity_id }) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Edit Activity!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          routine_activity_id={ routine_activity_id }
        />
      </>
    );
  }
  export default EditActivityModal;