import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    editActivity,
    deleteActivityFromRoutine
} from "../api";


const EditActivity = ({ routine_activity_id }) => {
    const [ count, setCount ] = useState('');
    const [ duration, setDuration ] = useState('');

  

    

    return (
        <div>
                    
             <Form onSubmit={() => { editActivity({ routine_activity_id, count, duration })  }}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Count</Form.Label>
                    <Form.Control 
                         as="textarea"
                         rows={1} 
                        placeholder="Count" 
                        value={count} 
                        onChange={(event) => setCount(event.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={2}
                     placeholder="Duration" 
                     value={duration} 
                     onChange={(event) => setDuration(event.target.value)}>

                     </Form.Control>
                </Form.Group>
                <Button onClick={() => { deleteActivityFromRoutine({ routine_activity_id }) } }>DELETE</Button>
                <Button variant="success" onClick={() => { editActivity({ routine_activity_id, count, duration })  }}>Submit</Button>{' '}
                </Form>
        </div>
    )
    

}
export default EditActivity;