import { useState, useEffect } from 'react'
import { getUserPublicRoutines } from '../../api/index';
import RoutineCard from '../RoutineCard';
import NavBar from '../NavBar';
import Title from '../Title'
import CreateRoutineModal from '../CreateRoutineModal';
const myToken = localStorage.getItem('myToken')



const MyRoutines = () => {
    const [ myRoutines, setMyRoutines ] = useState([]);
    const [ finished, setFinished ] = useState(0);
    
    
    useEffect (() => {
        async function fetchData() {
            const routines = await getUserPublicRoutines()
            setMyRoutines(routines);
        }
        fetchData();
    }, [finished])

    return (
        <div>  
            <Title />          
            <NavBar/> 
            {myToken ?<CreateRoutineModal finished={ finished } setFinished={ setFinished }/> : ''}
        <div className="myRoutines">
            {   myRoutines ?
                myRoutines.map((routine, idx) => {
                    const { activities, creatorId, creatorName, goal, name, id } = routine
                    return (
                        <RoutineCard key={ idx }
                        routineId={ id } 
                        activities={ activities }
                        creatorId={ creatorId }
                        creatorName={ creatorName }
                        goal={ goal }
                        name={ name}
                        finished={ finished }
                        setFinished={ setFinished }
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
