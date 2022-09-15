import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../../Loading/Loading';
import './DashboardAdmin.css';
import DashboardModalNewAdmin from './DashboardModalNewAdmin';
import Swal from 'sweetalert2';


const DashboardAdmin = () => {
    const [modalShowNewAdmin, setModalShowNewAdmin] = useState(false);
    const [allAdmin, setAllAdmin] = useState([]);
    const [isLoadingAdmin, setIsLoadingAdmin] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        fetch("https://backend.celebrity.sg/api/v1/admin/")
            .then(res => res.json())
            .then(data => setAllAdmin(data))
    }, [refetch])
    if (isLoadingAdmin) {
        return <Loading />
    }

    const handleAdminDelete = (id) => {
        Swal.fire({
            text: "Are you sure, you want to delete this admin?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',

        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://backend.celebrity.sg/api/v1/admin/${id}`, {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('adminCelebrity')}`
                    }
                })
                    .then(res => {
                        if (res.status === 200) {
                            swal({
                                title: "Success",
                                text: `${res.data.message}`,
                                icon: "success",
                                button: "OK!",
                                className: "modal_class_success",
                            });
                            setAllAdmin(allAdmin.filter(admin => admin._id !== id))
                        }
                    })
                    .catch(error => {
                        swal({
                            title: "Attention",
                            text: `${error.response.data.message}`,
                            icon: "warning",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    })
            }
        })
    }

    

    return (
        <div className='overflow-hidden'
            // style={{ height: allAdmin.length <= 5 ? "150vh" : "auto" }}
            style={{ height: "120vh" }}
        >
            <h5 className='text-white text-start ps-1'>Admins</h5>
            <div className='adminCard py-2'>
                <div className="adminBtnDiv text-end">
                    <button onClick={() => setModalShowNewAdmin(true)} className='adminBtn text-uppercase'>New Admin</button>
                </div>
                <div className="tableNormal ">

                    <Table className='text-white adminDataTable' responsive>


                        <thead>
                            <tr>
                                <th className='text-center'>Image</th>
                                <th className='text-start'>Username</th>
                                <th className='text-start adminHidden'>Email</th>
                                <th className='text-start adminHidden'>Mobile</th>
                                <th className='text-start action'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAdmin?.map(admin => <tr admin={admin} key={admin._id} className='tableRow'>
                                    <td align='center'>
                                        {admin?.avatar ? <img className='imgAdmin' src={`https://backend.celebrity.sg/${admin.avatar}`} alt="profilePic" /> : <img className='imgAdmin' src="https://backend.celebrity.sg/assets/1660396587217.jpeg" alt="profilePic" />}
                                    </td>
                                    <td style={{ textTransform: 'lowercase' }} className='text-start'>{admin?.username}</td>
                                    <td className='text-start adminHidden'>{admin?.email}</td>
                                    <td className='text-start adminHidden'>{admin?.phone}</td>
                                    <td className='action'>
                                        <div className="actionDiv text-start">
                                            <Link to={`/dashboard/adminprofile/${admin?._id}`}><button className="editBtn"><i className="fas fa-edit"></i></button></Link>
                                            <button className="deleteBtn" onClick={() => handleAdminDelete(admin?._id)}><i className="fas fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <DashboardModalNewAdmin
                show={modalShowNewAdmin}
                setIsLoadingAdmin={setIsLoadingAdmin}
                setModalShowNewAdmin={setModalShowNewAdmin}
                setRefetch={setRefetch}
                refetch={refetch}
                onHide={() => setModalShowNewAdmin(false)}
            />
        </div>
    );
};

export default DashboardAdmin;