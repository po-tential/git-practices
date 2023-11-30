import React, { useEffect, useState } from "react";

function SideNav({ sidebarToggled }) {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark "
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">기준관리</div>
              <a
                className="nav-link"
                href="index.html"
                data-bs-toggle="collapse"
              >
                사용자관리
              </a>
              <a
                className="nav-link"
                href="index.html"
                data-bs-toggle="collapse"
              >
                메뉴관리
              </a>
              <a
                className="nav-link"
                href="index.html"
                data-bs-toggle="collapse"
              >
                권한관리
              </a>
              <div
                className="sb-sidenav-menu-heading"
                data-bs-toggle="collapse"
              >
                퇴직관리
              </div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
              >
                점검항목관리
              </a>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                점검 결과 관리
              </a>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
