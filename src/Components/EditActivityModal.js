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
        <EditActivity routine_activity_id={ props.routine_activity_id } finished={ props.finished } setFinished={ props.setFinished }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ props.onHide }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const  EditActivityModal = ({ routine_activity_id, finished, setFinished }) => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="warning" onClick={() => setModalShow(true)}>
          Edit Activity!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          routine_activity_id={ routine_activity_id }
          finished={ finished } 
          setFinished={ setFinished }
        />
      </>
    );
  }
  export default EditActivityModal;