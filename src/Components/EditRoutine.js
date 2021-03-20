import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    updateRoutine,
    checkUser
} from '../api/index';


const EditRoutine = ({ routineId }) => {
    
    const [ name, setName ] = useState('');
    const [ goal, setGoal ] = useState('');
    const [ isPublic, setIsPublic ] = useState(false);
    const [ id, setId ] = useState('');
    async function getUserId() {
        const user = await checkUser();
        setId(user.id)
    }
    getUserId()
    
    return (
    
        <div>              
             <Form onSubmit={ () => { updateRoutine({ name, goal, isPublic, routineId })} }>
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
                <Button variant="success" onClick={ () => { updateRoutine({ name, goal, isPublic, routineId })} }>Submit</Button>{' '}
                </Form>
        </div>
    )
}
export default EditRoutine;