import React, { useState } from 'react';



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