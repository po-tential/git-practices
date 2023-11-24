import { useEffect, useRef } from "react";
import "./App.css";
// 테스트
function App() {
  const dataTableRef = useRef(null);

  useEffect(() => {
    if (dataTableRef.current) {
      new window.simpleDatatables.DataTable(dataTableRef.current);
    }
  }, []);
  return (
    <div>
      <div className="sb-nav-fixed">
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
            href="#!"
          >
            <i className="fa-solid fa-bars" style={{ color: "#000000" }}></i>
          </button>
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <ul classame="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
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
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    조회결과
                  </div>
                  <div className="card-body">
                    <table ref={dataTableRef} id="datatablesSimple">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Donna Snider</td>
                          <td>Customer Support</td>
                          <td>New York</td>
                          <td>27</td>
                          <td>2011/01/25</td>
                          <td>$112,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
