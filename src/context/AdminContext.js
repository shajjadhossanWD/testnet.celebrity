import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [currentAdmin, setCurrentAdmin] = useState({});
    const [loading, setLoading] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    useEffect(() => {
        axios.get('https://backend.celebrity.sg/api/admin/current', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setCurrentAdmin(res.data.admin);
                console.log(res.data.admin)
            })
            .catch(err => {
                setCurrentAdmin(null);
            });
    }, []);

    

    const login = async (email, password) => {
        await axios.post('https://backend.celebrity.sg/api/admin/login', {
            email,
            password
        })
            .then(res => {
                if (res.status === 200) {
                    setIsAuthenticating(true);
                    localStorage.setItem('verify-token', res.data.token);
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            });

    }

    const verifyOtp = async (otp) => {
        await axios.post('https://backend.celebrity.sg/api/admin/verify', {
            otp
        }, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('verify-token')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setIsAuthenticating(false);
                    setCurrentAdmin(res.data.admin);
                    localStorage.setItem('token', res.data.token);
                    localStorage.removeItem('verify-token');
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }


    const updateAdminProfile = (formData) => {
        setLoading(true);
    }

    const updateAllAdminProfile = (formData) => {
        setLoading(true);
        axios.put(`https://backend.celebrity.sg/api/admin/update-all-profile/${currentAdmin._id}`, formData)
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    setCurrentAdmin(res.data.admin);
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    const logout = () => {
        setCurrentAdmin(null);
        localStorage.removeItem('token');
    }

    return (
        <AdminContext.Provider value={{
            currentAdmin,
            updateAdminProfile,
            loading,
            login,
            logout,
            verifyOtp,
            isAuthenticating,
            updateAllAdminProfile
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminProvider;