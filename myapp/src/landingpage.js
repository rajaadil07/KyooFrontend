import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEvent } from './context/EventContext';
import './landingpage.css'; // Make sure your CSS file is correctly referenced

const LandingPage = () => {
  const [textInput, setTextInput] = useState('');
  const navigate = useNavigate();
  const { setEventId } = useEvent();

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleGoButtonClick = async () => {
    const apiUrl = `http://localhost:8000/api/events/join/?pin=${textInput}`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        setEventId(data.event_id); // Make sure your API returns the event_id
        navigate('/home');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };

  return (
    <div>
      <div className="main">
        <h1 className="kyooLogo">Kyoo</h1>
        <p className="loadingSubtext">Join a Kyoo. Control the aux.</p>
        <input
          className="codeInput"
          type="text"
          placeholder="Enter your event code..."
          value={textInput}
          onChange={handleInputChange}
        />
        {textInput.length === 6 && (
          <button className="joinEventButton" onClick={handleGoButtonClick}>
            Join Event
          </button>
        )}
        <Link to="/home">
          <button className="goButton">Get the party started!</button>
        </Link>
        <h2 className="forHost">
          Hosting an event? Click <Link to="/hostpage">here</Link> to create a Kyoo.
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
