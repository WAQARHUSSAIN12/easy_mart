import React, { Component } from 'react'

export default function ProductForm() {
return (
<>       
 <div className="page-wrapper">
  {/* ============================================================== */}
  {/* Bread crumb and right sidebar toggle */}
  {/* ============================================================== */}
  <div className="page-breadcrumb">
    <div className="row">
      <div className="col-12 d-flex no-block align-items-center">
        <h4 className="page-title">Product Form</h4>
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
      <div className="col-md-12">
        <div className="card">
          <form className="form-horizontal">
            <div className="card-body">
              <h4 className="card-title">Product Info</h4>
              <div className="form-group row">
                <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">First Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="fname" placeholder="First Name Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Last Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="lname" placeholder="Last Name Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Password</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" id="lname" placeholder="Password Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">Company</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="email1" placeholder="Company Name Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">Contact No</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="cono1" placeholder="Contact No Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">Message</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="border-top">
              <div className="card-body">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  
    </div>
    {/* editor */}
  
    </div>
  </div>
  </> 
  )
}