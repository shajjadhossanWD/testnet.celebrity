import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const AdminRoute = ({ children }) => {
    const { admin } = useContext(AdminContext);
    let location = useLocation();
    if (admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;

