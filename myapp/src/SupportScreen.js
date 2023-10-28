import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SupportScreen.css';
import emailjs from '@emailjs/browser';

function SupportScreen() {
    const form = useRef(null);

    const [isCooldown, setIsCooldown] = useState(false);

    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const nameMapping = {
            user_name: 'name',
            user_email: 'email'
        };

        const keyName = nameMapping[name] || name;
    
        setFormData(prevData => ({
            ...prevData,
            [keyName]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setIsCooldown(true);

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            setIsCooldown(false);
            return;
        }

        emailjs.sendForm('service_qfbau4c', 'template_i66x1bq', form.current, 'HQLbwSMjekbzYwckR')
        .then((result) => {
            alert('Email sent successfully!');
            console.log(result.text);

            setTimeout(() => {
                setIsCooldown(false);
            }, 10000);

        }, (error) => {
            alert('Error sending email. Please try again later.');
            console.error('EmailJS error:', error);

            setTimeout(() => {
                setIsCooldown(false);
            }, 10000);
        });
    };

    return (
        <div className="supportWrapper">
            <div className="kyooLogo">
                <h1>Kyoo</h1>
            </div>
            <div className="loadingSubtext">
                <h4>About Us</h4>
                <p>
                At Kyoo, we've bridged the gap between event hosts and attendees, creating an interactive musical ecosystem where every participant's voice counts. We believe in the power of music to connect people, and our platform ensures everyone gets a chance to be a part of the musical journey. Gone are the days where a single playlist dictated the mood of an event; with Kyoo, every attendee contributes to the melody of the moment.
                </p>
                <h4>Our Vision</h4>
                <p>
                We envision a world where event music is not just a background element but a collaborative experience. We dream of parties, gatherings, and events where attendees don't just listen to music—they interact with it. Using the rich database of the Spotify API, we provide access to an expansive song library, ensuring quality and variety. Our platform empowers users to queue songs, vote on each other's requests, and create a musical environment that resonates with everyone. At Kyoo, we're not just playing tracks; we're orchestrating memories.</p>
            </div>
            <div className="contactSection">
                <h2>Contact Us or Report A Bug</h2>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group controlId="formBasicName">
                        <input
                            type="text"
                            className="form-control" 
                            placeholder="Enter your name"
                            name="user_name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <input
                            type="email"
                            className="form-control" 
                            placeholder="Enter email"
                            name="user_email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <input
                            as="textarea"
                            rows={3}
                            className="form-control" 
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isCooldown}>
                        {isCooldown ? "Please Wait..." : "Send Message"}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SupportScreen;
