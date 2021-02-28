import React from "react";
import Input from "./Input";
import MyTasks from "./MyTasks";
import CompletedTasks from "./CompletedTasks";

function InnerContainer() {
  return (
    <div className="inner-container">
      <Input />
      <MyTasks />
      <CompletedTasks />
    </div>
  );
}

export default InnerContainer;
