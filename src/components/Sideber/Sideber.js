import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sideber.css'

const Sideber = ({ excercise }) => {

    const [breakTime, setBreak] = useState([0]);

    let excerciseTime = 0;
    for (const activityTime of excercise) {
        excerciseTime = excerciseTime + (excercise[0].time);
    }

    useEffect(() => {
        console.log(breakTime);
        localStorage.setItem('Break_Time', JSON.stringify(breakTime));
    }, [breakTime])

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if (data !== null) handleSetBreak(JSON.parse(data));
    }, []);

    const handleSetBreak = (value) => {
        const newBreak = [value];
        setBreak(newBreak);
    }


    const notify = () => toast("Thank you for completing your activity!");
    return (
        <div className="right-bar">
            <div className="profile">
                <div className="profile-image">
                    <img src='/profile.jpg' alt='' />
                </div>

                <div className="profile-info">
                    <h3>Bertha Hessel</h3>
                    <h5>Stockton, California</h5>
                </div>
            </div>
            <div className="body-info">
                <div className="weight">
                    <p><b>75</b></p>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <p><b>6.5</b></p>
                    <p>Height</p>
                </div>
                <div className="age">
                    <p><b>25</b>years</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="break">
                <p>Add a break</p>
                <div className="select-break">
                    <button onClick={() => handleSetBreak(10)}><span>10</span>s</button>
                    <button onClick={() => handleSetBreak(20)}><span>20</span>s</button>
                    <button onClick={() => handleSetBreak(30)}><span>30</span>s</button>
                    <button onClick={() => handleSetBreak(40)}><span>40</span>s</button>
                    <button onClick={() => handleSetBreak(50)}><span>50</span>s</button>
                </div>
            </div>

            <p>Activity Details</p>
            <div className="excercise-time">
                <div><p>Activity time: </p></div>
                <div><p>{parseInt(excerciseTime)}  seconds</p></div>
            </div>
            <div className="break-time">
                <div><p>Break time: </p></div>
                <div><p>{breakTime}  seconds</p></div>
            </div>
            <div className="">
                <button onClick={notify} className='activity-completed' >Activity Completed</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div>
        </div>
    );
};

export default Sideber;