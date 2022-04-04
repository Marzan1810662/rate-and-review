import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBackHome = () => {
        navigate('/home')
    }
    return (
        <div className='notfound-div'>
            <h1>Sorry! page not found....</h1>
            <img className='img-fluid' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?t=st=1649084524~exp=1649085124~hmac=5fd07876df90f3d32921e12bbb19883b1e7b4202a82469ef3f60fa8d28ba3198&w=996" alt="" />
        <button onClick={handleGoBackHome} className= 'go-back-home-btn'>Go Back Home</button>
        </div>
    );
};

export default NotFound;