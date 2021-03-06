import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const myToken = localStorage.getItem('myToken')


const Title = () => {

    const signOut = () => {
        if (localStorage.getItem('myToken')) {
            localStorage.removeItem('myToken')
            alert("You are signed out!")
            window.location.reload();
        } else {
            alert("You are not signed in")
        }
      }

    return (
        <div>
            <h1>Fitness Tracker</h1>
            {myToken? 
                <h2 className="username">{localStorage.getItem('username')}</h2> &&
                <Button className= "sign-out"variant="danger" onClick={signOut}>Sign Out</Button> 
               : ''}
            

               
        </div>
    )
}

export default Title