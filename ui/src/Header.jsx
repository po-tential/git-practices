import React, { useEffect, useState } from "react";

function Header({ toggleSidebar }) {
  return (
    <>
      <nav className="sb-topnav navbar navbar-dark">
        <div>
          <a className="navbar-brand ps-3" href="index.html">
            POSCODX
          </a>
          <div className="navbar-brand ps-3" style={{ fontSize: "0.75rem" }}>
            Retirement Inspection System
          </div>
        </div>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars" style={{ color: "#000000" }}></i>
        </button>
      </nav>
    </>
  );
}

export default Header;
