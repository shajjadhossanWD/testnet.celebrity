import { Backdrop, CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const AdminRoute = ({ children }) => {
    const { admin, isAuthenticating } = useContext(AdminContext);
    let location = useLocation();
    if (isAuthenticating) return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isAuthenticating}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
    if (admin.role === "admin") {
        return children;
    }
    if (!isAuthenticating) {
        return <Navigate to="/" state={{ from: location }} />;
    }

};

export default AdminRoute;