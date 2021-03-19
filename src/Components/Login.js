import {React, useState} from 'react';
import {Form, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function authenticate(event) {
        
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
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
          localStorage.setItem('username',username)
          console.log(localStorage.getItem('username'))
          if (username && password) {
          alert("You are signed in!")
          window.location.reload();
          }
          
        })
        .catch(console.error);


        event.preventDefault()
    }
    return (
        <div className="login">
            Login
            <Form>
  <Form.Group controlId="Username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" onChange={(event)=>setUsername(event.target.value)}
                />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
  </Form.Group>
    <Button variant="primary" type="submit" onClick={authenticate}>
    Submit
  </Button>
    
</Form>


        
        </div>
    )



}

export default Login;