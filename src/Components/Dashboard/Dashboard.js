import React from 'react';
import './Dashboard.css'
import { HiUserGroup } from "react-icons/hi";
import image from '../../images/Frame 33.png'

const Dashboard = () => {
    return (
        <div className='bodycolor container px-5'>
            <h1 className='fw-bolder dashboard-text py-5'>Dashboard</h1>

            <p className='popins'>Company Status</p>

            <div className='container mb-5'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-start gx-3 gy-2">

                    <div className="col">
                        <div className='bg-white p-4'>
                            <div className='d-flex  align-items-center'>
                                <HiUserGroup className='fs-6'></HiUserGroup>
                                <p className='text-secondary headline mb-0 ms-1'>Total Employee</p>
                            </div>
                            <div className='my-4 d-flex justify-content-between'>
                                <h3 className='popins fw-bolder'>450</h3>
                                <button className='btn btn-primary viewall-btn'>View All</button>
                            </div>

                            <hr  />

                            <div>
                                <img className="img-fluid"  src={image} alt="" />
                            </div>
                        </div>
                    </div>

                    
                    <div className="col">
                        <div className='bg-white p-4'>
                            <div className='d-flex  align-items-center'>
                                <HiUserGroup className='fs-6'></HiUserGroup>
                                <p className='text-secondary headline mb-0 ms-1'>Attend Today</p>
                            </div>
                            <div className='my-4 d-flex justify-content-between'>
                                <h3 className='popins fw-bolder'>420</h3>
                                <button className='btn btn-primary viewall-btn'>View All</button>
                            </div>

                            <hr />

                            <div>
                                <img className="img-fluid" src={image} alt="" />
                            </div>
                        </div>
                    </div>

                    
                    <div className="col">
                        <div className='bg-white p-4'>
                            <div className='d-flex  align-items-center'>
                                <HiUserGroup className='fs-6'></HiUserGroup>
                                <p className='text-secondary headline mb-0 ms-1'>Employees on Leave</p>
                            </div>
                            <div className='my-4 d-flex justify-content-between'>
                                <h3 className='popins fw-bolder'>15</h3>
                                <button className='btn btn-primary viewall-btn'>View All</button>
                            </div>

                            <hr />

                            <div>
                                <img className="img-fluid" src={image} alt="" />
                            </div>
                        </div>
                    </div>

                    
                    <div className="col">
                        <div className='bg-white p-4'>
                            <div className='d-flex  align-items-center'>
                                <HiUserGroup className='fs-6'></HiUserGroup>
                                <p className='text-secondary headline mb-0 ms-1'>New Expense Request</p>
                            </div>
                            <div className='my-4 d-flex justify-content-between'>
                                <h3 className='popins fw-bolder'>5</h3>
                                <button className='btn btn-primary viewall-btn'>View All</button>
                            </div>

                            <hr />

                            <div>
                                <img className="img-fluid" src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-2">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;