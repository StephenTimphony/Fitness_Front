import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    
    function authenticate(event) {
        
        fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
              localStorage.setItem('myToken', result.token);
              localStorage.setItem('username',username);
              window.location.reload();
            })
            .catch(console.error);
    
    
            event.preventDefault()
        }

        return (
            <div className="register">
                <Form>
      <Form.Group controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" onChange={(event)=>setUsername(event.target.value)}
                    />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="username" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="username" placeholder="Password" onChange={(event)=>setConfirmPassword(event.target.value)} />
      </Form.Group>
        <Button variant="primary" type="submit"
        onClick={() => {password !== confirmPassword? alert('Passwords do not match') : authenticate()}}> 
        Submit
      </Button>
        
    </Form>
    
    
            
            </div>
        )
}

export default Register;

