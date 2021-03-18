import { React, useState } from 'react';
import NavBar from '../NavBar';
import { registerUser } from '../../api/index';

const Register = ({userName, setUserName, userPassword, setUserPassword}) => {
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>           
            <NavBar/>      
            <div className="register">
                <form id="registerForm"
                        onSubmit={async (event) => {
                        event.preventDefault();
                        try {
                        const results = await registerUser(userName, userPassword);
                        console.log(results)
                        results ?
                        alert(results.message)
                        : alert("There was an error signing up.")
                        } catch (error) {
                            console.error(error);
                        } finally {
                        } document.getElementById("registerForm").reset()
                    }}>
                    <fieldset>
                        <label><b>Username</b></label>
                        <input 
                        id="userName" 
                        placeholder="Enter Username" 
                        onChange={(event) => setUserName(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label><b>Password</b></label>
                        <input id="password" 
                        placeholder="Enter Password"
                        onChange={(event) => setUserPassword(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label><b>Confirm Password</b></label>
                        <input id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </fieldset>
                    <button 
                        disabled={userPassword === confirmPassword 
                        && userPassword !== '' 
                        && userName !== '' 
                        ? false : true}>Signup!</button>
                </form>
        </div>
    </div>       
    )
}

export default Register;

