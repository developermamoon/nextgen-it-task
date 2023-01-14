import React from 'react';
import './Navbar.css'
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import user from '../../images/user.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className=''>
                <div className="container mt-2">
                    <div className="d-flex justify-content-between">

                   
                            <input type="text" name=""  id="" className ='my-2 ms-lg-5 ms-md-2 search-bar w-50' placeholder="Search" />

   

  
                            <div className='d-md-flex align-items-center'>
                                <FaCalendarAlt className='me-4'></FaCalendarAlt>
                                <FaBell className='me-4'></FaBell>
                                <img src={user} className="user-image rounded-5 me-4" alt="" />
                            </div>
         
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;