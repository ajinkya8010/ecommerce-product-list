import "./layout.css";
import Header from "../../components/Header/Header";
import {Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout};