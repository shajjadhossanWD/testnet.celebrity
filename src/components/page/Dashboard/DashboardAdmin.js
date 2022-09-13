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
    // const [open, setOpen] = React.useState(false);
    const [allAdmin, setAllAdmin] = useState([]);
    const [isLoadingAdmin, setIsLoadingAdmin] = useState(false);
    const [refetch, setRefetch] = useState(false);
    // const [imgAva, setImgAva] = useState([https://backend.celebrity.sg/]);
    // const {chains, user1, logOut} = useContext(GrighundContext);

    useEffect(() => {
        fetch("https://backend.celebrity.sg/api/v1/admin/")
            .then(res => res.json())
            .then(data => setAllAdmin(data))
    }, [refetch])
    // console.log(allAdmin)
    // Loading Spinner
    if (isLoadingAdmin) {
        return <Loading />
    }

    // console.log(allAdmin.admin);
    const handleAdminDelete = (id) => {
        // const confirmDelete = window.confirm('Are you sure, you want to delete this admin?')

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
                            // alert(res.data.message);
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
                        // alert(error.response.data.message);
                        // console.log(error);
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



        // fetch(`https://backend.celebrity.sg/api/admin/delete/${id}`, {
        //     method: "DELETE",
        //     headers: {
        //         // 'authorization': `Bearer ${localStorage.getItem('token')}`,
        //         "content-type": "application/json"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(deleted => {
        //         console.log(deleted);
        //         if (deleted) {

        //         }
        //     })
    }


    const handleClickOpen = () => {
        //   setOpen(true);
    };
    const handleClose = () => {
        //   setOpen(false);
    };

    // const [openDelete, setOpenDelete] = useState(false);

    // const handleClickOpenDelete = () => {
    //   setOpenDelete(true);
    // };

    const handleCloseDelete = () => {
        // setOpenDelete(false);
    };

    const changeStatus = (id) => {
        const confirmChange = window.confirm('Are you sure, you want to change this status?')
        //   if (confirmChange) {
        //     axios.put(`https://backend.grighund.net/api/admin/change-status/${id}`, {}, {
        //       headers: {
        //         'authorization': `Bearer ${localStorage.getItem('token')}`
        //       }
        //     })
        //       .then(res => {
        //         if (res.status === 200) {
        //           alert(res.data.message);
        //           setAllAdmin(allAdmin.map(admin => {
        //             if (admin._id === id) {
        //               admin.active = !admin.active
        //             }
        //             return admin
        //           }))
        //         }
        //       })
        //       .catch(error => {
        //         alert(error.response.data.message);
        //       });
    }

    const Logout = () => {
        //   logOut();
        //   swal({
        //       // title: "S",
        //       text: "You have successfully logout.",
        //       icon: "success",
        //       button: "OK!",
        //       className: "modal_class_success",
        //   });
    }

    return (
        <div className='overflow-hidden'
            // style={{ height: allAdmin.length <= 5 ? "150vh" : "auto" }}
            style={{ height: "120vh" }}
        >
            {/* { user1.walletAddress ?
          <div className='text-danger text-start'> { (chains === "0x61") ? 
          <p>
          <span>You are connected to Binance Chain Testnet</span>
          <p><button type='button' onClick={Logout} className='mintBtn11 d-flex mt-1'>Logout</button></p>
          </p>
          :
          <p>
          <span>You are connected to Binance Chain</span>
          <p><button type='button' onClick={Logout} className='mintBtn11 d-flex mt-1'>Logout</button></p>
          </p>
          }</div>
          :
          <p className='text-danger text-start'><span>You are not connected to Binance Chain</span></p>
        } */}
            <h5 className='text-white text-start ps-1'>Admins</h5>
            <div className='adminCard py-2'>
                {/* <h5 className='text-start text-white ms-4 mt-4 activeLegends'>Legend</h5>
      <div className="actions ">
      <div className="actionBtn d-flex ms-3">
      {allAdmin.map(action => (
        <div className="action">
            {
              action.active ?
                <button className='AccessBtn d-flex mx-2 text-white' onClick={() => changeStatus(action._id)}> <i className="fas fa-user-check mx-1"></i> Activate</button>
                :
                <button className='AccessBtn bg-warning d-flex mx-2' onClick={() => changeStatus(action._id)} > <i className="fas fa-user-times mx-1"></i> Deactivate</button>
            }
            </div>
     
        ))}
        </div> */}
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
                {/* <AdminPopUp
          open={open}
          handleClose={handleClose}
        >
        </AdminPopUp>

        <DeletePopUp
          handleCloseDelete={handleCloseDelete}
          openDelete={openDelete}
        >

        </DeletePopUp> */}
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