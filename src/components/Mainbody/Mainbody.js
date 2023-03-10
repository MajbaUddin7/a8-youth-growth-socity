import React, { useEffect, useState } from 'react';
import Task from '../Tasks/Task';
import Calculation from '../Sideber/Sideber'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import './Mainbody.css';
import Questions from '../Questions/Questions';


const Mainbody = () => {

    const [activities, setActivities] = useState([]);
    const [excercise, setEcercise] = useState([]);


    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);



    const handleAddToExcercise = (activity) => {
        console.log(activity);
        const newExcercise = [...excercise, activity];
        setEcercise(newExcercise);
    }

    return (
        <div className='main-container'>
            <div className="activities-container">
                <div className="site-header">
                    <FontAwesomeIcon icon={faPerson} size="6x"></FontAwesomeIcon>
                    <h1>Youth Growing Socity</h1>
                </div>
                <div className="">
                    <h2>Select today's activities</h2>
                </div>

                <div className="activities">
                    {
                        activities.map(activity => <Task
                            key={activity.id}
                            activity={activity}
                            handleAddToExcercise={handleAddToExcercise}
                        ></Task>)
                    }
                </div>
                <Questions></Questions>
            </div>
            <div className="activity-calculation-container">
                <Calculation excercise={excercise}></Calculation>
            </div>
        </div>
    );
};

export default Mainbody;
