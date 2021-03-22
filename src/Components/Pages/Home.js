import React from 'react';
import {
    NavBar,
    RegisterModal,
    LoginModal,
    Title
} from '../index'

const myToken = localStorage.getItem('myToken')
const Home = () => {
    return (
        <div className="home">
            <Title />
              <NavBar />
              
              {myToken?'': <LoginModal /> }

        <div>
            <div>{myToken? '': <RegisterModal />}</div>
           { myToken? <h2>Welcome {localStorage.getItem('username')}!</h2>:''}
        </div>
        </div>
    )



}

export default Home;