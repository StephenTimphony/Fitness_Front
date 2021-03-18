import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Activities, Home, Login, MyRoutines, Register, Routines} from './Components/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'




function App() {
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/activities">
          <Activities />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/MyRoutines">
          <MyRoutines/>
        </Route>
        <Route path="/Routines">
          <Routines />
        </Route>
        <Route path="/register">
          <Register
           userName={ userName } 
           setUserName={ setUserName } 
           userPassword={ userPassword } 
           setUserPassword={ setUserPassword } />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;


ReactDOM.render(<App />,document.getElementById('root'));

