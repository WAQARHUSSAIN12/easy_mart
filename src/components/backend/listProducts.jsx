import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
import { NavLink } from 'react-router-dom';

export default function ListProducts() {

  const  [products,getProducts] = useState([]);
 
  useEffect(()=>{
    getAllProducts();
  },[]);

  const getAllProducts = () => {
      axios.get(`http://localhost:4111/getProduct`)
      .then(res => {
        const products = res.data;
        getProducts(products)
        console.log(products);
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
        <h4 className="page-title">List of products</h4>
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
            <h5 className="card-title">PRODUCTS</h5>
            <div className="table-responsive">
              <table id="zero_config" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>serial No</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price </th>
                    <th>Category</th>
                    <th>Created Date</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                {
                  products.map((product,i) =>
                    <tr key={product.id}>
                      <td> { ++i }</td>
                      <td>{product.name}</td>
                      <td>{product.desc}</td>
                      <td>{product.qty}</td>
                      <td>{product.Price}</td>
                      <td>{product.category ? product.category[0].name :"" }</td>
                      <td>{product.createdDate}</td>

                      <td>
                        <NavLink to={`/admin/prodit/${product._id}`} className="btn btn-primary"> UPDATE </NavLink> 
                        <NavLink to={`/admin/prodelete/${product._id}`} className="btn btn-danger"> DELETE </NavLink> 
                        <NavLink to={`/admin/proview/${product._id}`} className="btn btn-info"> VIEW </NavLink>
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
