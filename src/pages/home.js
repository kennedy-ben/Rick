// import Header from "../components/Header";
import React from "react";

function Header() {
    return (
      <div className="header">
        <div className="left">
          <Header />
          <a href="/">Home</a>
        </div>
        <div className="right">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
  
  export default Header;
  