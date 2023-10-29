import React, { useState } from 'react';
import './hostpage.css';
import { Link, useNavigate } from 'react-router-dom';

const HostPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [theme, setTheme] = useState("");
    const [hostName, setHostName] = useState("");

    const navigate = useNavigate();

    const handleEventCreation = async () => {
        console.log("Button clicked!");
        try {
            const response = await fetch('http://127.0.0.1:8000/api/events/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    date: date,
                    theme: theme,
                    host_name: hostName,
                })
            });

            if (response.ok) {
                navigate('/home');
            } else {
                const errorData = await response.json();
                console.error('Error creating the event:', errorData);
            }
        } catch (error) {
            console.error('There was an error sending the request:', error);
        }
    };

    return (
        <div className='main'>
            <h1 className='test'>Host a Kyoo!</h1>
            <h3 className='backToSignIn'>
                <Link to="/landingpage">Back to Home Page</Link>
            </h3>
            <div className="inputWrapper">
                <p className='category'>Host Name</p>
                <input
                    type="text"
                    placeholder="Enter host name"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                />
            </div>
            <div className="inputWrapper">
                <p className='category'>Event Name (e.g., Michael and Lisa's Wedding)</p>
                <input
                    type="text"
                    placeholder="What are we celebrating?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="inputWrapper">
                <p className='category'>Event Description (e.g., Celebrate love and unity!)</p>
                <input
                    type="text"
                    placeholder="Describe the event"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="inputWrapper">
                <p className='category'>Event Date & Time (e.g., 2023-10-25 15:30:00)</p>
                <input
                    type="text"
                    placeholder="e.g., 2023-10-25 15:30:00"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="inputWrapper">
                <p className='category'>Theme (Optional, e.g., Retro Night)</p>
                <input
                    type="text"
                    placeholder="Specify a theme for the event, if any"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                />
            </div>
            <button className='hostGoButton' onClick={handleEventCreation}>Let's Go!</button>
        </div>
    );
}

export default HostPage;