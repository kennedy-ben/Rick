import React from "react";
import Header from "./Header";
import characters from "./characters";
// import Characters from "./characters"

function Index() {
  const headingStyle = {
    textAlign: "center",
    color: "black",
    padding: "10px",
  };

  return (
    <div>
      <Header />
      {/* <Characters/> */}
      <h1 style={headingStyle}>
        Hello Welcome To My New Api Of Ricky And Morty
      </h1>
      <div className="center">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <br/>
      <br/>
      <ul></ul>
    
    </div>
  );
}

export default Index;
