import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const myToken = localStorage.getItem('myToken')


const CreateActivity = () => {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization':`Bearer ${myToken}`
            },
            body: JSON.stringify({
                name: name,
                description: description
                
            })
        })

        const data = await response.json();
        console.log('data',data);
        
        
        setName('')
        setDescription('')
       
        
    }
  

    

    return (
        <div>
                    
             <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                         as="textarea"
                         rows={1} 
                        placeholder="name" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={2}
                     placeholder="Description" 
                     value={description} 
                     onChange={(event) => setDescription(event.target.value)}>

                     </Form.Control>
                </Form.Group>
                <Button variant="success" onClick={handleSubmit}>Submit</Button>{' '}
                </Form>
        </div>
    )
    

}
export default CreateActivity;