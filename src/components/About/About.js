import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='about-us-title'>About us</h2>
            <div className='container d-flex align-items-center flex-column flex-lg-row px-4'>
                <div className='mission-div'>
                    <h3>Mission</h3>
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/marketing-concept-with-mission-word-flat-lay_176474-9481.jpg?t=st=1649100764~exp=1649101364~hmac=c2a30d14528b1cd956b2d5844e36d2ae7a0d5e024a1d40e7d5f52211f18259ac&w=996" alt="" />
                </div>
                <div className='vision-div'>
                    <h3>Vision</h3>
                    <img className='img-fluid' src="https://img.freepik.com/free-vector/vector-business-finance_49683-16.jpg?w=996" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;