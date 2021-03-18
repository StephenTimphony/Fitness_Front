import React from 'react';
import {
    NavBar,
    Login,
    Register,
    LoginModal,
    Title
} from '../index'

const Home = () => {
    return (
        <div className="home">
            <Title />
              <NavBar />
              <LoginModal />
        
        </div>
    )



}

export default Home;