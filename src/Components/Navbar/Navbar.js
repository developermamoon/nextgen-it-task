import React from 'react';
import './Navbar.css'
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import user from '../../images/user.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className=''>
                <div className="container d-flex justify-content-between">
                    <input type="text" name="" id="" className='search-bar' placeholder="Search" />

                    <div className='d-flex align-items-center'>
                        <FaCalendarAlt className='me-4'></FaCalendarAlt>
                        <FaBell className='me-4'></FaBell>
                        <img src={user} className="user-image rounded-5 me-4" alt="" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;