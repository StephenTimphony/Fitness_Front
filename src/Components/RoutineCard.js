import React from 'react';

const RoutineCard = ({ activities, creatorId, creatorName, goal, name }) => {
    return (
        <div className="routineCard">
            {/* <p>{ activities[1] }</p> */}
            {/* <p>{ creatorId }</p> */}
            <p>Created by: { creatorName }</p>
            <p>Goal: { goal }</p>
            <p>Name: { name }</p>
        </div>
    )
}

export default RoutineCard;