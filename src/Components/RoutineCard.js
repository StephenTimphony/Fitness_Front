import React from 'react';
import { useState } from 'react';
import { 
    checkUser,
    deleteRoutine
} from '../api';
import EditRoutineModal from './EditRoutineModal'



const RoutineCard = ({ activities, creatorId, creatorName, goal, name, routineId }) => {
    const [ id, setId ] = useState('');
    console.log(creatorId)
    async function getUserId() {
        const user = await checkUser();
        setId(user.id)
    }
    getUserId()

    if (id === creatorId){
        return (
            <div className="routineCard">
                <button onClick={ () => {deleteRoutine(routineId); }}>Delete</button>
                <EditRoutineModal routineId={ routineId }/>
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
    }else {
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
}

export default RoutineCard;