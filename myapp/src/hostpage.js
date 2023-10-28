import React, { useState } from 'react';
import './hostpage.css';
import { Link } from 'react-router-dom';

const HostPage = () => {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
    };

    return (
        
        <div className='main'>
            <h1 className='test'>
                Host a Kyoo!
            </h1>
            <h3 className='backToSignIn'>
                <Link to="/landingpage">Back to Sign In</Link>
            </h3>
            <div>
                <p className='category'>Event Name (i.e. Michael and Lisa's Wedding)</p>
                <input
                    type="text"
                    placeholder="What are we celebrating?"
                    value={inputValue1}
                    onChange={handleInputChange1}
                />
            </div>
            <div>
                <p className='category'>Date of Event (MM/DD/YYYY)</p>
                <input
                    type="text"
                    placeholder="What date?"
                    value={inputValue2}
                    onChange={handleInputChange2}
                />
            </div>
            <div>
                <p className='category'>Start Time of Event</p>
                <input
                    type="text"
                    placeholder="What time?"
                    value={inputValue3}
                    onChange={handleInputChange3}
                />
            </div>
            <button className='hostGoButton'>Let's Go!</button>
        </div>
    );
}

export default HostPage;