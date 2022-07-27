import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AdminContext from "../../context/AdminContext"
const AdminRoute = ({ children }) => {
    const { currentAdmin } = useContext(AdminContext);
    let location = useLocation();
    if (currentAdmin?.role === "admin") {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;