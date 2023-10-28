import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import PlayButton from './assets/play.png';
import LogoButton from './assets/logo.png';
import ChartButton from './assets/chart.png';
import UserButton from './assets/user.png';
import MarkButton from './assets/mark.png';
import './DjScreen.css';

function DjScreen() {
    const [inputValue, setInputValue] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setSubmittedData(inputValue);
    };

    return (
        <div className="djScreenWrapper">
            {/* Left Sidebar */}
            <div className="djSidebar">
                {/* Logo at the top */}
                <Nav.Link href="/">
                    <a href="https://www.google.com.hk/">
                        <img src={LogoButton} alt="Logo" />
                    </a>
                </Nav.Link>

                <Nav.Link href="/">
                    <a href="https://www.google.com.hk/">
                        <img src={UserButton} alt="User" />
                    </a>
                </Nav.Link>

                <Nav.Link href="/">
                    <a href="https://www.google.com.hk/">
                        <img src={PlayButton} alt="Play" />
                    </a>
                </Nav.Link>

                <Nav.Link href="/">
                    <a href="https://www.google.com.hk/">
                        <img src={ChartButton} alt="Chart" />
                    </a>
                </Nav.Link>

                <Nav.Link href="/" className="markIcon">
                    <a href="https://www.google.com.hk/">
                        <img src={MarkButton} alt="Mark" />
                    </a>
                </Nav.Link>
            </div>

            {/* Main Content */}
            <div className="djMainContent">
                <div className="inputScreen">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter your data here"
                    />
                    <Button className="submitBtn" onClick={handleSubmit}>Submit</Button>

                    {submittedData && (
                        <div className="displayData">You submitted: {submittedData}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DjScreen;
