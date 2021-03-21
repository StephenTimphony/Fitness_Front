import React from 'react';
import { useState } from 'react';
import { 
    checkUser,
    deleteRoutine
} from '../api';
import EditRoutineModal from './EditRoutineModal';
import EditActivityModal from './EditActivityModal';
import AttachActivityModal from './AttachActivityModal'
import { Button } from 'react-bootstrap'


const RoutineCard = ({ activities, creatorId, creatorName, goal, name, routineId }) => {
    const [ id, setId ] = useState('');
    console.log(routineId)
    async function getUserId() {
        const user = await checkUser();
        setId(user.id)
    }
    getUserId()

    if (id === creatorId){
        return (
            <div className="routineCard">
                <Button onClick={ () => {deleteRoutine(routineId); }}>Delete</Button>
                <EditRoutineModal routineId={ routineId }/> 
                <AttachActivityModal routineId={ routineId } />             
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
                                        activity.count ?
                                         <li>Count: { activity.count }</li>
                                         : null
                                    }
                                    {
                                        activity.duration ?
                                         <li>Duration: { activity.duration }</li>
                                         : null
                                    }                             
                                    <EditActivityModal routine_activity_id={ activity.routineActivityId }/> 
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