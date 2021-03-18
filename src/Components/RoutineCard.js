import React from 'react';



const RoutineCard = ({ activities, creatorId, creatorName, goal, name }) => {

    return (
        <div className="routineCard">
            {/* <p>{ activities[1] }</p> */}
            {/* <p>{ creatorId }</p> */}
            <h1>{ name }</h1>
            <h2>Activities: </h2>
            {
                activities.map((activity, idx) => {
                    return (
                        <a href={ activity.id } key={ idx }>{ activity.name }  </a>
                        
                    )
                })
            }
            
            <p>Goal: { goal }</p>
            
            <p>Created by: { creatorName }</p>
        </div>
    )
}

export default RoutineCard;