import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const AdminRoute = ({ children }) => {
    const { admin } = useContext(AdminContext);
    let location = useLocation();
    console.log(admin.role)

    if (admin?.role === "admin") {
        <Navigate to="/dashboard" state={{ from: location }} />
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;

