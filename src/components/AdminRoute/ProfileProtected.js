import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CelebrityContext } from '../../context/CelebrityContext';

const ProfileProtected = ({ children }) => {
    const { user } = useContext(CelebrityContext);
    let location = useLocation();

    if (user.walletAddress) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} />;
};

export default ProfileProtected;