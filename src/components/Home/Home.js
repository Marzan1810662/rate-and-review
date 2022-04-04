import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div className='container d-md-flex flex-md-row hero-section'>
            <div className='mt-md-5 hero-section-title'>
                <h1 className='mb-3 fw-bold title'>Spend Wisely and Get The Best!</h1>
                <p className='mb-2 pb-2 mb-md-4 pb-md-4'>
                The ZenBook Flip 13 OLED is distinguished by its all-new design, which blends extreme portability with unparalleled versatility. ZenBook Flip 13 OLED is especially compact thanks to its elegant NanoEdge FHD OLED display and 360° ErgoLift hinge, and the super-slim 13.9 mm chassis stores a wide range of I/O ports for convenient connectivity. Its Intel® CoreTM CPU allows for effortless productivity and visual creativity while on the go. The ZenBook Flip 13 OLED is a versatile and powerful all-arounder that's ideal for work or play.
                </p>
                <Button className='hero-section-btn' variant="outline-dark" size="lg">Live Demo</Button>
            </div>
            <div className= 'hero-section-img'>
                <div>
                    <img className='img-fluid' src="https://dlcdnwebimgs.asus.com/gain/9e413407-9d4f-4875-b0e1-a9ddc646c05c/w800" alt="ASUS zenbook flip 13 oled" />
                </div>
            </div>
        </div>
    );
};

export default Home;