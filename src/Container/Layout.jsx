import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout(props) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <>
      <Sidebar openSidebar={openSidebar} />
      <div style={{ flex: 1 }}>
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {props.children}
      </div>
    </>
  );
}

export default Layout;
