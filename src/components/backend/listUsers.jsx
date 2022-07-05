import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
import { NavLink } from 'react-router-dom';

export default function ListUsers() {

  const  [users,getUsers] = useState([]);
 
  useEffect(()=>{
    getAllProducts();
  },[]);

  const getAllProducts = () => {
      axios.get(`http://localhost:4111/getUsers`)
      .then(res => {
        const users = res.data;
        getUsers(users)
        console.log(users);
      })
  }
    return (
    <>
      {/* ============================================================== */}
      {/* Page wrapper  */}
      {/* ============================================================== */}
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">List Of users</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">USERS</h5>
                  <div className="table-responsive">
                    <table id="zero_config" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Delivery Address</th>
                          <th>User Type</th>
                          <th>Created date</th>
                          <th>Options</th> 
                        </tr>
                      </thead>
                      <tbody>
                      {
                     users.map((user,i) =>
                      <tr key={user.id}>
                      <td> { ++i }</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.devliveryAddress}</td>
                      <td>{user.userType ? user.userType :"" }</td>
                      <td>{user.createdDate}</td>
                      <td>
                        <NavLink to={`/admin/prodit/${user._id}`} className="btn btn-primary"> UPDATE </NavLink> 
                        <NavLink to={`/admin/prodelete/${user._id}`} className="btn btn-danger"> DELETE </NavLink> 
                        <NavLink to={`/admin/proview/${user._id}`} className="btn btn-info"> VIEW </NavLink>
                      </td>
                    </tr>  
                    )
                  }
                      </tbody>
                         
                      
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End PAge Content */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Right sidebar */}
          {/* ============================================================== */}
          {/* .right-sidebar */}
          {/* ============================================================== */}
          {/* End Right sidebar */}
          {/* ============================================================== */}
        </div>
      </div>
      </>     
    )
  }
