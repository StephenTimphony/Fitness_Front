import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    updateRoutine,
    deleteRoutine
} from '../api/index';


const EditRoutine = ({ routineId, finished, setFinished }) => {
    
    const [ name, setName ] = useState('');
    const [ goal, setGoal ] = useState('');
    const [ isPublic, setIsPublic ] = useState(false);
      
    return (
    
        <div>              
             <Form onSubmit={ () => { updateRoutine({ name, goal, isPublic, routineId }); setFinished(finished + 1)} }>
             <Button onClick={ () => { deleteRoutine(routineId) }}>Delete</Button>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                         as="textarea"
                         rows={ 1 } 
                        placeholder="name" 
                        value={ name } 
                        onChange={(event) => setName(event.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Goal</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 2 }
                     placeholder="Description" 
                     value={ goal } 
                     onChange={(event) => setGoal(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group id="publicCheckboxMyRoutine">
                    <Form.Check type="checkbox" label="Do you want the routine to be public?" onChange={ () => {!isPublic ? setIsPublic(true) : setIsPublic(false) }} />
                </Form.Group>
                <Button variant="success" onClick={ () => { updateRoutine({ name, goal, isPublic, routineId }); setFinished(finished + 1)} }>Submit</Button>{' '}
                </Form>
        </div>
    )
}
export default EditRoutine;