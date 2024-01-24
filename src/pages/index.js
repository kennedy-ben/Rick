import React from "react";
import Header from "./Header";
 import Characters from "./characters"
//  import Episodes from "./episode";

function Index() {
  const headingStyle = {
    textAlign: "center",
    color: "black",
    padding: "10px",
  };

  return (
    <div>
      <Header />
      <br/>
      <br/>
    <div className="center">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <h1 style={headingStyle}>
        Hello Welcome To My New Api Of Ricky And Morty
      </h1>
      <Characters/> 
      {/* <Episodes/> */}
      <br/>
      <br/>
      <ul></ul>
    
    </div>
  );
}

export default Index;
