import { useState, useEffect } from 'react'
import { getUserPublicRoutines } from '../../api/index';
import RoutineCard from '../RoutineCard';
import NavBar from '../NavBar';



const MyRoutines = () => {
    const [ myRoutines, setMyRoutines ] = useState([]);
    
    useEffect (() => {
        async function fetchData() {
            const response = await getUserPublicRoutines()
            setMyRoutines(response);
        }
        fetchData();
    }, [])

    return (
        <div>
            <NavBar/> 
        <div className="myRoutines">
            {
                myRoutines.map((routine, idx) => {
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
                })
            }
        </div>
        </div>
    )
}

export default MyRoutines;

// id: 957
// activities: []
// creatorId: 1
// creatorName: "albert"
// goal: "Let's do this!"
// id: 957
// isPublic: true
// name: "Hello Routine"