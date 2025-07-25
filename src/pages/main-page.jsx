import { useEffect } from "react";
import "../components/main-components/main-com.css/mainpage.css";
import MainSidebar from "../components/main-components/main-sidebar";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-layout">
      <div className="mainpage-sidebar">
        <MainSidebar />
      </div>
      <div className="main-scroll-area">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
