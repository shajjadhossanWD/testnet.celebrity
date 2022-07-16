import React from 'react';
import notFoundImage from '../../../Images/Na_Nov_26.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container mx-auto text-center mt-5 handleHeigth' style={{ height: "700px" }}>
            <img src={notFoundImage} className='img-fluid handleImg w-50 h-50' alt="" />
            <h1 className='text-danger fw-bold'>Sorry!</h1>
            <h3 className='text-danger'>Webpage not found</h3>
        </div>
    );
};

export default NotFound;