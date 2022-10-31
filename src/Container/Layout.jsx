import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        {props.children}
      </div>
    </>
  );
}

export default Layout;
