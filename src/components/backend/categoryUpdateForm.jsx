import React, { Component } from 'react'
import axios from "axios"; 
import { useState } from 'react';
const Swal = require('sweetalert2')

export default function CategoryUpdateForm() {
      
  const [name, setName] = useState();

    // componentDidMount(){   
    //     const user = {
    //         id: state.id
    //     }
    //     axios({
    //         method:'post',
    //         url: 'http://localhost:4111/getCategory',
    //         data: user,
    //       }).then(res=>{
    //         //console.log(res);
    //         console.log(res.data);
    //         if(res.data.message){
                
    //         }
    //         //window.location = "/listCategories" // This line of code will redirect you once the submission is succeed
    //       })

    //     setState({ id:  window.location.href.substring(window.location.href.lastIndexOf("/") + 1)});
    //    // alert(user.id);
    // }
 
    function handleSubmit(event){
        event.preventDefault();
        const user = {
          name: this.state.name
        }

        //axios.get('http://localhost:4111/createCategory', 
        axios({
          method:'post',
          url: 'http://localhost:4111/updateCategory',
          data: user,
        })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            if(res.data.message){
              Swal.fire(
                'Success',
                'You added new category' ,
                'success'
              );
            }
            //window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
          })
      }
     function handleChange(event){
        setName({ name: event.target.value});
      } 
    //const id  = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
    //console.log(id);

    return (
        <>  
             <div className="page-wrapper">
         {/* ============================================================== */}
         {/* Bread crumb and right sidebar toggle */}
         {/* ============================================================== */}
         <div className="page-breadcrumb">
           <div className="row">
             <div className="col-12 d-flex no-block align-items-center">
               <h4 className="page-title">Category Form</h4>
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
                 <form className="form-horizontal" onSubmit = { this.handleSubmit }>
                   <div className="card-body">
                     <h4 className="card-title">Category Update Info</h4>
                     <div className="form-group row">
                       <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Category Name</label>
                       <div className="col-sm-9">
                         <input type="text" className="form-control" name = "name" onChange= {this.handleChange} id="fname" placeholder="Category Name Here" />
                       </div>
                     </div>
                   </div>
                   <div className="border-top">
                     <div className="card-body">
                       <button type="submit" className="btn btn-primary">
                          Update Category
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