import React from 'react';
import './Task.css';

const Task = ({ activity, handleAddToExcercise }) => {
    const { name, img, desc, age, time } = activity;

    return (
        <div className="activity-card">
            <div className='card-info'>
                <div className="activity-image">
                    <img src={img} alt=""></img>
                </div>

                <h2>{name}</h2>
                <p>{desc}</p>
                <p>For Age : <b>{age}</b></p>
                <p>Time Spet : <b>{time}</b> Seconds</p>
            </div>
            <button onClick={() => handleAddToExcercise(activity)} className='btn-activity'>
                <p className='btn-text'>Add to List</p>
            </button>

        </div>

    );
};

export default Task;