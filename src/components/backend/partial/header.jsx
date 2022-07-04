import React, { Component } from 'react'
import { NavLink,history,Redirect, Navigate ,Route } from 'react-router-dom'
 

export default function Header  () {

    // const { redirect } = this.state;
    // if (true) {
    //     return <Route path="/redirect" Component={ <Navigate to="/error-page" /> } />;
        
    // }
    return (
    <>   
            {/* ============================================================== */}
            {/* Topbar header - style you can find in pages.scss */}
            {/* ============================================================== */}
            <header className="topbar" data-navbarbg="skin5">
     
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin5">
                    {/* ============================================================== */}
                    {/* Logo */}
                    {/* ============================================================== */}
                    <a className="navbar-brand" href="index.html">
                    {/* Logo icon */}
                    <b className="logo-icon ps-2">
                        {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                        {/* Dark Logo icon */}
                        <img src="../../../admin/assets/images/logo-icon.png" alt="homepage" className="light-logo" width={25} />
                    </b>
                    {/*End Logo icon */}
                    {/* Logo text */}
                    <span className="logo-text ms-2">
                        {/* dark Logo text */}
                        <img src="../../../admin/assets/images/logo-text.png" alt="homepage" className="light-logo" />
                    </span>
                    {/* Logo icon */}
                    {/* <b class="logo-icon"> */}
                    {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                    {/* Dark Logo icon */}
                    {/* <img src="../../../admin/assets/images/logo-text.png" alt="homepage" class="light-logo" /> */}
                    {/* </b> */}
                    {/*End Logo icon */}
                    </a>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Toggle which is visible on mobile only */}
                    {/* ============================================================== */}
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                </div>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    {/* ============================================================== */}
                    {/* toggle and nav items */}
                    {/* ============================================================== */}
                    <ul className="navbar-nav float-start me-auto">
                    <li className="nav-item d-none d-lg-block">
                        <a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24" /></a>
                    </li>
                
                    </ul>
                    {/* ============================================================== */}
                    {/* Right side toggle and nav items */}
                    {/* ============================================================== */}
                    <ul className="navbar-nav float-end">
                    {/* ============================================================== */}
         
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Messages */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id={2} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="font-24 mdi mdi-comment-processing" />
                        </a>
                        <ul className="
                            dropdown-menu dropdown-menu-end
                            mailbox
                            animated
                            bounceInDown" aria-labelledby={2}>
                        <ul className="list-style-none">
                            <li>
                            <div className>
                                {/* Message */}
                                <a href="javascript:void(0)" className="link border-top">
                                <div className="d-flex no-block align-items-center p-10">
                                    <span className="
                                        btn btn-success btn-circle
                                        d-flex
                                        align-items-center
                                        justify-content-center
                                    "><i className="mdi mdi-calendar text-white fs-4" /></span>
                                    <div className="ms-2">
                                    <h5 className="mb-0">Event today</h5>
                                    <span className="mail-desc">Just a reminder that event</span>
                                    </div>
                                </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="link border-top">
                                <div className="d-flex no-block align-items-center p-10">
                                    <span className="
                                        btn btn-info btn-circle
                                        d-flex
                                        align-items-center
                                        justify-content-center
                                    "><i className="mdi mdi-settings fs-4" /></span>
                                    <div className="ms-2">
                                    <h5 className="mb-0">Settings</h5>
                                    <span className="mail-desc">You can customize this template</span>
                                    </div>
                                </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="link border-top">
                                <div className="d-flex no-block align-items-center p-10">
                                    <span className="
                                        btn btn-primary btn-circle
                                        d-flex
                                        align-items-center
                                        justify-content-center
                                    "><i className="mdi mdi-account fs-4" /></span>
                                    <div className="ms-2">
                                    <h5 className="mb-0">Pavan kumar</h5>
                                    <span className="mail-desc">Just see the my admin!</span>
                                    </div>
                                </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="link border-top">
                                <div className="d-flex no-block align-items-center p-10">
                                    <span className="
                                        btn btn-danger btn-circle
                                        d-flex
                                        align-items-center
                                        justify-content-center
                                    "><i className="mdi mdi-link fs-4" /></span>
                                    <div className="ms-2">
                                    <h5 className="mb-0">Luanch Admin</h5>
                                    <span className="mail-desc">Just see the my new admin!</span>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </li>
                        </ul>
                        </ul>
                    </li>
                    {/* ============================================================== */}
                    {/* End Messages */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                        <a className="
                            nav-link
                            dropdown-toggle
                            text-muted
                            waves-effect waves-dark
                            pro-pic
                        " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../../../admin/assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="javascript:void(0)"><i className="mdi mdi-account me-1 ms-1" /> My Profile</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="mdi mdi-wallet me-1 ms-1" /> My Balance</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="mdi mdi-email me-1 ms-1" /> Inbox</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i className="mdi mdi-settings me-1 ms-1" /> Account
                            Setting</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off me-1 ms-1" /> Logout</a>
                        <div className="dropdown-divider" />
                        <div className="ps-4 p-10">
                            <a href="javascript:void(0)" className="btn btn-sm btn-success btn-rounded text-white">View Profile</a>
                        </div>
                        </ul>
                    </li>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    </ul>
                </div>
                </nav>
            </header>
            {/* ============================================================== */}
            {/* End Topbar header */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Left Sidebar - style you can find in sidebar.scss  */}
            {/* ============================================================== */}
            <aside className="left-sidebar" data-sidebarbg="skin5">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="pt-4">
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link waves-effect waves-dark sidebar-link"  to="/admin" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></NavLink>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Products Management </span></a>
                        <ul aria-expanded="false" className="collapse first-level">
                        <li className="sidebar-item">
                            <NavLink to="/admin/listProduct" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> List Product </span></NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to="/admin/addProduct" className="sidebar-link"><i className="mdi mdi-note-plus" /><span className="hide-menu"> Add Product </span></NavLink>
                        </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Category Management </span></a>
                        <ul aria-expanded="false" className="collapse first-level">
                        <li className="sidebar-item">
                            <NavLink to="/admin/listCategories" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> List Categories </span></NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to="/admin/addCategory" className="sidebar-link"><i className="mdi mdi-note-plus" /><span className="hide-menu"> Add Category </span></NavLink>
                        </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Users Management </span></a>
                        <ul aria-expanded="false" className="collapse first-level">
                        <li className="sidebar-item">
                            <NavLink to="/admin/listUsers" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> List Users </span></NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to="/admin/addUser" className="sidebar-link"><i className="mdi mdi-note-plus" /><span className="hide-menu"> Add User </span></NavLink>
                        </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Orders Management </span></a>
                        <ul aria-expanded="false" className="collapse first-level">
                        <li className="sidebar-item">
                            <NavLink to="/admin/listOrders" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> List Orders </span></NavLink>
                        </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/admin/report" aria-expanded="false"><i className="mdi mdi-blur-linear" /><span className="hide-menu">Reports</span></NavLink>
                    </li>
                   
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
            {/* ============================================================== */}
            {/* End Left Sidebar - style you can find in sidebar.scss  */}
            </>
    )
}
