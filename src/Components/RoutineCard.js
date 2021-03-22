import React from 'react';
import { useState } from 'react';
import { checkUser } from '../api';
import EditRoutineModal from './EditRoutineModal';
import EditActivityModal from './EditActivityModal';
import AttachActivityModal from './AttachActivityModal'


const RoutineCard = ({ activities, creatorId, creatorName, goal, name, routineId, setFinished, finished }) => {
    const [ id, setId ] = useState('');
    async function getUserId() {
        const user = await checkUser();
        setId(user.id)
    }
    getUserId()

    if (id === creatorId){
        return (
            <div className="routineCard">                
                <EditRoutineModal routineId={ routineId } finished={ finished } setFinished={ setFinished }/> 
                <AttachActivityModal routineId={ routineId } finished={ finished } setFinished={ setFinished }/>             
                <h1>{ name }</h1>
                
                {   activities.length > 0 ?
                <div>
                    <h3>Activities: </h3>
                    
                    {
                        activities.map((activity, idx) => {
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
                                    <EditActivityModal routine_activity_id={ activity.routineActivityId } finished={ finished } setFinished={ setFinished }/> 
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