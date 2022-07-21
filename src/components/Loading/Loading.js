import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='container mx-auto text-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;