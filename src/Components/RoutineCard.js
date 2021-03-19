import React from 'react';



const RoutineCard = ({ activities, creatorId, creatorName, goal, name }) => {

    return (
        <div className="routineCard">
            {/* <p>{ activities[1] }</p> */}
            {/* <p>{ creatorId }</p> */}
            <h1>{ name }</h1>
            
            {   activities.length > 0 ?
            <div>
                <h3>Activities: </h3>
                {
                    activities.map((activity, idx) => {
                        console.log(activity)
                        return (
                            <div key={ idx } className="activityDescription">
                                <b><u>{ activity.name }</u></b>
                                <li>{ activity.description }</li>
                                {
                                    activity.duration ?
                                     <li>Duration: { activity.duration }</li>
                                     : null
                                }                             
                                {
                                    activity.count ?
                                     <li>Count: { activity.count }</li>
                                     : null
                                }
                            </div>
                        )
                    }) 
                }                
            </div>  : (<h3>There are no activities for this routine.</h3>)
            }
            
            <p><b>Goal: </b>{ goal }</p>
            
            <p><b>Created by: </b>{ creatorName }</p>
        </div>
    )
}

export default RoutineCard;