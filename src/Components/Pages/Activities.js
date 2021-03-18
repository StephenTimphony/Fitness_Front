import {React, useState } from 'react';
import {CreateActivity} from '../index'
import 'bootstrap/dist/css/bootstrap.min.css';
const myToken = localStorage.getItem('myToken')


const Activities = () => {
    const [activities, setActivities] = useState([])
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setActivities(result)
        })
        .catch(console.error);



   
        

    return (
        <div className="home">
                
           {myToken?<CreateActivity /> : ''}
         {
             activities.map((activity, index) => 
                <div key = {index}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                    </div>
             )
         }
        </div>
    )



}

export default Activities;