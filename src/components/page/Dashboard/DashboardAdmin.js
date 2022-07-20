import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';
import DashboardModalNewAdmin from './DashboardModalNewAdmin';


const DashboardAdmin = () => {
    const [modalShowNewAdmin, setModalShowNewAdmin] = useState(false);
    // const [open, setOpen] = React.useState(false);
    // const [allAdmin, setAllAdmin] = React.useState([]);
    // const {chains, user1, logOut} = useContext(GrighundContext);

    // useEffect(() => {
    //   axios.get('https://backend.grighund.net/api/admin/all')
    //     .then(res => {
    //       setAllAdmin(res.data.admin);
    //       console.log(res.data.admin)
    //     })
    // }, [open])


    const handleAdminDelete = (id) => {
        //   const confirmDelete = window.confirm('Are you sure, you want to delete this admin?')
        //   if (confirmDelete) {
        //     axios.delete(`https://backend.grighund.net/api/admin/delete/${id}`, {
        //       headers: {
        //         'authorization': `Bearer ${localStorage.getItem('token')}`
        //       }
        //     })
        //       .then(res => {
        //         if (res.status === 200) {
        //           alert(res.data.message);
        //           setAllAdmin(allAdmin.filter(admin => admin._id !== id))
        //         }
        //       })
        //       .catch(error => {
        //         alert(error.response.data.message);
        //       })

        //   }
    }

    const handleClickOpen = () => {
        //   setOpen(true);
    };
    const handleClose = () => {
        //   setOpen(false);
    };

    const [openDelete, setOpenDelete] = React.useState(false);

    // const handleClickOpenDelete = () => {
    //   setOpenDelete(true);
    // };

    const handleCloseDelete = () => {
        setOpenDelete(false);
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
        <div className='adminBody overflow-hidden'>
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
            <h5 className='text-white text-start'>Admins</h5>
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
                    <button onClick={() => setModalShowNewAdmin(true)} className='adminBtn'>New Admin</button>
                </div>
                <div className="tableNormal ">

                    <Table className='text-white adminDataTable' responsive>


                        <thead>
                            <tr>
                                <th>Image</th>
                                <th className='text-start'>Username</th>
                                <th className='text-start adminHidden'>Email</th>
                                <th className='text-start adminHidden'>Mobile</th>
                                <th className='text-start'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                allAdmin.map(admin => ( */}
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <button className="editBtn"><i className="fas fa-edit"></i></button>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td align='center'> <img className='imgAdmin' src="https://backend.grighund.net/assets/1652882066696.jpeg" alt="profilePic" /></td>
                                <td style={{ textTransform: 'lowercase' }} className='text-start'>shajjadhossan</td>
                                <td className='text-start adminHidden'>	shajjadhossan111@gmail.com</td>
                                <td className='text-start adminHidden'>	+8801317762775</td>
                                <td className='action'>
                                    <div className="actionDiv text-start">
                                        <Link to='/dashboard/adminprofile'><button className="editBtn"><i className="fas fa-edit"></i></button></Link>
                                        <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            {/* ))
               } */}


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
                onHide={() => setModalShowNewAdmin(false)}
            />
        </div>
    );
};

export default DashboardAdmin;