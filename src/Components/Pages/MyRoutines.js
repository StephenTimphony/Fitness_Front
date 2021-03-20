import { useState, useEffect } from 'react'
import { getUserPublicRoutines } from '../../api/index';
import RoutineCard from '../RoutineCard';
import NavBar from '../NavBar';
import CreateRoutineModal from '../CreateRoutineModal';




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
            {localStorage.getItem("myToken") ?<CreateRoutineModal /> : ''}
        <div className="myRoutines">
            {   myRoutines ?
                myRoutines.map((routine, idx) => {
                    console.log(routine)
                    const { activities, creatorId, creatorName, goal, name, id } = routine
                    return (
                        <RoutineCard key={ idx }
                        routineId={ id } 
                        activities={ activities }
                        creatorId={ creatorId }
                        creatorName={ creatorName }
                        goal={ goal }
                        name={ name}
                        />
                    )
                }) : (
                    <div>
                        <h1>You have no routines.</h1>
                    </div> 
                )
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