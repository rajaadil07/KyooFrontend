import React, { useState } from 'react';
import './yourkyoo.css';
import { Link } from 'react-router-dom';
import yeezusImage from './images/yeezus.webp';

const YourKyoo = () => {
    return (
        <div className='yourkyoo'>
            <p className='title'>
                Your Kyoo'd Songs
            </p>
            <div className='songdisplay'>
                <img src={yeezusImage} alt="Album cover" />
                <div className='songinfo'>
                    <p className='songtitle'>I Am A God</p>
                    <p className='artist'>Kanye West</p>
                </div>
                <button className='remove'>Remove</button>
            </div>
            <div className='songdisplay'>
                <img src={yeezusImage} alt="Album cover" />
                <div className='songinfo'>
                    <p className='songtitle'>I Am A God</p>
                    <p className='artist'>Kanye West</p>
                </div>
                <button className='remove'>Remove</button>
            </div>
            <div className='songdisplay'>
                <img src={yeezusImage} alt="Album cover" />
                <div className='songinfo'>
                    <p className='songtitle'>I Am A God</p>
                    <p className='artist'>Kanye West</p>
                </div>
                <button className='remove'>Remove</button>
            </div>
        </div>
    )
}

export default YourKyoo;
