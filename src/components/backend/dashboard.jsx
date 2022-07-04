import React, { Component } from 'react'

export default function Dashboard() {
return (
<>
{/* Page wrapper  */}
{/* ============================================================== */}
<div className="page-wrapper">
  {/* ============================================================== */}
  {/* Bread crumb and right sidebar toggle */}
  {/* ============================================================== */}
  <div className="page-breadcrumb">
    <div className="row">
      <div className="col-12 d-flex no-block align-items-center">
        <h4 className="page-title">Dashboard</h4>
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
    {/* Sales Cards  */}
    {/* ============================================================== */}
    <div className="row">
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-cyan text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-view-dashboard" />
            </h1>
            <h6 className="text-white">Dashboard</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-success text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-chart-areaspline" />
            </h1>
            <h6 className="text-white">Charts</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-warning text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-collage" />
            </h1>
            <h6 className="text-white">Widgets</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-danger text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-border-outside" />
            </h1>
            <h6 className="text-white">Tables</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-info text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-arrow-all" />
            </h1>
            <h6 className="text-white">Full Width</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      {/* Column */}
      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-danger text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-receipt" />
            </h1>
            <h6 className="text-white">Forms</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-info text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-relative-scale" />
            </h1>
            <h6 className="text-white">Buttons</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-cyan text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-pencil" />
            </h1>
            <h6 className="text-white">Elements</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-success text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-calendar-check" />
            </h1>
            <h6 className="text-white">Calnedar</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-2 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-warning text-center">
            <h1 className="font-light text-white">
              <i className="mdi mdi-alert" />
            </h1>
            <h6 className="text-white">Errors</h6>
          </div>
        </div>
      </div>
      {/* Column */}
    </div>
    {/* ============================================================== */}
    {/* Sales chart */}
    {/* ============================================================== */}
    
    {/* ============================================================== */}
    {/* Sales chart */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Recent comment and chats */}
    {/* ============================================================== */}
    <div className="row">
      {/* column */}
      <div className="col-lg-12">
        {/* card */}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-0">Progress Box</h4>
            <div className="mt-3">
              <div className="d-flex no-block align-items-center">
                <span>81% Clicks</span>
                <div className="ms-auto">
                  <span>125</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '81%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>72% Uniquie Clicks</span>
                <div className="ms-auto">
                  <span>120</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '72%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>53% Impressions</span>
                <div className="ms-auto">
                  <span>785</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '53%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>3% Online Users</span>
                <div className="ms-auto">
                  <span>8</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '3%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* Recent comment and chats */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Container fluid  */}
</div>

</>
    )
  }