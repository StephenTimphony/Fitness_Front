import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    createRoutine,
    checkUser
} from '../api/index';


const CreateRoutine = () => {
    
    const [ name, setName ] = useState('');
    const [ goal, setGoal ] = useState('');
    const [ isPublic, setIsPublic ] = useState(false);
    const [ id, setId ] = useState('');
    async function getUserId() {
        const user = await checkUser();
        setId(user.id)
    }
    getUserId();
    
    return (
    
        <div>              
             <Form onSubmit={ async() => { createRoutine({ name, goal, isPublic, id })} }>
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
                <Form.Group id="publicCheckbox">
                    <Form.Check type="checkbox" label="Do you want the routine to be public?" onChange={ () => {!isPublic ? setIsPublic(true) : setIsPublic(false) }} />
                </Form.Group>
                <Button variant="success" onClick={ async() => { createRoutine({ name, goal, isPublic, id })} }>Submit</Button>{' '}
                </Form>
        </div>
    )
}
export default CreateRoutine;