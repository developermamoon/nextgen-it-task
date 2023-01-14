import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <div className='row g-0'>
                <div className="col-12 col-md-3 sidebar-body">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-9">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;