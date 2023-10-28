import React, { useState } from 'react';
import './landingpage.css';

const LandingPage = () => {
  // Create a state variable to manage the input value
  const [textInput, setTextInput] = useState('');

  // Define a function to handle changes in the input value
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div >
      <div className='main'>
        <h1 className='kyooLogo'>Kyoo</h1>
        <p className='loadingSubtext'>Join a Kyoo. Control the aux.</p>
        <input className='codeInput'
          type='text'
          placeholder='Enter your event code...'
          value={textInput}
          onChange={handleInputChange}
        />
        <button className='goButton'>Get the party started!</button>
        <h2 className='forHost'>
          Hosting an event? Click <a  href="https://example.com">here</a> to create a Kyoo. 
        </h2> 
        {/* fill this in with a link to the host page */}
      </div> 
    </div>
  );
};

export default LandingPage;