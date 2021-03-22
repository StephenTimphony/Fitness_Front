import {React, useState } from 'react';
import {
    CreateActivityModal,
    NavBar,
    Title
} from '../index'
import 'bootstrap/dist/css/bootstrap.min.css';
const myToken = localStorage.getItem('myToken')


const Activities = () => {
    const [activities, setActivities] = useState([])
    fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(result => {
            setActivities(result)
        })
        .catch(console.error);



   
        

    return (
        <div className="home">
            <Title />
            <NavBar />
                
           {myToken?<CreateActivityModal /> : ''}
         {
             activities.map((activity, index) => 
                <div className ="activity-page"
                    key = {index}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                    </div>
             )
         }
        </div>
    )



}

export default Activities;