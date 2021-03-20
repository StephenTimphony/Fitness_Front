import {React, useState, useEffect } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    getAllActivities,
    addActivityToRoutine
} from '../api';


const AttachActivity = ( routineid ) => {
    console.log(routineid)
    const [ activityId, setActivityId ] = useState('');
    const [ count, setCount ] = useState([]);
    const [ duration, setDuration ] = useState([]);
    const [ allActivities, setAllActivities ] = useState([]);
    const [ buttonTitle, setButtonTitle ] = useState('Select an Activity')

    useEffect (() => {
        async function fetchData() {
            const activities = await getAllActivities();
            setAllActivities(activities);
        }
        fetchData();
    }, [])  

    return (
        <div>
                    
             <Form >
                <DropdownButton id="dropdownActivity" title={ buttonTitle }>
                    {
                        allActivities.map((activity, idx) => (
                            <Dropdown.Item key={ idx } onClick={ (event) => {
                                setActivityId(activity.id);
                                setButtonTitle(activity.name)
                            }}>{ activity.name}</Dropdown.Item>
                        ))

                    }
                </DropdownButton>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Count</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={1}
                     placeholder="Count" 
                     value={count} 
                     onChange={(event) => setCount(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={2}
                     placeholder="Duration" 
                     value={duration} 
                     onChange={(event) => setDuration(event.target.value)}>

                     </Form.Control>
                </Form.Group>
                <Button variant="success" onClick={() => { addActivityToRoutine({ activityId, routineid, count, duration }) }}>Submit</Button>{' '}
                </Form>
        </div>
    )
    

}
export default AttachActivity;