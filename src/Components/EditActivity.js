import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const myToken = localStorage.getItem('myToken')


const EditActivity = ({ routineActivityId,count, duration }) => {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${ routineActivityId }`, {
            method: "PATCH",
            body: JSON.stringify({
              count: count,
              duration: duration
            })
          })
          const data = await response.json();
          console.log(data);
          return data;
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
export default EditActivity;