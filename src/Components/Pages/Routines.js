import React from 'react';
import { useState, useEffect } from 'react'
import { getPublicRoutines } from '../../api/index';
import RoutineCard from '../RoutineCard';
import NavBar from '../NavBar';




const Routines = () => {
    const [ publicRoutines, setPublicRoutines ] = useState([]);
    
    useEffect (() => {
        async function fetchData() {
            const response = await getPublicRoutines()
            setPublicRoutines(response);
        }
        fetchData();
    }, [])

    return (
        <div>
            <NavBar/> 
        <div className="publicRoutines">
            {   publicRoutines.length > 0 ?
                publicRoutines.map((routine, idx) => {
                    console.log(routine)
                    const { activities, creatorId, creatorName, goal, name } = routine
                    return (
                        <RoutineCard key={ idx } 
                        activities={ activities }
                        creatorId={ creatorId }
                        creatorName={ creatorName }
                        goal={ goal }
                        name={ name}
                        />
                    )
                }) : (
                    <div>
                        <h1>There are no public routines.</h1>
                    </div> 
                )
            }
        </div>
        </div>
    )
}

export default Routines;