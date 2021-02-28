import React from "react";
import DoneTask from "./DoneTask"

function CompletedTasks() {
  return (
    <div className="completed-tasks">
      <h3>Done</h3>
      <hr />
      <DoneTask text={"Feed the fish"}/>
    </div>
  );
}

export default CompletedTasks;
