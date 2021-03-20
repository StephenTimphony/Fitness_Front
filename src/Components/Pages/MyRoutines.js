import { useState, useEffect } from 'react'
import { getUserPublicRoutines } from '../../api/index';
import RoutineCard from '../RoutineCard';
import NavBar from '../NavBar';
import Title from '../Title'
import CreateRoutineModal from '../CreateRoutineModal';
const myToken = localStorage.getItem('myToken')



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
            <Title />          
            <NavBar/> 
            {myToken ?<CreateRoutineModal /> : ''}
        <div className="myRoutines">
            {   myRoutines ?
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