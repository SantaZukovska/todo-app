import React from "react";
import InnerContainer from  "./InnerContainer"
import Header from "./Header"

function OuterContainer() {
  
    return (
      <div className="outer-container">
        <Header />
        <InnerContainer />
      </div>
    )
  }


export default OuterContainer
