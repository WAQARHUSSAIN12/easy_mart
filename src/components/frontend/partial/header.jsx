import React, { Component } from 'react'
import { Route, Link,NavLink,Routes, BrowserRouter as Router } from 'react-router-dom' 
export default class Header extends Component {
  render() {
    return (
    <header className="header shop">
        {/* Topbar */}
        <div className="topbar">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                {/* Top Left */}
                <div className="top-left">
                    <ul className="list-main">
                    <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                    <li><i className="ti-email" /> support@easymart.com</li>
                    </ul>
                </div>
                {/*/ End Top Left */}
                </div>
                <div className="col-lg-8 col-md-12 col-12">
                {/* Top Right */}
                <div className="right-content">
                    <ul className="list-main">
                        <li><i className="ti-location-pin"  /> Store location</li>
                        <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                        <li><i className="ti-user" /> <a href="#">My account</a></li>
                        <li><i className="ti-power-off" /><a href="login.html#">Login</a></li>
                    </ul>
                </div>
                {/* End Top Right */}
                </div>
            </div>
            </div>
        </div>
        {/* End Topbar */}
        <div className="middle-inner">
            <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                {/* Logo */}
                <div className="logo">
                    <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                </div>
                {/*/ End Logo */}
                {/* Search Form */}
                <div className="search-top">
                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                    {/* Search Form */}
                    <div className="search-top">
                    <form className="search-form">
                        <input type="text" placeholder="Search here..." name="search" />
                        <button value="search" type="submit"><i className="ti-search" /></button>
                    </form>
                    </div>
                    {/*/ End Search Form */}
                </div>
                {/*/ End Search Form */}
                <div className="mobile-nav" />
                </div>
                <div className="col-lg-8 col-md-7 col-12">
          
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                    {/* Search Form */}
               
                    <div className="sinlge-bar shopping">
                    <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></a>
                    {/* Shopping Item */}
                    <div className="shopping-item">
                        <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <a href="#">View Cart</a>
                        </div>
                        <ul className="shopping-list">
                        <li>
                            <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                            <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                            <h4><a href="#">Woman Ring</a></h4>
                            <p className="quantity">1x - <span className="amount">$99.00</span></p>
                        </li>
                        <li>
                            <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                            <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                            <h4><a href="#">Woman Necklace</a></h4>
                            <p className="quantity">1x - <span className="amount">$35.00</span></p>
                        </li>
                        </ul>
                        <div className="bottom">
                        <div className="total">
                            <span>Total</span>
                            <span className="total-amount">$134.00</span>
                        </div>
                        <a href="checkout.html" className="btn animate">Checkout</a>
                        </div>
                    </div>
                    {/*/ End Shopping Item */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Header Inner */}
        <div className="header-inner">
            <div className="container">
            <div className="cat-nav-head">
                <div className="row">
                <div className="col-lg-9 col-12">
                    <div className="menu-area">
                    {/* Main Menu */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">	
                        <div className="nav-inner">	
                            <ul className="nav main-menu menu navbar-nav">
                            <li className="active">
                            <NavLink to="/" > Home </NavLink>
                            </li>											
                            <li><NavLink to="/contact"> Contact </NavLink></li>	
                            </ul>
                        </div>
                        </div>
                    </nav>
                    {/*/ End Main Menu */}	
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/*/ End Header Inner */}
        {/*/ End Header */}
    </header>
    )
  }
}
