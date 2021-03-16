import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Activities, Home, Login, MyRoutines, Routines} from './Components/Pages';




function App() {
  
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

