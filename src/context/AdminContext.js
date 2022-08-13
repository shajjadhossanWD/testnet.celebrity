import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export default function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(null);
    // console.log(localStorage)
    useEffect(() => {
        axios.get("https://backend.celebrity.sg/api/v1/admin/currentAdmin", {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('adminCelebrity')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setAdmin(res.data.admin);

                }
            })
            .catch(err => {
                setAdmin(null);
            });

    }, []);


    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("adminCelebrity");
    }

    return (
        <AdminContext.Provider value={{
            admin,
            setAdmin,
            logout,
        }}>{children}</AdminContext.Provider>
    )
}