import React from 'react';
import './Sidebar.css'
import { BiSidebar } from "react-icons/bi";

const SideBar = () => {
    return (
        <div className='sidebar-body'>
            <h3 className='logo fw-bold text-center mb-5'>Place A Logo Here</h3>

            <ul className='p-0'>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Dashboard</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Attendance</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Employees</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Leaves</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Expense</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Notice</li>
                <li className='ps-4 ps-lg-5 ps-md-4 py-2'> <BiSidebar className='me-3'></BiSidebar> Departments</li>
            </ul>
        </div>
    );
};

export default SideBar;