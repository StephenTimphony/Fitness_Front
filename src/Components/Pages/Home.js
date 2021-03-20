import React from 'react';
import {
    NavBar,
    Register,
    LoginModal,
    Title
} from '../index'
const myToken = localStorage.getItem('myToken')
const Home = () => {
    return (
        <div className="home">
            <Title />
              <NavBar />
              <LoginModal />
              <Register />
        <div>
           { myToken? <h2>Welcome {localStorage.getItem('username')}!</h2>:''}
        </div>
        </div>
    )



}

export default Home;