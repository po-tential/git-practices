import { useEffect, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Table from "./Table";
import "./App.css";
function Main() {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  useEffect(() => {
    const toggled = localStorage.getItem("sb|sidebar-toggle") === "true";
    setSidebarToggled(toggled);
  }, []);

  const toggleSidebar = () => {
    const toggled = !sidebarToggled;
    setSidebarToggled(toggled);
    localStorage.setItem("sb|sidebar-toggle", toggled);
  };
  return (
    <div>
      <div
        className={`sb-nav-fixed ${sidebarToggled ? "sb-sidenav-toggled" : ""}`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <div id="layoutSidenav">
          <SideNav sidebarToggled={sidebarToggled} />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Main;
